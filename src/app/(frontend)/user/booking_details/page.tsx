import UserHeader from '@/frontendComponents/UserHeader'
import api from '@/utilsFrontend/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Booking_detail() {

  const params = useParams();

  const id = params.id as string;

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooking = async () => {
      try {
        const response = await api.get(`/user/booking/${id}`);

        if (response.status === 200) {
          setBooking(response.data.data);
        }
      } catch (error) {
        console.log("Booking fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getBooking();
    }
  }, [id]);

  if (loading) {
    return <div>Loading ticket...</div>;
  }

  if (!booking) {
    return <div>Ticket not found</div>;
  }

  
  return (
   <>
   <UserHeader/>

    <>
      <main
        className="main-wrapper"
        style={{ padding: "2.5rem 1.5rem" }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}
        >

          {/* Top Title Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                Booking Reference:
              </span>

              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                }}
              >
                GR-829451
              </h1>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <span
                className="badge badge-confirmed"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.5rem 1rem",
                }}
              >
                <i className="fa-solid fa-circle-check"></i>{" "}
                Confirmed & Paid
              </span>

              <button
                className="btn btn-secondary btn-sm"
              >
                <i className="fa-solid fa-print"></i> Print Ticket
              </button>
            </div>
          </div>

          {/* Main Journey Details Card */}
          <div
            className="card"
            style={{
              marginBottom: "2rem",
              background: "var(--bg-card)",
            }}
          >

            {/* Card Header */}
            <div
              style={{
                borderBottom: "1px solid var(--border-color)",
                paddingBottom: "1.25rem",
                marginBottom: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  Lahore{" "}
                  <span style={{ color: "var(--primary)" }}>→</span>{" "}
                  Islamabad
                </h2>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  Express Motorway Service (M-2)
                </p>
              </div>

              <a
                href="/user/route-map"
                className="btn btn-outline btn-sm"
              >
                <i className="fa-solid fa-map-location-dot"></i>{" "}
                View Live Tracking Map
              </a>
            </div>

            {/* Schedule & Stops Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >

              {/* Departure */}
              <div
                style={{
                  background: "var(--bg-input)",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginBottom: "4px",
                  }}
                >
                  <i
                    className="fa-solid fa-plane-departure"
                    style={{ color: "var(--primary)" }}
                  ></i>{" "}
                  Departure Terminal
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: "1.1rem",
                  }}
                >
                  10:30 AM
                </div>

                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  20 September 2025
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#34d399",
                    marginTop: "6px",
                  }}
                >
                  Kalma Chowk Main Terminal, Lahore
                </div>
              </div>

              {/* Arrival */}
              <div
                style={{
                  background: "var(--bg-input)",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginBottom: "4px",
                  }}
                >
                  <i
                    className="fa-solid fa-plane-arrival"
                    style={{ color: "var(--primary)" }}
                  ></i>{" "}
                  Arrival Terminal
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: "1.1rem",
                  }}
                >
                  03:30 PM
                </div>

                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  20 September 2025
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#34d399",
                    marginTop: "6px",
                  }}
                >
                  Faizabad Intercity Terminal, Islamabad
                </div>
              </div>
            </div>

            {/* Passenger & Ticket Specs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
                borderTop: "1px solid var(--border-color)",
                paddingTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >

              {/* Passenger */}
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Passenger Name
                </div>

                <div
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Ahmed Khan
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-dim)",
                  }}
                >
                  +92 300 1234567
                </div>
              </div>

              {/* Seat */}
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Seat Number
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                    fontSize: "1.2rem",
                  }}
                >
                  12A
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-dim)",
                  }}
                >
                  Window Seat
                </div>
              </div>

              {/* Coach */}
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Coach Specs
                </div>

                <div
                  style={{
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  GoRide Express
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-dim)",
                  }}
                >
                  Luxury AC Coach (WiFi & Recliner)
                </div>
              </div>

              {/* Payment */}
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Payment Method
                </div>

                <div
                  style={{
                    fontWeight: 700,
                    color: "#34d399",
                  }}
                >
                  JazzCash Wallet
                </div>

                <div
                  style={{
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  PKR 2,500
                </div>
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                borderTop: "1px dashed var(--border-color)",
                paddingTop: "1.25rem",
              }}
            >
              <a
                href="/user/ticket"
                className="btn btn-primary"
              >
                <i className="fa-solid fa-qrcode"></i>{" "}
                View Boarding QR Ticket
              </a>

              <button
                className="btn btn-secondary"
                style={{
                  borderColor: "#f87171",
                  color: "#f87171",
                }}
              >
                <i className="fa-solid fa-xmark"></i>{" "}
                Request Booking Cancellation
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Cancel Booking Modal */}
{/*       
        <div
          className="modal-overlay active"
      
        >
          <div
            className="modal-container"
          >
            <div className="modal-header">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Cancel Booking — GR-829451
              </h3>

              <button
                className="modal-close"
         
              >
                &times;
              </button>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              Are you sure you want to cancel your journey from
              Lahore to Islamabad? 100% refund of PKR 2,500 will be
              credited back to your JazzCash account within 24 hours.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <button
                className="btn btn-secondary"
              >
                Keep Booking
              </button>

              <button
                className="btn btn-primary"
                style={{ background: "#ef4444" }}
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div> */}
    </>


   
   </>
  )
}

export default Booking_detail
