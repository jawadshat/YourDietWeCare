import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";
import { WA_NUMBER, HELLO_EMAIL } from "../constants";

const MARQUEE_ITEMS = [
  "Personalized Diet Plans",
  "PCOS Nutrition",
  "Weight Loss Management",
  "Skin Glow Diet",
  "Nutraceuticals",
  "Hormonal Balance",
  "Pregnancy Nutrition",
  "Blood Sugar Control",
  "Gut Health",
  "Hair Nutrition",
  "Customized Calorie Plans",
  "Weekly Diet Check-ins",
];

const GOALS = [
  "⚖️ Weight Loss",
  "💪 Weight Gain",
  "🌸 PCOS/Hormonal",
  "✨ Skin & Beauty",
  "🤱 Pregnancy",
  "🩺 Medical Condition",
];

const BLOG_POSTS = [
  {
    cat: "hormones",
    bt: "bt1",
    emoji: "🌸",
    bcCat: "Hormones & Women Health",
    title: "PCOS Diet Guide: What to Eat to Balance Your Hormones Naturally",
    ex: "PCOS affects 1 in 10 women. The right anti-inflammatory, low-GI diet can reduce symptoms by 40%. Here's what the science says — and what your personalized plan should include.",
    cta: "Every body is different. Book your personalized PCOS plan →",
  },
  {
    cat: "hormones",
    bt: "bt6",
    emoji: "🌺",
    bcCat: "Hormones & Women Health",
    title: "Hormonal Imbalance & Food: The Connection Most Women Don't Know",
    ex: "Estrogen dominance, cortisol spikes, and insulin resistance are all directly linked to your diet. Learn which foods heal your hormones — and which ones make it worse.",
    cta: "Get your personalized hormonal balance plan →",
  },
  {
    cat: "weight",
    bt: "bt2",
    emoji: "⚖️",
    bcCat: "Weight Loss",
    title: "Why Crash Diets Fail — And What Actually Works for Sustainable Weight Loss",
    ex: "Crash diets destroy metabolism and lead to yo-yo weight gain. Here's the science behind sustainable, lasting weight loss — and why personalized nutrition is the only real answer.",
    cta: "Get your customized weight loss plan →",
  },
  {
    cat: "weight",
    bt: "bt5",
    emoji: "🥗",
    bcCat: "Weight Loss",
    title: "Keto Diet: Safe or Dangerous? What Nutrition Science Actually Says",
    ex: "Keto is trending — but is it right for YOUR body? We break down the real science, who it works for, who it harms, and why a personalized approach always wins over any trend.",
    cta: "Find out what diet YOUR body needs →",
  },
  {
    cat: "skin",
    bt: "bt3",
    emoji: "✨",
    bcCat: "Skin & Beauty",
    title: "Nutrition for Glowing Skin: Foods That Clear Acne & Boost Collagen",
    ex: "Your skin reflects what you eat. Omega-3s, antioxidants, and collagen-boosting foods can transform your complexion in 4–6 weeks — from the inside out.",
    cta: "Get your personalized skin nutrition plan →",
  },
  {
    cat: "skin",
    bt: "bt9",
    emoji: "💆",
    bcCat: "Skin & Beauty",
    title: "Foods for Hair Growth: The Nutrition Guide for Thick, Healthy Hair",
    ex: "Hair loss and thinning are often nutrition deficiencies in disguise. Biotin, iron, zinc, and protein-rich foods can dramatically improve hair density when used correctly.",
    cta: "Book your personalized hair health plan →",
  },
  {
    cat: "gut",
    bt: "bt4",
    emoji: "🌿",
    bcCat: "Gut Health",
    title: "Bloating Causes: Why You're Always Bloated & How Nutrition Fixes It",
    ex: "Bloating isn't normal — it's a signal. Food intolerances, gut bacteria imbalance, and poor fiber intake are the top causes. Here's how the right diet heals your gut completely.",
    cta: "Get your personalized gut health plan →",
  },
  {
    cat: "nutra",
    bt: "bt7",
    emoji: "💊",
    bcCat: "Nutraceuticals",
    title: "What are Nutraceuticals? The Complete Beginner's Guide",
    ex: "Nutraceuticals are food-derived compounds — omega-3s, probiotics, turmeric, vitamins — that heal beyond basic nutrition. Learn what they are, how they work, and which ones you need.",
    cta: "Book your personalized nutraceutical plan →",
  },
  {
    cat: "nutra",
    bt: "bt8",
    emoji: "☀️",
    bcCat: "Nutraceuticals",
    title: "Vitamin D Deficiency: Why Most Women in Pakistan Are Deficient",
    ex: "Vitamin D deficiency affects mood, immunity, bone health, and hormones. Yet most women don't know they're deficient. Here's how to detect it and fix it through food and supplements.",
    cta: "Get your personalized supplement guidance →",
  },
  {
    cat: "lifestyle",
    bt: "bt1",
    emoji: "😴",
    bcCat: "Lifestyle",
    title: "Sleep & Weight Gain: The Surprising Connection You're Ignoring",
    ex: "Poor sleep raises cortisol, triggers cravings, and directly causes weight gain. Here's how fixing your sleep — through nutrition — can transform your body without a single diet change.",
    cta: "Get your personalized lifestyle plan →",
    hidden: true,
  },
  {
    cat: "lifestyle",
    bt: "bt2",
    emoji: "😤",
    bcCat: "Lifestyle",
    title: "Stress and Hormones: How Chronic Stress is Making You Gain Weight",
    ex: "Cortisol — your stress hormone — directly promotes fat storage, especially around the belly. Learn which stress-fighting foods reset your cortisol levels and stop stress-related weight gain.",
    cta: "Book your personalized stress nutrition plan →",
    hidden: true,
  },
  {
    cat: "hormones",
    bt: "bt6",
    emoji: "🩸",
    bcCat: "Hormones & Women Health",
    title: "Best Foods for Periods: What to Eat for Each Phase of Your Cycle",
    ex: "Your nutritional needs change throughout your menstrual cycle. Eating in sync with your cycle reduces cramps, PMS, mood swings, and bloating — naturally, through personalized food choices.",
    cta: "Get your personalized cycle nutrition plan →",
    hidden: true,
  },
];

const BLOG_FILTERS = [
  { id: "all", label: "All" },
  { id: "hormones", label: "Hormones & Women" },
  { id: "weight", label: "Weight Loss" },
  { id: "skin", label: "Skin & Beauty" },
  { id: "gut", label: "Gut Health" },
  { id: "nutra", label: "Nutraceuticals" },
  { id: "lifestyle", label: "Lifestyle" },
];

function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", desc: "Your BMI is below the healthy range. A personalized plan can help you nourish sustainably." };
  if (bmi < 25) return { label: "Normal weight", desc: "You're in a healthy BMI range. Nutrition can still optimize energy, hormones, and long-term health." };
  if (bmi < 30) return { label: "Overweight", desc: "Small, sustainable changes guided by a professional can improve metabolic health and confidence." };
  return { label: "Obesity range", desc: "Professional guidance helps you lose weight safely while protecting muscle and metabolism." };
}

function estimateCalories(weightKg, heightCm) {
  const age = 32;
  const femBmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  const maleBmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  const avg = (femBmr + maleBmr) / 2;
  return Math.round(avg * 1.45);
}

export default function HomePage() {
  const location = useLocation();
  const modalRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [activeGoal, setActiveGoal] = useState(GOALS[0]);
  const [blogCat, setBlogCat] = useState("all");
  const [blogShowAll, setBlogShowAll] = useState(false);
  const [ctaEmail, setCtaEmail] = useState("");

  const [fName, setFName] = useState("");
  const [fAge, setFAge] = useState("");
  const [fWeight, setFWeight] = useState("");
  const [fHeight, setFHeight] = useState("");
  const [fGender, setFGender] = useState("Female");
  const [fWa, setFWa] = useState("");
  const [fMedical, setFMedical] = useState("None");
  const [fHabits, setFHabits] = useState("3 balanced meals/day");
  const [fStruggle, setFStruggle] = useState("");

  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiGoal, setBmiGoal] = useState("Weight Loss");
  const [bmiShowResult, setBmiShowResult] = useState(false);
  const [bmiVal, setBmiVal] = useState("");
  const [bmiCatLabel, setBmiCatLabel] = useState("");
  const [bmiDesc, setBmiDesc] = useState("");
  const [bmiCals, setBmiCals] = useState("");

  const openForm = useCallback((service) => {
    setServiceName(service);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeForm = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll(".rv, .rv2, .rv3").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const onClick = (e) => {
      if (e.target === el) closeForm();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [closeForm]);

  const submitForm = () => {
    const name = fName.trim() || "Client";
    const msg = [
      "*Heal & Thrive Nutrition — Consultation Request*",
      "",
      `*Service:* 📋 ${serviceName}`,
      `*Name:* ${name}`,
      `*Age:* ${fAge}`,
      `*Weight:* ${fWeight}kg | *Height:* ${fHeight}cm`,
      `*Gender:* ${fGender}`,
      `*WhatsApp:* ${fWa}`,
      `*Main goal:* ${activeGoal}`,
      `*Medical condition:* ${fMedical}`,
      `*Eating habits:* ${fHabits}`,
      `*Struggling with:* ${fStruggle || "—"}`,
      "",
      "_Sent from healandthrivenutrition.com_",
    ].join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    closeForm();
  };

  const calcBMI = () => {
    const w = parseFloat(bmiWeight, 10);
    const hCm = parseFloat(bmiHeight, 10);
    if (!w || !hCm || hCm <= 0) {
      window.alert("Please enter valid weight (kg) and height (cm).");
      return;
    }
    const hM = hCm / 100;
    const bmi = w / (hM * hM);
    const rounded = Math.round(bmi * 10) / 10;
    const { label, desc } = bmiCategory(bmi);
    const cals = estimateCalories(w, hCm);
    setBmiVal(String(rounded));
    setBmiCatLabel(`${label} · Goal noted: ${bmiGoal}`);
    setBmiDesc(desc);
    setBmiCals(`~${cals} kcal/day`);
    setBmiShowResult(true);
  };

  const handleCta = (e) => {
    e.preventDefault();
    const em = ctaEmail.trim();
    const q = em ? `?subject=${encodeURIComponent("Free consultation request")}&body=${encodeURIComponent(`I'd like to book a free 20-minute consultation.\n\nEmail: ${em}`)}` : "";
    window.location.href = `mailto:${HELLO_EMAIL}${q}`;
  };

  const visibleBlog = BLOG_POSTS.filter((p) => {
    if (blogCat !== "all" && p.cat !== blogCat) return false;
    if (blogCat === "all" && p.hidden && !blogShowAll) return false;
    return true;
  });

  const blogHasHidden = BLOG_POSTS.some((p) => p.hidden);

  return (
    <>
      <SiteNavbar />

      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-mesh" aria-hidden />
        <div className="hero-gridlines" aria-hidden />
        <div className="ho ho1" />
        <div className="ho ho2" />

        <div className="hero-left">
          <div className="h-pill">
            <span className="h-pill-dot" />
            <span className="h-pill-line" />
            Online Nutrition Clinic · Worldwide
          </div>
          <h1 className="h1">
            Struggling with <em>PCOS,</em> weight gain, or hormonal issues?
            <strong>We've got you. 💚</strong>
          </h1>
          <p className="h-sub">
            Get a <strong>100% personalized nutrition plan</strong> for YOUR body — science-backed, clinically informed, delivered in 48 hours.
          </p>
          <div className="h-pain">
            <div className="h-pain-item">Tired of generic diets that never work?</div>
            <div className="h-pain-item">Confused by contradicting advice online?</div>
            <div className="h-pain-item">Ready for a plan built for your body?</div>
          </div>
          <div className="h-btns">
            <a href="#cta" className="btn-g">
              📞 Book Consultation →
            </a>
            <button type="button" className="btn-o" onClick={() => openForm("Personalized Diet Plan")}>
              🥗 Get Diet Plan
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hr-dots" />
          <div className="hr-glow" />
          <div className="hr-center">
            <div className="hr-emoji">🌿</div>
            <div className="hr-lbl">Heal & Thrive Nutrition</div>
          </div>
          <div className="fc fc1">
            <div className="fc-lbl">Average Result</div>
            <div className="fc-v">−8kg in 60 days</div>
            <div className="fc-s">Personalized weight management</div>
          </div>
          <div className="fc fc2">
            <div className="fc-lbl p">Starting From</div>
            <div className="fc-v">$5 only</div>
            <div className="fc-s">Affordable for everyone</div>
          </div>
        </div>

        <div className="hero-trust">
          <div className="ht">
            <span className="ht-e">🎓</span>
            <div className="ht-t">
              <strong>Qualified Nutrition Guidance</strong>
              Clinically Trained · Scholarship Holder
            </div>
          </div>
          <div className="ht">
            <span className="ht-e">🌍</span>
            <div className="ht-t">
              <strong>Worldwide Online</strong>
              WhatsApp & Video
            </div>
          </div>
          <div className="ht">
            <span className="ht-e">⚡</span>
            <div className="ht-t">
              <strong>48hr Delivery</strong>
              Fast & Personalized
            </div>
          </div>
        </div>
      </section>

      <div className="stats rv">
        <div className="st">
          <div className="st-n">200+</div>
          <div className="st-l">Clients Helped</div>
        </div>
        <div className="st">
          <div className="st-n">48hr</div>
          <div className="st-l">Plan Delivery</div>
        </div>
        <div className="st">
          <div className="st-n">40+</div>
          <div className="st-l">Countries Served</div>
        </div>
        <div className="st">
          <div className="st-n">100%</div>
          <div className="st-l">Personalized Plans</div>
        </div>
      </div>

      <div className="mq">
        <div className="mq-t">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((label, i) => (
            <span key={`${label}-${i}`} className="mqi">
              <span className="mqd" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <section className="about" id="about">
        <div className="about-inner">
          <div className="rv">
            <div className="about-card">
              <div className="ac-icon">🏅</div>
              <p className="ac-q">&quot;We provide qualified nutrition guidance — science-based, clinically informed, and 100% personalized for your unique body, goals, and lifestyle.&quot;</p>
              <div className="ac-tags">
                <span className="act">🎓 Qualified Guidance</span>
                <span className="act">🔬 Evidence-Based</span>
                <span className="act">🌱 Sustainable Health</span>
                <span className="act">🌍 Worldwide Online</span>
              </div>
              <div className="about-nums">
                <div className="an">
                  <div className="an-n">200+</div>
                  <div className="an-l">Clients Helped</div>
                </div>
                <div className="an">
                  <div className="an-n">40+</div>
                  <div className="an-l">Countries</div>
                </div>
                <div className="an">
                  <div className="an-n">48hr</div>
                  <div className="an-l">Delivery</div>
                </div>
                <div className="an">
                  <div className="an-n">100%</div>
                  <div className="an-l">Personalized</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rv2">
            <div className="sec-eye">About This Platform</div>
            <h2 className="sec-h">
              Qualified nutrition guidance
              <br />
              for <em>real people</em>
            </h2>
            <div className="about-pillars">
              <div className="ap">
                <div className="ap-icon">🔬</div>
                <div>
                  <div className="ap-t">Science-Based Nutrition Guidance</div>
                  <p className="ap-d">Every recommendation is rooted in published nutritional science and clinical guidelines — the same standards used in hospitals. No fads, no trends, no guesswork. Only what actually works.</p>
                </div>
              </div>
              <div className="ap">
                <div className="ap-icon">🎯</div>
                <div>
                  <div className="ap-t">Truly Personalized Approach</div>
                  <p className="ap-d">Your health history, body type, cultural food preferences, medical conditions, and lifestyle are all considered. No two clients receive the same plan — because no two bodies are the same.</p>
                </div>
              </div>
              <div className="ap">
                <div className="ap-icon">🌱</div>
                <div>
                  <div className="ap-t">Sustainable Health, Not Quick Fixes</div>
                  <p className="ap-d">We build lasting habits and personalized nutrition strategies — not crash diets. Results that stick long after your plan ends, giving you a healthy relationship with food forever.</p>
                </div>
              </div>
            </div>
            <div className="about-proof">
              <div className="apr">
                <span className="apr-e">💬</span>
                <div className="apr-t">WhatsApp Support</div>
                <div className="apr-d">Always available for your questions</div>
              </div>
              <div className="apr">
                <span className="apr-e">🔒</span>
                <div className="apr-t">Confidential</div>
                <div className="apr-d">Your health data stays private</div>
              </div>
              <div className="apr">
                <span className="apr-e">⚡</span>
                <div className="apr-t">48hr Delivery</div>
                <div className="apr-d">Fast, never compromised quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="svc-inner">
          <div className="sec-top rv">
            <div>
              <div className="sec-eye">Our Services</div>
              <h2 className="sec-h">
                Customized plans for
                <br />
                <em>every health goal</em>
              </h2>
            </div>
            <p className="sec-p">Click any service to book your personalized plan. Every plan is 100% customized for YOUR body — starting from just $5. No templates. No copy-paste. Ever.</p>
          </div>

          <div className="svc-cats rv">
            <div className="svc-cat">
              <div className="svc-cat-head">
                <span className="svc-cat-icon">⚖️</span>
                <div className="svc-cat-title">Weight & Lifestyle</div>
              </div>
              <div className="svc-items">
                <button type="button" className="sci" onClick={() => openForm("Personalized Diet Plan")}>
                  <span>Personalized Diet Plan</span>
                  <span className="sci-price">From $5</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Weight Loss Management")}>
                  <span>Weight Loss Management</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Weight Gain Plan")}>
                  <span>Weight Gain Plan</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Customized Calorie Plan")}>
                  <span>Customized Calorie Plan</span>
                  <span className="sci-price">From $7</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Physical Activity Guidance")}>
                  <span>Physical Activity Guidance</span>
                  <span className="sci-price">From $5</span>
                </button>
              </div>
            </div>

            <div className="svc-cat">
              <div className="svc-cat-head">
                <span className="svc-cat-icon">🌸</span>
                <div className="svc-cat-title">Women&apos;s Health</div>
              </div>
              <div className="svc-items">
                <button type="button" className="sci" onClick={() => openForm("PCOS/PCOD Personalized Nutrition")}>
                  <span>PCOS/PCOD Personalized Nutrition</span>
                  <span className="sci-price">From $10</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Hormonal Imbalance Support")}>
                  <span>Hormonal Imbalance Support</span>
                  <span className="sci-price">From $10</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Pregnancy Nutrition Plan")}>
                  <span>Pregnancy Nutrition Plan</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Postpartum Nutrition Plan")}>
                  <span>Postpartum Nutrition Plan</span>
                  <span className="sci-price">From $8</span>
                </button>
              </div>
            </div>

            <div className="svc-cat">
              <div className="svc-cat-head">
                <span className="svc-cat-icon">✨</span>
                <div className="svc-cat-title">Beauty & Wellness</div>
              </div>
              <div className="svc-items">
                <button type="button" className="sci" onClick={() => openForm("Skin Nutrition & Glow Diet")}>
                  <span>Skin Nutrition & Glow Diet</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Hair Health Nutrition Plan")}>
                  <span>Hair Health Nutrition Plan</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Gut Health Support Plan")}>
                  <span>Gut Health Support Plan</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Anti-Aging Nutrition Plan")}>
                  <span>Anti-Aging Nutrition Plan</span>
                  <span className="sci-price">From $10</span>
                </button>
              </div>
            </div>

            <div className="svc-cat">
              <div className="svc-cat-head">
                <span className="svc-cat-icon">🔬</span>
                <div className="svc-cat-title">Advanced & Trending</div>
              </div>
              <div className="svc-items">
                <button type="button" className="sci" onClick={() => openForm("Nutraceutical Guidance")}>
                  <span>Nutraceutical Guidance</span>
                  <span className="sci-price">From $8</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Personalized Meal Planning")}>
                  <span>Personalized Meal Planning</span>
                  <span className="sci-price">From $5</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Weekly Diet Check-in")}>
                  <span>Weekly Diet Check-in</span>
                  <span className="sci-price">From $5</span>
                </button>
                <button type="button" className="sci" onClick={() => openForm("Blood Sugar & Diabetes Diet")}>
                  <span>Blood Sugar & Diabetes Diet</span>
                  <span className="sci-price">From $10</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={modalRef} className={`modal-overlay${modalOpen ? " open" : ""}`} id="modalOverlay">
        <div className="modal" style={{ animation: "modalIn .35s ease forwards" }}>
          <button type="button" className="modal-close" onClick={closeForm} aria-label="Close">
            ✕
          </button>
          <div className="modal-title">
            Book Your <em>Personalized Plan</em>
          </div>
          <div className="modal-svc" id="modal-svc-name">
            📋 {serviceName}
          </div>
          <div className="form-row">
            <div className="fg">
              <label htmlFor="f-name">Full Name</label>
              <input id="f-name" type="text" placeholder="Your full name" value={fName} onChange={(e) => setFName(e.target.value)} />
            </div>
            <div className="fg">
              <label htmlFor="f-age">Age</label>
              <input id="f-age" type="number" placeholder="e.g. 25" value={fAge} onChange={(e) => setFAge(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="fg">
              <label htmlFor="f-weight">Weight (kg)</label>
              <input id="f-weight" type="number" placeholder="e.g. 65" value={fWeight} onChange={(e) => setFWeight(e.target.value)} />
            </div>
            <div className="fg">
              <label htmlFor="f-height">Height (cm)</label>
              <input id="f-height" type="number" placeholder="e.g. 162" value={fHeight} onChange={(e) => setFHeight(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="fg">
              <label htmlFor="f-gender">Gender</label>
              <select id="f-gender" value={fGender} onChange={(e) => setFGender(e.target.value)}>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="f-wa">WhatsApp Number</label>
              <input id="f-wa" type="tel" placeholder="+92 300 0000000" value={fWa} onChange={(e) => setFWa(e.target.value)} />
            </div>
          </div>
          <div className="fg">
            <label>Your Main Goal</label>
            <div className="goal-grid">
              {GOALS.map((g) => (
                <button key={g} type="button" className={`goal-btn${activeGoal === g ? " active" : ""}`} onClick={() => setActiveGoal(g)}>
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="fg">
            <label htmlFor="f-medical">Medical Condition?</label>
            <select id="f-medical" value={fMedical} onChange={(e) => setFMedical(e.target.value)}>
              <option>None</option>
              <option>Diabetes / Pre-Diabetes</option>
              <option>PCOS/PCOD</option>
              <option>Thyroid Issue</option>
              <option>Hypertension</option>
              <option>Anemia</option>
              <option>Gut / Digestive Issues</option>
              <option>Other</option>
            </select>
          </div>
          <div className="fg">
            <label htmlFor="f-habits">Current Eating Habits</label>
            <select id="f-habits" value={fHabits} onChange={(e) => setFHabits(e.target.value)}>
              <option>3 balanced meals/day</option>
              <option>2 meals (skip breakfast)</option>
              <option>Irregular meals</option>
              <option>Heavy dinner, light day</option>
              <option>Mostly junk/fast food</option>
              <option>Vegetarian/Vegan</option>
            </select>
          </div>
          <div className="fg">
            <label htmlFor="f-struggle">What are you struggling with?</label>
            <textarea id="f-struggle" placeholder="Tell us what's been hardest — bloating, fatigue, emotional eating, slow weight loss, hormonal issues... anything helps us understand and customize your plan better 💚" value={fStruggle} onChange={(e) => setFStruggle(e.target.value)} />
          </div>
          <button type="button" className="form-submit" onClick={submitForm}>
            💬 Send via WhatsApp & Get My Personalized Plan →
          </button>
          <a href={`https://wa.me/${WA_NUMBER}`} className="form-wa-link" target="_blank" rel="noreferrer">
            💚 Or chat directly on WhatsApp
          </a>
        </div>
      </div>

      <section className="why" id="why">
        <div className="why-inner">
          <div className="sec-top rv" style={{ background: "transparent" }}>
            <div>
              <div className="sec-eye" style={{ color: "rgba(255,255,255,.3)" }}>
                Why Personalized Nutrition
              </div>
              <h2 className="sec-h" style={{ color: "#fff" }}>
                Why does YOUR body need
                <br />a <em>personalized plan?</em>
              </h2>
            </div>
            <p className="sec-p" style={{ color: "rgba(255,255,255,.38)" }}>
              Generic diets fail 95% of people. Here&apos;s the science behind why a personalized nutrition plan is the only approach that creates real, lasting results for your unique body.
            </p>
          </div>
          <div className="why-grid rv">
            <div className="wc">
              <span className="wc-e">❌</span>
              <div className="wc-t">Generic Diets Destroy Metabolism</div>
              <p className="wc-d">Crash diets slow your metabolic rate, cause muscle loss, and create yo-yo weight cycles. Your body adapts and fights back — that&apos;s why the weight always comes back. You need a plan built for YOU.</p>
              <span className="wc-tag">The Real Problem</span>
            </div>
            <div className="wc">
              <span className="wc-e">🧬</span>
              <div className="wc-t">Every Body Has Unique Nutritional Needs</div>
              <p className="wc-d">Your genetics, gut microbiome, hormones, activity level, and cultural food habits all affect how your body processes food. A plan made for someone else literally cannot work for your body.</p>
              <span className="wc-tag">Biological Fact</span>
            </div>
            <div className="wc">
              <span className="wc-e">🍽️</span>
              <div className="wc-t">Food is Your Most Powerful Medicine</div>
              <p className="wc-d">The right nutrition can reverse pre-diabetes, reduce PCOS symptoms by 40%, clear acne in 6 weeks, boost energy, and dramatically improve mental clarity. Food heals from the inside out.</p>
              <span className="wc-tag">Science-Backed</span>
            </div>
            <div className="wc">
              <span className="wc-e">💊</span>
              <div className="wc-t">What are Nutraceuticals?</div>
              <p className="wc-d">Nutraceuticals — omega-3s, probiotics, turmeric, vitamins — are food-derived compounds that provide powerful health benefits beyond basic nutrition. We guide you on exactly which ones YOUR body needs.</p>
              <span className="wc-tag">Food as Medicine</span>
            </div>
            <div className="wc">
              <span className="wc-e">🌸</span>
              <div className="wc-t">Hormones Control Everything</div>
              <p className="wc-d">Insulin, cortisol, estrogen, and thyroid hormones are all directly impacted by what you eat. The right anti-inflammatory, low-GI personalized diet can rebalance your hormones naturally.</p>
              <span className="wc-tag">Hormonal Health</span>
            </div>
            <div className="wc">
              <span className="wc-e">🧠</span>
              <div className="wc-t">Gut Health = Overall Health</div>
              <p className="wc-d">70% of your immune system lives in your gut. 95% of your serotonin is made there. The right personalized nutrition heals your gut, reduces anxiety, sharpens focus, and transforms how you feel every day.</p>
              <span className="wc-tag">Gut-Brain Connection</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testi" id="testimonials">
        <div className="testi-inner">
          <div className="rv" style={{ marginBottom: "3rem" }}>
            <div className="sec-eye">Real Results</div>
            <h2 className="sec-h">
              They doubted it.
              <br />
              <em>Then they saw results.</em>
            </h2>
          </div>
          <div className="testi-hero rv2">
            <p className="th-t">&quot;I was tired, bloated, and stuck. No diet worked. Then I got a personalized plan made FOR my body — not copied from the internet. 3 months later, I&apos;m down 11kg and feel like a completely different person.&quot;</p>
            <div className="th-a">⭐⭐⭐⭐⭐ — Real Client, UAE · Lost 11kg in 3 months</div>
          </div>
          <div className="testi-grid rv3">
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;Lost 9kg in 2 months without starving. The personalized plan used foods I actually love. I finally understand how to eat for MY body and it changed everything!&quot;</p>
              <div className="tc-a">Fatima R.</div>
              <div className="tc-l">Dubai, UAE</div>
              <div className="tc-badge">−9kg · 2 months</div>
            </div>
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;I have PCOS and tried everything. This customized plan was built for my condition specifically. Symptoms improved dramatically in just 6 weeks. I cried with happiness!&quot;</p>
              <div className="tc-a">Mehwish K.</div>
              <div className="tc-l">Lahore, Pakistan</div>
              <div className="tc-badge">PCOS · 6 weeks</div>
            </div>
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;Blood sugar is consistently in range now. The personalized diabetes diet plan gave me so much confidence. Truly life-changing qualified guidance!&quot;</p>
              <div className="tc-a">Ahmed S.</div>
              <div className="tc-l">London, UK</div>
              <div className="tc-badge">Diabetes · 8 weeks</div>
            </div>
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;My skin cleared in 5 weeks! I had no idea my diet was causing breakouts. The personalized skin nutrition plan was a total revelation for my confidence and self-esteem.&quot;</p>
              <div className="tc-a">Zara H.</div>
              <div className="tc-l">Karachi, Pakistan</div>
              <div className="tc-badge">Skin Nutrition · 5 weeks</div>
            </div>
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;My pregnancy was so smooth. I knew exactly what to eat every trimester with my personalized plan. Baby is perfectly healthy and I felt amazing throughout!&quot;</p>
              <div className="tc-a">Sana M.</div>
              <div className="tc-l">Toronto, Canada</div>
              <div className="tc-badge">Pregnancy Nutrition</div>
            </div>
            <div className="tc">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&quot;Started at $5 — got results worth thousands! Super affordable, incredibly detailed personalized plan. WhatsApp support made me feel like I had a nutritionist with me 24/7.&quot;</p>
              <div className="tc-a">Priya T.</div>
              <div className="tc-l">Mumbai, India</div>
              <div className="tc-badge">Weight Loss · 3 months</div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="blog-inner">
          <div className="sec-top rv">
            <div>
              <div className="sec-eye">Nutrition Blog</div>
              <h2 className="sec-h">
                Knowledge that
                <br />
                <em>empowers you</em>
              </h2>
            </div>
            <p className="sec-p">Science-backed nutrition guides to help you understand your body. Read, learn — and when you&apos;re ready for YOUR personalized plan, we&apos;re just one click away.</p>
          </div>
          <div className="blog-cats rv">
            {BLOG_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`blog-cat-btn${blogCat === f.id ? " active" : ""}`}
                onClick={() => setBlogCat(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="blog-grid rv2" id="blog-grid">
            {visibleBlog.map((post) => (
              <article key={post.title} className="bc" data-cat={post.cat}>
                <div className={`bc-thumb ${post.bt}`}>{post.emoji}</div>
                <div className="bc-body">
                  <div className="bc-cat">{post.bcCat}</div>
                  <div className="bc-title">{post.title}</div>
                  <p className="bc-ex">{post.ex}</p>
                  <a href="#cta" className="bc-cta">
                    {post.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
          {blogHasHidden && !blogShowAll && blogCat === "all" && (
            <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="rv3">
              <button type="button" className="btn-g" onClick={() => setBlogShowAll(true)}>
                Load More Articles →
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bmi" id="bmi">
        <div className="bmi-inner">
          <div className="rv">
            <div className="sec-eye" style={{ justifyContent: "center" }}>
              Free Health Assessment Tool
            </div>
            <h2 className="sec-h" style={{ textAlign: "center" }}>
              Check Your BMI &
              <br />
              <em>Get Your Health Score</em>
            </h2>
            <p className="sec-p" style={{ textAlign: "center", maxWidth: "520px", margin: ".8rem auto 0" }}>
              Enter your details below to get your BMI, daily calorie needs, and personalized health insights. Free, instant, and no login required.
            </p>
          </div>
          <div className="bmi-card rv2">
            <div className="bmi-inputs">
              <div className="bmi-field">
                <label htmlFor="bmi-w">Weight (kg)</label>
                <input id="bmi-w" type="number" placeholder="e.g. 65" value={bmiWeight} onChange={(e) => setBmiWeight(e.target.value)} />
              </div>
              <div className="bmi-field">
                <label htmlFor="bmi-h">Height (cm)</label>
                <input id="bmi-h" type="number" placeholder="e.g. 162" value={bmiHeight} onChange={(e) => setBmiHeight(e.target.value)} />
              </div>
              <div className="bmi-field">
                <label htmlFor="bmi-goal">Your Goal</label>
                <select id="bmi-goal" value={bmiGoal} onChange={(e) => setBmiGoal(e.target.value)}>
                  <option>Weight Loss</option>
                  <option>Weight Gain</option>
                  <option>PCOS Management</option>
                  <option>Improve Energy</option>
                  <option>Better Skin</option>
                  <option>General Health</option>
                </select>
              </div>
            </div>
            <div className="bmi-btn-wrap">
              <button type="button" className="bmi-calc" onClick={calcBMI}>
                Calculate My BMI & Calories →
              </button>
            </div>
            <div className={`bmi-result${bmiShowResult ? " show" : ""}`} id="bmi-result">
              <div className="bmi-r-num" id="bmi-val">
                {bmiVal}
              </div>
              <div className="bmi-r-cat" id="bmi-cat">
                {bmiCatLabel}
              </div>
              <div className="bmi-r-cals" id="bmi-cals">
                {bmiCals}
              </div>
              <div className="bmi-r-cals-l">Estimated Daily Calorie Needs</div>
              <p className="bmi-r-desc" id="bmi-desc">
                {bmiDesc}
              </p>
              <br />
              <em style={{ fontSize: ".78rem", color: "var(--muted)" }}>⚠️ BMI is a basic indicator. For a complete personalized nutrition analysis designed for YOUR body, book a consultation below.</em>
              <br />
              <br />
              <button type="button" className="bmi-r-cta" onClick={() => openForm("Personalized Nutrition Consultation (via BMI Assessment)")}>
                Get My Personalized Nutrition Plan →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="cta-o1" />
        <div className="cta-o2" />
        <span className="cta-e">🌿</span>
        <span className="cta-eye rv">Your transformation starts today</span>
        <h2 className="cta-h rv">
          Ready to{" "}
          <em>
            heal,
            <br />
            thrive
          </em>{" "}
          & glow?
        </h2>
        <p className="cta-s rv">Book your FREE 20-minute consultation — no commitment, no pressure. Just a real conversation about YOUR health goals and how a personalized nutrition plan can change your life.</p>
        <form className="cta-form rv" onSubmit={handleCta}>
          <input type="email" className="cta-inp" id="ctaEmail" placeholder="your@email.com" value={ctaEmail} onChange={(e) => setCtaEmail(e.target.value)} />
          <button type="submit" className="cta-btn" id="ctaBtn">
            Book Free Call →
          </button>
        </form>
        <p className="cta-note rv">✓ Free 20-min consultation &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ Reply within 24hrs</p>
        <div className="cta-alts rv">
          <a href={`https://wa.me/${WA_NUMBER}`} className="cta-alt" target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
          <a href="mailto:hello@healandthrivenutrition.com" className="cta-alt">
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
              Heal <span>&</span> Thrive <span>Nutrition</span>
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
                <a href="#services">Personalized Diet Plan</a>
              </li>
              <li>
                <a href="#services">Weight Loss/Gain</a>
              </li>
              <li>
                <a href="#services">PCOS Nutrition</a>
              </li>
              <li>
                <a href="#services">Hormonal Balance</a>
              </li>
              <li>
                <a href="#services">Skin & Hair Nutrition</a>
              </li>
              <li>
                <a href="#services">Pregnancy Nutrition</a>
              </li>
              <li>
                <a href="#services">Nutraceuticals</a>
              </li>
              <li>
                <a href="#services">Weekly Check-ins</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="fc-t">Learn</div>
            <ul className="fc-l">
              <li>
                <a href="#blog">PCOS Diet Guide</a>
              </li>
              <li>
                <a href="#blog">Weight Loss Science</a>
              </li>
              <li>
                <a href="#blog">Skin Nutrition</a>
              </li>
              <li>
                <a href="#blog">Nutraceuticals Guide</a>
              </li>
              <li>
                <a href="#blog">Gut Health Guide</a>
              </li>
              <li>
                <a href="#blog">Hormonal Balance</a>
              </li>
              <li>
                <a href="#bmi">Free BMI Tool</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="fc-t">Connect</div>
            <ul className="fc-l">
              <li>
                <a href="#cta">Book Free Consultation</a>
              </li>
              <li>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="#services">Get Diet Plan</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Fiverr Profile</a>
              </li>
              <li>
                <a href="mailto:hello@healandthrivenutrition.com">Email Us</a>
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
