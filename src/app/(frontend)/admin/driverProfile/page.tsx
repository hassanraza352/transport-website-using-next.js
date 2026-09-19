import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React from 'react'

function page() {
  return (
    <>
 <div className="admin-layout">
  <AdminSidebar />

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
          Driver Profile & Duty Log
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Commercial HTV Driver details & safety stats
        </p>
      </div>

      <a href="/admin/buses" className="btn btn-secondary btn-sm">
        <i className="fa-solid fa-arrow-left"></i> Back to Fleet
      </a>
    </header>

    <div style={{ padding: "2rem" }}>
      {/* Driver Summary Header Card */}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
            alt="Tariq Mahmood"
            className="avatar"
            style={{
              width: "90px",
              height: "90px",
              borderWidth: "3px",
            }}
          />

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h1
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Tariq Mahmood
              </h1>

              <span className="badge badge-confirmed">
                <i className="fa-solid fa-shield-check"></i> HTV Verified
              </span>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginTop: "4px",
              }}
            >
              <i className="fa-solid fa-id-card"></i> CNIC: 35202-8819201-3
              {" • "}
              <i className="fa-solid fa-id-badge"></i> License: HTV-PK-88271
            </p>

            <div
              style={{
                marginTop: "8px",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <i
                className="fa-solid fa-phone"
                style={{ color: "var(--primary)" }}
              ></i>{" "}
              +92 301 8847291 {" • "}
              <i className="fa-solid fa-location-dot"></i> Lahore Terminal
              Base
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <div
            style={{
              textAlign: "center",
              padding: "0.75rem 1.25rem",
              background: "var(--bg-input)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#fbbf24",
              }}
            >
              <i className="fa-solid fa-star"></i> 4.9
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              Passenger Rating
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "0.75rem 1.25rem",
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
              98%
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              Safety Score
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Bus & Duty Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: "1rem" }}>
            Currently Assigned Coach
          </h3>

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
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                LES-8821
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Yutong Master Coach (2024)
              </p>
            </div>

            <span className="badge badge-active">On Duty</span>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title" style={{ marginBottom: "1rem" }}>
            Assigned Motorway Route
          </h3>

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
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Lahore → Islamabad
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                M-2 Motorway Expressway
              </p>
            </div>

            <a href="/admin/routes" className="btn btn-secondary btn-sm">
              Live Track
            </a>
          </div>
        </div>
      </div>

      {/* Driver Trip History Logs */}
      <div className="card">
        <h3 className="card-title" style={{ marginBottom: "1.25rem" }}>
          Recent Driving Log & Performance
        </h3>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Route</th>
                <th>Coach No.</th>
                <th>Departure / Arrival</th>
                <th>On-Time Score</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>24 Apr 2025</td>
                <td>Lahore → Islamabad</td>
                <td>LES-8821</td>
                <td>10:30 AM - 03:30 PM</td>

                <td>
                  <strong style={{ color: "#34d399" }}>100%</strong>
                </td>

                <td>
                  <span className="badge badge-active">Completed</span>
                </td>
              </tr>

              <tr>
                <td>22 Apr 2025</td>
                <td>Islamabad → Lahore</td>
                <td>LES-8821</td>
                <td>08:00 AM - 12:30 PM</td>

                <td>
                  <strong style={{ color: "#34d399" }}>98%</strong>
                </td>

                <td>
                  <span className="badge badge-active">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default page
