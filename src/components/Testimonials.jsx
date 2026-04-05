import { useState, useRef, useCallback, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Operations Head",
    color: "#f97316",
    initials: "AM",
    stars: 5,
    text: "Delivered 300 student ID cards within 2 days — faster than any vendor we've used before. The print quality is sharp, colors vibrant. We've found a reliable long-term partner.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    color: "#0ea5e9",
    initials: "PS",
    stars: 5,
    text: "We ordered bulk office ID cards with custom lanyards. The turnaround was incredible — 48 hours! Pricing is very competitive compared to the market, and quality is top-notch. Highly recommend.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "HR Manager",
    color: "#8b5cf6",
    initials: "RV",
    stars: 5,
    text: "Custom sublimation T-shirts for our company event looked amazing. The colors didn't fade even after multiple washes. Great communication throughout the order. Will definitely order again.",
  },
  {
    id: 4,
    name: "Kavya Nair",
    role: "Event Coordinator",
    color: "#10b981",
    initials: "KN",
    stars: 5,
    text: "Ordered personalised mugs and photo frames for a corporate gifting event. Everything was delivered on time and beautifully packed. Clients absolutely loved them. 10/10 service!",
  },
  {
    id: 5,
    name: "Suraj Thakur",
    role: "School Principal",
    color: "#ec4899",
    initials: "ST",
    stars: 5,
    text: "Needed 500 staff and student IDs urgently. Everything was handled with zero hassle. The digital lanyard printing was a great touch. Hands down the best printing service around.",
  },
];

const CARD_WIDTH = 360;
const CARD_GAP = 24;
const CARD_TOTAL = CARD_WIDTH + CARD_GAP;

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f97316", fontSize: "15px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const total = testimonials.length;
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollX: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const getOffset = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 0;
    const center = wrapper.offsetWidth / 2;
    return center - CARD_TOTAL * active - CARD_WIDTH / 2;
  }, [active]);

  useEffect(() => {
    setTranslateX(getOffset());
  }, [active, getOffset]);

  useEffect(() => {
    const handleResize = () => setTranslateX(getOffset());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getOffset]);

  const goTo = (idx) => {
    setActive(Math.max(0, Math.min(total - 1, idx)));
  };

  const onPointerDown = (clientX) => {
    dragRef.current = { isDragging: true, startX: clientX, scrollX: 0 };
    setIsDragging(true);
    setNoTransition(true);
  };

  const onPointerMove = (clientX) => {
    if (!dragRef.current.isDragging) return;
    const delta = clientX - dragRef.current.startX;
    dragRef.current.scrollX = delta;
    setDragDelta(delta);
  };

  const onPointerUp = () => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    setIsDragging(false);
    setNoTransition(false);
    const delta = dragRef.current.scrollX;
    if (Math.abs(delta) > 50) goTo(delta < 0 ? active + 1 : active - 1);
    setDragDelta(0);
  };

  const finalX = translateX + dragDelta;

  return (
    <section
      className="bg-white overflow-hidden flex items-center justify-center"
      style={{ padding: "80px 16px", minHeight: "600px" }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-3">
              Testinomial
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-black max-w-2xl">
              <span className="block">Trusted by</span>
              <span className="block text-gray-400">Our Clients</span>
            </h2>
          </div>

          <div className="md:max-w-sm">
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-600">
              From bulk ID cards to custom sublimation prints — hear what our
              clients say about Vista's speed, quality, and reliability.
            </p>
          </div>
        </div>

        {/* Track */}
        <div
          ref={wrapperRef}
          style={{
            overflow: "hidden",
            padding: "32px 0",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(e) => onPointerDown(e.clientX)}
          onMouseMove={(e) => onPointerMove(e.clientX)}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
          onTouchEnd={onPointerUp}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(${finalX}px)`,
              transition: noTransition
                ? "none"
                : "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
              willChange: "transform",
            }}
          >
            {testimonials.map((t, i) => {
              const isActive = i === active;
              const isSide = Math.abs(i - active) === 1;
              return (
                <div
                  key={t.id}
                  onClick={() => !isDragging && goTo(i)}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    width: `${CARD_WIDTH}px`,
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "28px",
                    border: isActive
                      ? "1.5px solid #f97316"
                      : "1.5px solid #ebebeb",
                    boxShadow: isActive
                      ? "0 20px 60px rgba(249,115,22,0.12), 0 4px 16px rgba(0,0,0,0.06)"
                      : "none",
                    transform: isActive
                      ? "translateY(-6px) scale(1.02)"
                      : isSide
                        ? "scale(0.96)"
                        : "scale(0.9)",
                    opacity: isActive ? 1 : isSide ? 0.5 : 0.2,
                    transition: "all 0.4s ease",
                    zIndex: isActive ? 10 : 1,
                    cursor: isActive ? "grab" : "pointer",
                    userSelect: "none",
                  }}
                >
                  {/* Quote ghost */}
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                      fontFamily: "Georgia, serif",
                      fontSize: "56px",
                      lineHeight: 1,
                      color: "#f97316",
                      opacity: 0.18,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    "
                  </span>

                  <Stars count={t.stars} />

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.75",
                      color: "#555555",
                      marginBottom: "24px",
                    }}
                  >
                    "{t.text}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: t.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          fontSize: "15px",
                          color: "#111111",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          color: "#999999",
                          marginTop: "2px",
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          <ArrowBtn
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            direction="left"
          />

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  height: "8px",
                  width: i === active ? "24px" : "8px",
                  borderRadius: "4px",
                  background: i === active ? "#f97316" : "#d1d5db",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <ArrowBtn
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}

function ArrowBtn({ onClick, disabled, direction }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border:
          hovered && !disabled ? "1.5px solid #f97316" : "1.5px solid #e5e5e5",
        background: hovered && !disabled ? "#f97316" : "#ffffff",
        color: hovered && !disabled ? "#ffffff" : "#333333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "all 0.2s ease",
        flexShrink: 0,
      }}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}
