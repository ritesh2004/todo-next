import connectDB from "@/libs/mongodb";
import Test from "@/models/Card";
import { NextResponse } from "next/server"

export const PUT = async (request,{params}) =>{
    const {id} = params;
    const {newHeading:heading,newDesc:desc} = await request.json();
    // console.log(heading)
    // console.log(desc)
    await connectDB();
    await Test.findByIdAndUpdate(id,{heading,desc})
    return NextResponse.json({'message':'updated'},{status:200})
}

// export const GET = async (request,{params}) => {
//     const {id} = params;
//     await connectDB();
//     const data = await Test.findOne({_id:id})
//     return NextResponse.json({data},{status:200})
// }