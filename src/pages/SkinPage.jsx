import SiteNavbar from "../components/SiteNavbar";
import GlobalCtaFooter from "../components/GlobalCtaFooter";
import "./styles/specialty-pages.css";

export default function SkinPage() {
  return (
    <div className="sp-page skin-page">
      <SiteNavbar />
      <header className="sp-hero">
        <div className="sp-hero-mesh" />
        <div className="sp-hero-grid" />
        <div className="sp-hero-inner sp-hero-layout">
          <div>
            <p className="sp-kicker">✨ Specialty Program</p>
            <h1 className="sp-hero-title">
              Skin Nutrition
              <br />
              <em>& Glow</em>
              <br />
              <span className="line-green">Diet</span>
            </h1>
            <p>
              A nutrition-first skin protocol focused on inflammation control, hydration support, and nutrient density — so your complexion reflects what&apos;s happening inside.
            </p>
            <div className="sp-hero-meta">
              <span>Clear-skin framework</span>
              <span>Inflammation aware</span>
              <span>Glow nutrition</span>
            </div>
          </div>
          <div className="sp-hero-right">
            <div className="sp-orb-wrap">
              <div className="sp-orb one" />
              <div className="sp-orb two" />
              <div className="sp-orb three" />
              <div className="sp-orb-core">✨</div>
            </div>
            <div className="sp-float small">
              <div className="sp-float-tag">Skin goal</div>
              <div className="sp-float-val">Clear + glow</div>
              <div className="sp-float-sub">inflammation down</div>
            </div>
            <div className="sp-float big">
              <div className="sp-float-tag">Nutrition focus</div>
              <div className="sp-float-val">Gut + hydration</div>
              <div className="sp-float-sub">inside-out approach</div>
            </div>
          </div>
        </div>
      </header>
      <section className="sp-section">
        <div className="sp-section-head">
          <div className="sp-section-eye">Skin goals</div>
          <h2>
            What we <em>address</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">🧼</div>
            <h3>Acne trigger control</h3>
            <p>Map likely food triggers and swap in sustainable alternatives you actually enjoy.</p>
          </article>
          <article>
            <div className="sp-card-logo">💧</div>
            <h3>Hydration repair</h3>
            <p>Fluids, electrolytes, and barrier-friendly nutrition for healthier texture.</p>
          </article>
          <article>
            <div className="sp-card-logo">✨</div>
            <h3>Glow nutrition</h3>
            <p>Antioxidant-rich structure for brighter tone and improved radiance over time.</p>
          </article>
          <article>
            <div className="sp-card-logo">🦠</div>
            <h3>Gut–skin axis</h3>
            <p>Gut-supportive foods to calm systemic inflammation and support clearer skin.</p>
          </article>
        </div>
      </section>
      <section className="sp-section alt">
        <div className="sp-section-head">
          <div className="sp-section-eye">Inside your plan</div>
          <h2>
            What <em>you get</em>
          </h2>
        </div>
        <div className="sp-cards">
          <article>
            <div className="sp-card-logo">🥬</div>
            <h3>Clear-skin framework</h3>
            <p>Meals and snacks structured around your skin goals and lifestyle.</p>
          </article>
          <article>
            <div className="sp-card-logo">🛒</div>
            <h3>Smart grocery prep</h3>
            <p>Lists and prep flows that make consistency realistic.</p>
          </article>
          <article>
            <div className="sp-card-logo">💊</div>
            <h3>Supplement stack</h3>
            <p>Targeted recommendations only where they meaningfully help.</p>
          </article>
          <article>
            <div className="sp-card-logo">🔁</div>
            <h3>Refinement reviews</h3>
            <p>Adjustments as your skin responds — without guesswork.</p>
          </article>
        </div>
      </section>
      <GlobalCtaFooter />
    </div>
  );
}
