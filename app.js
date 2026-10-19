(() => {
  'use strict';
  const translations = {
    skip: 'Saltar al contenido', navResearch: 'Investigación', navProjects: 'Ejercicios', navBackground: 'Trayectoria', navContact: 'Contacto',
    heroLabel: 'INVESTIGACIÓN EN FINANZAS · UNIVERSIDAD DE ALICANTE', heroRole: 'Investigador predoctoral en Finanzas',
    heroIntro: 'Soy doctorando en valoración de activos en la Universidad de Alicante. Mis intereses de investigación se centran en la valoración de activos y la predicción de rentabilidades bursátiles.',
    heroSecondary: 'Soy titulado del Máster en Finanzas de la Universidad Carlos III de Madrid y graduado en Administración y Dirección de Empresas por la Universidad de Alicante. Anteriormente trabajé en finanzas cuantitativas en el equipo de Financial Instrument Assurance de PwC.',
    cvButton: 'CV académico', emailButton: 'Contactar', location: 'Alicante, España', affiliation: 'Departamento de Economía Financiera y Contabilidad', university: 'Universidad de Alicante',
    interestsLabel: 'INTERESES DE INVESTIGACIÓN', interestOne: 'Valoración de activos', interestTwo: 'Predicción de rentabilidades', interestThree: 'Finanzas cuantitativas',
    researchLabel: 'INVESTIGACIÓN', researchTitle: 'Comprender los mercados financieros.', researchLead: 'Mi investigación doctoral se centra en la valoración de activos, con especial interés en la predicción de rentabilidades bursátiles.',
    topicOneTitle: 'Valoración de activos', topicOneText: 'El estudio del riesgo, las rentabilidades esperadas y la valoración de los activos financieros.', topicTwoTitle: 'Predicción de rentabilidades', topicTwoText: 'Explorar la información de los datos financieros para comprender el comportamiento de las rentabilidades bursátiles.', followResearch: 'Sigue mi trayectoria académica',
    projectsLabel: 'EJERCICIOS', projectsTitle: 'Ejercicios empíricos', projectsNote: 'Ejercicios de clase y de práctica', projectsLead: 'Una selección de ejercicios de clase y de práctica en finanzas cuantitativas.',
    dateFX: 'SEP 2024', dateLDA: 'ABR 2024', dateOptions: 'MAR 2024', dateMA: 'FEB 2024', datePortfolio: 'JUN 2023', tagTrading: 'ESTRATEGIAS DE INVERSIÓN', tagRisk: 'GESTIÓN DE RIESGOS', tagDerivatives: 'DERIVADOS', tagPortfolio: 'GESTIÓN DE CARTERAS',
    readDocument: 'Leer documento', fxSummary: 'Un ejercicio sobre estrategias de inversión en el mercado de divisas.',
    ldaTitle: 'Simulación de pérdidas agregadas ↗', ldaSummary: 'Riesgo operacional con el enfoque de distribución de pérdidas: combinación de frecuencia y severidad mediante simulación de Monte Carlo.', methodology: 'Metodología', ldaDetail: 'La frecuencia de los eventos se modeliza con una distribución de Poisson y su severidad con una distribución lognormal. El muestreo iterativo combina ambos componentes para simular las pérdidas operacionales agregadas.',
    optionsTitle: 'Valoración de opciones Best-of ↗', optionsSummary: 'Valoración de una opción best-of sobre cuatro activos subyacentes, conectando el modelo estocástico con su implementación numérica en Python.',
    maTitle: '¿Es rentable la estrategia de medias móviles? ↗', maSummary: 'Un estudio de seguimiento de tendencias con 500 observaciones del S&P 500 y medias móviles simples de 10 y 45 días.',
    portfolioTitle: 'Más allá de la cartera tangente tradicional ↗', portfolioSummary: 'Comparación entre la cartera tangente tradicional y una cartera arriesgada óptima construida a partir de momentos parciales inferiores.', aboutProject: 'Sobre este ejercicio', portfolioDetail: 'Un extracto del apartado 4 de mi trabajo de fin de grado, escrito en español, que incluye parte de la implementación en R.', exploreGithub: 'Explorar mi GitHub',
    backgroundLabel: 'TRAYECTORIA', backgroundTitle: 'Una trayectoria en finanzas.', current: 'ACTUAL', phdTitle: 'Investigación doctoral en valoración de activos', phdNote: 'Investigador predoctoral · Economía Financiera y Contabilidad', mastersLabel: 'MÁSTER', mastersTitle: 'Máster en Finanzas', bachelorsLabel: 'GRADO', bachelorsTitle: 'Administración y Dirección de Empresas',
    experienceLabel: 'EXPERIENCIA PROFESIONAL', experienceText: 'Experiencia en finanzas cuantitativas en PwC, dentro del equipo de Financial Instrument Assurance.', resourcesTitle: 'Recursos de consulta', resourcesText: 'Un par de recursos que encuentro útiles para investigar.', vilkov: 'Datos y código', consensus: 'Biblioteca de investigación',
    contactLabel: 'CONTACTO', contactEyebrow: 'LA INVESTIGACIÓN EMPIEZA CON UNA CONVERSACIÓN', contactTitle: 'Intercambiemos ideas.', contactLead: 'Para conversar sobre investigación, consultar mis proyectos o compartir comentarios constructivos, puedes escribirme.', footerLocation: 'Alicante, España', backToTop: 'Volver arriba ↑'
  };
  const elements = [...document.querySelectorAll('[data-i18n]')];
  const originals = new Map(elements.map(el => [el, el.innerHTML]));
  const languageButton = document.getElementById('language-toggle');
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  let language = 'en';
  let theme = 'light';
  const readSetting = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const saveSetting = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ } };
  function setLanguage(value) {
    language = value === 'es' ? 'es' : 'en';
    document.documentElement.lang = language;
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (language === 'es' && translations[key]) el.textContent = translations[key];
      else el.innerHTML = originals.get(el);
    });
    languageButton.textContent = language === 'en' ? 'ES' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Cambiar a español' : 'Switch to English');
    document.title = language === 'en' ? 'Pablo Esparcia Casado · Finance Research' : 'Pablo Esparcia Casado · Investigación en Finanzas';
    updateThemeLabel();
    updateMenuLabel();
    saveSetting('pec-language', language);
  }
  function updateThemeLabel() {
    themeButton.setAttribute('aria-label', language === 'es' ? (theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
  }
  function setTheme(value) {
    theme = value === 'dark' ? 'dark' : 'light';
    document.body.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1c2422' : '#f7f6f2';
    updateThemeLabel();
    saveSetting('pec-theme', theme);
  }
  function updateMenuLabel() {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', language === 'es' ? (open ? 'Cerrar navegación' : 'Abrir navegación') : (open ? 'Close navigation' : 'Open navigation'));
  }
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
    updateMenuLabel();
  }
  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'es' : 'en'));
  themeButton.addEventListener('click', () => setTheme(theme === 'light' ? 'dark' : 'light'));
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); }
  });
  const mobileQuery = window.matchMedia('(max-width: 760px)');
  mobileQuery.addEventListener('change', event => { if (!event.matches) setMenu(false); });
  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.desktop-nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const selected = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', selected);
          if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
  setTheme(readSetting('pec-theme') || 'light');
  setLanguage(readSetting('pec-language') || 'en');
})();
