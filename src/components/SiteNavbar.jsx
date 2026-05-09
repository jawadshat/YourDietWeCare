import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { specialtyMeta } from "../data/specialties";

function SectionLink({ id, children }) {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <a href={`#${id}`}>{children}</a>;
  }
  return <Link to={`/#${id}`}>{children}</Link>;
}

function CtaLink({ children }) {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return (
      <a href="#cta" className="nav-cta">
        {children}
      </a>
    );
  }
  return (
    <Link to="/#cta" className="nav-cta">
      {children}
    </Link>
  );
}

export default function SiteNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSpecsOpen, setMobileSpecsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const curRef = useRef(null);
  const curRRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const curR = curRRef.current;
    if (!cur || !curR) return;
    let t;
    const onMove = (e) => {
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
      clearTimeout(t);
      t = setTimeout(() => {
        curR.style.left = `${e.clientX}px`;
        curR.style.top = `${e.clientY}px`;
      }, 70);
    };
    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("nav");
      if (nav) nav.style.boxShadow = window.scrollY > 60 ? "0 4px 30px rgba(0,0,0,0.07)" : "none";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggleSite");
    const menu = document.getElementById("mobileMenuSite");
    const toggleMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("menu-open") ? "true" : "false");
    };
    const closeMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
      setMobileSpecsOpen(false);
    };
    navToggle?.addEventListener("click", toggleMenu);
    menu?.querySelectorAll("a").forEach((el) => el.addEventListener("click", closeMenu));
    const onResize = () => {
      if (window.innerWidth > 960) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => {
      navToggle?.removeEventListener("click", toggleMenu);
      menu?.querySelectorAll("a").forEach((el) => el.removeEventListener("click", closeMenu));
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div ref={curRef} id="cur" />
      <div ref={curRRef} id="cur-r" />

      <nav id="nav">
        <Link to="/" className="logo">
          <div className="logo-main">
            Heal <span>&</span> Thrive <span>Nutrition</span>
          </div>
          <div className="logo-sub">Online Nutrition Clinic · Worldwide</div>
        </Link>
        <ul className="nav-links">
          <li>
            <SectionLink id="about">About</SectionLink>
          </li>
          <li>
            <SectionLink id="services">Services</SectionLink>
          </li>
          <li className={`nav-specialties ${isOpen ? "open" : ""}`} ref={dropdownRef}>
            <button type="button" className="nav-specialties-trigger" onClick={() => setIsOpen((v) => !v)} aria-expanded={isOpen}>
              Specialties ▾
            </button>
            <div className="nav-specialties-menu">
              <Link to={specialtyMeta.pcos.path} onClick={() => setIsOpen(false)}>
                {specialtyMeta.pcos.short}
              </Link>
              <Link to={specialtyMeta.weight.path} onClick={() => setIsOpen(false)}>
                {specialtyMeta.weight.short}
              </Link>
              <Link to={specialtyMeta.skin.path} onClick={() => setIsOpen(false)}>
                {specialtyMeta.skin.short}
              </Link>
              <Link to={specialtyMeta.nutraceuticals.path} onClick={() => setIsOpen(false)}>
                {specialtyMeta.nutraceuticals.short}
              </Link>
            </div>
          </li>
          <li>
            <SectionLink id="why">Why Us</SectionLink>
          </li>
          <li>
            <SectionLink id="blog">Blog</SectionLink>
          </li>
          <li>
            <SectionLink id="bmi">BMI Tool</SectionLink>
          </li>
        </ul>
        <CtaLink>Free Consultation</CtaLink>
        <button id="navToggleSite" className="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
        <div id="mobileMenuSite" className="mobile-menu">
          <SectionLink id="about">About</SectionLink>
          <SectionLink id="services">Services</SectionLink>
          <button type="button" className="mobile-subtoggle" onClick={() => setMobileSpecsOpen((v) => !v)} aria-expanded={mobileSpecsOpen}>
            Specialties ▾
          </button>
          <div className={`mobile-submenu ${mobileSpecsOpen ? "open" : ""}`}>
            <Link to={specialtyMeta.pcos.path}>PCOS & Hormonal Balance</Link>
            <Link to={specialtyMeta.weight.path}>Weight Loss & Body Transformation</Link>
            <Link to={specialtyMeta.skin.path}>Skin Nutrition & Glow Diet</Link>
            <Link to={specialtyMeta.nutraceuticals.path}>Nutraceuticals Guidance</Link>
          </div>
          <SectionLink id="why">Why Us</SectionLink>
          <SectionLink id="blog">Blog</SectionLink>
          <SectionLink id="bmi">BMI Tool</SectionLink>
          {pathname === "/" ? (
            <a href="#cta" className="mobile-menu-cta">
              Free Consultation
            </a>
          ) : (
            <Link to="/#cta" className="mobile-menu-cta">
              Free Consultation
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
