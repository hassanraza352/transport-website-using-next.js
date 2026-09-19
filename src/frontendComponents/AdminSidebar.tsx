import React from 'react'
import Link from 'next/link'

function AdminSidebar() {
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
        <li><Link href="dashboard.html"><i className="fa-solid fa-gauge-high"></i> Dashboard</Link></li>
        <li><Link href="buses.html"><i className="fa-solid fa-bus-simple"></i> Buses Fleet</Link></li>
        <li><Link href="drivers.html"><i className="fa-solid fa-users-gear"></i> Drivers List</Link></li>
        <li><Link href="driver-profile.html"><i className="fa-solid fa-id-card"></i> Driver Profiles</Link></li>
        <li><Link href="routes.html"><i className="fa-solid fa-route"></i> Routes & Map</Link></li>
        <li><Link href="trips.html"><i className="fa-solid fa-calendar-days"></i> Scheduled Trips</Link></li>
        <li><Link href="bookings.html" className="active"><i className="fa-solid fa-ticket"></i> Orders & Bookings</Link></li>
        <li><Link href="users.html"><i className="fa-solid fa-users"></i> Users & Customers</Link></li>
        <li><Link href="reports.html"><i className="fa-solid fa-chart-line"></i> Sales & Analytics</Link></li>
        <li><Link href="settings.html"><i className="fa-solid fa-gear"></i> Settings</Link></li>
      </ul>
    </aside>
    
    
    </>
  )
}

export default AdminSidebar
