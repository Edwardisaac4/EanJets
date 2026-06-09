import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Hondajet", href: "#fleet" },
  { label: "Updates", href: "#updates", hasNotification: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-navbar backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#home" className="shrink-0" id="logo-link">
          <img
            src="/assets/EAN Logo White.png"
            alt="EAN Jets"
            className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
              {link.hasNotification && (
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-dot-red rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          id="nav-contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-text-primary border border-border-gold rounded-full hover:bg-gold/10 transition-all duration-200"
        >
          Contact Us
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bg-secondary/95 backdrop-blur-md ${
          mobileOpen ? "max-h-80 border-b border-border-subtle" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
              {link.hasNotification && (
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-dot-red rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="px-5 py-2 text-sm font-medium text-text-primary border border-border-gold rounded-full hover:bg-gold/10 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
