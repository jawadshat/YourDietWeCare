import React from "react";
import SpecialtyNavbar from "../components/SpecialtyNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/nutraceuticals.css";

export default function NutraceuticalsPage() {
  return (
    <div className="sp-page nutraceuticals-page">
      <SpecialtyNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh"></div>
        <div className="sp-hero-grid"></div>
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">💊 Specialty Program</p>
            <h1 className="sp-hero-title">Nutraceuticals<br /><em>& Supplement</em><br /><span className="line-green">Guidance</span></h1>
            <p>
              Evidence-based supplement planning so you use the right nutrients, in the right dosage, at the right time for your goals.
            </p>
            <div className="sp-hero-meta">
              <span>Evidence Based</span>
              <span>Safe Dosing</span>
              <span>Goal-Oriented Stack</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one"></div>
              <div className="sp-orb two"></div>
              <div className="sp-orb three"></div>
              <div className="sp-orb-core">💊</div>
            </div>
            <div className="sp-float small"><div className="sp-float-tag">Stack Type</div><div className="sp-float-val">Goal-Based</div><div className="sp-float-sub">no unnecessary pills</div></div>
            <div className="sp-float big"><div className="sp-float-tag">Protocol</div><div className="sp-float-val">Safe Timing</div><div className="sp-float-sub">absorption optimized</div></div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <h2>What We Optimize</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">🧪</div><h3>Nutrient Gap Analysis</h3><p>Identify true nutrient gaps and symptom-linked deficiencies.</p></article>
          <article><div className="sp-card-logo">🏷️</div><h3>Quality Selection</h3><p>Select clinically relevant supplement categories and forms.</p></article>
          <article><div className="sp-card-logo">⏰</div><h3>Absorption Timing</h3><p>Improve absorption via timing, pairing, and daily scheduling.</p></article>
          <article><div className="sp-card-logo">🛡️</div><h3>Safety Control</h3><p>Avoid unnecessary or conflicting supplement combinations.</p></article>
        </div>
      </section>
      <section className="sp-section alt">
        <h2>Your Guidance Includes</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">📦</div><h3>Goal-Based Stack</h3><p>Personalized supplement stack by objective and lifestyle.</p></article>
          <article><div className="sp-card-logo">📅</div><h3>Daily Schedule</h3><p>Structured intake routine with practical reminders.</p></article>
          <article><div className="sp-card-logo">🍱</div><h3>Food Integration</h3><p>Combine food and supplements in a realistic sustainable way.</p></article>
          <article><div className="sp-card-logo">🔍</div><h3>Ongoing Optimization</h3><p>Regular review and updates for better effectiveness.</p></article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
