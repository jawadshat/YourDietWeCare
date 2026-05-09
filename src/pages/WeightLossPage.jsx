import SiteNavbar from "../components/SiteNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/specialty-pages.css";

export default function WeightLossPage() {
  return (
    <div className="sp-page weight-page">
      <SiteNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh" />
        <div className="sp-hero-grid" />
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">⚖️ Specialty Program</p>
            <h1 className="sp-hero-title">
              Weight Loss
              <br />
              <em>& Body</em>
              <br />
              <span className="line-green">Transformation</span>
            </h1>
            <p>
              A strategic fat-loss framework that protects muscle, improves consistency, and delivers measurable progress — without extreme dieting or copy-paste meal plans.
            </p>
            <div className="sp-hero-meta">
              <span>Metabolism focused</span>
              <span>Sustainable fat loss</span>
              <span>Result tracking</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one" />
              <div className="sp-orb two" />
              <div className="sp-orb three" />
              <div className="sp-orb-core">⚖️</div>
            </div>
            <div className="sp-float small">
              <div className="sp-float-tag">Average result</div>
              <div className="sp-float-val">−8 kg</div>
              <div className="sp-float-sub">in 60 days · varies by individual</div>
            </div>
            <div className="sp-float big">
              <div className="sp-float-tag">Method</div>
              <div className="sp-float-val">Smart deficit</div>
              <div className="sp-float-sub">fat loss · muscle retained</div>
            </div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <div className="sp-section-head">
          <div className="sp-section-eye">Program pillars</div>
          <h2>
            Core <em>focus</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">📉</div>
            <h3>Smart deficit</h3>
            <p>Calorie and macro targets mapped to your metabolism, activity, and realistic timeline.</p>
          </article>
          <article>
            <div className="sp-card-logo">🍽️</div>
            <h3>Satiety meals</h3>
            <p>High-satiety meals that curb hunger and make adherence easier day to day.</p>
          </article>
          <article>
            <div className="sp-card-logo">📈</div>
            <h3>Habit system</h3>
            <p>Layered habits so progress compounds instead of resetting every Monday.</p>
          </article>
          <article>
            <div className="sp-card-logo">🧭</div>
            <h3>Plateau breakers</h3>
            <p>Structured tweaks when progress stalls — without reckless cuts.</p>
          </article>
        </div>
      </section>
      <section className="sp-section alt">
        <div className="sp-section-head">
          <div className="sp-section-eye">Your toolkit</div>
          <h2>
            Transformation <em>toolkit</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">📝</div>
            <h3>Flexible plan</h3>
            <p>Personalized meals with swaps for busy weeks and travel.</p>
          </article>
          <article>
            <div className="sp-card-logo">🍴</div>
            <h3>Social eating guide</h3>
            <p>Restaurant and family-event strategies that protect results.</p>
          </article>
          <article>
            <div className="sp-card-logo">📊</div>
            <h3>Weekly tracking</h3>
            <p>Simple metrics and timely adjustments based on how you respond.</p>
          </article>
          <article>
            <div className="sp-card-logo">✅</div>
            <h3>Maintenance mode</h3>
            <p>Exit strategy so your transformation lasts beyond the first goal.</p>
          </article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
