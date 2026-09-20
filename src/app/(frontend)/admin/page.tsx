
"use client";

import AdminSidebar from "@/frontendComponents/AdminSidebar";
import { protect } from "@/utils/auth";
import { useSession } from "next-auth/react";
import React from "react";

function AdminDashboard (){

  const today = new Date();

const formattedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric"
});

  const session=useSession();

const data=session?.data;




  return (
    <div className="admin-layout">

    <AdminSidebar/>

      {/* Main Content */}
      <div className="admin-main">

        {/* Admin Topbar */}
        <header className="admin-topbar">

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button className="sidebar-toggle-btn">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div>
              <h1
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Operations Overview
              </h1>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Real-time insights into your platform performance
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <i className="fa-regular fa-calendar"></i>{" "}
              Today, {formattedDate}
            </span>

            <div className="user-profile-badge">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Admin"
                className="avatar"
              />

              <div style={{ fontSize: "0.85rem" }}>
                <strong
                  style={{
                    display: "block",
                    color: "#fff",
                  }}
                >
                 {data?.user?.name}
                </strong>

                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  Platform Director
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Inner Content */}
        <div style={{ padding: "2rem" }}>

          {/* KPI Stats */}
          <div className="stats-grid">

            {/* Total Orders */}
            <div className="card stat-card">
              <div className="stat-label">
                Total Orders
              </div>

              <div className="stat-value">
                12,840
              </div>

              <div className="stat-trend positive">
                <i className="fa-solid fa-arrow-trend-up"></i>{" "}
                +12.4%{" "}
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  vs. last week
                </span>
              </div>
            </div>

            {/* Active Users */}
            <div className="card stat-card">
              <div className="stat-label">
                Active Users
              </div>

              <div className="stat-value">
                8,426
              </div>

              <div className="stat-trend positive">
                <i className="fa-solid fa-arrow-trend-up"></i>{" "}
                +8.7%{" "}
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  vs. last week
                </span>
              </div>
            </div>

            {/* Revenue */}
            <div className="card stat-card">
              <div className="stat-label">
                Revenue
              </div>

              <div
                className="stat-value"
                style={{ color: "var(--primary)" }}
              >
                PKR 18.6M
              </div>

              <div className="stat-trend positive">
                <i className="fa-solid fa-arrow-trend-up"></i>{" "}
                +15.2%{" "}
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  vs. last week
                </span>
              </div>
            </div>

            {/* Net Profit */}
            <div className="card stat-card">
              <div className="stat-label">
                Net Profit
              </div>

              <div
                className="stat-value"
                style={{ color: "#34d399" }}
              >
                PKR 6.4M
              </div>

              <div className="stat-trend positive">
                <i className="fa-solid fa-arrow-trend-up"></i>{" "}
                +22.1%{" "}
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                  }}
                >
                  vs. last week
                </span>
              </div>
            </div>

          </div>

          {/* Quick Actions + Live Map */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >

            {/* Quick Actions */}
            <div className="card">
              <h3
                className="card-title"
                style={{ marginBottom: "1.25rem" }}
              >
                Quick Actions
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >

                <a
                  href="/admin/bus"
                  className="card"
                  style={{
                    background: "var(--bg-input)",
                    padding: "1.25rem",
                    borderColor: "var(--border-color)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-bus-simple"
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--primary)",
                      marginBottom: "0.5rem",
                    }}
                  ></i>

                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Add Bus
                  </h4>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Register new bus
                  </p>
                </a>

                <a
                  href="/admin/trip"
                  className="card"
                  style={{
                    background: "var(--bg-input)",
                    padding: "1.25rem",
                    borderColor: "var(--border-color)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-plus-circle"
                    style={{
                      fontSize: "1.5rem",
                      color: "#34d399",
                      marginBottom: "0.5rem",
                    }}
                  ></i>

                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Create Trip
                  </h4>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Schedule a trip
                  </p>
                </a>

                <a
                  href="/admin/route"
                  className="card"
                  style={{
                    background: "var(--bg-input)",
                    padding: "1.25rem",
                    borderColor: "var(--border-color)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-route"
                    style={{
                      fontSize: "1.5rem",
                      color: "#c084fc",
                      marginBottom: "0.5rem",
                    }}
                  ></i>

                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Manage Routes
                  </h4>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    View & edit routes
                  </p>
                </a>

                <a
                  href="/admin/booking"
                  className="card"
                  style={{
                    background: "var(--bg-input)",
                    padding: "1.25rem",
                    borderColor: "var(--border-color)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="fa-solid fa-list-check"
                    style={{
                      fontSize: "1.5rem",
                      color: "#fbbf24",
                      marginBottom: "0.5rem",
                    }}
                  ></i>

                  <h4
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    View Bookings
                  </h4>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Check all orders
                  </p>
                </a>

              </div>
            </div>

            {/* Live Route Map */}
            <div
              className="card"
              style={{ padding: "1rem" }}
            >
              <div
                className="card-header"
                style={{
                  marginBottom: "0.75rem",
                  padding: "0 0.5rem",
                }}
              >
                <h3 className="card-title">
                  Live Route Map
                </h3>

                <a
                  href="/admin/route"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--primary)",
                  }}
                >
                  Expand Map{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

              <div
                className="map-canvas-container"
                style={{ height: "240px" }}
              >
                <canvas id="adminRouteMapCanvas"></canvas>
              </div>
            </div>

          </div>

          {/* Recent Bookings Table */}
          <div className="card">

            <div className="card-header">
              <h3 className="card-title">
                Recent Bookings
              </h3>

              <a
                href="/admin/bookings"
                className="btn btn-secondary btn-sm"
              >
                View All Bookings{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="table-responsive">
              <table className="data-table">

                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Passenger</th>
                    <th>Route</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td
                      style={{
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      GR-829451
                    </td>
                    <td>Ahmed Khan</td>
                    <td>Lahore → Islamabad</td>
                    <td>24 Apr 2025</td>
                    <td>
                      <span className="badge badge-confirmed">
                        Confirmed
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      PKR 2,500
                    </td>
                    <td>
                      <a
                        href="/admin/bookings"
                        className="btn btn-secondary btn-sm"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      GR-829450
                    </td>
                    <td>Sara Ali</td>
                    <td>Karachi → Lahore</td>
                    <td>24 Apr 2025</td>
                    <td>
                      <span className="badge badge-pending">
                        Pending
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      PKR 4,200
                    </td>
                    <td>
                      <a
                        href="/admin/bookings"
                        className="btn btn-secondary btn-sm"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      GR-829449
                    </td>
                    <td>Bilal Hussain</td>
                    <td>Islamabad → Peshawar</td>
                    <td>23 Apr 2025</td>
                    <td>
                      <span className="badge badge-confirmed">
                        Confirmed
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      PKR 1,800
                    </td>
                    <td>
                      <a
                        href="/admin/bookings"
                        className="btn btn-secondary btn-sm"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      GR-829448
                    </td>
                    <td>Ayesha Tariq</td>
                    <td>Lahore → Multan</td>
                    <td>23 Apr 2025</td>
                    <td>
                      <span className="badge badge-cancelled">
                        Cancelled
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      PKR 1,800
                    </td>
                    <td>
                      <a
                        href="/admin/bookings"
                        className="btn btn-secondary btn-sm"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

