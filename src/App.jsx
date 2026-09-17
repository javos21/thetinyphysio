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
  Sparkle,
  X,
} from "@phosphor-icons/react";
import { siteConfig } from "./siteConfig.js";

const concerns = [
  { label: "Pelvic concerns", href: "/services#pelvic-health", Icon: PersonSimpleTaiChi },
  { label: "Pregnancy & postpartum", href: "/services#pregnancy-postpartum", Icon: Baby },
  { label: "Jaw pain & headaches", href: "/services#tmj-jaw-pain", Icon: HeadCircuit },
  { label: "Injury & movement", href: "/services#orthopedic-physiotherapy", Icon: PersonSimpleRun },
];

const approach = [
  { text: "I listen to the whole person.", Icon: ChatCircleDots },
  { text: "Treatment grounded in evidence.", Icon: BookOpenText },
  { text: "A plan made for your life.", Icon: Heart },
];

const services = [
  { id: "pelvic-health", title: "Pelvic health", detail: "Comfort, strength and confidence", Icon: PersonSimpleTaiChi },
  { id: "pregnancy-postpartum", title: "Pregnancy & postpartum", detail: "Support through every stage", Icon: Baby },
  { id: "tmj-jaw-pain", title: "TMJ & jaw pain", detail: "Ease tension and restore movement", Icon: HeadCircuit },
  { id: "headaches-migraine", title: "Headaches & migraine", detail: "Targeted, thoughtful care", Icon: Brain },
  { id: "orthopedic-physiotherapy", title: "Orthopedic physiotherapy", detail: "Return to what you love", Icon: PersonSimpleRun },
];

const qualifications = [
  { title: "Master of Physical Therapy", detail: "A graduate degree in physical therapy." },
  { title: "Health Sciences", detail: "Specialization in Rehabilitation Sciences at Western University." },
  { title: "Minor in Psychology", detail: "A foundation for understanding the person behind the symptoms." },
  { title: "Pelvic health training", detail: "Completed Level 1, 2 and 3 training in pelvic health." },
];

const aboutApproach = [
  {
    title: "Start with listening",
    text: "Your story, priorities and lived experience guide where we begin.",
    Icon: ChatCircleDots,
  },
  {
    title: "Look at the whole person",
    text: "Physical, mental and emotional health are all part of the picture.",
    Icon: Sparkle,
  },
  {
    title: "Build a plan that fits",
    text: "Care should support your actual life, not ask you to work around it.",
    Icon: Heart,
  },
];

function getNavItems(page) {
  const isHomePage = page === "home";

  return [
    ["Home", isHomePage ? "#home" : "/#home"],
    ["About", "/about"],
    ["Services", page === "services" ? "#services-top" : "/services"],
    ["Resources", isHomePage ? "#resources" : "/#resources"],
    ["FAQ", isHomePage ? "#faq" : "/#faq"],
  ];
}

function Logo({ footer = false, homeHref = "#home" }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href={homeHref} aria-label="The Tiny Physio home">
      <span className="brand__crop" aria-hidden="true">
        <img src="/assets/tiny-physio-logo.jpg" alt="" />
      </span>
    </a>
  );
}

function BookingLink({ className = "button", children = "Book an appointment", href = siteConfig.bookingUrl }) {
  return (
    <a className={className} href={href}>
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

function SiteHeader({ page, menuOpen, setMenuOpen }) {
  const navItems = getNavItems(page);
  const isHomePage = page === "home";
  const bookingHref = siteConfig.bookingUrl === "#book" && page !== "home" ? `#${page}-book` : siteConfig.bookingUrl;

  return (
    <header className="site-header" id={isHomePage ? "home" : undefined}>
      <div className="container header__inner">
        <Logo homeHref={isHomePage ? "#home" : "/#home"} />
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
            {navItems.map(([label, href]) => {
              const isCurrent = (page === "about" && label === "About") || (page === "services" && label === "Services") || (isHomePage && label === "Home");
              return (
                <li key={label}>
                  <a
                    className={isCurrent ? "nav-link--active" : ""}
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <BookingLink className="button button--header" href={bookingHref} />
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ page }) {
  const navItems = getNavItems(page);
  const isHomePage = page === "home";

  return (
    <footer className="site-footer" id={isHomePage ? "resources" : undefined}>
      <div className="container footer__main">
        <Logo footer homeHref={isHomePage ? "#home" : "/#home"} />
        <nav aria-label="Footer navigation">
          {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          <a href={isHomePage ? "#book" : "/#book"}>Contact</a>
        </nav>
      </div>
      <div className="container footer__bottom" id={isHomePage ? "faq" : undefined}>
        <p>© {new Date().getFullYear()} The Tiny Physio. All rights reserved.</p>
        <p>Movement for a brighter you.</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 id="hero-title">Physiotherapy that sees the whole you.</h1>
            <p>Personalized care for pelvic health, pregnancy, jaw pain and everyday movement.</p>
            <div className="hero__actions">
              <BookingLink />
              <a className="text-link" href="/services">Explore services <ArrowRight aria-hidden="true" weight="bold" /></a>
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
            <a className="text-link" href="/about">Meet Anjali <ArrowRight aria-hidden="true" weight="bold" /></a>
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
          <a className="button button--soft" href="/services"><span>Explore all services</span><ArrowRight aria-hidden="true" weight="bold" /></a>
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
    </>
  );
}

function ServicesPage() {
  const servicesBookingHref = siteConfig.bookingUrl === "#book" ? "#services-book" : siteConfig.bookingUrl;

  return (
    <div className="services-page">
      <section className="services-hero" id="services-top" aria-labelledby="services-hero-title">
        <div className="container services-hero__grid">
          <div className="services-hero__content">
            <h1 id="services-hero-title">Expert care for life’s changing seasons.</h1>
            <p className="services-hero__lead">Support for the ways your body moves, changes and recovers.</p>
            <p>Explore the areas of care offered by The Tiny Physio. We’ll start with your story and build from there.</p>
            <BookingLink href={servicesBookingHref} />
          </div>
          <div className="services-hero__visual">
            <img className="organic-wash" src="/assets/organic-blush-wash.png" alt="" aria-hidden="true" />
            <Portrait className="portrait--services-hero" cutout />
            <p className="services-hero__note">Care for every season.</p>
            <Botanical className="services-hero__plant" />
          </div>
        </div>
      </section>

      <section className="service-directory wave-section" aria-labelledby="service-directory-title">
        <div className="container service-directory__grid">
          <div className="service-directory__intro">
            <h2 id="service-directory-title">Find your starting point.</h2>
            <p>There is no wrong place to begin. Explore the area that feels closest to what you need right now.</p>
          </div>
          <nav className="service-directory__nav" aria-label="Service areas">
            {services.map(({ id, title }, index) => (
              <a href={`#${id}`} key={id}>
                <span className="service-directory__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{title}</span>
                <ArrowRight aria-hidden="true" weight="bold" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="service-details-section" aria-labelledby="service-details-title">
        <div className="container">
          <div className="service-details__intro">
            <h2 id="service-details-title">One thoughtful approach,<br />five areas of care.</h2>
            <p>Whether you are working through a new concern or looking for support in a season of change, care is shaped around you.</p>
          </div>
          <div className="service-detail-list">
            {services.map(({ id, title, detail, Icon }, index) => (
              <article className="service-detail" id={id} key={id}>
                <div className="service-detail__visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon weight="thin" />
                </div>
                <div className="service-detail__content">
                  <h3>{title}</h3>
                  <p>{detail}.</p>
                  <a className="text-link" href={servicesBookingHref}>Talk about your care <ArrowRight aria-hidden="true" weight="bold" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-approach-section wave-section wave-section--reverse" aria-labelledby="services-approach-title">
        <div className="container">
          <h2 id="services-approach-title">Care shaped around your life.</h2>
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

      <section className="services-book-section" id="services-book" aria-labelledby="services-book-title">
        <div className="container services-book__inner">
          <Botanical className="services-book__plant" />
          <div>
            <h2 id="services-book-title">Not sure where to start?</h2>
            <p>Let’s find the right next step, together.</p>
          </div>
          <BookingLink href={servicesBookingHref} />
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const aboutBookingHref = siteConfig.bookingUrl === "#book" ? "#about-book" : siteConfig.bookingUrl;

  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="container about-hero__grid">
          <div className="about-hero__content">
            <h1 id="about-hero-title">Meet Anjali.</h1>
            <p className="about-hero__lead">Care that starts with seeing the whole person.</p>
            <p>I’m the physiotherapist and founder behind The Tiny Physio. I believe your care should feel personal, practical and grounded in what matters to you.</p>
            <BookingLink href={aboutBookingHref} />
          </div>
          <div className="about-hero__visual">
            <img className="organic-wash" src="/assets/organic-blush-wash.png" alt="" aria-hidden="true" />
            <Portrait className="portrait--about-hero" cutout />
            <p className="about-hero__note">A little more ease in every day.</p>
            <Botanical className="about-hero__plant" />
          </div>
        </div>
      </section>

      <section className="story-section" aria-labelledby="story-title">
        <div className="container story-grid">
          <div className="story__content">
            <h2 id="story-title">My story is rooted in connection.</h2>
            <p>In my care, I focus on understanding the whole person, not just the condition. I take a trauma-informed, holistic approach and look at how physical, mental and emotional health all connect.</p>
            <p>I’m also Caribbean-Canadian, and that background is a meaningful part of how I connect with people from different walks of life. No two recovery journeys are the same, so your care should never feel one-size-fits-all.</p>
          </div>
          <div className="story__aside">
            <span className="story__mark" aria-hidden="true">“</span>
            <p>Every person deserves to feel heard, supported and confident in their own body.</p>
          </div>
        </div>
      </section>

      <section className="qualifications-section wave-section" aria-labelledby="qualifications-title">
        <div className="container qualifications-grid">
          <div className="qualifications__intro">
            <h2 id="qualifications-title">Qualifications &amp; certifications.</h2>
            <p>My training brings together rehabilitation sciences, psychology and continued learning in pelvic health.</p>
          </div>
          <div className="qualification-list">
            {qualifications.map(({ title, detail }, index) => (
              <div className="qualification" key={title}>
                <span className="qualification__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-care-section" aria-labelledby="about-care-title">
        <div className="container">
          <h2 id="about-care-title">My approach to care.</h2>
          <div className="about-care-grid">
            {aboutApproach.map(({ title, text, Icon }) => (
              <article className="about-care-item" key={title}>
                <Icon aria-hidden="true" weight="thin" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section wave-section wave-section--reverse" aria-labelledby="why-title">
        <div className="container why-grid">
          <div className="why__content">
            <h2 id="why-title">Why The Tiny Physio?</h2>
            <p>The Tiny Physio is a space for care that is thoughtful, collaborative and truly tailored to you. Whether you’re navigating pelvic health, pregnancy and postpartum, jaw pain, headaches or a musculoskeletal concern, we’ll make a plan together.</p>
            <p>Outside of work, you’ll find me painting, playing badminton or spending time outdoors. These everyday joys keep me connected to the kind of movement and life I want to help make possible for my patients.</p>
          </div>
          <div className="why__visual">
            <img className="organic-wash" src="/assets/organic-blush-wash.png" alt="" aria-hidden="true" />
            <Portrait className="portrait--why" cutout />
            <Botanical className="why__plant" />
          </div>
        </div>
      </section>

      <section className="about-book-section" id="about-book" aria-labelledby="about-book-title">
        <div className="container about-book__inner">
          <Botanical className="about-book__plant" />
          <div>
            <h2 id="about-book-title">Ready to feel more like yourself?</h2>
            <p>Let’s take the next step together.</p>
          </div>
          <BookingLink href={aboutBookingHref} />
        </div>
      </section>
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, "");
  const page = pathname === "/about" ? "about" : pathname === "/services" ? "services" : "home";

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    document.title = page === "about" ? "About Anjali | The Tiny Physio" : page === "services" ? "Services | The Tiny Physio" : "The Tiny Physio";
    return () => window.removeEventListener("hashchange", closeMenu);
  }, [page]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content">{page === "about" ? <AboutPage /> : page === "services" ? <ServicesPage /> : <HomePage />}</main>
      <SiteFooter page={page} />
    </div>
  );
}
