import UserHeader from '@/frontendComponents/UserHeader'
import React from 'react'

function Contact() {
  return (
  <>
  <UserHeader/>

    <main
      className="main-wrapper"
      style={{ padding: "3rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Page Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
            }}
          >
            24/7 Customer Support & Terminal Locations Across Pakistan
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Contact Form */}
          <div className="card">
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Send Us a Message
            </h2>

            <form>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ahmed Khan"
                  required
                />
              </div>

              {/* Phone / Email */}
              <div className="form-group">
                <label className="form-label">
                  Phone Number / Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="+92 300 1234567"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">
                  Message / Inquiry
                </label>

                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="How can we help you with your booking?"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Submit Message{" "}
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          {/* Terminal Locations */}
          <div className="card">
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Major City Terminals
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              {/* Lahore */}
              <div>
                <strong style={{ color: "#fff" }}>
                  <i
                    className="fa-solid fa-building"
                    style={{ color: "var(--primary)" }}
                  ></i>{" "}
                  Lahore Main Terminal:
                </strong>

                <div>
                  Kalma Chowk Intercity Bus Stand, Ferozepur Road,
                  Lahore
                </div>
              </div>

              {/* Islamabad */}
              <div
                style={{
                  borderTop:
                    "1px solid var(--border-color)",
                  paddingTop: "0.75rem",
                }}
              >
                <strong style={{ color: "#fff" }}>
                  <i
                    className="fa-solid fa-building"
                    style={{ color: "var(--primary)" }}
                  ></i>{" "}
                  Islamabad Faizabad Terminal:
                </strong>

                <div>
                  Faizabad Interchange Terminal, I-8/4, Islamabad
                </div>
              </div>

              {/* Karachi */}
              <div
                style={{
                  borderTop:
                    "1px solid var(--border-color)",
                  paddingTop: "0.75rem",
                }}
              >
                <strong style={{ color: "#fff" }}>
                  <i
                    className="fa-solid fa-building"
                    style={{ color: "var(--primary)" }}
                  ></i>{" "}
                  Karachi Sohrab Goth Terminal:
                </strong>

                <div>
                  Super Highway Terminal, Sohrab Goth, Karachi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>



  
  </>
  )
}

export default Contact
