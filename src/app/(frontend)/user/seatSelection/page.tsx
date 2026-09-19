import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'

function SeatSelection() {
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
                {/* Row 1 */}
                <div className="seat available" data-seat="1A">
                  1A
                </div>
                <div className="seat available" data-seat="1B">
                  1B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="1C">
                  1C
                </div>
                <div className="seat available" data-seat="1D">
                  1D
                </div>

                {/* Row 2 */}
                <div className="seat available" data-seat="2A">
                  2A
                </div>
                <div className="seat available" data-seat="2B">
                  2B
                </div>
                <div className="aisle"></div>
                <div className="seat booked" data-seat="2C">
                  2C
                </div>
                <div className="seat booked" data-seat="2D">
                  2D
                </div>

                {/* Row 3 */}
                <div className="seat available" data-seat="3A">
                  3A
                </div>
                <div className="seat available" data-seat="3B">
                  3B
                </div>
                <div className="aisle"></div>
                <div className="seat booked" data-seat="3C">
                  3C
                </div>
                <div className="seat available" data-seat="3D">
                  3D
                </div>

                {/* Row 4 */}
                <div className="seat available" data-seat="4A">
                  4A
                </div>
                <div className="seat available" data-seat="4B">
                  4B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="4C">
                  4C
                </div>
                <div className="seat available" data-seat="4D">
                  4D
                </div>

                {/* Row 5 */}
                <div className="seat available" data-seat="5A">
                  5A
                </div>
                <div className="seat available" data-seat="5B">
                  5B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="5C">
                  5C
                </div>
                <div className="seat available" data-seat="5D">
                  5D
                </div>

                {/* Row 6 */}
                <div className="seat available" data-seat="6A">
                  6A
                </div>
                <div className="seat available" data-seat="6B">
                  6B
                </div>
                <div className="aisle"></div>
                <div className="seat booked" data-seat="6C">
                  6C
                </div>
                <div className="seat booked" data-seat="6D">
                  6D
                </div>

                {/* Row 7 */}
                <div className="seat available" data-seat="7A">
                  7A
                </div>
                <div className="seat available" data-seat="7B">
                  7B
                </div>
                <div className="aisle"></div>
                <div className="seat booked" data-seat="7C">
                  7C
                </div>
                <div className="seat available" data-seat="7D">
                  7D
                </div>

                {/* Row 8 */}
                <div className="seat available" data-seat="8A">
                  8A
                </div>
                <div className="seat available" data-seat="8B">
                  8B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="8C">
                  8C
                </div>
                <div className="seat available" data-seat="8D">
                  8D
                </div>

                {/* Row 9 */}
                <div className="seat available" data-seat="9A">
                  9A
                </div>
                <div className="seat available" data-seat="9B">
                  9B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="9C">
                  9C
                </div>
                <div className="seat available" data-seat="9D">
                  9D
                </div>

                {/* Row 10 */}
                <div className="seat available" data-seat="10A">
                  10A
                </div>
                <div className="seat available" data-seat="10B">
                  10B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="10C">
                  10C
                </div>
                <div className="seat available" data-seat="10D">
                  10D
                </div>

                {/* Row 11 */}
                <div className="seat available" data-seat="11A">
                  11A
                </div>
                <div className="seat available" data-seat="11B">
                  11B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="11C">
                  11C
                </div>
                <div className="seat available" data-seat="11D">
                  11D
                </div>

                {/* Row 12 */}
                <div className="seat selected" data-seat="12A">
                  12A
                </div>
                <div className="seat available" data-seat="12B">
                  12B
                </div>
                <div className="aisle"></div>
                <div className="seat available" data-seat="12C">
                  12C
                </div>
                <div className="seat available" data-seat="12D">
                  12D
                </div>
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
                  Ahmed Khan (1 Adult)
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
                  Lahore → Islamabad
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
                  12A
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
                  20 September 2025
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
                  10:30 AM - 03:30 PM
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
                  PKR 2,500
                </span>
              </div>
            </div>

            {/* Confirm Booking */}
            <a
              href="/user/ticket"
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
            </a>
          </div>
        </div>
      </div>
    </main>


   
   </>
  )
}

export default SeatSelection
