import React from 'react'
import Link from 'next/link'


function UserHeader() {
  return (
      <header className="app-header">

        <Link href="/" className="brand-logo">
          <i className="fa-solid fa-bus"></i>
          Go<span className="highlight">Ride</span>
        </Link>

        <ul className="nav-links">

          <li>
            <Link href="/" className="active">
              Home
            </Link>
          </li>

          <li>
            <Link href="/search">
              Routes & Buses
            </Link>
          </li>

          <li>
            <Link href="/route-map">
              Live Map
            </Link>
          </li>

          <li>
            <Link href="/about">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>

        </ul>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >

          <Link
            href="/user/profile"
            className="btn btn-secondary btn-sm"
          >
            <i className="fa-solid fa-user"></i>
            My Profile
          </Link>

          <Link
            href="/admin/dashboard"
            className="btn btn-outline btn-sm"
          >
            <i className="fa-solid fa-shield-halved"></i>
            Admin Portal
          </Link>

        </div>

        <button className="mobile-menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>

      </header>
  )
}

export default UserHeader
