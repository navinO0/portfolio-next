import React, { useEffect, useRef } from "react";

// StarfieldCanvas.jsx
// Drop this file into your Next.js project (e.g. components/StarfieldCanvas.jsx)
// Usage: import StarfieldCanvas from '@/components/StarfieldCanvas'; then wrap your page content inside it:
// <StarfieldCanvas>
//   <main>Your page content (clickable/hoverable) goes here</main>
// </StarfieldCanvas>

const STAR_COLOR = "#ffffffa1";
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;

export default function StarfieldCanvas({ children }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // mutable state stored in refs so we can access within animation loop
  const starsRef = useRef([]);
  const velocityRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 });
  const pointerRef = useRef({ x: null, y: null });
  const touchInputRef = useRef(false);
  const scaleRef = useRef(1);
  const sizeRef = useRef({ width: 0, height: 0 });

  // helper to compute STAR_COUNT dynamically
  const getStarCount = () => {
    // fallback if window not available
    if (typeof window === "undefined") return 200;
    // return Math.round((window.innerWidth + window.innerHeight) / 8);
    return 100
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // initialize
    function generate() {
      const STAR_COUNT = getStarCount();
      starsRef.current = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        starsRef.current.push({ x: 0, y: 0, z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE) });
      }
    }

    function placeStar(star) {
      star.x = Math.random() * sizeRef.current.width;
      star.y = Math.random() * sizeRef.current.height;
    }

    function recycleStar(star) {
      let direction = "z";
      const vx = Math.abs(velocityRef.current.x);
      const vy = Math.abs(velocityRef.current.y);

      if (vx > 1 || vy > 1) {
        let axis;
        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
        if (axis === "h") {
          direction = velocityRef.current.x > 0 ? "l" : "r";
        } else {
          direction = velocityRef.current.y > 0 ? "t" : "b";
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      const width = sizeRef.current.width;
      const height = sizeRef.current.height;

      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "r") {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "t") {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === "b") {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scaleRef.current = window.devicePixelRatio || 1;
      sizeRef.current.width = window.innerWidth * scaleRef.current;
      sizeRef.current.height = window.innerHeight * scaleRef.current;

      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;

      // place stars after resize
      starsRef.current.forEach(placeStar);
    }

    function update() {
      const v = velocityRef.current;
      v.tx *= 0.96;
      v.ty *= 0.96;

      v.x += (v.tx - v.x) * 0.8;
      v.y += (v.ty - v.y) * 0.8;

      const width = sizeRef.current.width;
      const height = sizeRef.current.height;

      starsRef.current.forEach((star) => {
        star.x += v.x * star.z;
        star.y += v.y * star.z;

        star.x += (star.x - width / 2) * v.z * star.z;
        star.y += (star.y - height / 2) * v.z * star.z;
        star.z += v.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      ctx.clearRect(0, 0, sizeRef.current.width, sizeRef.current.height);

      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineWidth = STAR_SIZE * star.z * scaleRef.current;
        ctx.globalAlpha = 0.5 + 0.5 * Math.random();
        ctx.strokeStyle = STAR_COLOR;

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);

        let tailX = velocityRef.current.x * 2;
        let tailY = velocityRef.current.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        ctx.lineTo(star.x + tailX, star.y + tailY);
        ctx.stroke();
      });
    }

    function step() {
      update();
      render();
      animationRef.current = requestAnimationFrame(step);
    }

    function movePointer(x, y) {
      const p = pointerRef.current;
      if (typeof p.x === "number" && typeof p.y === "number") {
        const ox = x - p.x;
        const oy = y - p.y;
        const touch = touchInputRef.current;
        const s = scaleRef.current;
        velocityRef.current.tx = velocityRef.current.tx + (ox / (8 * s)) * (touch ? 1 : -1);
        velocityRef.current.ty = velocityRef.current.ty + (oy / (8 * s)) * (touch ? 1 : -1);
      }
      p.x = x;
      p.y = y;
    }

    function onMouseMove(e) {
      touchInputRef.current = false;
      movePointer(e.clientX, e.clientY);
    }

    function onTouchMove(e) {
      // IMPORTANT: do NOT call preventDefault() here. That blocks native scrolling on mobile.
      touchInputRef.current = true;
      // Use the first touch point to allow parallax while keeping scrolling native.
      if (e.touches && e.touches[0]) {
        movePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    }

    function onMouseLeave() {
      pointerRef.current.x = null;
      pointerRef.current.y = null;
    }

    // initialize flow
    generate();
    resize();
    window.addEventListener("resize", resize);

    // Listen to pointer movement on window so the canvas doesn't capture events and block UI.
    window.addEventListener("mousemove", onMouseMove);
    // Use passive: true for touchmove so the browser can continue native scrolling.
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseLeave);
    document.addEventListener("mouseleave", onMouseLeave);

    // start animation
    step();

    // cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseLeave);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // We purposely set pointer-events-none on the canvas wrapper and canvas so underlying UI remains clickable.
  // Children are rendered inside an overlay container with pointer-events-auto and higher z-index.
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      {/* Overlay slot for your page content - clickable and hoverable */}
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
}
