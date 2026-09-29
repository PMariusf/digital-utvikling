"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "no" | "en";
type Theme = "dark" | "light";

const translations = {
  no: {
    skip: "Hopp til innhold",
    homeLabel: "Varegg Media – forsiden",
    navLabel: "Hovedmeny",
    nav: {
      about: "Om",
      services: "Tjenester",
      process: "Prosess",
      contact: "Ta kontakt",
    },
    themeLabel: "Bytt mellom mørk og lys visning",
    languageLabel: "Bytt språk til engelsk",
    hero: {
      kicker: "IT-utvikling · digitale løsninger",
      title: "Vi bygger digitale løsninger som",
      accent: " gjør en forskjell.",
      keywords: ["Digitalisere", "Automatisere", "Bygge", "Framheve", "Inkludere"],
      copy:
        "Vi kombinerer teknologi, design og mennesker for å gjøre arbeid enklere, informasjon mer tilgjengelig og gode ideer om til løsninger som fungerer.",
      primary: "Utforsk mulighetene",
      secondary: "Les mer",
    },
    about: {
      kicker: "Fra idé til digital løsning",
      title: "Teknologi skal gjøre ting",
      accent: " enklere.",
      copy:
        "Vi hjelper med å finne hva som kan forbedres, forenkles eller bygges på nytt. Målet er ikke mest mulig teknologi – men riktig teknologi, brukt på en måte som skaper verdi.",
      pillars: [
        {
          number: "01",
          title: "Digitalisere",
          text: "Vi gjør informasjon, tjenester og arbeidsprosesser digitale – enklere å bruke, administrere og videreutvikle.",
        },
        {
          number: "02",
          title: "Automatisere",
          text: "Vi kobler sammen data, systemer og prosesser slik at repetitivt arbeid kan skje automatisk der det gir mening.",
        },
        {
          number: "03",
          title: "Bygge",
          text: "Fra idé til ferdig løsning. Vi utvikler nettsider, webapplikasjoner, interne verktøy og skreddersydde systemer.",
        },
        {
          number: "04",
          title: "Framheve",
          text: "God teknologi skal også være tydelig. Vi kombinerer design, innhold og utvikling for å gjøre det viktige synlig.",
        },
        {
          number: "05",
          title: "Inkludere",
          text: "Vi bygger tilgjengelige løsninger med fokus på universell utforming, forståelig design og gode brukeropplevelser.",
        },
      ],
    },
    services: {
      kicker: "Hva vi bygger",
      title: "Utvikling som kan vokse med",
      accent: " behovet.",
      copy:
        "Fra en ny nettside til systemer som snakker sammen. Vi bygger med fokus på ytelse, tilgjengelighet, vedlikehold og videre utvikling.",
      items: [
        "Nettsider & webapplikasjoner",
        "Automatisering",
        "API & integrasjoner",
        "Databaser & systemer",
        "Design & brukeropplevelse",
        "Universell utforming",
      ],
    },
    process: {
      kicker: "Hvordan vi jobber",
      title: "Fra utfordring til",
      accent: " løsning.",
      items: [
        ["01", "Forstå", "Vi starter med behovet, utfordringen og menneskene som skal bruke løsningen."],
        ["02", "Forenkle", "Vi finner hva som kan digitaliseres, automatiseres eller bygges bedre."],
        ["03", "Bygge", "Vi designer og utvikler en moderne, robust og tilgjengelig løsning."],
        ["04", "Forbedre", "Vi tester, lærer og videreutvikler løsningen etter reelle behov."],
      ],
    },
    contact: {
      kicker: "Neste idé",
      title: "Har du en idé?",
      accent: "La oss bygge den.",
      copy:
        "Kontaktinformasjon og skjema kobles på når vi har bestemt hvordan henvendelser skal håndteres.",
    },
    footer: "Digitalisere · Automatisere · Bygge · Framheve · Inkludere",
  },
  en: {
    skip: "Skip to content",
    homeLabel: "Varegg Media – home",
    navLabel: "Main navigation",
    nav: {
      about: "About",
      services: "Services",
      process: "Process",
      contact: "Contact",
    },
    themeLabel: "Switch between dark and light mode",
    languageLabel: "Switch language to Norwegian",
    hero: {
      kicker: "IT development · digital solutions",
      title: "We build digital solutions that",
      accent: " make a difference.",
      keywords: ["Digitize", "Automate", "Build", "Highlight", "Include"],
      copy:
        "We combine technology, design and people to simplify work, make information more accessible and turn good ideas into solutions that work.",
      primary: "Explore possibilities",
      secondary: "Learn more",
    },
    about: {
      kicker: "From idea to digital solution",
      title: "Technology should make things",
      accent: " easier.",
      copy:
        "We help identify what can be improved, simplified or rebuilt. The goal is not more technology for its own sake – but the right technology, used in a way that creates value.",
      pillars: [
        {
          number: "01",
          title: "Digitize",
          text: "We turn information, services and workflows into digital solutions that are easier to use, manage and develop.",
        },
        {
          number: "02",
          title: "Automate",
          text: "We connect data, systems and processes so repetitive work can happen automatically where it makes sense.",
        },
        {
          number: "03",
          title: "Build",
          text: "From idea to finished solution. We develop websites, web applications, internal tools and tailored systems.",
        },
        {
          number: "04",
          title: "Highlight",
          text: "Good technology should also be clear. We combine design, content and development to make what matters visible.",
        },
        {
          number: "05",
          title: "Include",
          text: "We build accessible solutions with a focus on inclusive design, clarity and strong user experiences.",
        },
      ],
    },
    services: {
      kicker: "What we build",
      title: "Development that grows with",
      accent: " your needs.",
      copy:
        "From a new website to connected systems. We build with performance, accessibility, maintainability and future development in mind.",
      items: [
        "Websites & web applications",
        "Automation",
        "APIs & integrations",
        "Databases & systems",
        "Design & user experience",
        "Accessibility",
      ],
    },
    process: {
      kicker: "How we work",
      title: "From challenge to",
      accent: " solution.",
      items: [
        ["01", "Understand", "We start with the need, the challenge and the people who will use the solution."],
        ["02", "Simplify", "We identify what can be digitized, automated or built better."],
        ["03", "Build", "We design and develop a modern, robust and accessible solution."],
        ["04", "Improve", "We test, learn and continue developing based on real needs."],
      ],
    },
    contact: {
      kicker: "Your next idea",
      title: "Have an idea?",
      accent: "Let's build it.",
      copy:
        "Contact information and a form will be connected once we decide how enquiries should be handled.",
    },
    footer: "Digitize · Automate · Build · Highlight · Include",
  },
} as const;

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z" />
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("no");
  const [theme, setTheme] = useState<Theme>("dark");
  const copy = translations[language];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("varegg-theme") as Theme | null;
    const savedLanguage = window.localStorage.getItem("varegg-language") as Language | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }

    if (savedLanguage === "no" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("varegg-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "no" ? "nb" : "en";
    window.localStorage.setItem("varegg-language", language);
  }, [language]);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link sr-only z-[100] rounded px-4 py-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {copy.skip}
      </a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#" className="brand-logo" aria-label={copy.homeLabel}>
            <Image
              src="/ghimg.png"
              alt="Varegg Media"
              fill
              sizes="(max-width: 640px) 72px, 92px"
              className="object-contain object-left"
              priority
            />
          </a>

          <nav aria-label={copy.navLabel} className="main-nav">
            <a className="nav-link" href="#om">{copy.nav.about}</a>
            <a className="nav-link" href="#tjenester">{copy.nav.services}</a>
            <a className="nav-link" href="#prosess">{copy.nav.process}</a>
            <a className="button button-small" href="#kontakt">{copy.nav.contact}</a>
          </nav>

          <div className="header-controls">
            <button
              type="button"
              className="utility-button language-toggle"
              onClick={() => setLanguage((current) => (current === "no" ? "en" : "no"))}
              aria-label={copy.languageLabel}
              title={copy.languageLabel}
            >
              <span className={language === "no" ? "is-active" : ""}>NO</span>
              <span className="toggle-divider">/</span>
              <span className={language === "en" ? "is-active" : ""}>EN</span>
            </button>

            <button
              type="button"
              className="utility-button theme-toggle"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={copy.themeLabel}
              title={copy.themeLabel}
              aria-pressed={theme === "light"}
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="site-container relative z-10 flex min-h-[calc(100svh-6rem)] items-end py-16 sm:py-20 lg:py-24">
            <div className="w-full">
              <p className="section-kicker mb-7">{copy.hero.kicker}</p>

              <h1 className="hero-title max-w-6xl">
                {copy.hero.title}
                <span className="text-accent">{copy.hero.accent}</span>
              </h1>

              <div className="hero-bottom mt-10 grid gap-8 border-t pt-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div className="keyword-list flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
                  {copy.hero.keywords.map((keyword, index) => (
                    <span key={keyword} className="contents">
                      <span>{keyword}</span>
                      {index < copy.hero.keywords.length - 1 && <span aria-hidden="true">/</span>}
                    </span>
                  ))}
                </div>

                <div className="lg:justify-self-end">
                  <p className="lead-copy max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
                    {copy.hero.copy}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a className="button" href="#tjenester">{copy.hero.primary}</a>
                    <a className="button button-secondary" href="#om">{copy.hero.secondary}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="om" className="section">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-kicker">{copy.about.kicker}</p>
              <h2 className="section-title">
                {copy.about.title}
                <span className="text-accent">{copy.about.accent}</span>
              </h2>
              <p className="section-copy">{copy.about.copy}</p>
            </div>

            <div className="pillar-list mt-16 border-t">
              {copy.about.pillars.map((pillar) => (
                <article key={pillar.number} className="pillar-row group">
                  <span className="pillar-number">{pillar.number}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-copy">{pillar.text}</p>
                  <span className="pillar-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tjenester" className="section services-section border-y">
          <div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker">{copy.services.kicker}</p>
              <h2 className="section-title max-w-xl">
                {copy.services.title}
                <span className="text-accent">{copy.services.accent}</span>
              </h2>
              <p className="section-copy max-w-xl">{copy.services.copy}</p>
            </div>

            <div className="card-grid grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
              {copy.services.items.map((service, index) => (
                <div key={service} className="service-card">
                  <span className="text-xs font-medium tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="card-title mt-16 text-xl font-medium tracking-tight">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prosess" className="section">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-kicker">{copy.process.kicker}</p>
              <h2 className="section-title">
                {copy.process.title}
                <span className="text-accent">{copy.process.accent}</span>
              </h2>
            </div>

            <div className="card-grid mt-16 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2 xl:grid-cols-4">
              {copy.process.items.map(([number, title, text]) => (
                <article key={number} className="process-card">
                  <span className="process-number">{number}</span>
                  <h3 className="card-title mt-16 text-2xl font-medium tracking-tight">{title}</h3>
                  <p className="card-copy mt-4 text-sm leading-6">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="cta-section">
          <div className="site-container">
            <p className="section-kicker">{copy.contact.kicker}</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="cta-title max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                {copy.contact.title}
                <span className="block text-accent">{copy.contact.accent}</span>
              </h2>
              <p className="cta-copy max-w-sm text-sm leading-6 lg:text-right">
                {copy.contact.copy}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer border-t py-8">
        <div className="site-container flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Varegg Media</p>
          <p>{copy.footer}</p>
        </div>
      </footer>
    </>
  );
}
