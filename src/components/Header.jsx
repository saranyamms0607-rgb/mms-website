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
      // ensure we scroll to top when navigating to home
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 60);
      return;
    }

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    // If already on home, try to scroll immediately; if element isn't mounted yet, poll briefly
    if (active === "home") {
      if (!scrollToId(tab)) {
        let tries = 0;
        const maxTries = 20;
        const iv = setInterval(() => {
          tries += 1;
          if (scrollToId(tab) || tries >= maxTries) clearInterval(iv);
        }, 50);
      }
      return;
    }

    // If not on home, navigate to home then poll for the target element to appear and scroll
    onNavigate("home");
    let tries = 0;
    const maxTries = 60; // ~3s
    const iv = setInterval(() => {
      tries += 1;
      if (scrollToId(tab) || tries >= maxTries) clearInterval(iv);
    }, 50);
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