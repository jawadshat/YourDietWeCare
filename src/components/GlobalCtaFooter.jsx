import React from "react";

export default function GlobalCtaFooter() {
  return (
    <>
      <section className="cta" id="cta">
        <div className="cta-orb1"></div>
        <div className="cta-orb2"></div>
        <span className="cta-leaf">🌿</span>
        <p className="cta-eye rv in">Your transformation starts today</p>
        <h2 className="cta-title rv in">
          Ready to <em>heal,<br />thrive</em> & glow?
        </h2>
        <p className="cta-sub rv in">
          Book your FREE 20-minute consultation — no commitment, no pressure.
        </p>
        <div className="cta-form rv in">
          <input type="email" className="cta-input" placeholder="your@email.com" />
          <button className="cta-btn">Book Free Call →</button>
        </div>
        <p className="cta-note rv in">Free 20-min consultation · No commitment · Reply within 24hrs</p>
      </section>
      <footer>
        <div className="fb">
          <div className="fb-c">© 2026 Heal & Thrive Nutrition. All rights reserved.</div>
          <div className="fb-b">Serving 40+ Countries Worldwide</div>
        </div>
      </footer>
    </>
  );
}
