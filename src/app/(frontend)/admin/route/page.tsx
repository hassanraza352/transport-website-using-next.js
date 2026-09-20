'use client'

import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React, { useState } from 'react'
import api from '@/utilsFrontend/axios'
 function Route() {
  const [showAddroute, setShowAddroute] = useState(false)
  const [RouteDirection, setRouteDirection] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')


  const handleRouteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response=await api.post("/admin/route",{
      RouteDirection,
      startLocation,
      endLocation
    })
    
    if(response.status===200){
      alert("Route added successfully")
      setRouteDirection("");
      setStartLocation("");
      setEndLocation("");
    }
    else{
      alert("Error adding route")
    }
    setShowAddroute(false)
  }
  return (
   <>
   
   <div className="admin-layout">
  <AdminSidebar />

  {/* Main */}
  <div className="admin-main">
    <header className="admin-topbar">
      <div>
        <h1
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Routes & Fleet Operations
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Live tracking, motorways and fleet management across Pakistan
        </p>
      </div>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setShowAddroute(true)}
      >
        <i className="fa-solid fa-plus" ></i> Add New Route
      </button>
    </header>

    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        {/* Left: Interactive Map Canvas */}
        <div className="card" style={{ padding: "1rem" }}>
          <h3
            className="card-title"
            style={{ marginBottom: "1rem" }}
          >
            Live Motorway Fleet Map
          </h3>

          <div
            className="map-canvas-container"
            style={{ height: "540px" }}
          >
            <canvas id="adminRouteMapCanvas"></canvas>
          </div>
        </div>

        {/* Right: Active Routes & Fleet Overview */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Active Routes List Card */}
          <div className="card">
            <h3
              className="card-title"
              style={{ marginBottom: "1rem" }}
            >
              Active Routes
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Route Item 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    Lahore → Islamabad
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    M-2 Motorway • 2 coaches active
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-ontime">
                    On Time
                  </span>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    ETA: 2h 45m
                  </div>
                </div>
              </div>

              {/* Route Item 2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    Karachi → Lahore
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    M-5 / M-3 Motorway • 3 coaches active
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-ontime">
                    On Time
                  </span>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    ETA: 16h 20m
                  </div>
                </div>
              </div>

              {/* Route Item 3 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    Peshawar → Islamabad
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    E-35 Highway • 2 coaches active
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-ontime">
                    On Time
                  </span>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    ETA: 2h 15m
                  </div>
                </div>
              </div>

              {/* Route Item 4 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: "0.95rem",
                    }}
                  >
                    Lahore → Multan
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    M-3 Motorway • 1 coach active
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="badge badge-ontime">
                    On Time
                  </span>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    ETA: 4h 30m
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Overview Card */}
          <div className="card">
            <h3
              className="card-title"
              style={{ marginBottom: "1rem" }}
            >
              Fleet Overview
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  background: "var(--bg-input)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  24
                </div>

                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Active Buses
                </div>
              </div>

              <div
                style={{
                  background: "var(--bg-input)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  18
                </div>

                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                  }}
                >
                  On Route
                </div>
              </div>

              <div
                style={{
                  background: "var(--bg-input)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#fbbf24",
                  }}
                >
                  3
                </div>

                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Maintenance
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                }}
              >
                On-Time Departure Rate:
              </span>

              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#34d399",
                }}
              >
                92%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Add New Bus Modal */}
      {showAddroute && (
        <div className="modal-overlay" id="addBusModal">
          <div className="modal-container">
            <div className="modal-header">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>
                Register New Bus Coach
              </h3>
              <button className="modal-close" onClick={() => setShowAddroute(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleRouteSubmit}>
              <div className="form-group">
                <label className="form-label">Start Location</label>
                <input value={startLocation} onChange={(e) => setStartLocation(e.target.value)} type="text" className="form-control" placeholder="e.g. Lahore" required/>
              </div>

              <div className="form-group">
                <label className="form-label">End Location</label>
                <input value={endLocation} onChange={(e) => setEndLocation(e.target.value)} type="text" className="form-control" placeholder="e.g. Islamabad" required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                
              </div>

              <div className="form-group">
                <label className="form-label">route Name</label>
                <input value={RouteDirection} onChange={(e) => setRouteDirection(e.target.value)} type="text" className="form-control" placeholder="e.g. via Motorway okara" required />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1.5rem" }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddroute(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Register Bus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
</div>
   </>
  )
}

export default Route
