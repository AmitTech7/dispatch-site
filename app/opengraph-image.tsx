import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { fullAddress, site } from "@/content/site";

export const alt = `${site.name} — co-packing and contract packaging in Brampton, Ontario`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope (not during render) so the image can be prerendered.
const markData = await readFile(join(process.cwd(), "public/images/logo-mark.png"), "base64");
const markSrc = `data:image/png;base64,${markData}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef4fa 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={260} height={260} alt="" style={{ borderRadius: 32 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, color: "#0a3d6b", lineHeight: 1 }}>SOHI</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: "#f26b0f", marginTop: 4 }}>PACKAGING</div>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#6b7280", marginTop: 6 }}>SOLUTIONS INC.</div>
          <div style={{ fontSize: 34, color: "#1f2933", marginTop: 40, maxWidth: 640 }}>
            Co-packing &amp; contract packaging
          </div>
          <div style={{ fontSize: 26, color: "#52606d", marginTop: 8 }}>{fullAddress}</div>
        </div>
      </div>
    ),
    size,
  );
}
