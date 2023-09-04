import connectDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const {name,email} = await req.json();
    await connectDB();
    await User.create({name,email});
    return NextResponse.json({'message':'User Registered'},{status:201})
}