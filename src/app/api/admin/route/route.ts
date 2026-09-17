import Busroute from "@/models/BusRoutes";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  try {
      const {Routename,startLocation,endLocation}=await req.json();

      if(!Routename||!startLocation||!endLocation){
  return NextResponse.json({
    message:"fill all details",
    success:false
  },{
    status:400
  }) }
    
  await protect("admin");
  await connect();
 
  const ExistingRoute=await Busroute.findOne({Routename});
  if(ExistingRoute){
     return NextResponse.json({
    message:"route already exist",
    success:false
  },{
    status:400
  })
}


const newRoute=await Busroute.create({
  Routename,startLocation,endLocation
})

return NextResponse.json({
    message:"new route created successfully",
    success:true,
    data:newRoute
  },{
    status:200
  })
  } catch (error) {
    return NextResponse.json({
      message:"error in creating route",error,
      success:false
    },
  {status:500})
  }
}