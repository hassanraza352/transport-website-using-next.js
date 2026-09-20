
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";



function AdminLogin() {
 
  const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
 const router=useRouter();

const FormSubmitted = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const result = await signIn("credentials", {
      email,
      password,
       loginRole: "admin",
      redirect: false,
    });

    if (result?.error) {
      alert("Login failed");
    } else {
      alert("Login successful");
      router.push("/admin");
    }
  } catch (error: unknown) {
    console.log(error);
    alert("Something went wrong");
  }
};
  return (
    <div className="welcome-split-container">
      <div className="welcome-split-card">

        {/* Left Side */}
        <div
          className="welcome-left-brand"
          style={{
            background:
              "linear-gradient(135deg, #0d1527 0%, #0f1c36 100%), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80') center/cover no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <div
            className="brand-logo"
            style={{ fontSize: "2rem" }}
          >
            <i className="fa-solid fa-bus"></i>{" "}
            Go<span className="highlight">Ride</span>
          </div>

          <div>
            <div
              className="badge badge-active"
              style={{
                marginBottom: "1rem",
                borderRadius: "50px",
              }}
            >
              <i className="fa-solid fa-shield-halved"></i>{" "}
              Admin Control Panel
            </div>

            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Admin Portal{" "}
              <span style={{ color: "var(--primary)" }}>
                Access
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
              }}
            >
              Manage daily intercity bus schedules, driver
              assignments, sales analytics & live motorway tracking.
            </p>
          </div>

          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--text-dim)",
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--primary)" }}
            >
              <i className="fa-solid fa-arrow-left"></i>{" "}
              Back to Welcome
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="welcome-right-form">

          <div style={{ marginBottom: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "0.25rem",
              }}
            >
              Admin Sign In
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              Sign in to your platform admin account
            </p>
          </div>

          <form onSubmit={FormSubmitted}>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">
                Admin Email Address
              </label>

              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="admin@goride.pk"
                  style={{ paddingLeft: "2.5rem" }}
                  required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />

                <i
                  className="fa-regular fa-envelope"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "14px",
                    color: "var(--text-muted)",
                  }}
                ></i>
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <label
                  className="form-label"
                  style={{ marginBottom: 0 }}
                >
                  Password
                </label>

                <a
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--primary)",
                  }}
                >
                  Forgot password?
                </a>
              </div>

              <div style={{ position: "relative" }}>
                <input
                  type="password"
                  className="form-control"
                  style={{ paddingLeft: "2.5rem" }}
                  required
                   placeholder="********"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}

                />

                <i
                  className="fa-solid fa-lock"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "14px",
                    color: "var(--text-muted)",
                  }}
                ></i>
              </div>
            </div>

            {/* Remember Device */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <input
                  type="checkbox"
                  id="remember-admin"
                  defaultChecked
                  style={{ accentColor: "var(--primary)" }}
                />

                <label
                  htmlFor="remember-admin"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Remember this device
                </label>
              </div>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
              }}
            >
              Sign In to Admin Portal{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          {/* SSO Divider */}
          <div
            style={{
              textAlign: "center",
              margin: "1.5rem 0 1rem 0",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "var(--bg-card)",
                padding: "0 10px",
                position: "relative",
                zIndex: 2,
              }}
            >
              or Sign In with SSO
            </span>

            <div
              style={{
                height: "1px",
                background: "var(--border-color)",
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
              }}
            ></div>
          </div>

          {/* Google SSO */}
          <a
            href="/admin/dashboard"
            className="btn btn-google"
            style={{
              width: "100%",
              padding: "0.65rem",
              fontSize: "0.9rem",
            }}
          >
            <i
              className="fa-brands fa-google"
              style={{ color: "#ea4335" }}
            ></i>{" "}
            Continue with Admin Google Workspace
          </a>

          {/* Security Message */}
          <div
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "0.8rem",
              color: "var(--text-dim)",
            }}
          >
            <i
              className="fa-solid fa-lock"
              style={{
                color: "#34d399",
                marginRight: "4px",
              }}
            ></i>{" "}
            Encrypted admin session
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

