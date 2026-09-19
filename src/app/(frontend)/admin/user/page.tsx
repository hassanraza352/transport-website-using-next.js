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
          Users & Customers
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Manage your platform users and customer accounts
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button className="btn btn-secondary btn-sm">
          <i className="fa-solid fa-download"></i> Export
        </button>

        <button
          className="btn btn-primary btn-sm"
          data-modal-target="addUserModal"
        >
          <i className="fa-solid fa-plus"></i> Add User
        </button>
      </div>
    </header>

    <div style={{ padding: "2rem" }}>
      {/* Stats Cards */}

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Users</div>

          <div className="stat-value">8,426</div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-arrow-trend-up"></i>{" "}
            +4.7%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last month
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">New This Month</div>

          <div
            className="stat-value"
            style={{ color: "var(--primary)" }}
          >
            1,214
          </div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-user-plus"></i>{" "}
            +12.1%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last month
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Verified Accounts</div>

          <div
            className="stat-value"
            style={{ color: "#34d399" }}
          >
            7,912
          </div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-shield-check"></i>{" "}
            93.9%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              verified
            </span>
          </div>
        </div>
      </div>

      {/* Users Table */}

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            Registered Customer Accounts
          </h3>

          <input
            type="text"
            className="form-control"
            placeholder="Search customer name or phone..."
            style={{ width: "280px" }}
          />
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Bookings</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Ahmed Khan"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Ahmed Khan
                    </span>
                  </div>
                </td>

                <td>ahmed@gmail.com</td>
                <td>+92 300 1234567</td>

                <td style={{ fontWeight: 700 }}>12</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 28,500
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Sara Ali"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Sara Ali
                    </span>
                  </div>
                </td>

                <td>sara@gmail.com</td>
                <td>+92 301 2345678</td>

                <td style={{ fontWeight: 700 }}>8</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 19,200
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Bilal Hussain"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Bilal Hussain
                    </span>
                  </div>
                </td>

                <td>bilal@gmail.com</td>
                <td>+92 302 3456789</td>

                <td style={{ fontWeight: 700 }}>15</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 42,800
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>4</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Ayesha Tariq"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Ayesha Tariq
                    </span>
                  </div>
                </td>

                <td>ayesha@gmail.com</td>
                <td>+92 303 4567890</td>

                <td style={{ fontWeight: 700 }}>6</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 16,300
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>5</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Usman Shah"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Usman Shah
                    </span>
                  </div>
                </td>

                <td>usman@gmail.com</td>
                <td>+92 304 5678901</td>

                <td style={{ fontWeight: 700 }}>9</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 21,700
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>6</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Zainab Fatima"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Zainab Fatima
                    </span>
                  </div>
                </td>

                <td>zainab@gmail.com</td>
                <td>+92 305 6789012</td>

                <td style={{ fontWeight: 700 }}>4</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 9,600
                </td>

                <td>
                  <span className="badge badge-blocked">
                    Blocked
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>7</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Ali Raza"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Ali Raza
                    </span>
                  </div>
                </td>

                <td>ali@gmail.com</td>
                <td>+92 306 7890123</td>

                <td style={{ fontWeight: 700 }}>11</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 27,400
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>8</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                      className="avatar"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}
                      alt="Hira Khan"
                    />

                    <span
                      style={{
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Hira Khan
                    </span>
                  </div>
                </td>

                <td>hira@gmail.com</td>
                <td>+92 307 8901234</td>

                <td style={{ fontWeight: 700 }}>7</td>

                <td style={{ fontWeight: 800 }}>
                  PKR 18,900
                </td>

                <td>
                  <span className="badge badge-active">
                    Active
                  </span>
                </td>

                <td>
                  <button className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1.5rem",
            paddingTop: "1rem",
            borderTop: "1px solid var(--border-color)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <div>Showing 1 - 8 of 8,426 users</div>

          <div
            style={{
              display: "flex",
              gap: "6px",
            }}
          >
            <button className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button className="btn btn-primary btn-sm">
              1
            </button>

            <button className="btn btn-secondary btn-sm">
              2
            </button>

            <button className="btn btn-secondary btn-sm">
              3
            </button>

            <button className="btn btn-secondary btn-sm">
              4
            </button>

            <button className="btn btn-secondary btn-sm">
              5
            </button>

            <button className="btn btn-secondary btn-sm">
              ...
            </button>

            <button className="btn btn-secondary btn-sm">
              1,053
            </button>

            <button className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Add User Modal */}

  <div className="modal-overlay" id="addUserModal">
    <div className="modal-container">
      <div className="modal-header">
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "#fff",
          }}
        >
          Create Customer Account
        </h3>

        <button className="modal-close" data-modal-close>
          &times;
        </button>
      </div>

      <form>
        <div className="form-group">
          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="e.g. Faisal Shah"
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
            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="faisal@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="+92 300 9988776"
              required
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
            Create User
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default page
