"use client";

import dynamic from "next/dynamic";

const LiveMap = dynamic(
  () => import("./LiveMap"),
  {
    ssr: false,

    loading: () => (
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
        Loading map...
      </div>
    ),
  }
);

type Props = {
  startLocation: string;
  endLocation: string;
  via: string;
};

export default function LiveMapWrapper({
  startLocation,
  endLocation,
  via,
}: Props) {
  return (
    <LiveMap
      startLocation={startLocation}
      endLocation={endLocation}
      via={via}
    />
  );
}