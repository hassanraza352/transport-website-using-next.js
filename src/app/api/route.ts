

// health check route

import { NextResponse } from "next/server";

export async function GET(){
try{
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
