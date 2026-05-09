import SiteNavbar from "../components/SiteNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/specialty-pages.css";

export default function PcosPage() {
  return (
    <div className="sp-page pcos-page">
      <SiteNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh" />
        <div className="sp-hero-grid" />
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">🌸 Specialty Program</p>
            <h1 className="sp-hero-title">
              PCOS
              <br />
              <em>& Hormonal</em>
              <br />
              <span className="line-green">Balance</span>
            </h1>
            <p>
              Clinical nutrition designed to improve insulin response, reduce inflammation, and support regular cycles with sustainable lifestyle strategies — personalized for your body, culture, and schedule.
            </p>
            <div className="sp-hero-meta">
              <span>Clinically Structured</span>
              <span>Personalized Plan</span>
              <span>Ongoing Support</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one" />
              <div className="sp-orb two" />
              <div className="sp-orb three" />
              <div className="sp-orb-core">🌸</div>
            </div>
            <div className="sp-float small">
              <div className="sp-float-tag">Average Progress</div>
              <div className="sp-float-val">6–8 weeks</div>
              <div className="sp-float-sub">symptom improvement</div>
            </div>
            <div className="sp-float big">
              <div className="sp-float-tag">Focus</div>
              <div className="sp-float-val">Hormonal Rhythm</div>
              <div className="sp-float-sub">cycle + insulin support</div>
            </div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <div className="sp-section-head">
          <div className="sp-section-eye">What we address</div>
          <h2>
            What we <em>target</em> for PCOS
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">🔬</div>
            <h3>Insulin balance</h3>
            <p>Lower insulin resistance with low-GI meal structure, smart carb pairing, and steady meal timing.</p>
          </article>
          <article>
            <div className="sp-card-logo">🌿</div>
            <h3>Inflammation control</h3>
            <p>Reduce acne, bloating, fatigue, and cravings through anti-inflammatory foods matched to you.</p>
          </article>
          <article>
            <div className="sp-card-logo">🧬</div>
            <h3>Hormonal rhythm</h3>
            <p>Support cycle regularity with micronutrient timing and balanced meals across your cycle.</p>
          </article>
          <article>
            <div className="sp-card-logo">🥗</div>
            <h3>Lifestyle fit</h3>
            <p>Build a routine around your culture, schedule, and food preferences — no rigid templates.</p>
          </article>
        </div>
      </section>
      <section className="sp-section alt">
        <div className="sp-section-head">
          <div className="sp-section-eye">Deliverables</div>
          <h2>
            What <em>you receive</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">📋</div>
            <h3>Custom roadmap</h3>
            <p>Personalized meal strategy based on your symptoms, labs (if available), and daily reality.</p>
          </article>
          <article>
            <div className="sp-card-logo">📆</div>
            <h3>Cycle-phase plan</h3>
            <p>Cycle-aware nutrition for follicular, ovulatory, and luteal phases when relevant.</p>
          </article>
          <article>
            <div className="sp-card-logo">💊</div>
            <h3>Supplement protocol</h3>
            <p>Guidance on timing, pairing, and practical dosing — only what adds value.</p>
          </article>
          <article>
            <div className="sp-card-logo">💬</div>
            <h3>Progress support</h3>
            <p>Check-ins and refinements so your plan evolves as your body responds.</p>
          </article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
