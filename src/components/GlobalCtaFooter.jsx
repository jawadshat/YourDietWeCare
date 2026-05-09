import { useState } from "react";
import { Link } from "react-router-dom";
import { WA_NUMBER, HELLO_EMAIL } from "../constants";

export default function GlobalCtaFooter() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const em = email.trim();
    const q = em
      ? `?subject=${encodeURIComponent("Free consultation request")}&body=${encodeURIComponent(`I'd like to book a free 20-minute consultation.\n\nEmail: ${em}`)}`
      : "";
    window.location.href = `mailto:${HELLO_EMAIL}${q}`;
  };

  return (
    <>
      <section className="cta" id="cta">
        <div className="cta-o1" />
        <div className="cta-o2" />
        <span className="cta-e">🌿</span>
        <span className="cta-eye rv in">Your transformation starts today</span>
        <h2 className="cta-h rv in">
          Ready to{" "}
          <em>
            heal,
            <br />
            thrive
          </em>{" "}
          & glow?
        </h2>
        <p className="cta-s rv in">
          Book your FREE 20-minute consultation — no commitment, no pressure. Just a real conversation about YOUR health goals and how a personalized nutrition plan can change your life.
        </p>
        <form className="cta-form rv in" onSubmit={onSubmit}>
          <input type="email" className="cta-inp" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email for consultation" />
          <button type="submit" className="cta-btn">
            Book Free Call →
          </button>
        </form>
        <p className="cta-note rv in">✓ Free 20-min consultation &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ Reply within 24hrs</p>
        <div className="cta-alts rv in">
          <a href={`https://wa.me/${WA_NUMBER}`} className="cta-alt" target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
          <a href={`mailto:${HELLO_EMAIL}`} className="cta-alt">
            📧 Email
          </a>
          <a href="#" className="cta-alt">
            📱 Instagram
          </a>
          <a href="#" className="cta-alt">
            🛒 Fiverr
          </a>
        </div>
      </section>

      <footer>
        <div className="ft">
          <div>
            <div className="fl-logo">
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Heal <span>&</span> Thrive <span>Nutrition</span>
              </Link>
            </div>
            <div className="fl-sub">Online Nutrition Clinic · Worldwide</div>
            <p className="fl-bio">Science-backed, 100% personalized nutrition and diet planning. Available online worldwide. Your health transformation starts here.</p>
            <div className="fl-socs">
              <a href="#" className="fl-soc">
                in
              </a>
              <a href="#" className="fl-soc">
                ig
              </a>
              <a href="#" className="fl-soc">
                fb
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} className="fl-soc" target="_blank" rel="noreferrer">
                wa
              </a>
            </div>
          </div>
          <div>
            <div className="fc-t">Services</div>
            <ul className="fc-l">
              <li>
                <Link to="/#services">Personalized Diet Plan</Link>
              </li>
              <li>
                <Link to="/#services">Weight Loss/Gain</Link>
              </li>
              <li>
                <Link to="/#services">PCOS Nutrition</Link>
              </li>
              <li>
                <Link to="/#services">Hormonal Balance</Link>
              </li>
              <li>
                <Link to="/#services">Skin & Hair Nutrition</Link>
              </li>
              <li>
                <Link to="/#services">Pregnancy Nutrition</Link>
              </li>
              <li>
                <Link to="/#services">Nutraceuticals</Link>
              </li>
              <li>
                <Link to="/#services">Weekly Check-ins</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="fc-t">Learn</div>
            <ul className="fc-l">
              <li>
                <Link to="/#blog">PCOS Diet Guide</Link>
              </li>
              <li>
                <Link to="/#blog">Weight Loss Science</Link>
              </li>
              <li>
                <Link to="/#blog">Skin Nutrition</Link>
              </li>
              <li>
                <Link to="/#blog">Nutraceuticals Guide</Link>
              </li>
              <li>
                <Link to="/#blog">Gut Health Guide</Link>
              </li>
              <li>
                <Link to="/#blog">Hormonal Balance</Link>
              </li>
              <li>
                <Link to="/#bmi">Free BMI Tool</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="fc-t">Connect</div>
            <ul className="fc-l">
              <li>
                <Link to="/#cta">Book Free Consultation</Link>
              </li>
              <li>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <Link to="/#services">Get Diet Plan</Link>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Fiverr Profile</a>
              </li>
              <li>
                <a href={`mailto:${HELLO_EMAIL}`}>Email Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fb">
          <div className="fb-c">© 2026 Heal & Thrive Nutrition. All rights reserved. · Online Nutrition Clinic</div>
          <div className="fb-b">🌍 Serving 40+ Countries Worldwide</div>
        </div>
      </footer>

      <div className="wa-float">
        <div className="wa-bubble">
          Need a personalized plan?
          <br />
          Chat on WhatsApp 💚
        </div>
        <a href={`https://wa.me/${WA_NUMBER}`} className="wa-btn" target="_blank" rel="noreferrer">
          💬
        </a>
      </div>
    </>
  );
}
