import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'
import "@/frontendComponents/ticketPage.css"

function page() {
  return (
    <>
    <UserHeader/>

    <main
      className="main-wrapper"
      style={{
        padding: "2rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%" }}>

        {/* Confirmation Banner Top */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.15)",
              border: "2px solid #10b981",
              color: "#34d399",
              fontSize: "2rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <i className="fa-solid fa-check"></i>
          </div>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Booking Confirmed
          </h1>

          <p style={{ color: "var(--text-muted)" }}>
            Your journey is all set!
          </p>

          <div
            style={{
              marginTop: "1rem",
              display: "inline-block",
              background: "var(--bg-input)",
              padding: "0.5rem 1.5rem",
              borderRadius: "50px",
              border: "1px solid var(--border-color)",
            }}
          >
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              Booking Code:{" "}
            </span>

            <strong
              style={{
                color: "var(--primary)",
                fontSize: "1.2rem",
                letterSpacing: "1px",
              }}
            >
              GR-829451
            </strong>
          </div>
        </div>

        {/* Digital Ticket */}
        <div className="ticket-wrapper">

          {/* Ticket Header */}
          <div className="ticket-header">
            <div
              className="brand-logo"
              style={{ fontSize: "1.3rem" }}
            >
              <i className="fa-solid fa-bus"></i>{" "}
              Go<span className="highlight">Ride</span>
            </div>

            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "var(--primary)",
                  fontWeight: 700,
                }}
              >
                DIGITAL TICKET
              </span>

              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                }}
              >
                SAFE • COMFORTABLE • RELIABLE
              </div>
            </div>
          </div>

          {/* Departure → Destination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                Origin
              </div>

              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Lahore
              </div>
            </div>

            <div
              style={{
                flex: 1,
                textAlign: "center",
                margin: "0 1.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "2px",
                  background: "var(--primary)",
                  width: "100%",
                  position: "absolute",
                  top: "50%",
                }}
              ></div>

              <i
                className="fa-solid fa-bus"
                style={{
                  color: "var(--primary)",
                  background: "#0e1628",
                  padding: "0 8px",
                  position: "relative",
                  zIndex: 2,
                }}
              ></i>

              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                }}
              >
                Lahore to Islamabad
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                <i
                  className="fa-solid fa-location-arrow"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                Destination
              </div>

              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Islamabad
              </div>
            </div>
          </div>

          {/* Ticket Key Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "1.25rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-color)",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                <i className="fa-solid fa-couch"></i> Seat
              </div>

              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                12A
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                <i className="fa-regular fa-calendar"></i> Date
              </div>

              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                20 Sep 2025
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                <i className="fa-regular fa-clock"></i> Departure
              </div>

              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                10:30 AM
              </div>
            </div>
          </div>

          {/* QR Code + Download */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* QR Code */}
              <div className="qr-box">
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <path
                    d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,0 h20 v10 h-20 z M40,20 h10 v20 h-10 z M0,40 h20 v10 h-20 z M30,50 h30 v10 h-30 z M70,40 h20 v20 h-20 z M60,70 h20 v10 h-20 z M40,80 h20 v20 h-20 z M80,80 h20 v20 h-20 z"
                    fill="#090e17"
                  />
                </svg>
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "0.95rem",
                  }}
                >
                  Scan at boarding
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Have a great journey!
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
            >
              <i className="fa-solid fa-download"></i>{" "}
              Download Ticket
            </button>
          </div>

        </div>
      </div>
    </main>


    
    </>
  )
}

export default page
