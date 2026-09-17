import { protect } from "@/utils/auth";
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Driver from "@/models/driver";



export async function POST(req:Request){
  try {
    const{name,cnicNO,LicenseNO,profilePic,phoneNO}=await req.json();
    if(!name||!cnicNO||LicenseNO||!phoneNO){
      return NextResponse.json({
      message:"complete all details",
      success:false
      },{
        status:400
      })
    }

    await protect("admin");

    await connect()

    const existingDriver=await Driver.findOne({cnicNO});
    if(existingDriver){
       return NextResponse.json({
      message:"driver already exist",
      success:false
      },{
        status:400
      })
    }

    const newDriver=await Driver.create({
      name,cnicNO,LicenseNO,profilePic,phoneNO
    })
     return NextResponse.json({
      message:"driver created successfully",
      success:true,
      data:newDriver
      },{
        status:200
      })

  } catch (error) {
    return NextResponse.json({
      message:"error in creating driver",error,
      success:false
    },{
      status:500
    })
  }
}