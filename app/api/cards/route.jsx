import connectDB from "@/libs/mongodb";
import Test from "@/models/Card";
import { NextResponse } from "next/server"


export const GET = async (req) =>{
    // console.log(req)
    const email = req.nextUrl.searchParams.get('email')
    // console.log(email)
    await connectDB();
    const cards = await Test.find({user:email})
    // console.log(cards)
    return NextResponse.json({cards})
}


export const POST = async (req) =>{
    const {heading,desc,user} = await req.json();
    // console.log(heading)
    await connectDB();
    await Test.create({heading,desc,user})
    return NextResponse.json({message:'Created'},{status:201})
}

export const DELETE = async (req) =>{
    const id = req.nextUrl.searchParams.get('id')
    await connectDB();
    await Test.findByIdAndDelete(id);
    return NextResponse.json({message:'Deleted'},{status:200})
}
