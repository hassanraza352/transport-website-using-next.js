"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminSidebar() {
   const path = usePathname();
  return (
    
    <>
     <aside className="admin-sidebar">
      <div className="sidebar-header">
        <div className="brand-logo">
          <i className="fa-solid fa-bus"></i> Go<span className="highlight">Ride</span>
        </div>
        <button className="sidebar-close-btn">&times;</button>
      </div>
      <ul className="sidebar-menu">
      <li>
        <Link
          href="/admin"
          className={path === "/admin" ? "active" : ""}
        >
          <i className="fa-solid fa-gauge-high"></i> Dashboard
        </Link>
      </li>

      <li>
        <Link
          href="/admin/bus"
          className={path === "/admin/bus" ? "active" : ""}
        >
          <i className="fa-solid fa-bus-simple"></i> Buses Fleet
        </Link>
      </li>

      <li>
        <Link
          href="/admin/drivers"
          className={path === "/admin/drivers" ? "active" : ""}
        >
          <i className="fa-solid fa-users-gear"></i> Drivers List
        </Link>
      </li>

      <li>
        <Link
          href="/admin/driverProfile"
          className={path === "/admin/driverProfile" ? "active" : ""}
        >
          <i className="fa-solid fa-id-card"></i> Driver Profiles
        </Link>
      </li>

      <li>
        <Link
          href="/admin/route"
          className={path === "/admin/route" ? "active" : ""}
        >
          <i className="fa-solid fa-route"></i> Routes & Map
        </Link>
      </li>

      <li>
        <Link
          href="/admin/trip"
          className={path === "/admin/trip" ? "active" : ""}
        >
          <i className="fa-solid fa-calendar-days"></i> Scheduled Trips
        </Link>
      </li>

      <li>
        <Link
          href="/admin/booking"
          className={path === "/admin/booking" ? "active" : ""}
        >
          <i className="fa-solid fa-ticket"></i> Orders & Bookings
        </Link>
      </li>

      <li>
        <Link
          href="/admin/user"
          className={path === "/admin/user" ? "active" : ""}
        >
          <i className="fa-solid fa-users"></i> Users & Customers
        </Link>
      </li>

      <li>
        <Link
          href="/admin/report"
          className={path === "/admin/report" ? "active" : ""}
        >
          <i className="fa-solid fa-chart-line"></i> Sales & Analytics
        </Link>
      </li>

      <li>
        <Link
          href="/admin/setting"
          className={path === "/admin/setting" ? "active" : ""}
        >
          <i className="fa-solid fa-gear"></i> Settings
        </Link>
      </li>
    </ul>
    </aside>


    
    
    
    </>
  )
}

export default AdminSidebar
