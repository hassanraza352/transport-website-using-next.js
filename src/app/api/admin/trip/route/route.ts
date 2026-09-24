import Busroute from "@/models/BusRoutes";
import Trip from "@/models/trip";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);

    const routeName = searchParams.get("routeName");
    const date = searchParams.get("date");
    console.log("routename",routeName,"date",date)

    if (!routeName || !date) {
      return NextResponse.json(
        {
          message: "Route name and date are required",
          success: false,
        },
        { status: 400 }
      );
    }
    console.log("route is ",routeName)

    const route = await Busroute.findOne({
      Routename: routeName,
    });

    if (!route) {
      console.log("error in route")
      return NextResponse.json(
        {
          message: "Route not found",
          success: false,
        },
        { status: 404 }
      );
    }

    const trips = await Trip.find({
      route: route._id,
      departureDate: date,
    })
      .populate("bus")
      .populate("driver")
      .populate("route");

    return NextResponse.json(
      {
        message: "Trips fetched successfully",
        success: true,
        data: trips,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching trips:", error);

    return NextResponse.json(
      {
        message: "Error fetching trips",
        success: false,
      },
      { status: 500 }
    );
  }
}