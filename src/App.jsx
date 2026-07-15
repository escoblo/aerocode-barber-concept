import { useEffect, useState } from "react";

const services = [
  {
    name: "Coupe signature",
    description: "Diagnostic, coupe sur mesure, coiffage et finitions.",
    price: "29 €",
    duration: "40 min",
  },
  {
    name: "Taille de barbe",
    description: "Contours précis, serviette chaude et soin hydratant.",
    price: "19 €",
    duration: "25 min",
  },
  {
    name: "Rituel complet",
    description: "Coupe, barbe, soin du visage et finitions premium.",
    price: "45 €",
    duration: "60 min",
  },
];

const gallery = [
  {
    image: "/gallery-fade.svg",
    title: "Fade précis",
    label: "Dégradé",
  },
  {
    image: "/gallery-beard.svg",
    title: "Barbe sculptée",
    label: "Barbe",
  },
  {
    image: "/gallery-classic.svg",
    title: "Coupe classique",
    label: "Signature",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="concept-banner">
        Projet concept réalisé par <strong>AeroCode</strong> — entreprise fictive
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#accueil" aria-label="Atelier 33 Barber - Accueil">
          <span className="brand-mark">A33</span>
          <span>
            <strong>Atelier 33</strong>
            <small>Barber club</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#univers" onClick={closeMenu}>L’atelier</a>
          <a href="#galerie" onClick={closeMenu}>Galerie</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-booking" href="#reservation" onClick={closeMenu}>
            Réserver
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-noise" />
          <div className="hero-content page-width">
            <div className="hero-copy reveal">
              <p className="eyebrow">Barber shop · Bordeaux</p>
              <h1>
                Le style commence par une <em>coupe juste.</em>
              </h1>
              <p className="hero-description">
                Un barber club pensé pour celles et ceux qui recherchent précision,
                caractère et service sans compromis.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#reservation">
                  Prendre rendez-vous <ArrowIcon />
                </a>
                <a className="text-link" href="#services">
                  Découvrir les prestations
                </a>
              </div>
            </div>

            <div className="hero-visual reveal delay-1" aria-label="Illustration d’un barber shop haut de gamme">
              <div className="visual-frame">
                <img src="/hero-barber.svg" alt="Illustration abstraite d’un fauteuil de barbier" />
                <div className="visual-stamp">
                  <span>Depuis</span>
                  <strong>2018</strong>
                </div>
              </div>
              <div className="availability-card">
                <span className="status-dot" />
                <div>
                  <strong>Prochain créneau</strong>
                  <span>Aujourd’hui · 16 h 30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-metrics page-width" aria-label="Chiffres clés">
            <div><strong>4,9/5</strong><span>Avis clients</span></div>
            <div><strong>2 400+</strong><span>Coupes réalisées</span></div>
            <div><strong>3</strong><span>Barbiers experts</span></div>
          </div>
        </section>

        <section className="services-section section page-width" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nos prestations</p>
              <h2>Un service précis, sans superflu.</h2>
            </div>
            <p>
              Chaque rendez-vous commence par un échange. Nous adaptons la coupe,
              la technique et les finitions à votre visage et à votre style.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.name}>
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-meta">
                  <span>{service.duration}</span>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section section" id="univers">
          <div className="story-grid page-width">
            <div className="story-visual">
              <img src="/shop-interior.svg" alt="Illustration de l’intérieur élégant du barber shop" />
              <span className="vertical-label">Bordeaux · Chartrons</span>
            </div>

            <div className="story-copy">
              <p className="eyebrow">L’atelier</p>
              <h2>Un lieu calme. Une exigence visible dans chaque détail.</h2>
              <p>
                Bois sombre, métal brossé et lumière chaude : Atelier 33 a été imaginé
                comme une parenthèse au milieu de la ville. Ici, le temps du rendez-vous
                vous appartient.
              </p>
              <p>
                Nos barbiers travaillent les coupes classiques comme les dégradés modernes,
                avec le même niveau d’attention.
              </p>
              <a className="text-link light" href="#contact">
                Voir les horaires <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="gallery-section section page-width" id="galerie">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Dernières réalisations</p>
              <h2>Des lignes nettes. Un résultat naturel.</h2>
            </div>
            <a className="text-link" href="#contact">@atelier33barber</a>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <article className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-section section page-width" id="reservation">
          <div className="booking-card">
            <div>
              <p className="eyebrow">Votre prochain rendez-vous</p>
              <h2>Prêt pour une coupe qui vous ressemble ?</h2>
              <p>
                Réservez votre créneau en ligne. Confirmation immédiate et rappel avant le rendez-vous.
              </p>
            </div>
            <a
              className="button button-light"
              href="https://www.planity.com/"
              target="_blank"
              rel="noreferrer"
            >
              Réserver sur Planity <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="contact-section section page-width" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">Nous trouver</p>
            <h2>Atelier 33 Barber Club</h2>
            <p>18 rue du Concept, 33000 Bordeaux</p>
            <a href="tel:+33500000000">05 00 00 00 00</a>
            <a href="mailto:bonjour@atelier33.example">bonjour@atelier33.example</a>
          </div>

          <div className="hours-card">
            <h3>Horaires</h3>
            <div><span>Lundi</span><strong>Fermé</strong></div>
            <div><span>Mardi — Vendredi</span><strong>9 h 30 — 19 h</strong></div>
            <div><span>Samedi</span><strong>9 h — 18 h</strong></div>
            <div><span>Dimanche</span><strong>Fermé</strong></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div className="brand footer-brand">
            <span className="brand-mark">A33</span>
            <span><strong>Atelier 33</strong><small>Barber club</small></span>
          </div>
          <p>Concept fictif conçu et développé par <strong>AeroCode</strong>.</p>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
