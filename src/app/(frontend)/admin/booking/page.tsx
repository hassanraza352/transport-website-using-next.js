'use client'


import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React, { useState } from 'react'

function Booking() {
  const [showbookingDetail,showsetbookingDetail]=useState(false);
    const [showupdatebookingDetail,showupdatesetbookingDetail]=useState(false);

  

  return (
    <>
      <div className="admin-layout">


<AdminSidebar/>

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
          Orders & Bookings
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Manage all bookings, update trip statuses & process refunds
        </p>
      </div>
    </div>

    <div style={{ display: "flex", gap: "1rem" }}>
      <button className="btn btn-secondary btn-sm">
        <i className="fa-solid fa-download"></i> Export
      </button>
    </div>
  </header>

  <div style={{ padding: "2rem" }}>
    {/* Filter Tabs & Search Bar Row */}
    <div
      className="card"
      style={{ marginBottom: "1.5rem", padding: "1.25rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-primary btn-sm table-filter-btn active"
            data-filter="all"
          >
            All
          </button>

          <button
            className="btn btn-secondary btn-sm table-filter-btn"
            data-filter="confirmed"
          >
            Confirmed
          </button>

          <button
            className="btn btn-secondary btn-sm table-filter-btn"
            data-filter="pending"
          >
            Pending
          </button>

          <button
            className="btn btn-secondary btn-sm table-filter-btn"
            data-filter="cancelled"
          >
            Cancelled
          </button>

          <button
            className="btn btn-secondary btn-sm table-filter-btn"
            data-filter="refunded"
          >
            Refunded
          </button>
        </div>

        {/* Search Input */}
        <div style={{ position: "relative", minWidth: "280px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by booking ID, passenger, route..."
            style={{
              paddingLeft: "2.2rem",
              fontSize: "0.85rem",
            }}
          />

          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              left: "12px",
              top: "12px",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
            }}
          ></i>
        </div>
      </div>
    </div>

    {/* Bookings Data Table */}
    <div className="card">
      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Passenger</th>
              <th>Route</th>
              <th>Date</th>
              <th>Seat</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>


                       <tr data-status="confirmed">
              <td
                style={{
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829451
              </td>

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

                  <span>Ahmed Khan</span>
                </div>
              </td>

              <td>Lahore → Islamabad</td>
              <td>24 Apr 2025</td>

              <td>
                <strong style={{ color: "#fff" }}>12A</strong>
              </td>

              <td style={{ fontWeight: 800 }}>PKR 2,500</td>

              <td>
                <span className="badge badge-confirmed">Confirmed</span>
              </td>

              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button onClick={()=>{showupdatesetbookingDetail(true)}}
                    className="btn btn-primary btn-sm"
                    data-modal-target="editBookingModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>

                  <button onClick={()=>{showsetbookingDetail(true)}}
                    className="btn btn-secondary btn-sm"
                    data-modal-target="bookingDetailsModal"
                  >
                    <i className="fa-solid fa-eye"></i> View
                  </button>
                </div>
              </td>
            </tr>




            {/* 
            <tr data-status="pending">
              <td
                style={{
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829450
              </td>

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

                  <span>Sara Ali</span>
                </div>
              </td>

              <td>Karachi → Lahore</td>
              <td>24 Apr 2025</td>

              <td>
                <strong style={{ color: "#fff" }}>8C</strong>
              </td>

              <td style={{ fontWeight: 800 }}>PKR 4,200</td>

              <td>
                <span className="badge badge-pending">Pending</span>
              </td>

              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="btn btn-primary btn-sm"
                    data-modal-target="editBookingModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>

                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="bookingDetailsModal"
                  >
                    <i className="fa-solid fa-eye"></i> View
                  </button>
                </div>
              </td>
            </tr>

            <tr data-status="confirmed">
              <td
                style={{
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829449
              </td>

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

                  <span>Bilal Hussain</span>
                </div>
              </td>

              <td>Islamabad → Peshawar</td>
              <td>23 Apr 2025</td>

              <td>
                <strong style={{ color: "#fff" }}>15B</strong>
              </td>

              <td style={{ fontWeight: 800 }}>PKR 1,800</td>

              <td>
                <span className="badge badge-confirmed">Confirmed</span>
              </td>

              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="btn btn-primary btn-sm"
                    data-modal-target="editBookingModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>

                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="bookingDetailsModal"
                  >
                    <i className="fa-solid fa-eye"></i> View
                  </button>
                </div>
              </td>
            </tr>

            <tr data-status="cancelled">
              <td
                style={{
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829448
              </td>

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

                  <span>Ayesha Tariq</span>
                </div>
              </td>

              <td>Lahore → Multan</td>
              <td>23 Apr 2025</td>

              <td>
                <strong style={{ color: "#fff" }}>6D</strong>
              </td>

              <td style={{ fontWeight: 800 }}>PKR 1,800</td>

              <td>
                <span className="badge badge-cancelled">Cancelled</span>
              </td>

              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="btn btn-primary btn-sm"
                    data-modal-target="editBookingModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>

                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="bookingDetailsModal"
                  >
                    <i className="fa-solid fa-eye"></i> View
                  </button>
                </div>
              </td>
            </tr>

            <tr data-status="refunded">
              <td
                style={{
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829446
              </td>

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

                  <span>Zainab Fatima</span>
                </div>
              </td>

              <td>Peshawar → Lahore</td>
              <td>22 Apr 2025</td>

              <td>
                <strong style={{ color: "#fff" }}>14C</strong>
              </td>

              <td style={{ fontWeight: 800 }}>PKR 2,500</td>

              <td>
                <span className="badge badge-refunded">Refunded</span>
              </td>

              <td>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="btn btn-primary btn-sm"
                    data-modal-target="editBookingModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>

                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="bookingDetailsModal"
                  >
                    <i className="fa-solid fa-eye"></i> View
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>

{showupdatebookingDetail && (
  <div className="modal-overlay" id="editBookingModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Update Booking Status & Details
      </h3>

      <button className="modal-close" data-modal-close onClick={()=>{showupdatesetbookingDetail(false)}}>
        &times;
      </button>
    </div>

    <form>
      <div className="form-group">
        <label className="form-label">Booking Reference ID</label>

        <input
          type="text"
          className="form-control"
          defaultValue="GR-829451"
          readOnly
          style={{ opacity: 0.7 }}
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
          <label className="form-label">Passenger Name</label>

          <input
            type="text"
            className="form-control"
            defaultValue="Ahmed Khan"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Assigned Seat</label>

          <input
            type="text"
            className="form-control"
            defaultValue="12A"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Booking Status</label>

        <select className="form-control" defaultValue="confirmed">
          <option value="confirmed">
            Confirmed (Paid & Boarding Ready)
          </option>

          <option value="pending">
            Pending Payment Verification
          </option>

          <option value="cancelled">
            Cancelled by Passenger / Admin
          </option>

          <option value="refunded">
            Refunded to Wallet / JazzCash
          </option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <button type="button" className="btn btn-secondary" data-modal-close onClick={()=>{showupdatesetbookingDetail(false)}}>
          Cancel
        </button>

        <button type="submit" className="btn btn-primary">
          Save Updates
        </button>
      </div>
    </form>
  </div>
</div> 
)}
{/* */}

{/* Booking Details View Modal */}
{showbookingDetail &&(
<div className="modal-overlay" id="bookingDetailsModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Booking Details — GR-829451
      </h3>

      <button className="modal-close" data-modal-close onClick={()=>{showsetbookingDetail(false)}}>
        &times;
      </button>
    </div>

    <div
      style={{
        fontSize: "0.95rem",
        lineHeight: 2,
        color: "var(--text-muted)",
        marginBottom: "1.5rem",
      }}
    >
      <div>
        Passenger:{" "}
        <strong style={{ color: "#fff" }}>
          Ahmed Khan (+92 300 1234567)
        </strong>
      </div>

      <div>
        Route:{" "}
        <strong style={{ color: "#fff" }}>
          Lahore → Islamabad (GoRide Express)
        </strong>
      </div>

      <div>
        Seat Number:{" "}
        <strong style={{ color: "var(--primary)" }}>12A</strong>
      </div>

      <div>
        Date & Time:{" "}
        <strong style={{ color: "#fff" }}>
          24 Apr 2025, 10:30 AM
        </strong>
      </div>

      <div>
        Total Fare:{" "}
        <strong style={{ color: "#34d399" }}>
          PKR 2,500 (Paid via JazzCash)
        </strong>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "1rem",
      }}
    >
      <button className="btn btn-secondary" data-modal-close onClick={()=>{showsetbookingDetail(false)}}>
        Close
      </button>

      <button className="btn btn-primary">
        <i className="fa-solid fa-print"></i> Print Receipt
      </button>
    </div>
  </div>
</div>
)}
</>
  )
}

export default Booking
