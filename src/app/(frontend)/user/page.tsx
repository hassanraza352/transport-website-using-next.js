'use client'
import React from "react";
import Link from "next/link";
import "@/frontendComponents/UserMainPage.css"
import UserHeader from "@/frontendComponents/UserHeader";

function MainPage() {

  return (
    <>


      <UserHeader/>


      <main className="main-wrapper">

        {/* =========================
            HERO SECTION
        ========================== */}

        <section className="hero-section">

          {/* Background Video */}

          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >        
             <source src="/videos/goride-hero.mp4" type="video/mp4" />

            Your browser does not support HTML5 video.
          </video>


          {/* Dark Overlay */}

          <div className="hero-overlay"></div>


          {/* Hero Content */}

          <div className="hero-content">

            <h1 className="hero-title">

              Travel Smarter with

              <span style={{ color: "var(--primary)" }}>
                GoRide
              </span>

            </h1>


            <p className="hero-subtitle">

              Premium intercity bus booking for a safer,
              easier and more comfortable journey across Pakistan.

            </p>


            <Link
              href="/user/search"
              className="btn btn-primary"
              style={{
                fontSize: "1.1rem",
                padding: "0.9rem 2rem",
              }}
            >

              Get Started

              <i className="fa-solid fa-arrow-right"></i>

            </Link>

          </div>

        </section>


        {/* =========================
            QUICK SEARCH
        ========================== */}

        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >

        </div>

        <div className="search-box-card">

          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--text-muted)",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            FIND YOUR BUS
          </p>


          <form
            action="/search"
            method="GET"
            className="search-form-grid"
          >

            {/* FROM */}

            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >

              <label className="form-label">

                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "var(--primary)" }}
                ></i>

                From

              </label>


              <select
                className="form-control"
                name="from"
              >

                <option
                  value="Lahore"
                  defaultValue="Lahore"
                >
                  Lahore
                </option>

                <option value="Islamabad">
                  Islamabad
                </option>

                <option value="Karachi">
                  Karachi
                </option>

                <option value="Multan">
                  Multan
                </option>

                <option value="Peshawar">
                  Peshawar
                </option>

              </select>

            </div>


            {/* TO */}

            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >

              <label className="form-label">

                <i
                  className="fa-solid fa-location-arrow"
                  style={{ color: "var(--primary)" }}
                ></i>

                To

              </label>


              <select
                className="form-control"
                name="to"
              >

                <option
                  value="Islamabad"
                  defaultValue="Islamabad"
                >
                  Islamabad
                </option>

                <option value="Lahore">
                  Lahore
                </option>

                <option value="Karachi">
                  Karachi
                </option>

                <option value="Multan">
                  Multan
                </option>

                <option value="Peshawar">
                  Peshawar
                </option>

              </select>

            </div>


            {/* DATE */}

            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >

              <label className="form-label">

                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "var(--primary)" }}
                ></i>

                Departure Date

              </label>


              <input
                type="date"
                className="form-control"
                defaultValue="2025-09-20"
              />

            </div>


            {/* SEARCH BUTTON */}

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                height: "48px",
                padding: "0 1.75rem",
              }}
            >

              Search Buses

              <i className="fa-solid fa-magnifying-glass"></i>

            </button>

          </form>

        </div>


        {/* =========================
            FEATURES
        ========================== */}

        <section
          style={{
            maxWidth: "1200px",
            margin: "4rem auto",
            padding: "0 1.5rem",
            width: "100%",
          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >

            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              Why Choose GoRide?
            </h2>

            <p style={{ color: "var(--text-muted)" }}>

              Experience luxury intercity travel
              with modern amenities across Pakistan.

            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >

            {/* FEATURE 1 */}

            <div className="card">

              <i
                className="fa-solid fa-wifi"
                style={{
                  fontSize: "2rem",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              ></i>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Free High-Speed Wi-Fi
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Stay connected throughout your journey
                with complimentary 5G internet onboard.
              </p>

            </div>


            {/* FEATURE 2 */}

            <div className="card">

              <i
                className="fa-solid fa-couch"
                style={{
                  fontSize: "2rem",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              ></i>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Recliner Sleeper Seats
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Ergonomic plush seats with legrests
                designed for maximum comfort and relaxation.
              </p>

            </div>


            {/* FEATURE 3 */}

            <div className="card">

              <i
                className="fa-solid fa-map-location-dot"
                style={{
                  fontSize: "2rem",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              ></i>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Live Route Tracking
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Track your bus in real-time with precise
                GPS location updates for family peace of mind.
              </p>

            </div>


            {/* FEATURE 4 */}

            <div className="card">

              <i
                className="fa-solid fa-qrcode"
                style={{
                  fontSize: "2rem",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              ></i>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Digital Instant Ticket
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Instant mobile QR code boarding.
                No printing required, hassle-free check-in.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            POPULAR ROUTES
        ========================== */}

        <section
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border-color)",
            borderBottom: "1px solid var(--border-color)",
            padding: "4rem 1.5rem",
          }}
        >

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >

              <div>

                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                  }}
                >
                  Popular Pakistani Routes
                </h2>

                <p style={{ color: "var(--text-muted)" }}>

                  Daily frequent luxury coaches running
                  on major motorways.

                </p>

              </div>


              <Link
                href="/search"
                className="btn btn-secondary"
              >

                View All Routes

                <i className="fa-solid fa-arrow-right"></i>

              </Link>

            </div>


            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >

              {/* ROUTE 1 */}

              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >

                <div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >

                    <span className="badge badge-active">
                      M-2 Motorway
                    </span>

                    <span
                      style={{
                        color: "var(--primary)",
                        fontWeight: 800,
                      }}
                    >
                      PKR 2,500
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Lahore → Islamabad
                  </h3>


                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      marginTop: "4px",
                    }}
                  >

                    <i className="fa-regular fa-clock"></i>

                    4 hours 30 mins

                  </p>

                </div>


                <Link
                  href="/seat-selection"
                  className="btn btn-outline btn-sm"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                  }}
                >
                  Book Seat
                </Link>

              </div>


              {/* ROUTE 2 */}

              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >

                <div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >

                    <span className="badge badge-active">
                      M-5 / M-3
                    </span>

                    <span
                      style={{
                        color: "var(--primary)",
                        fontWeight: 800,
                      }}
                    >
                      PKR 4,200
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Karachi → Lahore
                  </h3>


                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      marginTop: "4px",
                    }}
                  >

                    <i className="fa-regular fa-clock"></i>

                    16 hours 20 mins

                  </p>

                </div>


                <Link
                  href="/seat-selection"
                  className="btn btn-outline btn-sm"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                  }}
                >
                  Book Seat
                </Link>

              </div>


              {/* ROUTE 3 */}

              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >

                <div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >

                    <span className="badge badge-active">
                      E-35 Highway
                    </span>

                    <span
                      style={{
                        color: "var(--primary)",
                        fontWeight: 800,
                      }}
                    >
                      PKR 1,800
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Peshawar → Islamabad
                  </h3>


                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      marginTop: "4px",
                    }}
                  >

                    <i className="fa-regular fa-clock"></i>

                    2 hours 15 mins

                  </p>

                </div>


                <Link
                  href="/seat-selection"
                  className="btn btn-outline btn-sm"
                  style={{
                    marginTop: "1.5rem",
                    width: "100%",
                  }}
                >
                  Book Seat
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================== */}

      <footer
        style={{
          backgroundColor: "var(--bg-sidebar)",
          borderTop: "1px solid var(--border-color)",
          padding: "3rem 1.5rem",
          color: "var(--text-muted)",
        }}
      >

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >

          {/* BRAND */}

          <div>

            <div
              className="brand-logo"
              style={{ marginBottom: "1rem" }}
            >

              <i className="fa-solid fa-bus"></i>

              Go<span className="highlight">Ride</span>

            </div>


            <p
              style={{
                maxWidth: "300px",
                fontSize: "0.9rem",
              }}
            >

              Connecting major cities across Pakistan
              with comfort, reliability and luxury bus services.

            </p>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h4
              style={{
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h4>


            <ul
              style={{
                listStyle: "none",
                fontSize: "0.9rem",
                lineHeight: 2,
              }}
            >

              <li>
                <Link href="/search">
                  Search Buses
                </Link>
              </li>

              <li>
                <Link href="/route-map">
                  Live Map
                </Link>
              </li>

              <li>
                <Link href="/user/profile">
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="/admin/dashboard">
                  Admin Login
                </Link>
              </li>

            </ul>

          </div>


          {/* SUPPORT */}

          <div>

            <h4
              style={{
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Support & Help
            </h4>


            <p style={{ fontSize: "0.9rem" }}>

              <i className="fa-solid fa-phone"></i>

              +92 42 111 467 433

            </p>


            <p
              style={{
                fontSize: "0.9rem",
                marginTop: "0.5rem",
              }}
            >

              <i className="fa-solid fa-envelope"></i>

              support@goride.pk

            </p>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div
          style={{
            maxWidth: "1200px",
            margin: "2rem auto 0 auto",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border-color)",
            textAlign: "center",
            fontSize: "0.85rem",
          }}
        >

          &copy; 2025 GoRide Technologies Pakistan.
          All rights reserved.

        </div>

      </footer>
    </>
  );
}

export default MainPage;

