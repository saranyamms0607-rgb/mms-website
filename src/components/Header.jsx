import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/mediamatic-logo.png";

export const Header = ({ active = "home", onNavigate = () => {} }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleClick = (tab) => {
    setOpen(false);

    if (tab === "home") {
      onNavigate("home");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
      return;
    }

    if (active === "home") {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    if (active !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.getElementById(tab);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const close = (e) => {
      if (
        open && 
        navRef.current && 
        hamburgerRef.current &&
        !navRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo-wrap" onClick={() => handleClick("home")}>
          <img src={logo} alt="MediaMatic Studio" />
        </div>

        {/* NAV */}
        <nav ref={navRef} className={`nav ${open ? "open" : ""}`}>
          {[
            ["home", "Home"],
            ["about", "About"],
            ["brand", "Brand"],
            ["blog", "Blog"],
            ["studio", "Studio"],
            ["contact", "Contact"],
          ].map(([tab, label]) => (
            <button
              key={tab}
              className={`nav-btn ${active === tab ? "active" : ""}`}
              onClick={() => handleClick(tab)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          ref={hamburgerRef}
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};