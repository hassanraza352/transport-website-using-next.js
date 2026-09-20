
"use client";

import React, { useState } from "react";
import Link from "next/link";
import api from "@/utilsFrontend/axios";
import { useRouter } from "next/navigation";
import axios from "axios";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNO, setPhone] = useState("");
  const [password, setPassword] = useState("");

    const router=useRouter();

  const submitted = async (e:React.FormEvent) => {
     e.preventDefault();
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
      phoneNO,
    });

    if (response.data.success) {
      alert("Registration successful");
      
      // login page par bhej sakte ho
      router.push("/user/login");
    } else {
      alert(response.data.message);
    }

  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    alert(error.response?.data?.message || "Registration failed");
  } else {
    alert("Something went wrong");
  }
}


};
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
              Join{" "}
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
              Create your passenger account for instant luxury bus
              reservations across Pakistan.
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

          <div style={{ marginBottom: "1.25rem" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "0.25rem",
              }}
            >
              Create Account
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
              }}
            >
              Enter your details to register as a passenger
            </p>
          </div>

          <form  onSubmit={submitted}>

            {/* Full Name */}
            <div
              className="form-group"
              style={{ marginBottom: "1rem" }}
            >
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Ahmed Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email + Phone */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >

              <div
                className="form-group"
                style={{ marginBottom: 0 }}
              >
                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="ahmed@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div
                className="form-group"
                style={{ marginBottom: 0 }}
              >
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="+92 300 1234567"
                  value={phoneNO}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

            </div>

            {/* Password */}
            <div
              className="form-group"
              style={{ marginBottom: "1rem" }}
            >
              <label className="form-label">
                Create Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Create Account */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                fontSize: "1rem",
              }}
            >
              Create Account{" "}
              <i className="fa-solid fa-user-plus"></i>
            </button>

          </form>

          {/* Social Divider */}
          <div
            style={{
              textAlign: "center",
              margin: "1.25rem 0 0.75rem 0",
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
              or Sign Up with Social Media
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

          {/* Social Buttons */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
            }}
          >

            <Link
              href="/user"
              className="btn btn-google"
              style={{
                flex: 1,
                padding: "0.65rem",
                fontSize: "0.85rem",
              }}
            >
              <i
                className="fa-brands fa-google"
                style={{ color: "#ea4335" }}
              ></i>{" "}
              Google
            </Link>

            <Link
              href="/user"
              className="btn btn-facebook"
              style={{
                flex: 1,
                padding: "0.65rem",
                fontSize: "0.85rem",
              }}
            >
              <i className="fa-brands fa-facebook-f"></i>{" "}
              Facebook
            </Link>

          </div>

          {/* Sign In */}
          <div
            style={{
              textAlign: "center",
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            Already have an account?{" "}

            <Link
              href="/user/login"
              style={{
                color: "var(--primary)",
                fontWeight: 700,
              }}
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Signup
