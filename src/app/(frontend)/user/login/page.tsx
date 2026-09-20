
"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router=useRouter();

 const FormSubmitted =async (e:React.FormEvent)=>{
   e.preventDefault();
   try {
    const result = await signIn("credentials", {
  email,
  password,
   loginRole: "user",
  redirect: false,
});

if (result?.error) {
 alert("login failed ")
} else {
    router.push("/user");
  alert ("login successfully");
}
    





   } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    alert(error.response?.data?.message || "Registration failed");
  } else {
    alert("Something went wrong");
  }
}

 }
  return (
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
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Sign In to{" "}
              <span style={{ color: "var(--primary)" }}>
                GoRide
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.95rem",
              }}
            >
              Access your booked tickets, live motorway route tracking &
              profile history.
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

        {/* Right Side Form */}
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
              Sign In
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              Enter your email & password to continue access
            </p>
          </div>

          <form onSubmit={FormSubmitted}>
            {/* Email */}
            <div className="form-group">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />
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

                <Link
                  href="/user/forgot-password"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--primary)",
                  }}
                >
                  Forgot?
                </Link>
              </div>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
            >
              Sign In{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          {/* Social Divider */}
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
              or Connect with Social Media
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

          {/* Social Connections */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >

            <Link
              href="/user"
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
              Sign In with Google
            </Link>

            <Link
              href="/user"
              className="btn btn-facebook"
              style={{
                width: "100%",
                padding: "0.65rem",
                fontSize: "0.9rem",
              }}
            >
              <i className="fa-brands fa-facebook-f"></i>{" "}
              Sign In with Facebook
            </Link>

          </div>

          {/* Sign Up */}
          <div
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/user/signup"
              style={{
                color: "var(--primary)",
                fontWeight: 700,
              }}
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
