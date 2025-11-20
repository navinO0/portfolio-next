"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LightCursorSmooth({
  smoothing = 0, // seconds; set to 0 for exact
}) {
  const cursorRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    el.style.pointerEvents = "none";
    el.classList.add("lc-inner--visible");

    function onMouseMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      // kill previous tiny tween and start a new short one
      if (tweenRef.current) tweenRef.current.kill();
      tweenRef.current = gsap.to(el, {
        x,
        y,
        duration: smoothing,
        ease: "power3.out",
        overwrite: true,
      });
    }

    function onTouchMove(e) {
      if (!(e.touches && e.touches[0])) return;
      const t = e.touches[0];
      if (tweenRef.current) tweenRef.current.kill();
      tweenRef.current = gsap.to(el, {
        x: t.clientX,
        y: t.clientY,
        duration: smoothing,
        ease: "power3.out",
        overwrite: true,
      });
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: true });

    gsap.set(el, { x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [smoothing]);

  return (
    <div
      ref={cursorRef}
      className="lc-inner lc-inner--visible hidden md:block"
      style={{ left: 0, top: 0 }}
      aria-hidden="true"
    />
  );
}
