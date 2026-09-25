import Busroute from "@/models/BusRoutes";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
  try {
      await protect("admin");
      const {RouteDirection,startLocation,endLocation}=await req.json();

      if(!RouteDirection||!startLocation||!endLocation){
  return NextResponse.json({
    message:"fill all details",
    success:false
  },{
    status:401
  }) }
    

  await connect();
 const Routename = `${startLocation} -> ${endLocation}`;

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
  Routename,startLocation,endLocation,RouteDirection
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


export async function GET(){
  try {
    await connect();

    const Allroutes=await Busroute.find().sort({createdAt:-1});
    return NextResponse.json({
      message:"all routes fetched successfully",
      success:true,
      data:Allroutes
    },{
      status:200
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message:"error in fetching routes",error,
      success:false
  },{
   status:504
  })
}
}