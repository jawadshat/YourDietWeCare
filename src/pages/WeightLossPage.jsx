import React from "react";
import SpecialtyNavbar from "../components/SpecialtyNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/weight.css";

export default function WeightLossPage() {
  return (
    <div className="sp-page weight-page">
      <SpecialtyNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh"></div>
        <div className="sp-hero-grid"></div>
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">⚖️ Specialty Program</p>
            <h1 className="sp-hero-title">Weight Loss<br /><em>& Body</em><br /><span className="line-green">Transformation</span></h1>
            <p>
              A strategic fat-loss framework that protects muscle, improves consistency, and gives measurable progress without extreme dieting.
            </p>
            <div className="sp-hero-meta">
              <span>Metabolism Focused</span>
              <span>Sustainable Fat Loss</span>
              <span>Result Tracking</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one"></div>
              <div className="sp-orb two"></div>
              <div className="sp-orb three"></div>
              <div className="sp-orb-core">⚖️</div>
            </div>
            <div className="sp-float small"><div className="sp-float-tag">Average Result</div><div className="sp-float-val">-8kg</div><div className="sp-float-sub">in 60 days</div></div>
            <div className="sp-float big"><div className="sp-float-tag">Method</div><div className="sp-float-val">Smart Deficit</div><div className="sp-float-sub">fat loss, muscle retained</div></div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <h2>Core Focus</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">📉</div><h3>Smart Deficit</h3><p>Calorie and macro targets mapped to your metabolism and goal timeline.</p></article>
          <article><div className="sp-card-logo">🍽️</div><h3>Satiety Meals</h3><p>High-satiety meal plans that reduce hunger and improve consistency.</p></article>
          <article><div className="sp-card-logo">📈</div><h3>Habit System</h3><p>Progressive habit structure for long-term adherence and better outcomes.</p></article>
          <article><div className="sp-card-logo">🧭</div><h3>Plateau Breakers</h3><p>Targeted protocol to restart progress when your weight stalls.</p></article>
        </div>
      </section>
      <section className="sp-section alt">
        <h2>Transformation Toolkit</h2>
        <div className="sp-cards">
          <article><div className="sp-card-logo">📝</div><h3>Flexible Plan</h3><p>Personalized meal plan with alternatives for busy days.</p></article>
          <article><div className="sp-card-logo">🍴</div><h3>Social Eating Guide</h3><p>Practical eating-out and event strategies without guilt.</p></article>
          <article><div className="sp-card-logo">📊</div><h3>Weekly Tracking</h3><p>Monitoring framework with timely adjustments based on response.</p></article>
          <article><div className="sp-card-logo">✅</div><h3>Maintenance Mode</h3><p>Post-goal strategy to keep your transformation long-term.</p></article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
