import Booking from "@/models/Booking";
import User from "@/models/User";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req:Request,{params}:{params:Promise<{id:string}>}){
  try {
    const session=await protect("user");
      if(!session){
        return NextResponse.json({
        message:"authentication error",
        success:false
      },
    {status:400})}

    await connect();

    const user=await User.findById(session?.user?.id);
    if(!user){
     return NextResponse.json({
        message:"user does not found",
        success:false
      },
    {status:400})
  }

  const {id}=await params;

  if(!id){
     return NextResponse.json({
        message:"booking id not found",
        success:false
      },
    {status:400})
  }
const BOOKING = await Booking.findOne({
  _id: id,
  user: session.user.id
}).populate({
  path: "trip",
  populate: [
    { path: "bus" },
    { path: "route" },
    { path: "driver" }
  ]
}).populate("user");
  if(!BOOKING){
     return NextResponse.json({
        message:"booking not found",
        success:false
      },
    {status:400})
  
  }

  return NextResponse.json({
    message:"booking fetched successfully",
    success:true,
    data:BOOKING
  },{
    status:200
  })



  } catch (error) {
    return NextResponse.json({
      message:"cannot get user booking",error,
      success:false
    },{
      status:500
    })
  }
}