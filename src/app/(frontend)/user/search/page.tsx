import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'

function Search() {
  return (
  <>
    <UserHeader/>


    <main
      className="main-wrapper"
      style={{ padding: "2rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top Search Form Bar */}
        <div
          className="card"
          style={{
            marginBottom: "2rem",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--text-muted)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            FIND YOUR BUS
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
            }}
          >
            Search Buses
          </h2>

          <form
            className="search-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr)) auto",
              gap: "1rem",
              alignItems: "end",
            }}
          >
            {/* From */}
            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >
              <label className="form-label">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                From
              </label>

              <select className="form-control">
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

            {/* To */}
            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >
              <label className="form-label">
                <i
                  className="fa-solid fa-location-arrow"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                To
              </label>

              <select className="form-control">
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

            {/* Date */}
            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >
              <label className="form-label">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                Date
              </label>

              <input
                type="text"
                className="form-control"
                value="20 September"
                readOnly
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              style={{ height: "48px" }}
            >
              Search Buses{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Results Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
            }}
          >
            Available Buses
          </h3>

          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
            }}
          >
            3 results found
          </span>
        </div>

        {/* Bus Listings */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Bus Card 1 */}
          <div
            className="card"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80"
                alt="Bus Interior"
                style={{
                  width: "160px",
                  height: "110px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                    }}
                  >
                    GoRide Express
                  </h3>

                  <span className="badge badge-confirmed">
                    Luxury Coach
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Premium • AC Coach • Wi-Fi • Recliner Seats
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    color: "var(--text-main)",
                    fontSize: "0.95rem",
                  }}
                >
                  <div>
                    <i
                      className="fa-regular fa-clock"
                      style={{ color: "var(--primary)" }}
                    ></i>{" "}
                    <strong>10:30 AM - 3:30 PM</strong>
                  </div>

                  <div style={{ color: "var(--text-muted)" }}>
                    <i className="fa-solid fa-route"></i> 5h duration
                  </div>

                  <div
                    style={{
                      color: "#34d399",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fa-solid fa-couch"></i>{" "}
                    14 seats available
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "right",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Per Person
              </div>

              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                PKR 2,500
              </div>

              <a
                href="/user/seat-selection"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                View Details{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Bus Card 2 */}
          <div
            className="card"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80"
                alt="Bus Interior"
                style={{
                  width: "160px",
                  height: "110px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                    }}
                  >
                    Daewoo Gold Executive
                  </h3>

                  <span className="badge badge-active">
                    Executive
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Executive Lounge • AC Coach • Refreshments • USB Ports
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    color: "var(--text-main)",
                    fontSize: "0.95rem",
                  }}
                >
                  <div>
                    <i
                      className="fa-regular fa-clock"
                      style={{ color: "var(--primary)" }}
                    ></i>{" "}
                    <strong>01:00 PM - 05:45 PM</strong>
                  </div>

                  <div style={{ color: "var(--text-muted)" }}>
                    <i className="fa-solid fa-route"></i>{" "}
                    4h 45m duration
                  </div>

                  <div
                    style={{
                      color: "#34d399",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fa-solid fa-couch"></i>{" "}
                    8 seats available
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "right",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Per Person
              </div>

              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                PKR 2,800
              </div>

              <a
                href="/user/seat-selection"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                View Details{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Bus Card 3 */}
          <div
            className="card"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80"
                alt="Bus Interior"
                style={{
                  width: "160px",
                  height: "110px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                    }}
                  >
                    Yutong Sleeper Coach
                  </h3>

                  <span className="badge badge-pending">
                    Sleeper
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Full Sleeper Berth • Wi-Fi • Blanket & Pillow •
                  Refreshments
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    color: "var(--text-main)",
                    fontSize: "0.95rem",
                  }}
                >
                  <div>
                    <i
                      className="fa-regular fa-clock"
                      style={{ color: "var(--primary)" }}
                    ></i>{" "}
                    <strong>08:00 PM - 12:30 AM</strong>
                  </div>

                  <div style={{ color: "var(--text-muted)" }}>
                    <i className="fa-solid fa-route"></i>{" "}
                    4h 30m duration
                  </div>

                  <div
                    style={{
                      color: "#34d399",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fa-solid fa-couch"></i>{" "}
                    5 seats available
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "right",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Per Person
              </div>

              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                PKR 3,200
              </div>

              <a
                href="/user/seat-selection"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                View Details{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>


  </>
  )
}

export default Search
