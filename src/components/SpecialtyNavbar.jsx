import React, { useEffect, useRef, useState } from "react";
import { specialtyMeta } from "../data/specialties";

export default function SpecialtyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSpecialtiesOpen, setIsMobileSpecialtiesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dot = document.querySelector(".sp-cur-dot");
    const ring = document.querySelector(".sp-cur-ring");
    const onMove = (e) => {
      if (!dot || !ring) return;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      setTimeout(() => {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }, 70);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      nav.style.boxShadow = window.scrollY > 60 ? "0 4px 40px rgba(0,0,0,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggleSpecialty");
    const menuLinks = document.querySelectorAll("#mobileMenuSpecialty a");
    const toggleMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("menu-open") ? "true" : "false");
    };
    const closeMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
      setIsMobileSpecialtiesOpen(false);
    };
    navToggle?.addEventListener("click", toggleMenu);
    menuLinks.forEach((el) => el.addEventListener("click", closeMenu));
    const onResize = () => {
      if (window.innerWidth > 960) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => {
      navToggle?.removeEventListener("click", toggleMenu);
      menuLinks.forEach((el) => el.removeEventListener("click", closeMenu));
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="sp-cur-dot" />
      <div className="sp-cur-ring" />
      <nav id="nav">
        <a href="/" className="logo">
          <div className="logo-top">
            Heal <span>&</span> Thrive <span>Nutrition</span>
          </div>
          <div className="logo-bot">Expert Online Dietitian · Worldwide</div>
        </a>
        <ul className="nav-links">
          <li>
            <a href="/#services">Services</a>
          </li>
          <li className={`nav-specialties ${isOpen ? "open" : ""}`} ref={dropdownRef}>
            <a href="/#specialties" onClick={(e) => { e.preventDefault(); setIsOpen((prev) => !prev); }}>
              Specialties ▾
            </a>
            <div className="nav-specialties-menu">
              <a href={specialtyMeta.pcos.path} onClick={() => setIsOpen(false)}>{specialtyMeta.pcos.short}</a>
              <a href={specialtyMeta.weight.path} onClick={() => setIsOpen(false)}>{specialtyMeta.weight.short}</a>
              <a href={specialtyMeta.skin.path} onClick={() => setIsOpen(false)}>{specialtyMeta.skin.short}</a>
              <a href={specialtyMeta.nutraceuticals.path} onClick={() => setIsOpen(false)}>{specialtyMeta.nutraceuticals.short}</a>
            </div>
          </li>
          <li>
            <a href="/#why">Why Diet?</a>
          </li>
          <li>
            <a href="/#trust">About</a>
          </li>
        </ul>
        <a href="#cta" className="nav-cta">Free Consultation</a>
        <button id="navToggleSpecialty" className="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <div id="mobileMenuSpecialty" className="mobile-menu">
          <a href="/#services">Services</a>
          <button
            type="button"
            className="mobile-subtoggle"
            onClick={() => setIsMobileSpecialtiesOpen((prev) => !prev)}
            aria-expanded={isMobileSpecialtiesOpen}
          >
            Specialties ▾
          </button>
          <div className={`mobile-submenu ${isMobileSpecialtiesOpen ? "open" : ""}`}>
            <a href={specialtyMeta.pcos.path}>PCOS & Hormonal Balance</a>
            <a href={specialtyMeta.weight.path}>Weight Loss & Body Transformation</a>
            <a href={specialtyMeta.skin.path}>Skin Nutrition & Glow Diet</a>
            <a href={specialtyMeta.nutraceuticals.path}>Nutraceuticals Guidance</a>
          </div>
          <a href="/#why">Why Diet?</a>
          <a href="/#trust">About</a>
          <a href="#cta" className="mobile-menu-cta">Free Consultation</a>
        </div>
      </nav>
    </>
  );
}
