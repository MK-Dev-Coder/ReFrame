import { useEffect, useRef, useState } from "react";

/* Drag (or use arrow keys on the handle) to compare two layers.
   `left` and `right` can be any full-bleed element — the placeholder
   <Painting/> now, <img className="fill-img"/> later. */

export default function CompareSlider({
  left,
  right,
  leftLabel,
  rightLabel,
  initial = 50,
}) {
  const ref = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(initial);

  const setFromX = (clientX) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const move = (e) => {
      if (dragging.current) setFromX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cmp"
      style={{ touchAction: "none" }}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromX(e.clientX);
      }}
    >
      <div className="cmp-layer">{left}</div>
      <div className="cmp-layer" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        {right}
      </div>
      <div className="cmp-line" style={{ left: `${pos}%` }} aria-hidden="true" />
      <button
        type="button"
        className="cmp-handle"
        style={{ left: `${pos}%` }}
        role="slider"
        aria-label={`Comparison between ${leftLabel} and ${rightLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((x) => Math.max(0, x - 3));
          if (e.key === "ArrowRight") setPos((x) => Math.min(100, x + 3));
          if (e.key === "Home") setPos(0);
          if (e.key === "End") setPos(100);
        }}
      >
        <span aria-hidden="true">‹ ›</span>
      </button>
      <span className="cmp-chip" style={{ left: 12 }}>
        {leftLabel}
      </span>
      <span className="cmp-chip" style={{ right: 12 }}>
        {rightLabel}
      </span>
    </div>
  );
}
