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
          Platform Settings
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          System configuration, payment gateways & security
        </p>
      </div>
    </header>

    <div style={{ padding: "2rem" }}>
      <div
        className="card"
        style={{ maxWidth: "800px" }}
      >
        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          General Platform Configuration
        </h2>

        <form>
          <div className="form-group">
            <label className="form-label">
              Platform Name
            </label>

            <input
              type="text"
              className="form-control"
              defaultValue="GoRide - Pakistan Intercity Bus Booking Platform"
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
                Support Helpline
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue="+92 42 111 467 433"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Support Email
              </label>

              <input
                type="email"
                className="form-control"
                defaultValue="support@goride.pk"
              />
            </div>
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#fff",
              margin: "2rem 0 1rem 0",
            }}
          >
            Payment Gateway Credentials
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div className="form-group">
              <label className="form-label">
                JazzCash Merchant ID
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue="JC-992019481"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                EasyPaisa Store ID
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue="EP-338210491"
              />
            </div>
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#fff",
              margin: "2rem 0 1rem 0",
            }}
          >
            Automated Notifications
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* SMS Tickets */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong
                  style={{
                    color: "#fff",
                    display: "block",
                  }}
                >
                  Send Instant SMS Tickets
                </strong>

                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Send SMS with booking code & seat details upon payment
                </span>
              </div>

              <input
                type="checkbox"
                defaultChecked
                style={{
                  accentColor: "var(--primary)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>

            {/* Driver Dispatch Alerts */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--border-color)",
                paddingTop: "1rem",
              }}
            >
              <div>
                <strong
                  style={{
                    color: "#fff",
                    display: "block",
                  }}
                >
                  Driver Dispatch Alerts
                </strong>

                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Notify drivers 1 hour before departure time
                </span>
              </div>

              <input
                type="checkbox"
                defaultChecked
                style={{
                  accentColor: "var(--primary)",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "right",
            }}
          >
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Changes{" "}
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div></>
  )
}

export default page
