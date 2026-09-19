import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React from 'react'

function page() {
  return (
    <>
    <div className="admin-layout">
  <AdminSidebar />

  <div className="admin-main">
    <header className="admin-topbar">
      <div style={{ display: "flex", alignItems: "center" }}>
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
            Scheduled Trips
          </h1>

          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Manage daily coach departure schedules, timing & pricing
          </p>
        </div>
      </div>

      <button
        className="btn btn-primary"
        data-modal-target="createTripModal"
      >
        <i className="fa-solid fa-plus"></i> Schedule New Trip
      </button>
    </header>

    <div style={{ padding: "2rem" }}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Daily Trip Schedules</h3>

          <input
            type="text"
            className="form-control"
            placeholder="Search route or trip ID..."
            style={{ width: "260px" }}
          />
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Trip ID</th>
                <th>Origin & Destination</th>
                <th>Departure / Arrival</th>
                <th>Assigned Coach</th>
                <th>Assigned Driver</th>
                <th>Available Seats</th>
                <th>Fare Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  TR-901
                </td>

                <td>
                  <strong>Lahore → Islamabad</strong>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    M-2 Motorway Expressway
                  </div>
                </td>

                <td>10:30 AM → 03:30 PM</td>

                <td>LES-8821 (Yutong)</td>

                <td>Tariq Mahmood</td>

                <td>
                  <span
                    style={{
                      color: "#34d399",
                      fontWeight: 700,
                    }}
                  >
                    14 / 45
                  </span>
                </td>

                <td style={{ fontWeight: 700 }}>
                  PKR 2,500
                </td>

                <td>
                  <span className="badge badge-ontime">
                    Scheduled
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="createTripModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                    Update
                  </button>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  TR-902
                </td>

                <td>
                  <strong>Karachi → Lahore</strong>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    M-5 Sukkur-Multan Motorway
                  </div>
                </td>

                <td>04:00 PM → 08:20 AM</td>

                <td>KHI-4902 (Daewoo)</td>

                <td>Rashid Ali</td>

                <td>
                  <span
                    style={{
                      color: "#34d399",
                      fontWeight: 700,
                    }}
                  >
                    8 / 40
                  </span>
                </td>

                <td style={{ fontWeight: 700 }}>
                  PKR 4,200
                </td>

                <td>
                  <span className="badge badge-active">
                    On Route
                  </span>
                </td>

                <td>
                  <a
                    href="/admin/routes"
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-solid fa-eye"></i> Track
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  TR-903
                </td>

                <td>
                  <strong>Peshawar → Islamabad</strong>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    E-35 Express Highway
                  </div>
                </td>

                <td>08:00 PM → 10:15 PM</td>

                <td>ISL-7711 (Sleeper)</td>

                <td>Kamran Shah</td>

                <td>
                  <span
                    style={{
                      color: "#34d399",
                      fontWeight: 700,
                    }}
                  >
                    22 / 30
                  </span>
                </td>

                <td style={{ fontWeight: 700 }}>
                  PKR 1,800
                </td>

                <td>
                  <span className="badge badge-ontime">
                    Scheduled
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="createTripModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Create / Schedule Trip Detailed Form Modal */}

<div className="modal-overlay" id="createTripModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Schedule Intercity Bus Trip
      </h3>

      <button className="modal-close" data-modal-close>
        &times;
      </button>
    </div>

    <form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Origin Departure City
          </label>

          <select
            className="form-control"
            defaultValue="Lahore"
          >
            <option value="Lahore">
              Lahore (Kalma Chowk)
            </option>

            <option value="Islamabad">
              Islamabad (Faizabad)
            </option>

            <option value="Karachi">
              Karachi (Sohrab Goth)
            </option>

            <option value="Multan">
              Multan (Vehari Chowk)
            </option>

            <option value="Peshawar">
              Peshawar (General Bus Stand)
            </option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Destination Arrival City
          </label>

          <select
            className="form-control"
            defaultValue="Islamabad"
          >
            <option value="Islamabad">
              Islamabad (Faizabad)
            </option>

            <option value="Lahore">
              Lahore (Kalma Chowk)
            </option>

            <option value="Karachi">
              Karachi (Sohrab Goth)
            </option>

            <option value="Multan">
              Multan (Vehari Chowk)
            </option>

            <option value="Peshawar">
              Peshawar (General Bus Stand)
            </option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Departure Time
          </label>

          <input
            type="time"
            className="form-control"
            defaultValue="10:30"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Estimated Arrival Time
          </label>

          <input
            type="time"
            className="form-control"
            defaultValue="15:30"
            required
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Assign Bus Coach
          </label>

          <select
            className="form-control"
            defaultValue="LES-8821"
          >
            <option value="LES-8821">
              LES-8821 (Yutong Master Coach - 45 Seats)
            </option>

            <option value="KHI-4902">
              KHI-4902 (Daewoo BH116 Executive - 40 Seats)
            </option>

            <option value="ISL-7711">
              ISL-7711 (Yutong Sleeper Special - 30 Berths)
            </option>

            <option value="MUL-3320">
              MUL-3320 (Daewoo Express Luxury - 45 Seats)
            </option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Assign Certified Driver
          </label>

          <select
            className="form-control"
            defaultValue="Tariq Mahmood"
          >
            <option value="Tariq Mahmood">
              Tariq Mahmood (HTV-PK-88271)
            </option>

            <option value="Rashid Ali">
              Rashid Ali (HTV-PK-99120)
            </option>

            <option value="Kamran Shah">
              Kamran Shah (HTV-PK-33821)
            </option>

            <option value="Zubair Ahmed">
              Zubair Ahmed (HTV-PK-55219)
            </option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Ticket Fare Per Seat (PKR)
          </label>

          <input
            type="number"
            className="form-control"
            defaultValue="2500"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Rest Stop Area
          </label>

          <input
            type="text"
            className="form-control"
            defaultValue="Bhera Service Area (20 Mins Stopover)"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <button
          type="button"
          className="btn btn-secondary"
          data-modal-close
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Schedule Trip
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default page
