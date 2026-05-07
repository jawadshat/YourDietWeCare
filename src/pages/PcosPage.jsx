import React from "react";
import SpecialtyNavbar from "../components/SpecialtyNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/pcos.css";

export default function PcosPage() {
  return (
    <div className="sp-page pcos-page">
      <SpecialtyNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh"></div>
        <div className="sp-hero-grid"></div>
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">🌸 Specialty Program</p>
            <h1 className="sp-hero-title">PCOS<br /><em>& Hormonal</em><br /><span className="line-green">Balance</span></h1>
            <p>
              Clinical nutrition designed to improve insulin response, reduce inflammation, and support regular cycles with sustainable lifestyle strategies.
            </p>
            <div className="sp-hero-meta">
              <span>Clinically Structured</span>
              <span>Personalized Plan</span>
              <span>Ongoing Support</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one"></div>
              <div className="sp-orb two"></div>
              <div className="sp-orb three"></div>
              <div className="sp-orb-core">🌸</div>
            </div>
            <div className="sp-float small"><div className="sp-float-tag">Average Progress</div><div className="sp-float-val">6-8 weeks</div><div className="sp-float-sub">symptom improvement</div></div>
            <div className="sp-float big"><div className="sp-float-tag">Focus</div><div className="sp-float-val">Hormonal Rhythm</div><div className="sp-float-sub">cycle + insulin support</div></div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <h2>What We Target</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">🔬</div><h3>Insulin Balance</h3><p>Lower insulin resistance with low-GI meal structure and carb pairing.</p></article>
          <article><div className="sp-card-logo">🌿</div><h3>Inflammation Control</h3><p>Reduce acne, bloating, fatigue, and cravings through anti-inflammatory foods.</p></article>
          <article><div className="sp-card-logo">🧬</div><h3>Hormonal Rhythm</h3><p>Support cycle regularity with timed micronutrients and balanced meals.</p></article>
          <article><div className="sp-card-logo">🥗</div><h3>Lifestyle Fit</h3><p>Build a routine around your culture, schedule, and food preferences.</p></article>
        </div>
      </section>
      <section className="sp-section alt">
        <h2>What You Get</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">📋</div><h3>Custom Roadmap</h3><p>Personalized meal strategy by symptoms and available reports.</p></article>
          <article><div className="sp-card-logo">📆</div><h3>Cycle-Phase Plan</h3><p>Cycle-aware nutrition adjustments for follicular, ovulatory, and luteal phases.</p></article>
          <article><div className="sp-card-logo">💊</div><h3>Supplement Protocol</h3><p>Guidance on supplement timing and practical dosage structure.</p></article>
          <article><div className="sp-card-logo">💬</div><h3>Progress Support</h3><p>Follow-up check-ins and strategic refinements based on progress.</p></article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
