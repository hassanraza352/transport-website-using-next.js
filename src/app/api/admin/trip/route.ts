import Trip from "@/models/trip";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server"


// new trip dalny k liye
export async function POST(req:Request){
  try {
        await protect("admin");

    const{departureDate,departureTime,arrivalTime,registrationNumber,LicenseNO,startLocation,endLocation,fare}=await req.json();
     
    if(!departureDate|| !departureTime|| !arrivalTime|| !registrationNumber ||!LicenseNO|| !startLocation|| !endLocation|| !fare){
      return NextResponse.json({
        message:"complete all details",
        success:false
      },{
        status:400
      })
    }

    await connect();

    const existingTrip=await Trip.findOne({
   departureDate,
  departureTime,
  arrivalTime,
  startLocation,
  endLocation,
  registrationNumber
    })
    if(existingTrip){
     return NextResponse.json({
      message:"this trip is already is available",
      success:false
    },{
      status:500
    })
    }
        const Newtrip=await Trip.create({
           departureDate,departureTime,arrivalTime,registrationNumber,LicenseNO,startLocation,endLocation,fare
        })
        return NextResponse.json({
          message:"new trip is created successfully",
          success:true,
          data:Newtrip
        })

  } catch (error) {
    return NextResponse.json({
      message:"error in creating a trip",error,
      success:false
    },{
      status:500
    })
  }
}
// get all the trips
export async function GET(){
  try {
  await protect("admin");
  
  await connect();

  const Alltrips=await Trip.find().populate("bus").populate("route").populate("driver");

 return NextResponse.json({
   message:"all trips are fectched",
   success:true,
   data:Alltrips
 },{
  status:200
 })

  } catch (error) {
    return NextResponse.json({
      message:"error in fetching apis",error,
      status:false
    },{
      status:500
    })
  }
}