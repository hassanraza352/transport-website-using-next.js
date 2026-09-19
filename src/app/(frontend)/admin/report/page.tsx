import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React from 'react'

function page() {
  return (
    <>
    
    
    <div className="admin-layout">
  <AdminSidebar />

  {/* Main */}
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
          Profit & Sales Analytics
        </h1>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          Track your revenue, operating costs and overall profitability
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <select
          className="form-control"
          defaultValue="This Year"
          style={{
            padding: "0.4rem 0.85rem",
            fontSize: "0.85rem",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <option>This Year</option>
          <option>This Quarter</option>
          <option>This Month</option>
        </select>

        <button className="btn btn-primary btn-sm">
          <i className="fa-solid fa-file-pdf"></i> Download Report
        </button>
      </div>
    </header>

    <div style={{ padding: "2rem" }}>
      {/* Financial Metrics Grid */}
      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Gross Sales</div>

          <div
            className="stat-value"
            style={{ color: "var(--primary)" }}
          >
            PKR 24.8M
          </div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-arrow-trend-up"></i> +18.6%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last year
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Operating Cost</div>

          <div
            className="stat-value"
            style={{ color: "#f87171" }}
          >
            PKR 18.4M
          </div>

          <div className="stat-trend negative">
            <i className="fa-solid fa-arrow-trend-up"></i> +12.3%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last year
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Net Profit</div>

          <div
            className="stat-value"
            style={{ color: "#34d399" }}
          >
            PKR 6.4M
          </div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-arrow-trend-up"></i> +22.1%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last year
            </span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Profit Margin</div>

          <div
            className="stat-value"
            style={{ color: "#c084fc" }}
          >
            25.8%
          </div>

          <div className="stat-trend positive">
            <i className="fa-solid fa-arrow-trend-up"></i> +4.2%{" "}
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
            >
              vs. last year
            </span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {/* Sales Overview Line Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Sales Overview</h3>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                fontSize: "0.8rem",
              }}
            >
              <span style={{ color: "var(--primary)" }}>
                <i className="fa-solid fa-circle"></i> Sales
              </span>

              <span style={{ color: "#34d399" }}>
                <i className="fa-solid fa-circle"></i> Profit
              </span>
            </div>
          </div>

          <div style={{ height: "320px" }}>
            <canvas id="salesOverviewChart"></canvas>
          </div>
        </div>

        {/* Bookings by Route Bar Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Bookings by Route</h3>
          </div>

          <div style={{ height: "320px" }}>
            <canvas id="bookingsByRouteChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default page
