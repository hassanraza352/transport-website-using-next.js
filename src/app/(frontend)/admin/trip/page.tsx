'use client'

import AdminSidebar from '@/frontendComponents/AdminSidebar'
import React, { useEffect, useState } from 'react'
import api from '@/utilsFrontend/axios';
type Bus = {
  _id:string
  registrationNumber:string,
  busModel:string,
  totalSeat:number,
  coachType:string
}

type Routes = {
  _id: string;
  Routename: string;
  startLocation: string;
  endLocation: string;
  RouteDirection: string;
};

type Driver = {
  _id:string
  name:string,
  cnicNO:string,
  LicenseNO:string,
  profilePic:string,
  phoneNO:string
}
type Trip = {
  _id:string,
  departureDate: string;
  arrivalTime: string;
  departureTime: string;
  fare: number;
  driver: string;
  bus: string;
  route: string;
};

function Trip() {
const [showSheduleTrip,setshowSheduleTrip]=useState(false);
const [busRoutes,setbusRoutes]=useState<Routes[]>([]);
const [buses,setbuses]=useState<Bus[]>([]);
const [drivers,setdrivers]=useState<Driver[]>([]);

const [AllTrips,setAllTrips]=useState<Trip[]>([]);


const[departureDate,setdepartureDate]=useState("");
const [departureTime,setdepartureTime]=useState("");
const [arrivalTime,setarrivalTime]=useState("");
const [fare,setfare]=useState("");
const [driver,setdriver]=useState("");
const [bus,setbus]=useState("");
const [route,setroute]=useState("");


const handleOnsubmit=async (e:React.FormEvent)=>{
   e.preventDefault();
try {
  const response=await api.post("/admin/trip",{
    departureDate,arrivalTime
    ,departureTime,fare,
    driver,
    bus,
    route
  })
  if(response.status===200){
    alert("trip created successfully")
    setshowSheduleTrip(false);
    setdepartureDate("");
    setdepartureTime("");
    setarrivalTime("");
    setfare("");
    setdriver("");
    setbus("");
    setroute("");
  }
  else{
    console.log("error in trip",response.data.message)
  }

} catch (error) {
  console.log("error in creating trip",error);
  alert("failed to creat a trip")
}
}

 const GetDrivers=async()=>{
    try{
      const response=await api.get("/admin/driver")
      if(response.data.success===true){
        setdrivers(response.data.data)
      }
      else
        console.log("Error fetching drivers:",response.data.message)
    }
    catch(error){
      console.log("error in getting drivers",error)
    }
  }

    const fetchAllRoutes = async () => {
      try {
        const response = await api.get("/admin/route");
        if (response.status === 200) {
          setbusRoutes(response.data.data);
        } else {
          console.error("Error fetching routes:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

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
   getAllBuses();
  fetchAllRoutes();
  GetDrivers();
    }
  ,[])
  const GetAllTips=async ()=>{
try {
  const response=await api.get("/admin/trip");
  if(response?.status===200){
       setAllTrips(response?.data?.data)
  }
  else{
  console.log("error  in getting trips response")
  }
} catch (error) {
  console.log("error  in getting all trips")
}
  }

    useEffect(() => {
     GetAllTips()
},[]);

  useEffect(() => {
  if (busRoutes.length > 0) {
    setroute(busRoutes[0].Routename);
  }
}, [busRoutes]);

useEffect(() => {
  if (drivers.length > 0) {
    setdriver(drivers[0].name);
  }
}, [drivers]);

useEffect(() => {
  if (buses.length > 0) {
    setbus(buses[0].busModel);
  }
}, [buses]);




  return (
    <>
    <div className="admin-layout">
  <AdminSidebar />

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
            Scheduled Trips
          </h1>

          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            Manage daily coach departure schedules, timing & pricing
          </p>
        </div>
      </div>

      <button onClick={() => setshowSheduleTrip(true)}
        className="btn btn-primary"
        data-modal-target="createTripModal"
      >
        <i className="fa-solid fa-plus"></i> Schedule New Trip
      </button>
    </header>

    <div style={{ padding: "2rem" }}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Daily Trip Schedules</h3>

          <input
            type="text"
            className="form-control"
            placeholder="Search route or trip ID..."
            style={{ width: "260px" }}
          />
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Trip ID</th>
                <th>Origin & Destination</th>
                <th>Departure / Arrival</th>
                <th>Assigned Coach</th>
                <th>Assigned Driver</th>
                <th>Available Seats</th>
                <th>Fare Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {AllTrips.map((trip)=>{
                return(
   <tr key={trip?._id}>
                <td
                  style={{
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  TR-{(trip._id).slice(length-5,length-1)}
                </td>

                <td>
                  <strong>{trip?.route?.Routename}</strong>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                   {trip?.route?.RouteDirection}
                  </div>
                </td>

                <td>  {trip?.departureTime} → {trip?.arrivalTime}</td>

                <td>{trip?.bus?.busModel}</td>

                <td>{trip?.driver?.name}</td>

                <td>
                  <span
                    style={{
                      color: "#34d399",
                      fontWeight: 700,
                    }}
                  >
                    14 / 45
                  </span>
                </td>

                <td style={{ fontWeight: 700 }}>
                  PKR {trip?.fare}
                </td>

                <td>
                  <span className="badge badge-ontime">
                    Scheduled
                  </span>
                </td>

                <td>
                  <button
                    className="btn btn-secondary btn-sm"
                    data-modal-target="createTripModal"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                    Update
                  </button>
                </td>
              </tr>
                )
              })}
           

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Create / Schedule Trip Detailed Form Modal */}
{showSheduleTrip && (
 <div className="modal-overlay" id="createTripModal">
  <div className="modal-container">
    <div className="modal-header">
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        Schedule Intercity Bus Trip
      </h3>

      <button className="modal-close" data-modal-close onClick={()=>{setshowSheduleTrip(false)}}>
        &times;
      </button>
    </div>

    <form onSubmit={handleOnsubmit}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >


        <div className="form-group">
          <label className="form-label">
          Routes Available
          </label>

          <select  value={route} onChange={(e)=>{setroute(e.target.value)}}
          
            className="form-control"
            >   
            {busRoutes?.map((route)=>{
              return (
                   <option value={route?.Routename} key={route?._id}>
               {route?.Routename}
            </option>
              )
            })}


          </select>

        </div>
         <div className="form-group">
          <label className="form-label">
            Departure Date
          </label>

          <input
            value={departureDate}
            onChange={(e)=>{setdepartureDate(e.target.value)}}
            type="Date"
            className="form-control"
            required
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Departure Time
          </label>

          <input
           value={departureTime}
            onChange={(e)=>{setdepartureTime(e.target.value)}}
            type="time"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Estimated Arrival Time
          </label>

          <input
           value={arrivalTime}
            onChange={(e)=>{setarrivalTime(e.target.value)}}
            type="time"
            className="form-control"
            required
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Assign Bus Coach
          </label>

          <select
  className="form-control"
  value={bus}
  onChange={(e) => setbus(e.target.value)}
>
  {buses.map((bus) => {
    return (
      <option value={bus?.busModel} key={bus?._id}>
        {bus?.busModel}
      </option>
    );
  })}
</select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Assign Certified Driver
          </label>

          <select value={driver} onChange={((e)=>{setdriver(e.target.value)})}
            className="form-control"
          >
            {drivers.map((driver)=>{
              return(
                 <option value={driver?.name} key={driver?._id}>
              {driver?.name}
            </option>
              )
            })}
  
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div className="form-group">
          <label className="form-label">
            Ticket Fare Per Seat (PKR)
          </label>

          <input
           value={fare}
            onChange={(e)=>{setfare(e.target.value)}}
            type="number"
            className="form-control"
            placeholder='2400'
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Rest Stop Area
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Bhera Service Area (20 Mins Stopover)"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <button onClick={()=>{setshowSheduleTrip(false)}}
          type="button"
          className="btn btn-secondary"
          data-modal-close
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Schedule Trip
        </button>
      </div>
    </form>
  </div>
</div> 
)}

    </>
  )
}

export default Trip
