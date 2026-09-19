'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function UserHeader() {
  const path=usePathname();
  return (
      <header className="app-header">

        <Link href="/user" className={`brand-logo ${path==="/user/" ? "active":""}`} >
          <i className="fa-solid fa-bus"></i>
          Go<span className="highlight">Ride</span>
        </Link>

        <ul className="nav-links">

          <li>
            <Link href="/user" className={path==="/user" ? "active":""}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/user/search" className={path==="/user/search" ? "active":""}>
              Routes & Buses
            </Link>
          </li>

          <li>
            <Link href="/user/map" className={path==="/user/map" ? "active":""}>
              Live Map
            </Link>
          </li>

          <li>
            <Link href="user/about" className={path==="/user/about" ? "active":""}>
              About
            </Link>
          </li>

          <li>
            <Link href="/user/contactUs" className={path==="/user/contactUs" ? "active":""}>
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
  className={`btn btn-secondary btn-sm ${
    path === "/user/profile" ? "active" : ""
  }`}
>
            <i className="fa-solid fa-user"></i>
            My Profile
          </Link>

        </div>

        <button className="mobile-menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>

      </header>
  )
}

export default UserHeader
