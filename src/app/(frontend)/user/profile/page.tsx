'use client'

import UserHeader from '@/frontendComponents/UserHeader'
import api from '@/utilsFrontend/axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Profile() {

  const [bookings, setBookings] = useState<any[]>([]);

useEffect(() => {
  const fetchBookings = async () => {
    try {
      const response = await api.get("/user/booking");

      if (response.status === 200) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  fetchBookings();
}, []);
console.log("bookings",bookings)

    const session=useSession();
  
  const data=session?.data;

  

  return (


   <>
   <UserHeader/>
<main className="main-wrapper" style={{ padding: "2.5rem 1.5rem" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

    {/* Profile Header Card */}
    <div
      className="card"
      style={{
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
          alt="Ahmed Khan"
          className="avatar"
          style={{
            width: "80px",
            height: "80px",
            borderWidth: "3px",
          }}
        />

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
             {data?.user?.name}
            </h1>

            <span className="badge badge-active">
              <i className="fa-solid fa-check"></i> Verified Passenger
            </span>
          </div>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginTop: "4px",
            }}
          >
            <i className="fa-regular fa-envelope"></i>{" "}
                        {data?.user?.email} &bull;{" "}
            <i className="fa-solid fa-phone"></i> {data?.user?.phoneNO}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <div
          style={{
            textAlign: "center",
            padding: "0.75rem 1.5rem",
            background: "var(--bg-input)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--primary)",
            }}
          >
            12
          </div>

          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            Total Trips
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "0.75rem 1.5rem",
            background: "var(--bg-input)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#34d399",
            }}
          >
            PKR 28.5K
          </div>

          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            Total Spent
          </div>
        </div>
      </div>
    </div>

    {/* Booking History */}
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: 800,
        color: "#fff",
        marginBottom: "1.25rem",
      }}
    >
      My Bookings & Tickets
    </h2>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
    {bookings.map((booking) => {
  return (
    <div
      key={booking._id}
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div>
        {/* Booking ID + Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              color: "var(--primary)",
              fontSize: "1.1rem",
            }}
          >
            #{booking._id.slice(-7)}
          </span>

          <span className="badge badge-confirmed">
            Confirmed &bull; Upcoming
          </span>
        </div>

        {/* Route */}
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {booking?.trip?.route?.startLocation} →{" "}
          {booking?.trip?.route?.endLocation}
        </h3>

        {/* Trip Info */}
        <div
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            marginTop: "4px",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Date */}
          <span>
            <i className="fa-regular fa-calendar"></i>{" "}
{new Date(booking?.trip?.departureDate).toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
})}

          </span>

          {/* Time */}
          <span>
            <i className="fa-regular fa-clock"></i>{" "}
            {booking?.trip?.departureTime} -{" "}
            {booking?.trip?.arrivalTime}
          </span>

          {/* Seats */}
          <span>
            <i className="fa-solid fa-couch"></i>{" "}
            Seat {booking?.seatNumber?.join(", ")}
          </span>

          {/* Bus */}
          <span>
            <i className="fa-solid fa-bus"></i>{" "}
            {booking?.trip?.bus?.busModel}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          href={`/user/booking-details/${booking._id}`}
          className="btn btn-outline btn-sm"
        >
          <i className="fa-solid fa-circle-info"></i> Full Details
        </Link>

        <Link
          href={`/user/ticket/${booking._id}`}
          className="btn btn-primary btn-sm"
        >
          <i className="fa-solid fa-ticket"></i> Digital Ticket
        </Link>

        <Link
          href={`/user/map/${booking._id}`}
          className="btn btn-secondary btn-sm"
        >
          <i className="fa-solid fa-location-dot"></i> Live Track
        </Link>
      </div>
    </div>
  );
})}

      {/* Booking Card 1 */}
    

 

    </div>
  </div>
</main>


   </>
  )
}

export default Profile
