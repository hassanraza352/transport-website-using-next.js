"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const lahore: [number, number] = [31.5204, 74.3587];
const islamabad: [number, number] = [33.6844, 73.0479];

const busIcon = L.icon({
  iconUrl: "/bus-marker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

function FitRoute({
  route,
}: {
  route: [number, number][];
}) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      map.fitBounds(route as L.LatLngBoundsExpression, {
        padding: [40, 40],
      });
    }
  }, [route, map]);

  return null;
}

export default function LiveMap() {
  const [route, setRoute] = useState<[number, number][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRoute = async () => {
      try {
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${lahore[1]},${lahore[0]};${islamabad[1]},${islamabad[0]}?overview=full&geometries=geojson`
        );

        const data = await response.json();

        if (data.code === "Ok") {
          const coordinates = data.routes[0].geometry.coordinates;

          const leafletCoordinates: [number, number][] =
            coordinates.map(
              ([lng, lat]: [number, number]) => [lat, lng]
            );

          setRoute(leafletCoordinates);
        }
      } catch (error) {
        console.error("Route error:", error);
      } finally {
        setLoading(false);
      }
    };

    getRoute();
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={lahore}
        zoom={7}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {route.length > 0 && (
          <>
            <Polyline
              positions={route}
              pathOptions={{
                color: "#FF8A24",
                weight: 5,
              }}
            />

            <FitRoute route={route} />
          </>
        )}

        <Marker position={lahore}>
          <Popup>
            <strong>Lahore</strong>
            <br />
            Starting Point
          </Popup>
        </Marker>

        <Marker position={islamabad}>
          <Popup>
            <strong>Islamabad</strong>
            <br />
            Destination
          </Popup>
        </Marker>

        {/* Temporary bus location */}
        <Marker
          position={[32.45, 73.72]}
          icon={busIcon}
        >
          <Popup>
            <strong>GoRide Bus</strong>
            <br />
            Lahore → Islamabad
            <br />
            Currently on route
          </Popup>
        </Marker>
      </MapContainer>

      {loading && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1000,
            background: "rgba(13,21,39,0.9)",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "8px",
          }}
        >
          Loading route...
        </div>
      )}
    </div>
  );
}