import Bus from "@/models/Bus";
import Busroute from "@/models/BusRoutes";
import Driver from "@/models/driver";
import Trip from "@/models/trip";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server"


// new trip dalny k liye
export async function POST(req:Request){
  try {
        await protect("admin");

    const{ departureDate,arrivalTime
    ,departureTime,fare,
    driver,
    bus,
    route
  }=await req.json();
      console.log(`departureDate,${departureDate},arrivalTime,${arrivalTime},departureTime,${departureTime},fare,${fare},driver,${driver},bus,${bus},route,${route}`);

     
    if(!departureDate|| !departureTime|| !arrivalTime|| !driver ||!bus|| !route || !fare){
      console.log("error in completing details");
      console.log(`departureDate,${departureDate},arrivalTime,${arrivalTime},departureTime,${departureTime},fare,${fare},driver,${driver},bus,${bus},route,${route}`);
      return NextResponse.json({
        message:"complete all details",
        success:false
      },{
        status:400
      })
    }

    await connect();

const BUS=await Bus.findOne({busModel:bus});
console.log("bus",BUS);
if(!BUS){
  return NextResponse.json({
    message:"bus not found",
success:false
  },{
    status:404
  })
}


const BUSROUTE=await Busroute.findOne({  Routename:route});
if(!BUSROUTE){
  console.log("busRoute",BUSROUTE)
  return NextResponse.json({
    message:"busroute not found",
success:false
  },{
    status:404
  })
}



const DRIVER=await Driver.findOne({name:driver});
if(!DRIVER){
  console.log("DRIVER",DRIVER)
  return NextResponse.json({
    message:"driver not found",
success:false
  },{
    status:404
  })
}

    const existingTrip=await Trip.findOne({
   departureDate,
  departureTime,
  arrivalTime,
  route:BUSROUTE._id,
  bus:BUS._id
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
           departureDate,departureTime,arrivalTime,bus:BUS._id,driver:DRIVER._id,route:BUSROUTE._id,fare
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

