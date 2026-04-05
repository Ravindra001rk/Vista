import React from 'react'

const Ctabanner = () => {
  return (
    <section className="px-4 md:px-8 py-10 bg-white">
      <div
        className="relative w-full rounded-3xl overflow-hidden flex items-center justify-center text-center"
        style={{
          background:
            "linear-gradient(135deg, #facc15 0%, #f97316 35%, #ea580c 65%, #f97316 100%)",
          minHeight: "260px",
          padding: "60px 24px",
        }}
      >
        {/* Blob left */}
        <div
          style={{
            position: "absolute",
            left: "-60px",
            top: "-40px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "rgba(251,191,36,0.45)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Blob right */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            bottom: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(220,38,38,0.3)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 5vw, 42px)",
              lineHeight: 1.15,
              color: "#ffffff",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}
          >
            Ready to print smarter,
            <br />
            faster, and cheaper?
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              marginBottom: "32px",
              maxWidth: "440px",
              margin: "0 auto 32px",
            }}
          >
            From bulk ID cards to custom sublimation prints — Vista delivers
            quality work faster than the market standard, at a price that makes
            sense.
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              color: "#ea580c",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              padding: "13px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
            }}
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Ctabanner