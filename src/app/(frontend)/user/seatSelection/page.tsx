"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'
import api from "@/utilsFrontend/axios";
import { useSession } from "next-auth/react";
type Trip = {
  _id:string,
  departureDate: string;
  arrivalTime: string;
  departureTime: string;
  fare: number;
  driver: string;
  bus: string;
  route: string;
};

function SeatSelection() {
  const session=useSession();
  const data=session?.data;
const searchParams = useSearchParams();
const tripId = searchParams.get("tripId");
const [trip, setTrip] = useState<Trip | null>(null);  
const [seatNumber, setSelectedSeats] = useState<number[]>([]);

const handleSeatClick = (seatNumber: number) => {
  setSelectedSeats((prev) => {
    if (prev.includes(seatNumber)) {
      return prev.filter((seat) => seat !== seatNumber);
    }

    return [...prev, seatNumber];
  });
};


  useEffect(() => {
  if (!tripId) return;

  const fetchTrip = async () => {
    try {
      const response = await api.get(`/admin/trip/${tripId}`);

      if (response.status === 200) {
        setTrip(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching trip:", error);
    }
  };

  fetchTrip();
}, [tripId]);

 let TotalFare;
if(!trip?.fare){
   TotalFare=0
}
else{
 TotalFare=(trip?.fare)*(seatNumber.length)
}
const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault();
  if (!tripId) {
    console.error("Trip ID not found");
    return;
  }
  if (seatNumber.length === 0) {
    alert("Please select at least one seat");
    return;
  }

  try {
    const response = await api.post("/user/booking", {
      trip: tripId,
      seatNumber
    });

    if (response.status === 201) {
      alert("Booking successful!");

      console.log("Booking:", response.data.data);

      setSelectedSeats([]);
    }
  } catch (error) {
    console.error("Booking error:", error);
      alert("Booking failed!");
};

}
  return (
   <>
   <UserHeader/>

    <main
      className="main-wrapper"
      style={{ padding: "2.5rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Page Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Select Your Seats
          </h1>

          <p style={{ color: "var(--text-muted)" }}>
            Premium comfort. Your journey, your choice.
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left: Seat Layout */}
      <div
  className="card"
  style={{ textAlign: "center" }}
>
  <h3
    style={{
      fontSize: "1.1rem",
      fontWeight: 700,
      marginBottom: "1.5rem",
      color: "#fff",
    }}
  >
    <i
      className="fa-solid fa-bus-simple"
      style={{ color: "var(--primary)" }}
    ></i>{" "}
    Bus Seating Layout
  </h3>

  <div className="seat-bus-container">

    {/* Driver */}
    <div className="driver-section">
      <div
        className="driver-icon"
        title="Driver Area"
      >
        <i className="fa-solid fa-dharmachakra"></i>
      </div>
    </div>

    {/* Seat Grid */}
    <div className="seats-grid">

      {Array.from(
        { length: Math.ceil((trip?.bus?.totalSeat || 0) / 4) },
        (_, rowIndex) => {
          const startSeat = rowIndex * 4 + 1;

          return (
            <React.Fragment key={rowIndex}>

              {/* Seat 1 */}
              {startSeat <= (trip?.bus?.totalSeat || 0) && (
                <div
                  className={`seat ${
                    seatNumber.includes(startSeat)
                      ? "selected"
                      : "available"
                  }`}
                  onClick={() => handleSeatClick(startSeat)}
                >
                  {startSeat}
                </div>
              )}

              {/* Seat 2 */}
              {startSeat + 1 <= (trip?.bus?.totalSeat || 0) && (
                <div
                  className={`seat ${
                    seatNumber.includes(startSeat + 1)
                      ? "selected"
                      : "available"
                  }`}
                  onClick={() => handleSeatClick(startSeat + 1)}
                >
                  {startSeat + 1}
                </div>
              )}

              {/* Aisle */}
              <div className="aisle"></div>

              {/* Seat 3 */}
              {startSeat + 2 <= (trip?.bus?.totalSeat || 0) && (
                <div
                  className={`seat ${
                    seatNumber.includes(startSeat + 2)
                      ? "selected"
                      : "available"
                  }`}
                  onClick={() => handleSeatClick(startSeat + 2)}
                >
                  {startSeat + 2}
                </div>
              )}

              {/* Seat 4 */}
              {startSeat + 3 <= (trip?.bus?.totalSeat || 0) && (
                <div
                  className={`seat ${
                    seatNumber.includes(startSeat + 3)
                      ? "selected"
                      : "available"
                  }`}
                  onClick={() => handleSeatClick(startSeat + 3)}
                >
                  {startSeat + 3}
                </div>
              )}

            </React.Fragment>
          );
        }
      )}

    </div>

    {/* Seat Legend */}
    <div className="seat-legend">

      <div className="legend-item">
        <div
          className="legend-box"
          style={{
            background: "rgba(16, 185, 129, 0.2)",
            border: "1px solid #10b981",
          }}
        ></div>
        Available
      </div>

      <div className="legend-item">
        <div
          className="legend-box"
          style={{
            background: "var(--primary)",
          }}
        ></div>
        Selected
      </div>

      <div className="legend-item">
        <div
          className="legend-box"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
          }}
        ></div>
        Booked
      </div>

    </div>

  </div>
</div>

          {/* Right: Booking Summary */}
         <form onSubmit={handleSubmit}>

          <div
            className="card"
            style={{
              backgroundColor: "var(--bg-card)",
              position: "sticky",
              top: "96px",
            }}
          >
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              Booking Summary
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontSize: "0.95rem",
              }}
            >
              {/* Passenger */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-solid fa-user"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Passenger
                </span>

                <span
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                 {data?.user?.name}
                </span>
              </div>

              {/* Route */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-solid fa-route"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Route
                </span>

                <span
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                 {trip?.route?.Routename}
                </span>
              </div>

              {/* Selected Seats */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-solid fa-couch"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Selected Seat(s)
                </span>

  <span
  style={{
    fontWeight: 700,
    color: "var(--primary)",
  }}
>
  {seatNumber.map((seat) => `${seat}`).join(", ")}
</span>
              </div>

              {/* Bus Service */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-solid fa-bus"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Bus Service
                </span>

                <span
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  GoRide Express
                </span>
              </div>

              {/* Date */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-regular fa-calendar"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Date
                </span>

                <span
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                 {trip?.departureDate
  ? new Date(trip.departureDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  : ""}
                </span>
              </div>

              {/* Time */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    "1px solid var(--border-color)",
                  paddingBottom: "0.75rem",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>
                  <i
                    className="fa-regular fa-clock"
                    style={{
                      color: "var(--primary)",
                      width: "20px",
                    }}
                  ></i>{" "}
                  Time
                </span>

                <span
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                 {trip?.departureTime} - {trip?.arrivalTime}
                </span>
              </div>

              {/* Total */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "0.5rem",
                  fontSize: "1.2rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Total Amount
                </span>

                <span
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  PKR {TotalFare}
                </span>
              </div>
            </div>

            {/* Confirm Booking */}
            <button
              className="btn btn-primary"
              style={{
                width: "100%",
                marginTop: "2rem",
                fontSize: "1.1rem",
                padding: "0.9rem",
              }}
            >
              Confirm Booking{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
         </form>
          
        </div>
      </div>
    </main>


   
   </>
  )
}

export default SeatSelection
