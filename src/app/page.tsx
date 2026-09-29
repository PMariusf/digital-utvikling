const pillars = [
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
];

const services = [
  "Nettsider & webapplikasjoner",
  "Automatisering",
  "API & integrasjoner",
  "Databaser & systemer",
  "Design & brukeropplevelse",
  "Universell utforming",
];

const process = [
  ["01", "Forstå", "Vi starter med behovet, utfordringen og menneskene som skal bruke løsningen."],
  ["02", "Forenkle", "Vi finner hva som kan digitaliseres, automatiseres eller bygges bedre."],
  ["03", "Bygge", "Vi designer og utvikler en moderne, robust og tilgjengelig løsning."],
  ["04", "Forbedre", "Vi tester, lærer og videreutvikler løsningen etter reelle behov."],
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded bg-white px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Hopp til innhold
      </a>

      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between gap-8">
          <a href="#" className="brand" aria-label="Digital Utvikling – forsiden">
            <span className="brand-mark" aria-hidden="true" />
            <span>
              DIGITAL
              <span className="block text-[0.62rem] font-medium tracking-[0.32em] text-white/45">
                UTVIKLING
              </span>
            </span>
          </a>

          <nav aria-label="Hovedmeny" className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="nav-link" href="#om">Om</a>
            <a className="nav-link" href="#tjenester">Tjenester</a>
            <a className="nav-link" href="#prosess">Prosess</a>
            <a className="button button-small" href="#kontakt">Ta kontakt</a>
          </nav>

          <a className="button button-small md:hidden" href="#kontakt">
            Kontakt
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-end py-16 sm:py-20 lg:py-24">
            <div className="w-full">
              <p className="section-kicker mb-7">IT-utvikling · digitale løsninger</p>

              <h1 className="hero-title max-w-6xl">
                Vi bygger digitale løsninger som
                <span className="text-accent"> gjør en forskjell.</span>
              </h1>

              <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-sm">
                  <span>Digitalisere</span>
                  <span aria-hidden="true">/</span>
                  <span>Automatisere</span>
                  <span aria-hidden="true">/</span>
                  <span>Bygge</span>
                  <span aria-hidden="true">/</span>
                  <span>Framheve</span>
                  <span aria-hidden="true">/</span>
                  <span>Inkludere</span>
                </div>

                <div className="lg:justify-self-end">
                  <p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    Vi kombinerer teknologi, design og mennesker for å gjøre arbeid enklere,
                    informasjon mer tilgjengelig og gode ideer om til løsninger som fungerer.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a className="button" href="#tjenester">Utforsk mulighetene</a>
                    <a className="button button-secondary" href="#om">Les mer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="om" className="section">
          <div className="site-container">
            <div className="section-heading">
              <p className="section-kicker">Fra idé til digital løsning</p>
              <h2 className="section-title">
                Teknologi skal gjøre ting
                <span className="text-accent"> enklere.</span>
              </h2>
              <p className="section-copy">
                Vi hjelper med å finne hva som kan forbedres, forenkles eller bygges på nytt.
                Målet er ikke mest mulig teknologi – men riktig teknologi, brukt på en måte
                som skaper verdi.
              </p>
            </div>

            <div className="mt-16 border-t border-white/10">
              {pillars.map((pillar) => (
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

        <section id="tjenester" className="section border-y border-white/10 bg-white/[0.025]">
          <div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker">Hva vi bygger</p>
              <h2 className="section-title max-w-xl">
                Utvikling som kan vokse med
                <span className="text-accent"> behovet.</span>
              </h2>
              <p className="section-copy max-w-xl">
                Fra en ny nettside til systemer som snakker sammen. Vi bygger med fokus på
                ytelse, tilgjengelighet, vedlikehold og videre utvikling.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={service} className="service-card">
                  <span className="text-xs font-medium tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-16 text-xl font-medium tracking-tight text-white">
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
              <p className="section-kicker">Hvordan vi jobber</p>
              <h2 className="section-title">
                Fra utfordring til
                <span className="text-accent"> løsning.</span>
              </h2>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {process.map(([number, title, text]) => (
                <article key={number} className="process-card">
                  <span className="process-number">{number}</span>
                  <h3 className="mt-16 text-2xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="cta-section">
          <div className="site-container">
            <p className="section-kicker">Neste idé</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
                Har du en idé?
                <span className="block text-accent">La oss bygge den.</span>
              </h2>
              <a className="button whitespace-nowrap" href="mailto:hei@digitalutvikling.no">
                Start en samtale
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="site-container flex flex-col gap-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Digital Utvikling</p>
          <p>Digitalisere · Automatisere · Bygge · Framheve · Inkludere</p>
        </div>
      </footer>
    </>
  );
}
