import { useEffect, useState } from "react";
import {
  ArrowRight,
  Baby,
  BookOpenText,
  Brain,
  ChatCircleDots,
  Heart,
  HeadCircuit,
  List,
  PersonSimpleRun,
  PersonSimpleTaiChi,
  X,
} from "@phosphor-icons/react";
import { siteConfig } from "./siteConfig.js";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Resources", "#resources"],
  ["FAQ", "#faq"],
];

const concerns = [
  { label: "Pelvic concerns", href: "#services", Icon: PersonSimpleTaiChi },
  { label: "Pregnancy & postpartum", href: "#services", Icon: Baby },
  { label: "Jaw pain & headaches", href: "#services", Icon: HeadCircuit },
  { label: "Injury & movement", href: "#services", Icon: PersonSimpleRun },
];

const approach = [
  { text: "I listen to the whole person.", Icon: ChatCircleDots },
  { text: "Treatment grounded in evidence.", Icon: BookOpenText },
  { text: "A plan made for your life.", Icon: Heart },
];

const services = [
  { title: "Pelvic health", detail: "Comfort, strength and confidence", Icon: PersonSimpleTaiChi },
  { title: "Pregnancy & postpartum", detail: "Support through every stage", Icon: Baby },
  { title: "TMJ & jaw pain", detail: "Ease tension and restore movement", Icon: HeadCircuit },
  { title: "Headaches & migraine", detail: "Targeted, thoughtful care", Icon: Brain },
  { title: "Orthopedic physiotherapy", detail: "Return to what you love", Icon: PersonSimpleRun },
];

function Logo({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#home" aria-label="The Tiny Physio home">
      <span className="brand__crop" aria-hidden="true">
        <img src="/assets/tiny-physio-logo.jpg" alt="" />
      </span>
    </a>
  );
}

function BookingLink({ className = "button", children = "Book an appointment" }) {
  return (
    <a className={className} href={siteConfig.bookingUrl}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" weight="bold" />
    </a>
  );
}

function Portrait({ className = "", cutout = false }) {
  return (
    <div className={`portrait ${className}`}>
      <img
        src={cutout ? "/assets/anjali-cutout.png" : "/assets/anjali-original.jpg"}
        alt="Anjali, physiotherapist and founder of The Tiny Physio"
      />
    </div>
  );
}

function Botanical({ className = "" }) {
  return <img className={className} src="/assets/botanical-sprig.png" alt="" aria-hidden="true" />;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header" id="home">
        <div className="container header__inner">
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
          </button>
          <nav className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
            <ul>
              {navItems.map(([label, href]) => (
                <li key={label}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
              ))}
            </ul>
            <BookingLink className="button button--header" />
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 id="hero-title">Physiotherapy that sees the whole you.</h1>
              <p>Personalized care for pelvic health, pregnancy, jaw pain and everyday movement.</p>
              <div className="hero__actions">
                <BookingLink />
                <a className="text-link" href="#services">Explore services <ArrowRight aria-hidden="true" weight="bold" /></a>
              </div>
            </div>
            <div className="hero__visual">
              <img className="organic-wash" src="/assets/organic-blush-wash.png" alt="" aria-hidden="true" />
              <Portrait className="portrait--hero" cutout />
              <p className="hero__note">More movement for a brighter you.</p>
              <Botanical className="hero__plant" />
            </div>
          </div>
        </section>

        <section className="concerns wave-section" id="concerns" aria-labelledby="concerns-title">
          <div className="container">
            <h2 id="concerns-title">What brings you here?</h2>
            <div className="concern-grid">
              {concerns.map(({ label, href, Icon }) => (
                <a className="concern" href={href} key={label}>
                  <Icon aria-hidden="true" weight="thin" />
                  <span>{label}</span>
                  <ArrowRight className="concern__arrow" aria-hidden="true" weight="bold" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about__content">
              <h2 id="about-title">Real care,<br />rooted in you.</h2>
              <p>I’m Anjali, the physiotherapist behind The Tiny Physio. My care is warm, evidence-informed and shaped around you.</p>
              <a className="text-link" href="#about">Meet Anjali <ArrowRight aria-hidden="true" weight="bold" /></a>
            </div>
            <div className="about__visual">
              <img className="organic-wash" src="/assets/organic-blush-wash.png" alt="" aria-hidden="true" />
              <Portrait className="portrait--about" cutout />
              <p>Movement can change so much.</p>
              <Botanical className="about__plant" />
            </div>
          </div>
        </section>

        <section className="approach-section wave-section wave-section--reverse" id="approach" aria-labelledby="approach-title">
          <div className="container">
            <h2 id="approach-title">Care shaped around your life.</h2>
            <div className="approach-grid">
              {approach.map(({ text, Icon }) => (
                <div className="approach-item" key={text}>
                  <Icon aria-hidden="true" weight="thin" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <h2 id="services-title">Expert care for life’s changing seasons.</h2>
            <div className="services-grid">
              {services.map(({ title, detail, Icon }) => (
                <article className="service" key={title}>
                  <Icon aria-hidden="true" weight="thin" />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
            <a className="button button--soft" href="#services"><span>Explore all services</span><ArrowRight aria-hidden="true" weight="bold" /></a>
          </div>
        </section>

        <section className="testimonial wave-section" aria-label="Client testimonial">
          <div className="container testimonial__inner">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>Anjali was so easy to talk to. I felt at ease as she guided me through a plan that worked for me.</blockquote>
            <Botanical className="testimonial__plant" />
          </div>
        </section>

        <section className="book-section" id="book" aria-labelledby="book-title">
          <div className="container book__inner">
            <Botanical className="book__plant book__plant--left" />
            <div><h2 id="book-title">Let’s take the next step, together.</h2><p>Book the care you deserve.</p></div>
            <BookingLink />
          </div>
        </section>
      </main>

      <footer className="site-footer" id="resources">
        <div className="container footer__main">
          <Logo footer />
          <nav aria-label="Footer navigation">
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            <a href="#book">Contact</a>
          </nav>
        </div>
        <div className="container footer__bottom" id="faq">
          <p>© {new Date().getFullYear()} The Tiny Physio. All rights reserved.</p>
          <p>Movement for a brighter you.</p>
        </div>
      </footer>
    </div>
  );
}
