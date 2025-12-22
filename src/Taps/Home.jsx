import React, { useEffect, useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
  Video,
  Radio,
  Globe,
  Code,
  Palette,
  Settings,
  Mic,
  Camera
} from "lucide-react";

export const Home = () => {
  const iRef = useRef(null);
  const oRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05
        },
        "-=0.6"
      )
      .then(() => animateMic())
      .then(() => animateCamera());

    /* ===== MIC ICON FOR i ===== */
    const animateMic = () => {
      const el = iRef.current;
      if (!el) return;

      el.innerHTML = "";

      const mic = document.createElement("span");
      mic.className = "letter-icon";
      el.appendChild(mic);

      // Render Lucide icon
      mic.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
      </svg>`;

      return gsap.timeline()
        .fromTo(
          mic,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        )
        .to(mic, { duration: 0.3 })
        .to(mic, { opacity: 0, duration: 0.4 })
        .then(() => {
          el.innerHTML = "i";
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        });
    };

    /* ===== CAMERA ICON FOR O ===== */
    const animateCamera = () => {
      const el = oRef.current;
      if (!el) return;

      el.innerHTML = "";

      const cam = document.createElement("span");
      cam.className = "letter-icon";
      el.appendChild(cam);

      cam.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>`;

      return gsap.timeline()
        .fromTo(
          cam,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .to(cam, { duration: 0.3 })
        .to(cam, { opacity: 0, duration: 0.4 })
        .then(() => {
          el.innerHTML = "o";
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        });
    };

    /* ===== FLOATING ICONS ===== */
    gsap.to(".float-top", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut"
    });

    gsap.to(".float-bottom", {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 4.5,
      ease: "sine.inOut"
    });

    /* ===== SUBTITLE LOOP ===== */
    gsap.set(".hero-subtitle", { text: "Branding that performs" });
    const phrases = [
      "Branding that performs",
      "Design that resonates",
      "Strategy that wins"
    ];

    const tlText = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    phrases.forEach(t => {
      tlText.to(".hero-subtitle", { duration: 1.2, text: t });
    });

  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">

        <div className="icons icons-top">
          <Video className="icon float-top" />
          <Radio className="icon float-top" />
          <Palette className="icon float-top" />
        </div>

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
            <span ref={oRef} className="fade-letter">o</span>
          </span>
        </h1>

        <p className="hero-subtitle"></p>

        <div className="icons icons-bottom">
          <Globe className="icon float-bottom" />
          <Code className="icon float-bottom" />
          <Settings className="icon float-bottom" />
        </div>
      </div>
    </section>
  );
};
