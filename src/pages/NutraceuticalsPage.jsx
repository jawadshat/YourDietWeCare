import SiteNavbar from "../components/SiteNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/specialty-pages.css";

export default function NutraceuticalsPage() {
  return (
    <div className="sp-page nutraceuticals-page">
      <SiteNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh" />
        <div className="sp-hero-grid" />
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">💊 Specialty Program</p>
            <h1 className="sp-hero-title">
              Nutraceuticals
              <br />
              <em>& Supplement</em>
              <br />
              <span className="line-green">Guidance</span>
            </h1>
            <p>
              Evidence-based supplement planning so you use the right nutrients, practical doses, and smart timing — aligned with food first, pills second.
            </p>
            <div className="sp-hero-meta">
              <span>Evidence based</span>
              <span>Safe dosing</span>
              <span>Goal-oriented stack</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one" />
              <div className="sp-orb two" />
              <div className="sp-orb three" />
              <div className="sp-orb-core">💊</div>
            </div>
            <div className="sp-float small">
              <div className="sp-float-tag">Stack type</div>
              <div className="sp-float-val">Goal-based</div>
              <div className="sp-float-sub">no unnecessary pills</div>
            </div>
            <div className="sp-float big">
              <div className="sp-float-tag">Protocol</div>
              <div className="sp-float-val">Safe timing</div>
              <div className="sp-float-sub">absorption optimized</div>
            </div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <div className="sp-section-head">
          <div className="sp-section-eye">Optimization</div>
          <h2>
            What we <em>optimize</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">🧪</div>
            <h3>Nutrient gap analysis</h3>
            <p>Identify real gaps and symptom-linked priorities instead of trendy stacks.</p>
          </article>
          <article>
            <div className="sp-card-logo">🏷️</div>
            <h3>Quality selection</h3>
            <p>Forms and categories that match clinical relevance for your profile.</p>
          </article>
          <article>
            <div className="sp-card-logo">⏰</div>
            <h3>Absorption timing</h3>
            <p>Better uptake via pairing, spacing, and a realistic daily schedule.</p>
          </article>
          <article>
            <div className="sp-card-logo">🛡️</div>
            <h3>Safety control</h3>
            <p>Avoid redundant or conflicting combinations with clear rationale.</p>
          </article>
        </div>
      </section>
      <section className="sp-section alt">
        <div className="sp-section-head">
          <div className="sp-section-eye">Guidance package</div>
          <h2>
            What <em>you receive</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">📦</div>
            <h3>Goal-based stack</h3>
            <p>A streamlined stack mapped to your objective, budget, and lifestyle.</p>
          </article>
          <article>
            <div className="sp-card-logo">📅</div>
            <h3>Daily schedule</h3>
            <p>Simple intake rhythm that fits work, travel, and family routines.</p>
          </article>
          <article>
            <div className="sp-card-logo">🍱</div>
            <h3>Food integration</h3>
            <p>Combine food and supplements sustainably — no overwhelm.</p>
          </article>
          <article>
            <div className="sp-card-logo">🔍</div>
            <h3>Ongoing optimization</h3>
            <p>Review and refine as goals shift or new labs appear.</p>
          </article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
