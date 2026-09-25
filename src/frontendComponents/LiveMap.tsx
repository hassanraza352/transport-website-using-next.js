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

import "leaflet/dist/leaflet.css";
import L from "leaflet";
const startIcon = L.icon({
  iconUrl: "/map/start.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const viaIcon = L.icon({
  iconUrl: "/map/via.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const destinationIcon = L.icon({
  iconUrl: "/map/destination.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});





type Props = {
  startLocation: string;
  endLocation: string;
  via: string;
};

type Coordinate = [number, number];

function FitRoute({
  route,
}: {
  route: Coordinate[];
}) {
  const map = useMap();

  useEffect(() => {
    if (route.length > 0) {
      map.fitBounds(route, {
        padding: [40, 40],
      });
    }
  }, [route, map]);

  return null;
}

export default function LiveMap({
  startLocation,
  endLocation,
  via,
}: Props) {
  const [route, setRoute] = useState<Coordinate[]>([]);

  const [startCoordinate, setStartCoordinate] =
    useState<Coordinate | null>(null);

  const [endCoordinate, setEndCoordinate] =
    useState<Coordinate | null>(null);

  const [viaCoordinate, setViaCoordinate] =
    useState<Coordinate | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const getRoute = async () => {
      try {
        setLoading(true);
        setError("");

        // -------------------------
        // 1. START LOCATION
        // -------------------------

        const cleanStart = startLocation.trim();

        const startResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=pk&q=${encodeURIComponent(
            cleanStart + ", Pakistan"
          )}`
        );

        const startData = await startResponse.json();

        if (!startData.length) {
          throw new Error(
            `Start location "${cleanStart}" not found`
          );
        }

        const startLat = Number(startData[0].lat);
        const startLon = Number(startData[0].lon);

        const start: Coordinate = [
          startLat,
          startLon,
        ];

        setStartCoordinate(start);

        // -------------------------
        // 2. END LOCATION
        // -------------------------

        const cleanEnd = endLocation.trim();

        const endResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=pk&q=${encodeURIComponent(
            cleanEnd + ", Pakistan"
          )}`
        );

        const endData = await endResponse.json();

        if (!endData.length) {
          throw new Error(
            `End location "${cleanEnd}" not found`
          );
        }

        const endLat = Number(endData[0].lat);
        const endLon = Number(endData[0].lon);

        const end: Coordinate = [
          endLat,
          endLon,
        ];

        setEndCoordinate(end);

        // -------------------------
        // 3. VIA LOCATION
        // -------------------------

        const cleanVia = via.trim();

        const viaResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=pk&q=${encodeURIComponent(
            cleanVia + ", Pakistan"
          )}`
        );

        const viaData = await viaResponse.json();

        if (!viaData.length) {
          throw new Error(
            `Via location "${cleanVia}" not found`
          );
        }

        const viaLat = Number(viaData[0].lat);
        const viaLon = Number(viaData[0].lon);

        const viaPoint: Coordinate = [
          viaLat,
          viaLon,
        ];

        setViaCoordinate(viaPoint);

        // -------------------------
        // 4. OSRM ROUTE
        // START → VIA → END
        // -------------------------

        const routeResponse = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${viaPoint[1]},${viaPoint[0]};${end[1]},${end[0]}?overview=full&geometries=geojson&steps=true`
        );

        const routeData = await routeResponse.json();

        if (routeData.code !== "Ok") {
          throw new Error("Road route not found");
        }

        const coordinates =
          routeData.routes[0].geometry.coordinates;

        const leafletCoordinates: Coordinate[] =
          coordinates.map(
            ([lng, lat]: [number, number]) => [
              lat,
              lng,
            ]
          );

        setRoute(leafletCoordinates);

        console.log("Route:", routeData);
        console.log("Via:", cleanVia);
      } catch (error) {
        console.error("Map error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load route"
        );
      } finally {
        setLoading(false);
      }
    };

    if (
      startLocation &&
      endLocation &&
      via
    ) {
      getRoute();
    }
  }, [
    startLocation,
    endLocation,
    via,
  ]);

  // -------------------------
  // LOADING
  // -------------------------

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1527",
          color: "#fff",
        }}
      >
        Loading route...
      </div>
    );
  }

  // -------------------------
  // ERROR
  // -------------------------

  if (error) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1527",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {error}
      </div>
    );
  }

  // -------------------------
  // MAP
  // -------------------------

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {startCoordinate &&
        endCoordinate && (
          <MapContainer
            center={startCoordinate}
            zoom={7}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* ROUTE */}

            {route.length > 0 && (
              <>
                <Polyline
                  positions={route}
                  pathOptions={{
                    color: "#FF8A24",
                    weight: 5,
                  }}
                />

                <FitRoute
                  route={route}
                />
              </>
            )}

            {/* START */}

           <Marker
  position={startCoordinate}
  icon={startIcon}
>
              <Popup>
                <strong>
                  {startLocation}
                </strong>

                <br />

                Starting Point
              </Popup>
            </Marker>

            {/* VIA */}

            {viaCoordinate && (
             <Marker
  position={viaCoordinate}
  icon={viaIcon}
>
                <Popup>
                  <strong>
                    {via}
                  </strong>

                  <br />

                  Via Point
                </Popup>
              </Marker>
            )}

            {/* END */}

            <Marker
              position={endCoordinate}
              icon={destinationIcon}
            >
              <Popup>
                <strong>
                  {endLocation}
                </strong>

                <br />

                Destination
              </Popup>
            </Marker>
          </MapContainer>
        )}
    </div>
  );
}