

// health check route

import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(){
try{
  await connect();
  return(
    NextResponse.json({
        message:"server is running sucessfully",
        success:true }
  ,{
    status:200}
  )
)

}

catch(error){
  NextResponse.json({
        message:"server is not  running sucessfully",error,
        success:false }
  ,{
    status:500}
  )
}

}
