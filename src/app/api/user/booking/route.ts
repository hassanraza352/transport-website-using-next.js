//creating booking
import Booking from "@/models/Booking";
import Bus from "@/models/Bus";
import Trip from "@/models/trip";
import User from "@/models/User";
import Busroute from "@/models/BusRoutes";
import { protect } from "@/utils/auth";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export async function  POST(req:Request){

  try {
    const session=await protect("user");
      if(!session){
        return NextResponse.json({
        message:"authentication error",
        success:false
      },
    {status:400})}

    await connect();

    const user=await User.findById(session?.user?.id);
    if(!user){
     return NextResponse.json({
        message:"user does not found",
        success:false
      },
    {status:400})
  }

  const {trip,seatNumber}=await req.json();
  if(!trip || !seatNumber){
    return NextResponse.json({
        message:"trip or seat number  plz fill it",
        success:false
      },
    {status:400})
  }

  const UserTrip=await Trip.findById(trip);
  if(!UserTrip){
    return NextResponse.json({
        message:"invalid trip found",
        success:false
      },
    {status:400}) 

  }


  const bus=await Bus.findById(UserTrip?.bus);

    if (!bus) {
      return NextResponse.json(
        {
          message: "Bus not found",
          success: false,
        },
        { status: 404 }
      );
    }

      for (const seat of seatNumber) {
      if (seat < 1 || seat > bus.totalSeat) {
        return NextResponse.json(
          {
            message: `Seat ${seat} is invalid. Bus has ${bus.totalSeat} seats.`,
            success: false,
          },
          { status: 400 }
        );
      }
    }

        const existingBookings = await Booking.find({
      trip: trip,
      status: { $ne: "cancelled" },
    });

     for (const booking of existingBookings) {
      for (const bookedSeat of booking.seatNumber) {
        if (seatNumber.includes(bookedSeat)) {
          return NextResponse.json(
            {
              message: `Seat ${bookedSeat} is already booked`,
              success: false,
            },
            { status: 400 }
          );
        }
      }
    }
const totalFare = UserTrip.fare * seatNumber.length;
    // Create booking
    const newBooking = await Booking.create({
      trip: trip,
      user: user._id,
      seatNumber: seatNumber,
      fare: totalFare,
    });

    return NextResponse.json(
      {
        message: "Booking created successfully",
        success: true,
        data: newBooking,
      },
      { status: 201 }
    );
 
   

  } catch (error) {
    console.log("error",error)

    return NextResponse.json({
      message:"error in booking ",error,
      success:false
    },{
      status:500
    })
  }


}



export async function GET() {
  try {
    const session = await protect("user");

    await connect();

    const bookings = await Booking.find({
      user: session.user.id,
    })
      .populate({
        path: "trip",
        populate: [
          {
            path: "bus",
          },
          {
            path: "route",
          },
          {
            path: "driver",
          },
        ],
      })
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        message: "Bookings fetched successfully",
        success: true,
        data: bookings,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching bookings:", error);

    return NextResponse.json(
      {
        message: "Error fetching bookings",
        success: false,
      },
      { status: 500 }
    );
  }
}