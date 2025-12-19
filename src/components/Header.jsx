import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from "../assets/mediamatic-logo.png";
import "./header.css";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const scrollTo = useCallback((id) => {
    setOpen(false);
    setDropdownOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (
        open &&
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(e.target) &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-wrap" onClick={() => scrollTo("home")}>
          <img src={logo} alt="Mediamatic Studio" />
        </div>

        <nav ref={navRef} className={`navbar ${open ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <button className="nav-link" onClick={() => scrollTo("home")}>
                Home
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("about")}>
                About Us
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("brand")}>
                Brand Management
              </button>
            </li>
            <li className="dropdown">
              <button
                className="nav-link"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                Services <span className="dropdown-arrow">{dropdownOpen ? "▲" : "▼"}</span>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <li><button onClick={() => scrollTo("animation")}>2D & 3D Animation</button></li>
                <li><button onClick={() => scrollTo("shoot")}>Corporate Shoot</button></li>
                <li><button onClick={() => scrollTo("content")}>Content Management</button></li>
                <li><button onClick={() => scrollTo("marketing")}>Digital Marketing</button></li>
                <li><button onClick={() => scrollTo("web")}>Website & App</button></li>
                <li><button onClick={() => scrollTo("hosting")}>Web Hosting</button></li>
                <li><button onClick={() => scrollTo("brand")}>Brand Management</button></li>
              </ul>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("studio")}>
                Studio
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("blog")}>
                Blog
              </button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollTo("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button
          ref={burgerRef}
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};