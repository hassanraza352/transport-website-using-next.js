'use client'
import UserHeader from '@/frontendComponents/UserHeader'
import api from '@/utilsFrontend/axios';
import React, { useEffect, useState } from 'react'

type Routes = {
  _id: string;
  Routename: string;
  startLocation: string;
  endLocation: string;
  RouteDirection: string;
};
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

function Search() {

const [busRoutes,setbusRoutes]=useState<Routes[]>([]);
const [route,setroute]=useState("");
const [date, setDate] = useState("");
const [trips, setTrips] = useState<Trip[]>([]);
console.log("trips are",trips);
console.log("date is ",date)


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


       const GetAllTips=async ()=>{
      try {
        const response=await api.get("/admin/trip");
        if(response?.status===200){
             setTrips(response?.data?.data)
        }
        else{
        console.log("error  in getting trips response")
        }
      } catch (error) {
        console.log("error  in getting all trips")
      }
        }
  
  useEffect(()=>{
  fetchAllRoutes();
GetAllTips();
    }
  ,[])

    useEffect(() => {
    if (busRoutes.length > 0) {
      setroute(busRoutes[0].Routename);
    }
  }, [busRoutes]);

  
  const handleSubmit=async()=>{
   try {
    const response = await api.get(
      `/admin/trip/route?routeName=${route}&date=${date}`
    );

    if (response.status === 200) {
      setTrips(response.data.data);
    }
  } catch (error) {
    console.error("Error fetching trips:", error);
  }
  }

  return (


  <>
    <UserHeader/>


    <main
      className="main-wrapper"
      style={{ padding: "2rem 1.5rem" }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top Search Form Bar */}
        <div
          className="card"
          style={{
            marginBottom: "2rem",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--text-muted)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            FIND YOUR BUS
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
            }}
          >
            Search Buses
          </h2>

          <form
            className="search-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr)) auto",
              gap: "1rem",
              alignItems: "end",
            }}
          >

            {/* To */}
            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >
              <label className="form-label">
                <i
                  className="fa-solid fa-location-arrow"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
              Route Name
              </label>

              <select className="form-control"  value={route} onChange={(e)=>{setroute(e.target.value)}}>
                {busRoutes?.map((route)=>{
              return (
                   <option value={route?.Routename} key={route?._id}>
               {route?.Routename}
            </option>
              )
            })}
              </select>
            </div>

            {/* Date */}
            <div
              className="form-group"
              style={{ marginBottom: 0 }}
            >
              <label className="form-label">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "var(--primary)" }}
                ></i>{" "}
                Date
              </label>

              <input
               value={date}
                type="date"
                className="form-control"
                onChange={(e)=>{setDate(e.target.value)}}    
               />
            </div>

            <button onClick={handleSubmit}
              type="button"
              className="btn btn-primary"
              style={{ height: "48px" }}>

              Search Buses{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

        {/* Results Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
            }}
          >
            Available trips
          </h3>

          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
            }}
          >
            {trips?.length} results found
          </span>
        </div>

        {/* Bus Listings */}
      < div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
             >
          {trips?.map((trip)=>{
           return(
             <div key={trip?._id}
            className="card"
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80"
                alt="Bus Interior"
                style={{
                  width: "160px",
                  height: "110px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                    }}
                  >
                    {trip?.bus?.busModel}
                  </h3>

                  <span className="badge badge-confirmed">
                    {trip?.route?.Routename}-{trip?.route?.RouteDirection}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {trip?.bus?.coachType} • Wi-Fi • Recliner Seats
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    color: "var(--text-main)",
                    fontSize: "0.95rem",
                  }}
                >
                  <div>
                    <i
                      className="fa-regular fa-clock"
                      style={{ color: "var(--primary)" }}
                    ></i>{" "}
                    <strong>{trip?.departureTime} - {trip?.arrivalTime}</strong>
                  </div>

                  <div style={{ color: "var(--text-muted)" }}>
                    <i className="fa-solid fa-route"></i> 5h duration
                  </div>

                  <div
                    style={{
                      color: "#34d399",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fa-solid fa-couch"></i>{" "}
                    14/{trip?.bus?.totalSeat} seats available
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                textAlign: "right",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                Per Person
              </div>

              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                PKR {trip?.fare}
              </div>

            <a
 href={`/user/seatSelection?tripId=${trip._id}`}
   className="btn btn-primary"
  style={{ width: "100%" }}
>
  View Details{" "}
  <i className="fa-solid fa-arrow-right"></i>
</a>

            </div>
          </div>
           )
          })}



        </div>
      </div>
    </main>


  </>
  )
}

export default Search
