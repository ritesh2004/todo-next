import connectDB from "@/libs/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "771537497508-31plh0t3a7rmos2nblmoq5uscnq0tga3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { name, email } = user;
      if (account.provider === 'google') {
        try {
          await connectDB();
          const userExist = await User.findOne({ email })
          if (!userExist) {
            const res = await fetch('http://localhost:3000/api/users/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, email })
            })

            if (res.ok) {
              console.log("Registered Succesfully")
              return user
            }
          }
        } catch (error) {
          alert(error)
        }
      }
      return user
    }
  }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }