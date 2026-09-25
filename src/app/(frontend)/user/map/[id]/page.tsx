"use client";

import LiveMapWrapper from "@/frontendComponents/LiveMapWrapper";
import UserHeader from "@/frontendComponents/UserHeader";
import api from "@/utilsFrontend/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


function Map() {


  const params = useParams();
  const id = params.id as string;

  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const getBooking = async () => {
      try {
        const response = await api.get(`/user/booking/${id}`);

        if (response.status === 200) {
          setBooking(response.data.data);
          console.log("Booking:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    if (id) {
      getBooking();
    }
  }, [id]);

  
  
  return (
    <>
   <UserHeader/>

    <main
      className="main-wrapper"
      style={{ padding: "2rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top Title & Route Breadcrumb */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            <a
              href="/user/profile"
              style={{ color: "var(--text-muted)" }}
            >
              <i className="fa-solid fa-arrow-left"></i> Back to
              results
            </a>
          </div>

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            {booking?.trip?.route?.startLocation}{" "}
            <span style={{ color: "var(--primary)" }}>→</span>{" "}
             {booking?.trip?.route?.endLocation}
          </h1>

          {/* City Stops Timeline Bar */}
          <div
            className="card"
            style={{
              padding: "1rem 1.5rem",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflowX: "auto",
                gap: "1rem",
              }}
            >
              {/* Lahore */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                <span
                  className="badge badge-active"
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </span>
                Lahore
              </div>

              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "var(--text-dim)" }}
              ></i>

              {/* Gujranwala */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text-muted)",
                }}
              >
                <i
                  className="fa-solid fa-circle"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--primary)",
                  }}
                ></i>
                Gujranwala
              </div>

              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "var(--text-dim)" }}
              ></i>

              {/* Gujrat */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text-muted)",
                }}
              >
                <i
                  className="fa-solid fa-circle"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--primary)",
                  }}
                ></i>
                Gujrat
              </div>

              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "var(--text-dim)" }}
              ></i>

              {/* Jhelum */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text-muted)",
                }}
              >
                <i
                  className="fa-solid fa-circle"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--primary)",
                  }}
                ></i>
                Jhelum
              </div>

              <i
                className="fa-solid fa-chevron-right"
                style={{ color: "var(--text-dim)" }}
              ></i>

              {/* Islamabad */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                <span
                  className="badge badge-active"
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  5
                </span>
                Islamabad
              </div>
            </div>
          </div>
        </div>

        {/* Main Live Map Box */}
        <div
          className="map-canvas-container"
          style={{
            height: "540px",
            position: "relative",
          }}
        >
      {booking && (
  <LiveMapWrapper
    startLocation={booking.trip.route.startLocation}
    endLocation={booking.trip.route.endLocation}
     via={
      booking.trip.route.RouteDirection
    }
  />
)}

          {/* Floating Legend Panel */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              background: "rgba(13, 21, 39, 0.85)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
              padding: "1rem 1.25rem",
              borderRadius: "var(--radius-md)",
              fontSize: "0.8rem",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              Route Legend
            </div>

            {/* Route Path */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
                color: "var(--text-muted)",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "3px",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              ></span>
              Route Path
            </div>

            {/* Bus */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
                color: "var(--text-muted)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ff7a00",
                  display: "inline-block",
                }}
              ></span>
              Bus (on route)
            </div>

            {/* Stops */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
                color: "var(--text-muted)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#34d399",
                  display: "inline-block",
                }}
              ></span>
              Stop Terminals
            </div>
          </div>
        </div>

        {/* Route Info & Timing Details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {/* Schedule & Timing */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              <i
                className="fa-solid fa-stopwatch"
                style={{ color: "var(--primary)" }}
              ></i>{" "}
              Schedule & Timing
            </h3>

            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 2,
              }}
            >
              <div>
                Departure:{" "}
                <strong style={{ color: "#fff" }}>
                  10:30 AM (Lahore Terminal)
                </strong>
              </div>

              <div>
                Arrival:{" "}
                <strong style={{ color: "#fff" }}>
                  03:30 PM (Islamabad Terminal)
                </strong>
              </div>

              <div>
                Estimated Duration:{" "}
                <strong style={{ color: "#fff" }}>
                  5 hours
                </strong>
              </div>
            </div>
          </div>

          {/* Highway & Motorway Info */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              <i
                className="fa-solid fa-road"
                style={{ color: "var(--primary)" }}
              ></i>{" "}
              Highway & Motorway Info
            </h3>

            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 2,
              }}
            >
              <div>
                Highway:{" "}
                <strong style={{ color: "#fff" }}>
                  M-2 Motorway
                </strong>
              </div>

              <div>
                Rest Stop:{" "}
                <strong style={{ color: "#fff" }}>
                  Bhera Service Area (20 mins)
                </strong>
              </div>

              <div>
                Status:{" "}
                <span className="badge badge-active">
                  Smooth Traffic
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>

```

  </>
  )
}

export default Map
