import connectDB from "@/libs/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      checks:['none']
    }),
  ],
  secret: "3TIPe78MHrT51mpbrKXwnTOoD7SoWCpzbsG9EJtAJt8",
  callbacks: {
    async signIn({ user, account }) {
      console.log(user)
      console.log(account)
      const { name, email } = user;
      if (account.provider === 'google') {
        try {
          await connectDB();
          const userExist = await User.findOne({ email })
          if (!userExist) {
            const res = await fetch('https://todo-next-ritesh2004.vercel.app/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
              },
              body: JSON.stringify({ name, email })
            })

            if (res.ok) {
              console.log("Registered Succesfully")
              return user
            }
          }
        } catch (error) {
          console.log("Error",error)
        }
      }
      return user
    }
  }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }