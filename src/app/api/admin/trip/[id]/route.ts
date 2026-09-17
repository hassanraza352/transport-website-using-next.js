import Trip from "@/models/trip";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req:Request, { params }: { params: Promise<{ id: string }> })

{
  try {
   await  protect("admin")
    const {id}=await params;
    if(!id){

      return NextResponse.json({
      message:"id is not found",
      success:false
    },
  {
    status:400
  })}
  await connect();
  const TripBYID=await Trip.findById(id).populate("bus").populate("route").populate("driver");
  if(!TripBYID){
     return NextResponse.json({
      message:"trip with this is not found is not found",
      success:false
    },
  {
    status:404
  })
  } 
   return NextResponse.json({
      message:"id is  found",
      success:true,
      data:TripBYID
    },
  {
    status:200
  })
    
  } catch (error) {
    return NextResponse.json({
      message:"server error in getiinng trip by id",error,
      success:false
    },
  {
    status:500
  })
  }
}


export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){

  try {
    await protect("admin");
 const {id}=await params;
    if(!id){

      return NextResponse.json({
      message:"id is not found",
      success:false
    },
  {
    status:400
  })}
  await connect();
    
    const{departureDate,departureTime,arrivalTime,registrationNumber,LicenseNO,startLocation,endLocation,fare}=await req.json();

const updatedTrip=await Trip.findByIdAndUpdate(id,{
departureDate,departureTime,arrivalTime,registrationNumber,LicenseNO,startLocation,endLocation,fare
},{
  new:true
})
 if(!updatedTrip){
   return NextResponse.json({
      message:"trip with this id is not found",
      success:false
    },
  {
    status:404
  })
 }

  return NextResponse.json({
      message:"Trip updated successfully",
      success:true,
      data:updatedTrip
    },
  {
    status:200
  })

  } catch (error) {
    return NextResponse.json({
      message:"error in updating trips",error,
      success:false,
    },{
      status:500
    })
  }
}
