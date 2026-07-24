"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const link = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="topbar">
      <a className="topbar__brand" href="#top">NORTHPEAK DIGITAL</a>

      {/* Desktop nav */}
      <nav className="topbar__nav" aria-label="Primary">
        {link.map((item) => (
          <a key={item.href} href={item.href}>{item.name}</a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="topbar__dropdown">
          {link.map((item) => (
            <a
             id="mobile-nav-link"
              key={item.href}
              href={item.href}
              className="topbar__dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}