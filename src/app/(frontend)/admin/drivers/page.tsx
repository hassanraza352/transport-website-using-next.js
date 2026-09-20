'use client'

import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React,{useState} from 'react'


function Driver() {
  const [showaddDriver,setshowAddDriver]=useState(false)
  const [showAssignDriver,setshowAssignDriver]=useState(false)
  return (
   <>
   <div className="admin-layout">
  <AdminSidebar />

  {/* Main Content */}
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
            Drivers Management
          </h1>

          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Commercial HTV certified driver directory & assignment
          </p>
        </div>
      </div>

      <button className="btn btn-primary" data-modal-target="addDriverModal" onClick={(e)=>{setshowAddDriver(true)}}>
        <i className="fa-solid fa-user-plus"></i> Add New Driver
      </button>
    </header>

    <div style={{ padding: "2rem" }}>
      {/* Driver Roster Stats Cards */}
      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Registered Drivers</div>
          <div className="stat-value">28</div>
          <div className="stat-trend positive">
            <i className="fa-solid fa-shield-check"></i> HTV Certified
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">On Duty Right Now</div>
          <div
            className="stat-value"
            style={{ color: "var(--primary)" }}
          >
            18
          </div>
          <div className="stat-trend positive">
            <i className="fa-solid fa-bus"></i> Driving Motorways
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Available for Duty</div>
          <div
            className="stat-value"
            style={{ color: "#34d399" }}
          >
            4
          </div>
          <div className="stat-trend positive">
            <i className="fa-solid fa-user-check"></i> Depot Standby
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Off Duty / Rest</div>
          <div
            className="stat-value"
            style={{ color: "var(--text-dim)" }}
          >
            6
          </div>
          <div className="stat-trend negative">
            <i className="fa-solid fa-bed"></i> Scheduled Rest
          </div>
        </div>
      </div>

      {/* Drivers Data Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Commercial Driver Roster</h3>

          <input
            type="text"
            className="form-control"
            placeholder="Search driver name, CNIC or license..."
            style={{ width: "280px" }}
          />
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Driver Info</th>
                <th>CNIC & License</th>
                <th>Contact Phone</th>
                <th>Assigned Coach</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* Driver 1 */}
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      className="avatar"
                      alt="Tariq Mahmood"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />

                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#fff",
                        }}
                      >
                        Tariq Mahmood
                      </strong>

                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Lahore Base Terminal
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#fff",
                    }}
                  >
                    CNIC: 35202-8819201-3
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                    }}
                  >
                    License: HTV-PK-88271
                  </div>
                </td>

                <td>+92 301 8847291</td>

                <td>
                  <strong style={{ color: "var(--primary)" }}>
                    LES-8821
                  </strong>{" "}
                  (Yutong)
                </td>

                <td>
                  <strong style={{ color: "#fbbf24" }}>
                    <i className="fa-solid fa-star"></i> 4.9
                  </strong>
                </td>

                <td>
                  <span className="badge badge-active">
                    On Duty
                  </span>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <a
                      href="/admin/driver-profile"
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa-solid fa-eye"></i> Profile
                    </a>

                    <button onClick={(e)=>{setshowAssignDriver(true)}}
                      className="btn btn-outline btn-sm"
                      data-modal-target="assignDriverModal"
                    >
                      <i className="fa-solid fa-bus"></i> Assign
                    </button>
                  </div>
                </td>
              </tr>

              {/* Driver 2 */}
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                      className="avatar"
                      alt="Rashid Ali"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />

                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#fff",
                        }}
                      >
                        Rashid Ali
                      </strong>

                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Karachi Base Terminal
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#fff",
                    }}
                  >
                    CNIC: 42101-9920192-1
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                    }}
                  >
                    License: HTV-PK-99120
                  </div>
                </td>

                <td>+92 302 7710928</td>

                <td>
                  <strong style={{ color: "var(--primary)" }}>
                    KHI-4902
                  </strong>{" "}
                  (Daewoo)
                </td>

                <td>
                  <strong style={{ color: "#fbbf24" }}>
                    <i className="fa-solid fa-star"></i> 4.8
                  </strong>
                </td>

                <td>
                  <span className="badge badge-active">
                    On Duty
                  </span>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <a
                      href="/admin/driver-profile"
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa-solid fa-eye"></i> Profile
                    </a>

                    <button
                      className="btn btn-outline btn-sm"
                      data-modal-target="assignDriverModal"
                    >
                      <i className="fa-solid fa-bus"></i> Assign
                    </button>
                  </div>
                </td>
              </tr>

              {/* Driver 3 */}
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                      className="avatar"
                      alt="Kamran Shah"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />

                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#fff",
                        }}
                      >
                        Kamran Shah
                      </strong>

                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Islamabad Base Terminal
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#fff",
                    }}
                  >
                    CNIC: 17301-3382910-5
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                    }}
                  >
                    License: HTV-PK-33821
                  </div>
                </td>

                <td>+92 303 5529102</td>

                <td>
                  <strong style={{ color: "#34d399" }}>
                    ISL-7711
                  </strong>{" "}
                  (Sleeper)
                </td>

                <td>
                  <strong style={{ color: "#fbbf24" }}>
                    <i className="fa-solid fa-star"></i> 5.0
                  </strong>
                </td>

                <td>
                  <span className="badge badge-confirmed">
                    Available
                  </span>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <a
                      href="/admin/driver-profile"
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa-solid fa-eye"></i> Profile
                    </a>

                    <button
                      className="btn btn-outline btn-sm"
                      data-modal-target="assignDriverModal"
                    >
                      <i className="fa-solid fa-bus"></i> Assign
                    </button>
                  </div>
                </td>
              </tr>

              {/* Driver 4 */}
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                      className="avatar"
                      alt="Zubair Ahmed"
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />

                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#fff",
                        }}
                      >
                        Zubair Ahmed
                      </strong>

                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Multan Base Terminal
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#fff",
                    }}
                  >
                    CNIC: 36302-5528109-9
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                    }}
                  >
                    License: HTV-PK-55219
                  </div>
                </td>

                <td>+92 304 9918201</td>

                <td>
                  <span
                    style={{
                      color: "var(--text-dim)",
                      fontStyle: "italic",
                    }}
                  >
                    Standby
                  </span>
                </td>

                <td>
                  <strong style={{ color: "#fbbf24" }}>
                    <i className="fa-solid fa-star"></i> 4.7
                  </strong>
                </td>

                <td>
                  <span className="badge badge-pending">
                    Off Duty
                  </span>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <a
                      href="/admin/driver-profile"
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa-solid fa-eye"></i> Profile
                    </a>

                    <button
                      className="btn btn-primary btn-sm"
                      data-modal-target="assignDriverModal"
                    >
                      <i className="fa-solid fa-plus"></i> Assign Bus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

{showaddDriver && (
  <div className="modal-overlay" id="addDriverModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Register New HTV Driver
      </h3>

      <button onClick={(e)=>{setshowAddDriver(false)}} className="modal-close" data-modal-close>
        &times;
      </button>
    </div>

    <form>
      <div className="form-group">
        <label className="form-label">Driver Full Name</label>

        <input
          type="text"
          className="form-control"
          placeholder="e.g. Faisal Mehmood"
          required
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">CNIC Number</label>

          <input
            type="text"
            className="form-control"
            placeholder="35202-0000000-0"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Commercial HTV License No.
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="HTV-PK-00000"
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
          <label className="form-label">Phone Number</label>

          <input
            type="text"
            className="form-control"
            placeholder="+92 300 0000000"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Base Terminal</label>

          <select className="form-control" defaultValue="Lahore Terminal Base">
            <option>Lahore Terminal Base</option>
            <option>Islamabad Terminal Base</option>
            <option>Karachi Terminal Base</option>
            <option>Peshawar Terminal Base</option>
            <option>Multan Terminal Base</option>
          </select>
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
        <button onClick={(e)=>{setshowAddDriver(false)}}
          type="button"
          className="btn btn-secondary"
          data-modal-close
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-primary">
          Register Driver
        </button>
      </div>
    </form>
  </div>
</div> 
)}
{ showAssignDriver && (
  <div className="modal-overlay" id="assignDriverModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Assign Driver to Bus Fleet
      </h3>
      <button onClick={(e)=>{setshowAssignDriver(false)}} className="modal-close" data-modal-close >
        &times;
      </button>
    </div>

    <form>
      <div className="form-group">
        <label className="form-label">Select Registered Coach</label>

        <select
          className="form-control"
          defaultValue="LES-8821 (Yutong Master Coach - Lahore to Islamabad)"
        >
          <option>
            LES-8821 (Yutong Master Coach - Lahore to Islamabad)
          </option>
          <option>
            KHI-4902 (Daewoo BH116 - Karachi to Lahore)
          </option>
          <option>
            ISL-7711 (Yutong Sleeper - Peshawar to Islamabad)
          </option>
          <option>
            MUL-3320 (Daewoo Express - Lahore to Multan)
          </option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Duty Shift Hours</label>

        <input
          type="text"
          className="form-control"
          defaultValue="08:00 AM - 04:00 PM (8 Hours Shift)"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <button onClick={(e)=>{setshowAssignDriver(false)}}
          type="button"
          className="btn btn-secondary"
          data-modal-close
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-primary">
          Confirm Duty Assignment
        </button>
      </div>
    </form>
  </div>
</div> 
)}

{/* Assign Driver Modal */}
{/* <div className="modal-overlay" id="assignDriverModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Assign Driver to Bus Fleet
      </h3>

      <button className="modal-close" data-modal-close>
        &times;
      </button>
    </div>

    <form>
      <div className="form-group">
        <label className="form-label">Select Registered Coach</label>

        <select
          className="form-control"
          defaultValue="LES-8821 (Yutong Master Coach - Lahore to Islamabad)"
        >
          <option>
            LES-8821 (Yutong Master Coach - Lahore to Islamabad)
          </option>
          <option>
            KHI-4902 (Daewoo BH116 - Karachi to Lahore)
          </option>
          <option>
            ISL-7711 (Yutong Sleeper - Peshawar to Islamabad)
          </option>
          <option>
            MUL-3320 (Daewoo Express - Lahore to Multan)
          </option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Duty Shift Hours</label>

        <input
          type="text"
          className="form-control"
          defaultValue="08:00 AM - 04:00 PM (8 Hours Shift)"
        />
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

        <button type="submit" className="btn btn-primary">
          Confirm Duty Assignment
        </button>
      </div>
    </form>
  </div>
</div> */}
   </>
  )
}

export default Driver
