// i18n content and interactive enhancements
(function () {
  const translations = {
    en: {
      accueil: "Home",
      aPropos: "About",
      services: "Services",
      contact: "Contact",
      horaires: "Hours",
      contrat: "Contract",
      bienvenue: "Welcome to Krystal Clean",
      description: "Give your vehicle the care it deserves with our professional car cleaning services.",
      decouvrez: "Discover our services",
      nosServices: "Our Services",
      nettoyageInterieur: "Interior Cleaning",
      nettoyageInterieurDesc: "A deep cleaning for a spotless interior.",
      traitementCire: "Wax Treatment",
      traitementCireDesc: "Protection and shine for your bodywork.",
      nettoyageExterieur: "Exterior Cleaning",
      nettoyageExterieurDesc: "Restore the shine to your vehicle's exterior.",
      pourquoiNous: "Why Choose Us?",
      equipementModerne: "Modern Equipment",
      equipementModerneDesc: "We use modern tools to ensure quality service.",
      garantieService: "Service Guarantee",
      garantieServiceDesc: "Your satisfaction is our top priority.",
      supportDedie: "Dedicated Support",
      supportDedieDesc: "A team ready to meet your needs.",
      contratTitle: "Contract",
      aProposNous: "About Us",
      contactezNous: "Contact Us",
      envoyer: "Send",
      horairesTitle: "Hours",
      lundi: "Monday",
      mardi: "Tuesday",
      mercredi: "Wednesday",
      jeudi: "Thursday",
      vendredi: "Friday",
      samedi: "Saturday",
      dimanche: "Sunday",
      ferme: "Closed",
      equipe: "The Team",
      expertNettoyage: "Expert in interior and exterior cleaning.",
      specialisteCire: "Specialist in wax treatment.",
      passionneDetails: "Passionate about details and finishing."
    },
    fr: {
      accueil: "Accueil",
      aPropos: "À propos",
      services: "Services",
      contact: "Contact",
      horaires: "Horaires",
      contrat: "Contrat",
      bienvenue: "Bienvenue chez Krystal Clean",
      description: "Offrez à votre véhicule le soin qu'il mérite avec nos services de nettoyage automobile professionnels.",
      decouvrez: "Découvrez nos services",
      nosServices: "Nos Services",
      nettoyageInterieur: "Nettoyage intérieur",
      nettoyageInterieurDesc: "Un nettoyage en profondeur pour un intérieur impeccable.",
      traitementCire: "Traitement à la cire",
      traitementCireDesc: "Protection et brillance pour votre carrosserie.",
      nettoyageExterieur: "Nettoyage extérieur",
      nettoyageExterieurDesc: "Redonnez de l'éclat à l'extérieur de votre véhicule.",
      pourquoiNous: "Pourquoi nous choisir ?",
      equipementModerne: "Équipement moderne",
      equipementModerneDesc: "Nous utilisons des outils modernes pour garantir un service de qualité.",
      garantieService: "Garantie de service",
      garantieServiceDesc: "Votre satisfaction est notre priorité absolue.",
      supportDedie: "Support dédié",
      supportDedieDesc: "Une équipe à votre écoute pour répondre à vos besoins.",
      contratTitle: "Contrat",
      aProposNous: "À propos de nous",
      contactezNous: "Contactez-nous",
      envoyer: "Envoyer",
      horairesTitle: "Horaires",
      lundi: "Lundi",
      mardi: "Mardi",
      mercredi: "Mercredi",
      jeudi: "Jeudi",
      vendredi: "Vendredi",
      samedi: "Samedi",
      dimanche: "Dimanche",
      ferme: "Fermé",
      equipe: "L'Équipe",
      expertNettoyage: "Expert en nettoyage intérieur et extérieur.",
      specialisteCire: "Spécialiste en traitement à la cire.",
      passionneDetails: "Passionné par les détails et la finition."
    }
  };

  const preferred = localStorage.getItem('lang') || 'fr';
  let currentLanguage = preferred;

  function applyLang(langKey) {
    const lang = translations[langKey];
    if (!lang) return;

    document.documentElement.setAttribute('lang', langKey === 'fr' ? 'fr' : 'en');

    document.querySelectorAll("a[href='#home']").forEach(el => el.textContent = lang.accueil);
    document.querySelectorAll("a[href='#about']").forEach(el => el.textContent = lang.aPropos);
    document.querySelectorAll("a[href='#services']").forEach(el => el.textContent = lang.services);
    document.querySelectorAll("a[href='#contact']").forEach(el => el.textContent = lang.contact);
    document.querySelectorAll("a[href='#horaires']").forEach(el => el.textContent = lang.horaires);
    document.querySelectorAll("a[href='#contrat']").forEach(el => el.textContent = lang.contrat);

    const home = document.querySelector('#home');
    if (home) {
      const h1 = home.querySelector('h1');
      const p = home.querySelector('p');
      const a = home.querySelector('a');
      if (h1) h1.textContent = lang.bienvenue;
      if (p) p.textContent = lang.description;
      if (a) a.textContent = lang.decouvrez;
    }

    const services = document.querySelector('#services');
    if (services) {
      const h2 = services.querySelector('h2');
      if (h2) h2.textContent = lang.nosServices;
      const h4s = services.querySelectorAll('.service-item h4');
      const ps = services.querySelectorAll('.service-item p');
      if (h4s[0]) h4s[0].textContent = lang.nettoyageInterieur;
      if (ps[0]) ps[0].textContent = lang.nettoyageInterieurDesc;
      if (h4s[1]) h4s[1].textContent = lang.traitementCire;
      if (ps[1]) ps[1].textContent = lang.traitementCireDesc;
      if (h4s[2]) h4s[2].textContent = lang.nettoyageExterieur;
      if (ps[2]) ps[2].textContent = lang.nettoyageExterieurDesc;
    }

    const why = document.querySelector('.why-choose-us');
    if (why) {
      const h2 = why.querySelector('h2');
      if (h2) h2.textContent = lang.pourquoiNous;
      const h4s = why.querySelectorAll('.item h4');
      const ps = why.querySelectorAll('.item p');
      if (h4s[0]) h4s[0].textContent = lang.equipementModerne;
      if (ps[0]) ps[0].textContent = lang.equipementModerneDesc;
      if (h4s[1]) h4s[1].textContent = lang.garantieService;
      if (ps[1]) ps[1].textContent = lang.garantieServiceDesc;
      if (h4s[2]) h4s[2].textContent = lang.supportDedie;
      if (ps[2]) ps[2].textContent = lang.supportDedieDesc;
    }

    const contratHead = document.querySelector('#contrat h2');
    if (contratHead) contratHead.textContent = lang.contratTitle;

    const aboutHead = document.querySelector('#about h2');
    if (aboutHead) aboutHead.textContent = lang.aProposNous;

    const contactHead = document.querySelector('#contact h2');
    const sendBtn = document.querySelector('#contact button');
    if (contactHead) contactHead.textContent = lang.contactezNous;
    if (sendBtn) sendBtn.textContent = lang.envoyer;

    const horairesHead = document.querySelector('#horaires h2');
    if (horairesHead) horairesHead.textContent = lang.horairesTitle;
    const jours = document.querySelectorAll('#horaires tbody tr td:first-child');
    if (jours.length >= 7) {
      jours[0].textContent = lang.lundi;
      jours[1].textContent = lang.mardi;
      jours[2].textContent = lang.mercredi;
      jours[3].textContent = lang.jeudi;
      jours[4].textContent = lang.vendredi;
      jours[5].textContent = lang.samedi;
      jours[6].textContent = lang.dimanche;
      const lastCells = document.querySelectorAll('#horaires tbody tr td:last-child');
      if (lastCells[6]) lastCells[6].textContent = lang.ferme;
    }

    const teamHead = document.querySelector('#team h2');
    if (teamHead) teamHead.textContent = lang.equipe;
    const teamPs = document.querySelectorAll('#team .team-member p');
    if (teamPs[0]) teamPs[0].textContent = lang.expertNettoyage;
    if (teamPs[1]) teamPs[1].textContent = lang.specialisteCire;
    if (teamPs[2]) teamPs[2].textContent = lang.passionneDetails;

    const toggle = document.getElementById('languageToggle');
    if (toggle) {
      toggle.textContent = langKey === 'fr' ? 'English' : 'Français';
      toggle.setAttribute('aria-label', langKey === 'fr' ? 'Switch language to English' : 'Changer la langue en français');
    }

    localStorage.setItem('lang', langKey);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initial language
    applyLang(currentLanguage);

    const toggle = document.getElementById('languageToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        applyLang(currentLanguage);
      });
    }

    // Back to top visibility and action
    const backToTop = document.getElementById('backToTop');
    function onScroll() {
      if (!backToTop) return;
      const show = window.scrollY > 300;
      backToTop.hidden = !show;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Pricing calculation
    const basePrices = {
      auto: { bronze: 60, argent: 90, or: 170 },
      camion: { bronze: 75, argent: 150, or: 225 },
      moto: { bronze: 50, argent: 80, or: 120 }
    };
    const extrasPrices = { moteur: 50, parfum: 10 };
    const vehicleEl = document.getElementById('vehicleType');
    const packageEl = document.getElementById('package');
    const extraMoteurEl = document.getElementById('extraMoteur');
    const extraParfumEl = document.getElementById('extraParfum');
    const totalEl = document.getElementById('totalPrice');

    function calcTotal() {
      if (!vehicleEl || !packageEl || !totalEl) return;
      const v = vehicleEl.value || 'auto';
      const p = packageEl.value || 'bronze';
      let total = (basePrices[v] && basePrices[v][p]) ? basePrices[v][p] : 0;
      if (extraMoteurEl && extraMoteurEl.checked) total += extrasPrices.moteur;
      if (extraParfumEl && extraParfumEl.checked) total += extrasPrices.parfum;
      totalEl.textContent = `$${total}`;
      return total;
    }
    ['change', 'input'].forEach(evt => {
      if (vehicleEl) vehicleEl.addEventListener(evt, calcTotal);
      if (packageEl) packageEl.addEventListener(evt, calcTotal);
      if (extraMoteurEl) extraMoteurEl.addEventListener(evt, calcTotal);
      if (extraParfumEl) extraParfumEl.addEventListener(evt, calcTotal);
    });
    calcTotal();

    // Booking form submit via mailto (simple, no backend)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('custName')?.value || '';
        const email = document.getElementById('custEmail')?.value || '';
        const phone = document.getElementById('custPhone')?.value || '';
        const date = document.getElementById('date')?.value || '';
        const time = document.getElementById('time')?.value || '';
        const v = vehicleEl?.value || '';
        const p = packageEl?.value || '';
        const extras = [];
        if (extraMoteurEl?.checked) extras.push('baie moteur');
        if (extraParfumEl?.checked) extras.push('parfum');
        const total = calcTotal() || 0;

        const subject = encodeURIComponent('Demande de réservation Krystal Clean');
        const body = encodeURIComponent(
          `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nVéhicule: ${v}\nForfait: ${p}\nExtras: ${extras.join(', ') || 'Aucun'}\n\nDate: ${date}\nHeure: ${time}\n\nTotal estimé: $${total}\n\nMessage: (ajoutez vos précisions ici)`
        );
        const to = 'contact@krystalclean.com';
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      });
    }

    // Simple lightbox for gallery
    const lb = document.getElementById('lightbox');
    if (lb) {
      const img = lb.querySelector('.lightbox-img');
      const caption = lb.querySelector('.lightbox-caption');
      const closeBtn = lb.querySelector('.lightbox-close');
      document.querySelectorAll('a.lightbox-item').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          const href = a.getAttribute('href');
          const title = a.getAttribute('data-title') || '';
          img.src = href;
          caption.textContent = title;
          lb.hidden = false;
          document.body.style.overflow = 'hidden';
        });
      });
      function close() {
        lb.hidden = true;
        document.body.style.overflow = '';
      }
      closeBtn?.addEventListener('click', close);
      lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) close(); });
    }

    // Dark mode toggle with persistence
    const themeToggle = document.getElementById('themeToggle');
    const pref = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (pref === 'dark' || (!pref && prefersDark)) document.documentElement.classList.add('dark');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
      });
      // Set initial icon
      const isDark = document.documentElement.classList.contains('dark');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    }
  });
})();
