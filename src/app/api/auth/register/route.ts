import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";




export async function POST(req:Request){
  try {
    const {name,email,password,phoneNO}=await req.json();
    if(!name || !email || !password){
       return NextResponse.json({
     message:"name email or password is missing",
     success:false
     
    },{
      status:400
    })
    }
    await connect();
    const existingUSer=await User.findOne({email});
    if(existingUSer){
        return NextResponse.json({
     message:"user with this email already exist",
     success:false
     
    },{
      status:400
    })
    }
    const hashedpassword=await bcrypt.hash(password,10);

     
    await User.create({
      name,email,password:hashedpassword,phoneNO
    })
      return NextResponse.json({
     message:"user created successfully",
     success:true,
    },{
      status:200
    })
    }


 catch (error) {
    return NextResponse.json({
     message:"error in resgistring",error,
     success:false
     
    },{
      status:500
    })
  }
}