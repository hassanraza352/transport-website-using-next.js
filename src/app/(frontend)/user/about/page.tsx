import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'

function About() {
  return (
   <>
   <UserHeader/>
    <main
      className="main-wrapper"
      style={{ padding: "3rem 1.5rem" }}>       
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Page Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            About GoRide Pakistan
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.1rem",
              maxWidth: "650px",
              margin: "0.5rem auto 0 auto",
            }}
          >
            Revolutionizing intercity bus travel across Pakistan with
            cutting-edge technology, luxury fleet standards, and total
            reliability.
          </p>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Fleet */}
          <div
            className="card"
            style={{ textAlign: "center" }}
          >
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--primary)",
              }}
            >
              24+
            </h3>

            <p style={{ color: "var(--text-muted)" }}>
              Active Luxury Fleet Coaches
            </p>
          </div>

          {/* Passengers */}
          <div
            className="card"
            style={{ textAlign: "center" }}
          >
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "#34d399",
              }}
            >
              12K+
            </h3>

            <p style={{ color: "var(--text-muted)" }}>
              Monthly Happy Passengers
            </p>
          </div>

          {/* On Time */}
          <div
            className="card"
            style={{ textAlign: "center" }}
          >
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "#c084fc",
              }}
            >
              99.4%
            </h3>

            <p style={{ color: "var(--text-muted)" }}>
              On-Time Terminal Departures
            </p>
          </div>
        </div>

        {/* Safety & Comfort */}
        <div
          className="card"
          style={{ marginBottom: "2rem" }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Our Core Safety & Comfort Standards
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            GoRide operates modern Yutong and Daewoo luxury coaches
            fitted with live GPS tracking systems, dual certified
            drivers, speed limit governors, and onboard Wi-Fi. Whether
            traveling between Lahore, Islamabad, Karachi, Peshawar, or
            Multan, our passengers enjoy executive comfort and
            guaranteed seat reservations.
          </p>
        </div>
      </div>
    </main>  
   </>
  )
}


export default About
