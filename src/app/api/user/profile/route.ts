import User from "@/models/User";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// currently login user ka data leny k liye 
export async function GET(){
  try {
    const session=await protect("user");
    if(!session){
      return NextResponse.json({
      message:"authentication error",
      success:false
    },
  {status:400})}
   await connect();
    const user=await User.findById(session?.user?.id).select("-password");
    if(!user){
     return NextResponse.json({
      message:"user  is not found",
      success:false
    },
  {status:400})
    }

    return NextResponse.json({
      message:"user data is fetched successfully",
      success:false,
      data:user
    },
  {status:200})
  } catch (error) {
     console.log(error);
    return NextResponse.json({
      message:"error in fetching user profile",
      success:false
    },
  {status:500})
  }
}