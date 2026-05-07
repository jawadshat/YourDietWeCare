import React from "react";
import SpecialtyNavbar from "../components/SpecialtyNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/skin.css";

export default function SkinPage() {
  return (
    <div className="sp-page skin-page">
      <SpecialtyNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh"></div>
        <div className="sp-hero-grid"></div>
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">✨ Specialty Program</p>
            <h1 className="sp-hero-title">Skin Nutrition<br /><em>& Glow</em><br /><span className="line-green">Diet</span></h1>
            <p>
              A nutrition-first skin protocol focused on inflammation control, hydration support, and nutrient density for clearer and more radiant skin.
            </p>
            <div className="sp-hero-meta">
              <span>Clear Skin Protocol</span>
              <span>Inflammation Control</span>
              <span>Glow Nutrition</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one"></div>
              <div className="sp-orb two"></div>
              <div className="sp-orb three"></div>
              <div className="sp-orb-core">✨</div>
            </div>
            <div className="sp-float small"><div className="sp-float-tag">Skin Goal</div><div className="sp-float-val">Clear + Glow</div><div className="sp-float-sub">inflammation reduction</div></div>
            <div className="sp-float big"><div className="sp-float-tag">Nutrition Focus</div><div className="sp-float-val">Gut + Hydration</div><div className="sp-float-sub">inside-out approach</div></div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <h2>Skin Goals We Address</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">🧼</div><h3>Acne Trigger Control</h3><p>Reduce acne flare-ups with food trigger mapping and replacement strategy.</p></article>
          <article><div className="sp-card-logo">💧</div><h3>Hydration Repair</h3><p>Hydration and barrier nutrition support for healthier skin texture.</p></article>
          <article><div className="sp-card-logo">✨</div><h3>Glow Nutrition</h3><p>Antioxidant-rich plan for brighter skin tone and improved radiance.</p></article>
          <article><div className="sp-card-logo">🦠</div><h3>Gut-Skin Axis</h3><p>Gut-supportive foods for calmer inflammation and clearer skin.</p></article>
        </div>
      </section>
      <section className="sp-section alt">
        <h2>Inside Your Plan</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">🥬</div><h3>Clear-Skin Framework</h3><p>Personalized meal structure designed for your skin goals.</p></article>
          <article><div className="sp-card-logo">🛒</div><h3>Smart Grocery Prep</h3><p>Skin-support grocery list and prep guidance for consistency.</p></article>
          <article><div className="sp-card-logo">💊</div><h3>Supplement Stack</h3><p>Targeted supplement recommendations based on your profile.</p></article>
          <article><div className="sp-card-logo">🔁</div><h3>Refinement Reviews</h3><p>Checkpoint-based updates as your skin improves.</p></article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
