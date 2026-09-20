
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="welcome-split-container">
        <div className="welcome-split-card">

          {/* Left Side */}
          <div className="welcome-left-brand">

            <div
              className="brand-logo"
              style={{ fontSize: "2rem" }}
            >
              <i className="fa-solid fa-bus"></i>{" "}
              Go<span className="highlight">Ride</span>
            </div>

            <div>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "0.75rem",
                }}
              >
                Welcome to{" "}
                <span style={{ color: "var(--primary)" }}>
                  GoRide
                </span>
              </h1>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  maxWidth: "320px",
                }}
              >
                Pakistan&apos;s next-gen intercity bus booking & real-time
                operations platform.
              </p>
            </div>

            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--text-dim)",
              }}
            >
              <i
                className="fa-solid fa-shield-halved"
                style={{
                  color: "#34d399",
                  marginRight: "6px",
                }}
              ></i>

              Verified & Secure Travel System
            </div>
          </div>

          {/* Right Side */}
          <div className="welcome-right-form">

            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                Get Started
              </h2>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Sign in to continue or select your portal
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >

              {/* User Sign In */}
              <Link
                href="/user/login"
                className="btn btn-secondary"
                style={{
                  padding: "1rem",
                  fontSize: "1.05rem",
                  width: "100%",
                }}
              >
                <i className="fa-solid fa-user"></i>{" "}
                User Sign In / Register

                <i
                  className="fa-solid fa-chevron-right"
                  style={{ marginLeft: "auto" }}
                ></i>
              </Link>

              {/* Admin Portal */}
              <Link
                href="/admin/login"
                className="btn btn-outline"
                style={{
                  padding: "1rem",
                  fontSize: "1.05rem",
                  width: "100%",
                }}
              >
                <i className="fa-solid fa-shield-halved"></i>{" "}
                Admin Portal Login

                <i
                  className="fa-solid fa-lock"
                  style={{ marginLeft: "auto" }}
                ></i>
              </Link>

            </div>

            {/* Google Login */}
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Or connect with social account
              </p>

              <Link
                href="/user"
                className="btn btn-google"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                }}
              >
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#ea4335" }}
                ></i>{" "}
                Continue with Google
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
