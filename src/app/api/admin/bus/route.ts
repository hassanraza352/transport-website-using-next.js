import Bus from "@/models/Bus";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  try {
    const {registrationNumber,busModel,totalSeat,coachType}=await req.json();
  
    if(!registrationNumber||!busModel||!totalSeat||!coachType){
      return NextResponse.json({
     message:"fill all your details",
     success:false
    },{
      status:400 
      })
    }
        await protect("admin");

    await connect();

    const existingBus=await Bus.findOne({registrationNumber});
    if(existingBus){
       return NextResponse.json({
     message:"Bus with this  registeration no already exist",
     success:false
    },{
      status:400 
      })
    }
     const newBus=await Bus.create({
        registrationNumber,
        busModel,
        totalSeat,
        coachType
     })  
   return NextResponse.json({
      message:"Bus created successfully",
     success:true,
     data:newBus
   },{
       status:200
   })


  } catch (error) {
    return NextResponse.json({
     message:"error in creating a bus",error,
     success:false
    },{
      status:500
    })
  }
}