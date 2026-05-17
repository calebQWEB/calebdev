import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Caleb Ochai | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#030712",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#7C3AED",
          marginBottom: "40px",
          borderRadius: "2px",
        }}
      />

      {/* Greeting */}
      <p
        style={{
          color: "#7C3AED",
          fontSize: "24px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Software Engineer
      </p>

      {/* Name */}
      <h1
        style={{
          color: "#ffffff",
          fontSize: "80px",
          fontWeight: "bold",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        Caleb <span style={{ color: "#7C3AED" }}>Ochai</span>
      </h1>

      {/* Tagline */}
      <p
        style={{
          color: "#9ca3af",
          fontSize: "28px",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        Building full-stack web applications with React, Next.js, Laravel &
        Python.
      </p>

      {/* Bottom — URL */}
      <p
        style={{
          position: "absolute",
          bottom: "80px",
          right: "80px",
          color: "#4b5563",
          fontSize: "20px",
          fontFamily: "monospace",
        }}
      >
        calebdev-mu.vercel.app
      </p>
    </div>,
    { ...size },
  );
}
