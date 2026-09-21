"use client";

import AdminSidebar from "@/frontendComponents/AdminSidebar";
import api from "@/utilsFrontend/axios";
import React, { useEffect, useState } from "react";
type Bus = {
  _id:string
  registrationNumber:string,
  busModel:string,
  totalSeat:number,
  coachType:string
}

function BusesPage() {
  const [showAddBus, setShowAddBus] = useState(false);
  const [showAddDriver, setShowAddDriver] = useState(false);
  const [registrationNumber,setregistrationNumber]=useState("");
   const [busModel,setbusModel]=useState("");
  const [totalSeat,settotalSeat]=useState("");
  const [coachType,setcoachType]=useState("Luxury");
  const [buses,setbuses]=useState<Bus[]>([])



  const getAllBuses=async ()=>{
    try{
      const response=await api.get("/admin/bus")
      console.log("chala code ",response)
      if(response.data.success===true){
        setbuses(response.data.data)
      }
      else
        console.log("Error fetching buses:",response.data.message)
    }
    catch(error){
      console.log("error in getting buses",error)
    }

  }


  useEffect(()=>{
getAllBuses()
  }
,[])
 

  // Form Submit Handlers
  const handleBusSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
   try {
     const response=await api.post("/admin/bus",{
      registrationNumber,
      busModel,
      totalSeat,
      coachType
    })
    if(response?.data?.success){
      alert("Bus created successfully")

      getAllBuses();
      setShowAddBus(false)
      setregistrationNumber("")
      setbusModel("")
      settotalSeat("")
      setcoachType("")
      
    }
    else
    {
      console.log("error in creating a bus",response?.data?.message)
    }
    
   } catch (error) {
    console.log("error in creating a bus",error)
   }
  };

  const handleDriverSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Add your driver assignment logic here
    setShowAddDriver(false);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="sidebar-toggle-btn">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div>
              <h1
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                Bus Fleet Management
              </h1>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Manage intercity luxury coaches, routes and driver assignments
              </p>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => setShowAddBus(true)}>
            <i className="fa-solid fa-plus"></i> Add New Bus
          </button>
        </header>

        <div style={{ padding: "2rem" }}>
          {/* Fleet Stats Cards */}
          <div className="stats-grid">
            <div className="card stat-card">
              <div className="stat-label">Total Fleet</div>
              <div className="stat-value">24</div>
              <div className="stat-trend positive">
                <i className="fa-solid fa-bus"></i> Active Coaches
              </div>
            </div>

            <div className="card stat-card">
              <div className="stat-label">On Route Right Now</div>
              <div className="stat-value" style={{ color: "var(--primary)" }}>
                18
              </div>
              <div className="stat-trend positive">
                <i className="fa-solid fa-route"></i> Travelling Motorways
              </div>
            </div>

            <div className="card stat-card">
              <div className="stat-label">In Maintenance</div>
              <div className="stat-value" style={{ color: "#fbbf24" }}>
                3
              </div>
              <div className="stat-trend negative">
                <i className="fa-solid fa-wrench"></i> Terminal Depot
              </div>
            </div>
          </div>

          {/* Bus Table Card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Registered Fleet Buses</h3>

              <div style={{ display: "flex", gap: "1rem" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search bus number or model..."
                  style={{ width: "260px" }}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Bus Number</th>
                    <th>Model / Specs</th>
                    <th>Capacity</th>
                    <th>Primary Route</th>
                    <th>Assigned Driver</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {buses.map((bus)=>{
                    return(
                        <tr key={bus?._id}>
                    <td style={{ fontWeight: 800, color: "#fff" }}>{bus?.registrationNumber}</td>
                    <td>{bus?.busModel} {bus?.coachType}</td>
                    <td>{bus?.totalSeat} Seats</td>
                    <td>Lahore → Multan</td>
                    <td>
                      <span style={{ color: "var(--text-dim)", fontStyle: "italic" }}>
                        Unassigned
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-pending">Depot Service</span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => setShowAddDriver(true)}>
                        <i className="fa-solid fa-user-plus"></i> Assign Driver
                      </button>
                    </td>
                  </tr>
                    )
                  })}

                  {/* Bus 1 */}
                  {/* <tr>
                    <td style={{ fontWeight: 800, color: "#fff" }}>LES-8821</td>
                    <td>Yutong Master Coach (2024)</td>
                    <td>45 Seats</td>
                    <td>Lahore → Islamabad</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                          className="avatar"
                          style={{ width: "28px", height: "28px" }}
                          alt="Tariq Mahmood"
                        />
                        <span>Tariq Mahmood</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-active">On Route</span>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => setShowAddDriver(true)}>
                        <i className="fa-solid fa-user-gear"></i> Assign Driver
                      </button>{" "}
                      <a href="/admin/driver-profile" className="btn btn-outline btn-sm">
                        <i className="fa-solid fa-eye"></i> Driver Info
                      </a>
                    </td>
                  </tr>

                  {/* Bus 2 */}
                  {/* <tr>
                    <td style={{ fontWeight: 800, color: "#fff" }}>KHI-4902</td>
                    <td>Daewoo BH116 Executive</td>
                    <td>40 Seats</td>
                    <td>Karachi → Lahore</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                          className="avatar"
                          style={{ width: "28px", height: "28px" }}
                          alt="Rashid Ali"
                        />
                        <span>Rashid Ali</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-active">On Route</span>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => setShowAddDriver(true)}>
                        <i className="fa-solid fa-user-gear"></i> Assign Driver
                      </button>{" "}
                      <a href="/admin/driver-profile" className="btn btn-outline btn-sm">
                        <i className="fa-solid fa-eye"></i> Driver Info
                      </a>
                    </td>
                  </tr> */}

                  {/* Bus 3 */}
                  {/* <tr>
                    <td style={{ fontWeight: 800, color: "#fff" }}>ISL-7711</td>
                    <td>Yutong Sleeper Special</td>
                    <td>30 Berths</td>
                    <td>Peshawar → Islamabad</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                          className="avatar"
                          style={{ width: "28px", height: "28px" }}
                          alt="Kamran Shah"
                        />
                        <span>Kamran Shah</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-confirmed">Available</span>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => setShowAddDriver(true)}>
                        <i className="fa-solid fa-user-gear"></i> Assign Driver
                      </button>{" "}
                      <a href="/admin/driver-profile" className="btn btn-outline btn-sm">
                        <i className="fa-solid fa-eye"></i> Driver Info
                      </a>
                    </td>
                  </tr> */}

                  {/* Bus 4 */}
                  {/* <tr>
                    <td style={{ fontWeight: 800, color: "#fff" }}>MUL-3320</td>
                    <td>Daewoo Express Luxury</td>
                    <td>45 Seats</td>
                    <td>Lahore → Multan</td>
                    <td>
                      <span style={{ color: "var(--text-dim)", fontStyle: "italic" }}>
                        Unassigned
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-pending">Depot Service</span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => setShowAddDriver(true)}>
                        <i className="fa-solid fa-user-plus"></i> Assign Driver
                      </button>
                    </td>
                  </tr>  */}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Bus Modal */}
      {showAddBus && (
        <div className="modal-overlay" id="addBusModal">
          <div className="modal-container">
            <div className="modal-header">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>
                Register New Bus Coach
              </h3>
              <button className="modal-close" onClick={() => setShowAddBus(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleBusSubmit}>
              <div className="form-group">
                <label className="form-label">Bus Registration Number</label>
                <input value={registrationNumber} onChange={(e)=>{setregistrationNumber(e?.target?.value)}} type="text" className="form-control" placeholder="e.g. LHR-9922" required />
              </div>

              <div className="form-group">
                <label className="form-label">Bus Model & Manufacturer</label>
                <input value={busModel} onChange={(e)=>{setbusModel(e?.target?.value)}} type="text" className="form-control" placeholder="e.g. Yutong Master Coach 2025" required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Total Seats Capacity</label>
                  <input value={totalSeat} onChange={(e)=>{settotalSeat(e?.target?.value)}} type="number" className="form-control"  required />
                </div>

                <div className="form-group">
                  <label className="form-label">Coach Type</label>
                  <select className="form-control" value={coachType} onChange={(e)=>{setcoachType(e.target.value)}}>
                    <option value="Luxury">Luxury AC Coach</option>
                    <option value="Executive">Executive Lounge</option>
                    <option value="Sleeper">Sleeper Coach</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary Assigned Route</label>
                <select className="form-control">
                  <option>Lahore → Islamabad</option>
                  <option>Karachi → Lahore</option>
                  <option>Peshawar → Islamabad</option>
                  <option>Lahore → Multan</option>
                </select>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1.5rem" }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddBus(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Register Bus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assign Driver Modal */}
      {showAddDriver && (
        <div className="modal-overlay" id="assignDriverModal">
          <div className="modal-container">
            <div className="modal-header">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>
                Assign Driver to Bus
              </h3>
              <button className="modal-close" onClick={() => setShowAddDriver(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleDriverSubmit}>
              <div className="form-group">
                <label className="form-label">Select Licensed HTV Driver</label>
                <select className="form-control" defaultValue="1">
                  <option value="1">Tariq Mahmood (License: HTV-PK-88271)</option>
                  <option value="2">Rashid Ali (License: HTV-PK-99120)</option>
                  <option value="3">Kamran Shah (License: HTV-PK-33821)</option>
                  <option value="4">Zubair Ahmed (License: HTV-PK-55219)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Shift Duration & Timing</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="08:00 AM - 04:00 PM (8 Hours Shift)"
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1.5rem" }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAddDriver(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusesPage;


