import connectDB from "@/libs/mongodb";
import Test from "@/models/Card";
import { NextResponse } from "next/server"


export const GET = async () =>{
    await connectDB();
    const cards = await Test.find();
    // console.log(cards)
    return NextResponse.json({cards})
}


export const POST = async (req) =>{
    const {heading,desc} = await req.json();
    // console.log(heading)
    await connectDB();
    await Test.create({heading,desc})
    return NextResponse.json({message:'Created'},{status:201})
}

export const DELETE = async (req) =>{
    const id = req.nextUrl.searchParams.get('id')
    await connectDB();
    await Test.findByIdAndDelete(id);
    return NextResponse.json({message:'Deleted'},{status:200})
}
