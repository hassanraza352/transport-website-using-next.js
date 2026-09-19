import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/component/providers/SessionProvider";

export const metadata: Metadata = {
  title: "GoRide",
  description: "GoRide Transport Management System",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}