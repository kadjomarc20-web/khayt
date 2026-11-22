import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Maison Fassi — sac en cuir cognac cousu main à Fès";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/images/hero-cognac.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 75% 40%, #5a2a12 0%, #120d0a 60%)",
          color: "#f5ede3",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: 700 }}>
          <div style={{ fontSize: 28, color: "#e8834a" }}>{site.name}</div>
          <div style={{ fontSize: 72, lineHeight: 1.05, marginTop: 20 }}>Le cuir de Fès, cousu à la main.</div>
          <div style={{ fontSize: 26, color: "#b9a898", marginTop: 28 }}>Maroquinerie artisanale · commande sur WhatsApp</div>
        </div>
        <img src={src} alt="" width={504} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
