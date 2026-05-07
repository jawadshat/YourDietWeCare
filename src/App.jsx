import React, { useEffect } from "react";

const pageHtml = `
<div id="cur"></div>
<div id="cur-r"></div>
<nav id="nav">
  <a href="#" class="logo">
    <div class="logo-top">Heal <span>&</span> Thrive <span>Nutrition</span></div>
    <div class="logo-bot">Expert Online Dietitian · Worldwide</div>
  </a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#specialties">Specialties</a></li>
    <li><a href="#why">Why Diet?</a></li>
    <li><a href="#trust">About</a></li>
  </ul>
  <a href="#cta" class="nav-cta">Free Consultation</a>
  <button id="navToggle" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <div id="mobileMenu" class="mobile-menu">
    <a href="#services">Services</a>
    <a href="#specialties">Specialties</a>
    <a href="#why">Why Diet?</a>
    <a href="#trust">About</a>
    <a href="#cta" class="mobile-menu-cta">Free Consultation</a>
  </div>
</nav>

<section class="hero" id="home">
  <div class="hero-mesh"></div>
  <div class="hero-grid"></div>
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-pill"><span></span>Now accepting worldwide clients</div>
      <h1 class="hero-h1">Your body<br>deserves<br><em>real</em> <span class="line-green">nutrition.</span></h1>
      <p class="hero-desc">Stop guessing. Start healing. Get a science-backed, 100% personalized diet plan built for your unique body, goals, and lifestyle — delivered online in 48 hours.</p>
      <div class="hero-actions">
        <a href="#cta" class="btn-gold">Book Free Consultation →</a>
        <a href="#services" class="btn-outline-w">View Services</a>
      </div>
      <div class="hero-trust">
        <div class="ht-item"><span class="ht-icon">✅</span><div class="ht-text"><strong>Clinically Trained</strong>Hospital-level expertise</div></div>
        <div class="ht-item"><span class="ht-icon">🌍</span><div class="ht-text"><strong>Worldwide Online</strong>WhatsApp & Video</div></div>
        <div class="ht-item"><span class="ht-icon">⚡</span><div class="ht-text"><strong>48hr Delivery</strong>Fast & personalized</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-orb-wrap">
        <div class="h-orb h-orb-1"></div><div class="h-orb h-orb-2"></div><div class="h-orb h-orb-3"></div>
        <div class="h-center"><div class="h-emoji">🌿</div><div class="h-center-label">Heal & Thrive</div></div>
      </div>
      <div class="h-float hf1"><div class="hf-tag">Average Result</div><div class="hf-val">−8kg</div><div class="hf-sub">in just 60 days</div></div>
      <div class="h-float hf2"><div class="hf-tag">Starting From</div><div class="hf-val">$5 only</div><div class="hf-sub">Affordable for everyone</div></div>
    </div>
  </div>
  <div class="scroll-ind"><span>Scroll</span><div class="scroll-line"></div></div>
</section>

<div class="stats rv">
  <div class="stat"><div class="stat-n counter" data-target="200" data-suffix="+">0</div><div class="stat-l">Happy Clients</div></div>
  <div class="stat"><div class="stat-n counter" data-target="48" data-suffix="hr">0</div><div class="stat-l">Plan Delivery</div></div>
  <div class="stat"><div class="stat-n counter" data-target="40" data-suffix="+">0</div><div class="stat-l">Countries Served</div></div>
  <div class="stat"><div class="stat-n counter" data-target="100" data-suffix="%">0</div><div class="stat-l">Personalized Plans</div></div>
</div>

<section class="services" id="services">
  <div class="svc-inner">
    <div class="svc-header rv">
      <div><div class="sec-eye">Our Services</div><h2 class="sec-h">Every plan, <em>built for you</em></h2></div>
      <p class="sec-p">No templates. No copy-paste. Every nutrition plan is crafted from scratch based on your unique body, medical history, food culture, and real-life goals.</p>
    </div>
    <div class="svc-grid rv">
      <div class="svc"><span class="svc-e">⚖️</span><div class="svc-n">01</div><div class="svc-name">Personalized Diet Plan</div><p class="svc-desc">A fully custom meal plan tailored to your body, goals, and food preferences.</p><div class="svc-price">From $5</div></div>
      <div class="svc"><span class="svc-e">🏃‍♀️</span><div class="svc-n">02</div><div class="svc-name">Weight Management</div><p class="svc-desc">Sustainable weight loss or healthy weight gain using evidence-based clinical nutrition.</p><div class="svc-price">From $8</div></div>
      <div class="svc"><span class="svc-e">🩺</span><div class="svc-n">03</div><div class="svc-name">Disease-Specific Nutrition</div><p class="svc-desc">Therapeutic diet plans for diabetes, hypertension, PCOS, thyroid, anemia and more.</p><div class="svc-price">From $10</div></div>
      <div class="svc"><span class="svc-e">🤱</span><div class="svc-n">04</div><div class="svc-name">Pregnancy & Postpartum</div><p class="svc-desc">Safe, nourishing plans for every pregnancy stage and postpartum recovery.</p><div class="svc-price">From $8</div></div>
      <div class="svc"><span class="svc-e">🥗</span><div class="svc-n">05</div><div class="svc-name">Weekly Meal Planning</div><p class="svc-desc">Weekly plans with grocery lists and simple recipes.</p><div class="svc-price">From $5</div></div>
      <div class="svc"><span class="svc-e">📋</span><div class="svc-n">06</div><div class="svc-name">1:1 Nutrition Consultation</div><p class="svc-desc">A focused WhatsApp or video session to map your personalized action plan.</p><div class="svc-price">From $5/session</div></div>
    </div>
  </div>
</section>

<section class="testi" id="testimonials">
  <div class="testi-inner">
    <div class="rv" style="text-align:center;margin-bottom:4rem;"><div class="sec-eye" style="justify-content:center;">Real Results</div><h2 class="sec-h">They doubted it.<br><em>Then they saw results.</em></h2></div>
    <div class="testi-grid rv">
      <div class="tc"><div class="tc-stars">★★★★★</div><p class="tc-q">"Lost 9kg in 2 months without starving."</p><div class="tc-author">Fatima R.</div><div class="tc-loc">Dubai, UAE</div></div>
      <div class="tc"><div class="tc-stars">★★★★★</div><p class="tc-q">"My PCOS symptoms improved dramatically in just 6 weeks."</p><div class="tc-author">Mehwish K.</div><div class="tc-loc">Lahore, Pakistan</div></div>
      <div class="tc"><div class="tc-stars">★★★★★</div><p class="tc-q">"My blood sugar is now consistently in range."</p><div class="tc-author">Ahmed S.</div><div class="tc-loc">London, UK</div></div>
    </div>
  </div>
</section>

<section class="why" id="why">
  <div class="why-inner">
    <div class="why-grid">
      <div class="why-left rv">
        <div class="sec-eye">Why You Need This</div>
        <h2 class="why-big-q">Why does everyone<br>need a <em>personalized<br>diet plan?</em></h2>
        <p class="why-sub">Your body is not the same as anyone else's. Your nutrition shouldn't be either.</p>
      </div>
      <div class="why-right rv2">
        <div class="why-vis-main">
          <p class="wvm-q">"The food you eat can be either the safest and most powerful form of medicine."</p>
          <div class="wvm-stat"><div class="wvms"><div class="wvms-n">80%</div><div class="wvms-l">of diseases are diet-related</div></div><div class="wvms"><div class="wvms-n">3×</div><div class="wvms-l">better results vs generic diets</div></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="spec" id="specialties">
  <div class="spec-inner">
    <div class="spec-intro rv">
      <div><div class="sec-eye">Our Specialties</div><h2 class="sec-h">Targeted nutrition for<br><em>specific conditions</em></h2></div>
      <p class="sec-p">We specialize in using food therapeutically to address specific health conditions.</p>
    </div>
    <div class="spec-grid rv">
      <div class="sc"><span class="sc-e">🌸</span><div class="sc-name">PCOS & Hormonal Balance</div><p class="sc-desc">Anti-inflammatory, low-GI nutrition for hormone balance.</p></div>
      <div class="sc"><span class="sc-e">⚖️</span><div class="sc-name">Weight Loss & Body Transformation</div><p class="sc-desc">Science-backed strategy that melts fat while preserving muscle.</p></div>
      <div class="sc"><span class="sc-e">✨</span><div class="sc-name">Skin Nutrition & Glow Diet</div><p class="sc-desc">Collagen-supporting foods for clear and radiant skin.</p></div>
      <div class="sc"><span class="sc-e">💊</span><div class="sc-name">Nutraceuticals Guidance</div><p class="sc-desc">Evidence-based supplement guidance for your body needs.</p></div>
    </div>
  </div>
</section>

<section class="trust-sec" id="trust">
  <div class="trust-inner">
    <div style="text-align:center;margin-bottom:5rem;" class="rv"><div class="sec-eye" style="justify-content:center;">Why Trust Us</div><h2 class="sec-h">Expertise you can<br><em>feel the difference of</em></h2></div>
  </div>
</section>

<section class="cta" id="cta">
  <div class="cta-orb1"></div><div class="cta-orb2"></div>
  <span class="cta-leaf">🌿</span>
  <p class="cta-eye rv">Your transformation starts today</p>
  <h2 class="cta-title rv">Ready to <em>heal,<br>thrive</em> & glow?</h2>
  <p class="cta-sub rv">Book your FREE 20-minute consultation — no commitment, no pressure.</p>
  <div class="cta-form rv"><input type="email" class="cta-input" id="ctaEmail" placeholder="your@email.com"><button class="cta-btn" id="ctaBtn">Book Free Call →</button></div>
  <p class="cta-note rv">Free 20-min consultation · No commitment · Reply within 24hrs</p>
</section>

<footer>
  <div class="fb">
    <div class="fb-c">© 2026 Heal & Thrive Nutrition. All rights reserved.</div>
    <div class="fb-b">Serving 40+ Countries Worldwide</div>
  </div>
</footer>
`;

export default function App() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const curR = document.getElementById("cur-r");
    const onMouse = (e) => {
      if (!cur || !curR) return;
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
      setTimeout(() => {
        curR.style.left = `${e.clientX}px`;
        curR.style.top = `${e.clientY}px`;
      }, 70);
    };
    document.addEventListener("mousemove", onMouse);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll(".rv,.rv2,.rv3").forEach((el) => observer.observe(el));

    const animateCounter = (el) => {
      const target = Number(el.getAttribute("data-target") || 0);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

    const onScroll = () => {
      const nav = document.getElementById("nav");
      if (nav) nav.style.boxShadow = window.scrollY > 60 ? "0 4px 40px rgba(0,0,0,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll);

    const btn = document.getElementById("ctaBtn");
    const email = document.getElementById("ctaEmail");
    const onClick = () => {
      const v = email?.value || "";
      if (v.includes("@")) {
        btn.textContent = "✓ Talk soon!";
        btn.style.background = "#8fbe6a";
        btn.style.color = "#fff";
      }
    };
    btn?.addEventListener("click", onClick);

    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggle");
    const mobileMenuLinks = document.querySelectorAll("#mobileMenu a");
    const toggleMobileMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("menu-open") ? "true" : "false");
    };
    const closeMobileMenu = () => {
      if (!nav || !navToggle) return;
      nav.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    };
    navToggle?.addEventListener("click", toggleMobileMenu);
    mobileMenuLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));
    const onResize = () => {
      if (window.innerWidth > 960) closeMobileMenu();
    };
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      counterObserver.disconnect();
      btn?.removeEventListener("click", onClick);
      navToggle?.removeEventListener("click", toggleMobileMenu);
      mobileMenuLinks.forEach((link) => link.removeEventListener("click", closeMobileMenu));
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
