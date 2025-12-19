import React, { useEffect, useRef } from "react";
import "./home.css";
import gsap from "gsap";
import {
  Video,
  Radio,
  Globe,
  Code,
  Palette,
  Settings
} from "lucide-react";

export const Home = () => {
  const iRef = useRef(null);

  useEffect(() => {
    /* ===== TITLE ANIMATION ===== */
    gsap.timeline()
      .fromTo(
        ".spin-letter",
        { rotateX: -180, opacity: 0, scale: 0.8 },
        {
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          stagger: 0.15
        }
      )
      .fromTo(
        ".fade-letter",
        { opacity: 0, y: 30, rotateY: -10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05
        },
        "-=0.6"
      )
      .then(() => {
        /* ===== MIC ANIMATION FOR "I" AFTER TITLE ===== */
        const el = iRef.current;
        if (!el) return;

        // Change to Mic icon SVG
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`;

        // Animate: Come from bottom, rotate, then change to text
        gsap.timeline()
          .fromTo(el, { y: 50, opacity: 1 }, { y: 0, duration: 1, ease: "power2.out" })
          .to(el, {
            rotation: 360,
            duration: 2,
            ease: "power2.inOut"
          })
          .then(() => {
            // Change back to "i"
            el.innerHTML = 'i';
            gsap.set(el, { rotation: 0 }); // Reset rotation
          });
      });

    /* ===== FLOATING ICONS ===== */
    gsap.to(".float-top", {
      y: -20,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    gsap.to(".float-bottom", {
      y: 20,
      rotation: -5,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* TOP ICONS */}
        <div className="icons icons-top">
          <Video className="icon float-top" />
          <Radio className="icon float-top" />
          <Palette className="icon float-top" />
        </div>

        {/* TITLE */}
        <h1 className="hero-title">
          <span className="word">
            <span className="spin-letter">M</span>
            <span className="fade-letter">e</span>
            <span className="fade-letter">d</span>
            <span ref={iRef} className="spin-letter">i</span>
            <span className="fade-letter">a</span>
            <span className="fade-letter">M</span>
            <span className="fade-letter">a</span>
            <span className="fade-letter">t</span>
            <span className="fade-letter">i</span>
            <span className="fade-letter">c</span>
          </span>
          <br />
          <span className="word">
            <span className="fade-letter">S</span>
            <span className="fade-letter">t</span>
            <span className="fade-letter">u</span>
            <span className="fade-letter">d</span>
            <span className="fade-letter">i</span>
            <span className="fade-letter">o</span>
          </span>
        </h1>

        {/* BOTTOM ICONS */}
        <div className="icons icons-bottom">
          <Globe className="icon float-bottom" />
          <Code className="icon float-bottom" />
          <Settings className="icon float-bottom" />
        </div>
      </div>
    </section>
  );
};