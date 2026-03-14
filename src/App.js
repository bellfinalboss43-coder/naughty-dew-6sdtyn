import React, { useState } from "react";

const lineAddUrl = "https://line.me/ti/p/~merbenz";
const phone = "0993041689";
const logoUrl =
  "https://i.ibb.co/xqcdPhqX/logo-bor-baimai-tra-lo-final-corrected.png";

const imgs = [
  "https://i.ibb.co/Wp7MdtW5/S-67903495.jpg",
  "https://i.ibb.co/Q3TgKSmw/S-67903493.jpg",
  "https://i.ibb.co/C5V1StYX/S-67698707.jpg",
  "https://i.ibb.co/rR1QBcHg/S-67698706.jpg",
  "https://i.ibb.co/hJ4vBNbk/S-67698704.jpg",
  "https://i.ibb.co/tM6cdxyS/S-67698702.jpg",
  "https://i.ibb.co/b5HsM1c4/S-67698700.jpg",
  "https://i.ibb.co/HLw61MyQ/S-67903498.jpg",
  "https://i.ibb.co/b5QZNcF8/S-67903497.jpg",
  "https://i.ibb.co/chZWqMYT/S-67903496.jpg",
];

const Leaf = ({ style }) => (
  <svg viewBox="0 0 60 80" style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 75 C10 55 5 35 15 15 C20 5 30 2 30 2 C30 2 40 5 45 15 C55 35 50 55 30 75Z"
      fill="currentColor"
    />
    <path
      d="M30 75 C30 50 30 25 30 2"
      stroke="rgba(0,0,0,0.2)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M30 40 C20 35 15 28 18 20"
      stroke="rgba(0,0,0,0.15)"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M30 40 C40 35 45 28 42 20"
      stroke="rgba(0,0,0,0.15)"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const LineSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export default function TomShop() {
  const [qty, setQty] = useState(1);
  const [showQR, setShowQR] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const total = 100 * qty;
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(lineAddUrl);

  return (
    <div
      style={{
        fontFamily: "'Sarabun',sans-serif",
        background: "#f7f3ed",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .nav{position:sticky;top:0;z-index:200;background:rgba(8,28,21,0.97);backdrop-filter:blur(14px);padding:0 20px;height:64px;display:flex;align-items:center;justify-content:space-between;}
        .hero{background:linear-gradient(145deg,#081c15 0%,#1b4332 50%,#2d6a4f 100%);padding:48px 20px 80px;position:relative;overflow:hidden;}
        .float{animation:float 4s ease-in-out infinite;}
        .btn-green{display:flex;align-items:center;justify-content:center;gap:10px;padding:16px 28px;border-radius:16px;background:#06C755;color:white;font-family:'Sarabun',sans-serif;font-size:17px;font-weight:700;text-decoration:none;border:none;cursor:pointer;box-shadow:0 6px 24px rgba(6,199,85,0.4);transition:all .2s;width:100%;}
        .btn-green:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(6,199,85,0.5);}
        .qty-btn{width:40px;height:40px;border-radius:50%;border:2px solid #e5e7eb;background:white;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;color:#374151;transition:all .2s;}
        .qty-btn:hover{background:#2d6a4f;border-color:#2d6a4f;color:white;}
        .modal-wrap{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;}
        .modal-bg{position:absolute;inset:0;background:rgba(0,0,0,0.6);}
        .modal-box{position:relative;background:white;width:min(420px,100%);border-radius:28px;padding:32px 28px;animation:slideUp .3s ease;text-align:center;max-height:90vh;overflow-y:auto;}
        .thumb{width:64px;height:64px;border-radius:12px;object-fit:cover;cursor:pointer;transition:all .2s;border:3px solid transparent;flex-shrink:0;}
        .thumb.active{border-color:#2d6a4f;transform:scale(1.05);}
        .thumb:hover{transform:scale(1.05);}
        @media(max-width:600px){
          .hero{padding:32px 16px 64px;}
          .hero-inner{flex-direction:column!important;align-items:center!important;text-align:center;}
          .crow{flex-direction:column!important;}
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={logoUrl}
            alt="โลโก้"
            style={{
              width: 48,
              height: 48,
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
          <div>
            <div
              style={{
                color: "white",
                fontFamily: "Playfair Display,serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.1,
              }}
            >
              บ.ใบไม้ตราโล่
            </div>
            <div
              style={{
                color: "#52b788",
                fontSize: 10,
                letterSpacing: 1.5,
                fontWeight: 600,
              }}
            >
              ใบกระท่อมปัตตานี
            </div>
          </div>
        </div>
        <span
          style={{
            background: "rgba(82,183,136,0.2)",
            color: "#52b788",
            padding: "6px 12px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 700,
            border: "1px solid rgba(82,183,136,0.3)",
          }}
        >
          🟢 พร้อมส่ง 24 ชม.
        </span>
      </nav>

      {/* HERO */}
      <div className="hero">
        <Leaf
          style={{
            position: "absolute",
            top: 10,
            left: "3%",
            width: 65,
            height: 88,
            color: "#52b788",
            opacity: 0.15,
            transform: "rotate(-20deg)",
          }}
        />
        <Leaf
          style={{
            position: "absolute",
            top: 30,
            right: "5%",
            width: 50,
            height: 68,
            color: "#95d5b2",
            opacity: 0.13,
            transform: "rotate(22deg)",
          }}
        />
        <Leaf
          style={{
            position: "absolute",
            bottom: 20,
            right: "18%",
            width: 55,
            height: 75,
            color: "#52b788",
            opacity: 0.12,
            transform: "rotate(-15deg)",
          }}
        />
        <div
          className="hero-inner"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            position: "relative",
            zIndex: 1,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: 260,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(82,183,136,0.15)",
                border: "1px solid rgba(82,183,136,0.3)",
                borderRadius: 40,
                padding: "6px 14px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#52b788",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#95d5b2",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                }}
              >
                ของดีเมืองปัตตานี
              </span>
            </div>
            <h1
              style={{
                fontFamily: "Playfair Display,serif",
                fontStyle: "italic",
                color: "white",
                fontSize: "clamp(30px,5vw,56px)",
                lineHeight: 1.1,
              }}
            >
              บ.ใบไม้ตราโล่
            </h1>
            <h2
              style={{
                fontFamily: "Playfair Display,serif",
                color: "#52b788",
                fontSize: "clamp(15px,2.5vw,24px)",
                fontWeight: 400,
              }}
            >
              ใบกระท่อมคุณภาพ · 3 จังหวัดชายแดนใต้
            </h2>
            <p style={{ color: "#95d5b2", fontSize: 15, lineHeight: 2 }}>
              🌿 รายใหญ่ ใบสดคัดเกรด ไม่ใช้สารเคมี
              <br />
              📦 ปลีก/ส่ง · 🛵 ส่ง 3 จังหวัดชายแดนใต้
              <br />⏰ พร้อมส่ง 24 ชม.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["✅ ของแท้ 100%", "📦 ปลีก/ส่ง", "⚡ พร้อมส่งทันที"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "#d8f3dc",
                      padding: "6px 14px",
                      borderRadius: 40,
                      fontSize: 12,
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
          <div
            className="float"
            style={{ flexShrink: 0, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-20%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(82,183,136,0.3),transparent 70%)",
              }}
            />
            <img
              src={logoUrl}
              alt="โลโก้"
              style={{
                width: 220,
                height: 220,
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 8px 32px rgba(82,183,136,0.4))",
              }}
            />
          </div>
        </div>
      </div>

      {/* WAVE */}
      <div style={{ background: "#1b4332", marginTop: -1 }}>
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 48 }}
        >
          <path
            d="M0,24 C480,56 960,-8 1440,24 L1440,48 L0,48Z"
            fill="#f7f3ed"
          />
        </svg>
      </div>

      {/* PRODUCT */}
      <div
        style={{ maxWidth: 560, margin: "0 auto", padding: "48px 16px 40px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              color: "#6b7280",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            สินค้าของเรา
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display,serif",
              fontStyle: "italic",
              fontSize: 30,
              color: "#1b4332",
            }}
          >
            ใบกระท่อม
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "linear-gradient(90deg,#2d6a4f,#52b788)",
              margin: "10px auto 0",
              borderRadius: 2,
            }}
          />
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{ position: "relative", height: 280, overflow: "hidden" }}
          >
            <img
              src={imgs[activeImg]}
              alt="ใบกระท่อม"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all .4s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom,transparent 60%,rgba(0,0,0,0.4))",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                background: "rgba(110,231,183,0.9)",
                color: "#065f46",
                fontSize: 11,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              ● มีสินค้า
            </span>
            <span
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(0,0,0,0.5)",
                color: "white",
                fontSize: 10,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 20,
              }}
            >
              ⭐ สินค้าเด่น
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "12px 16px",
              background: "#f9f9f9",
              overflowX: "auto",
            }}
          >
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={"รูป " + (i + 1)}
                className={"thumb" + (activeImg === i ? " active" : "")}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>

          <div style={{ padding: "24px 24px 28px" }}>
            <h3
              style={{
                fontFamily: "Playfair Display,serif",
                fontSize: 24,
                color: "#1b4332",
                marginBottom: 4,
              }}
            >
              ใบกระท่อมสด
            </h3>
            <p
              style={{
                color: "#52b788",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              📦 รายใหญ่ ปลีก/ส่ง · 3 จังหวัดชายแดนใต้
            </p>
            <p
              style={{
                color: "#6b7280",
                fontSize: 14,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              คัดใบสวย สดใหม่ทุกวัน ไม่ใช้สารเคมี พร้อมส่ง 24 ชั่วโมง
            </p>

            <div
              style={{
                background: "#f0fdf4",
                borderRadius: 16,
                padding: "16px 20px",
                marginBottom: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 11,
                    fontWeight: 600,
                    marginBottom: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  ราคา
                </p>
                <div
                  style={{ display: "flex", alignItems: "baseline", gap: 4 }}
                >
                  <span
                    style={{ fontSize: 28, fontWeight: 900, color: "#2d6a4f" }}
                  >
                    ฿80-120
                  </span>
                  <span style={{ color: "#9ca3af", fontSize: 13 }}> / กก.</span>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span
                  style={{
                    fontWeight: 900,
                    color: "#1b4332",
                    fontSize: 22,
                    minWidth: 30,
                    textAlign: "center",
                  }}
                >
                  {qty}
                </span>
                <button
                  className="qty-btn"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 22,
                padding: "0 4px",
              }}
            >
              <span style={{ color: "#6b7280", fontSize: 14 }}>
                จำนวน {qty} กิโลกรัม
              </span>
              <span style={{ fontWeight: 900, color: "#1b4332", fontSize: 20 }}>
                ฿{(80 * qty).toLocaleString()} - ฿{(120 * qty).toLocaleString()}
              </span>
            </div>

            <button className="btn-green" onClick={() => setShowQR(true)}>
              <LineSVG /> สั่งซื้อผ่าน LINE
            </button>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 16px 40px" }}>
        <h3
          style={{
            fontFamily: "Playfair Display,serif",
            fontStyle: "italic",
            fontSize: 22,
            color: "#1b4332",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          แกลเลอรี่สินค้า
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 8,
          }}
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "1",
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveImg(i);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
            >
              <img
                src={img}
                alt={"รูป " + (i + 1)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform .3s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 16px 64px" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#1b4332,#2d6a4f)",
            borderRadius: 24,
            padding: "24px",
            boxShadow: "0 8px 32px rgba(27,67,50,0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 6,
            }}
          >
            <img
              src={logoUrl}
              alt="โลโก้"
              style={{
                width: 44,
                height: 44,
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
            <h3
              style={{
                fontFamily: "Playfair Display,serif",
                color: "white",
                fontSize: 18,
              }}
            >
              ติดต่อ บ.ใบไม้ตราโล่
            </h3>
          </div>
          <p
            style={{
              color: "#95d5b2",
              fontSize: 13,
              marginBottom: 16,
              lineHeight: 1.8,
            }}
          >
            📍 ส่ง 3 จังหวัดชายแดนใต้ · ⏰ พร้อมส่ง 24 ชม.
            <br />
            📦 รายใหญ่ ปลีก/ส่ง ยินดีให้บริการ
          </p>
          <div
            className="crow"
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <a
              href={"tel:" + phone}
              style={{
                flex: 1,
                minWidth: 140,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px",
                borderRadius: 12,
                background: "white",
                color: "#1b4332",
                fontFamily: "Sarabun,sans-serif",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              📞 099-304-1689
            </a>
            <a
              href={lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                minWidth: 140,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "12px",
                borderRadius: 12,
                background: "#06C755",
                color: "white",
                fontFamily: "Sarabun,sans-serif",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <LineSVG /> LINE: merbenz
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: "linear-gradient(135deg,#081c15,#1b4332)",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <img
            src={logoUrl}
            alt="โลโก้"
            style={{
              width: 80,
              height: 80,
              objectFit: "contain",
              filter: "drop-shadow(0 4px 12px rgba(82,183,136,0.4))",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Playfair Display,serif",
            fontStyle: "italic",
            color: "white",
            fontSize: 20,
            marginBottom: 4,
          }}
        >
          บ.ใบไม้ตราโล่
        </p>
        <p style={{ color: "#52b788", fontSize: 13, marginBottom: 4 }}>
          ใบกระท่อมคุณภาพ · รายใหญ่ ปลีก/ส่ง
        </p>
        <p style={{ color: "#2d6a4f", fontSize: 12, marginTop: 10 }}>
          📍 ส่ง 3 จังหวัดชายแดนใต้ · ⏰ พร้อมส่ง 24 ชม.
        </p>
        <p style={{ color: "#2d6a4f", fontSize: 11, marginTop: 4 }}>
          📞 099-304-1689 · LINE: merbenz
        </p>
        <p style={{ color: "#1b4332", fontSize: 11, marginTop: 8 }}>
          © 2567 บ.ใบไม้ตราโล่
        </p>
      </div>

      {/* QR MODAL */}
      {showQR && (
        <div className="modal-wrap">
          <div className="modal-bg" onClick={() => setShowQR(false)} />
          <div className="modal-box">
            <button
              onClick={() => setShowQR(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#f3f4f6",
                border: "none",
                width: 32,
                height: 32,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: 16,
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <img
                src={logoUrl}
                alt="โลโก้"
                style={{ width: 72, height: 72, objectFit: "contain" }}
              />
            </div>
            <h3
              style={{
                fontFamily: "Playfair Display,serif",
                fontSize: 20,
                color: "#1b4332",
                marginBottom: 4,
              }}
            >
              แอด LINE บ.ใบไม้ตราโล่
            </h3>
            <p
              style={{
                color: "#6b7280",
                fontSize: 13,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              สแกน QR หรือกดปุ่มด้านล่าง แล้วส่งข้อความสั่งซื้อได้เลยครับ
            </p>
            <div
              style={{
                display: "inline-block",
                padding: 14,
                background: "white",
                borderRadius: 20,
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                border: "3px solid #d1fae5",
                marginBottom: 16,
              }}
            >
              <img
                src={qrUrl}
                alt="QR Code"
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 12,
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                background: "#f0fdf4",
                borderRadius: 12,
                padding: "12px 16px",
                marginBottom: 20,
              }}
            >
              <p style={{ fontSize: 13, color: "#166534", fontWeight: 600 }}>
                🌿 ใบกระท่อม x {qty} กก.
              </p>
              <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                📍 ส่ง 3 จังหวัดชายแดนใต้ · LINE: merbenz
              </p>
            </div>
            <a
              href={lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <LineSVG /> เปิด LINE แอดเพื่อน
            </a>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 12,
                marginTop: 14,
                lineHeight: 1.7,
              }}
            >
              กดแอดแล้วส่งข้อความสั่งซื้อได้เลยครับ รับออเดอร์ตลอด 24 ชั่วโมง
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
