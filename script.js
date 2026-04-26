// Translations object
const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    // Index
    "hero.title": "Trust the monkeys",
    "hero.subtitle": "Intelligent solutions from the ground-up.",
    "hero.button": "Explore",
    "feature1.title": "Power Electronics",
    "feature1.desc": "From IC power delivery to grid voltage applications",
    "feature2.title": "Low voltage projects",
    "feature2.desc": "Legalization projects for the Spanish Administration",
    "feature3.title": "Digital electronics",
    "feature3.desc": "Microprocessor and FPGA hardware and firmware solutions",
    "feature4.title": "Control Engineering",
    "feature4.desc": "From basic PID controllers to Fuzzy Logic systems",
    "feature5.title": "Lighting Projects",
    "feature5.desc": "Low-energy lighting solutions for residential and industrial applications",
    "feature6.title": "Product Development",
    "feature6.desc": "Our designed, robust, modular and affordable electronics",
    // About
    "about.title": "About APES",
    "about.story": "Passionate primates dedicated to innovative electrical solutions. From concept to implementation, we got you covered!",
    "about.mission.title": "Our Mission",
    "about.mission.desc": "Describe your vision and goals.",
    "about.values.title": "Our Values",
    "about.values.desc": "Minimalism, quality, innovation — or whatever fits you.",
    // Projects
    "projects.title": "Projects",
    "project1.title": "Project One",
    "project1.desc": "Short description of the project.",
    "project2.title": "Project Two",
    "project2.desc": "Short description of the project.",
    "project3.title": "Project Three",
    "project3.desc": "Short description of the project.",
    // Contact
    "contact.title": "Contact",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    // Footer
    "footer.copyright": "© 2026 Advanced Power and Electrical Solutions"
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    // Index
    "hero.title": "Confía en los monos",
    "hero.subtitle": "Soluciones inteligentes desde cero.",
    "hero.button": "Explorar",
    "feature1.title": "Electrónica de Potencia",
    "feature1.desc": "Desde etapas de potencia de circuitos integrados hasta aplicaciones de tensión de red",
    "feature2.title": "Proyectos de Baja Tensión",
    "feature2.desc": "Proyectos de legalización para la Administración Española",
    "feature3.title": "Electrónica Digital",
    "feature3.desc": "Soluciones de hardware y firmware para microprocesadores y FPGAs",
    "feature4.title": "Ingeniería de Control",
    "feature4.desc": "Desde controladores PID básicos hasta sistemas de Lógica Borrosa",
    "feature5.title": "Proyectos de Iluminación",
    "feature5.desc": "Soluciones de iluminación de alta eficiencia para aplicaciones residenciales e industriales",
    "feature6.title": "Desarrollo de Productos",
    "feature6.desc": "Electrónica de diseño propio, robusta, modular y asequible",
    // About
    "about.title": "Acerca de APES",
    "about.story": "Primates apasionados dedicados a soluciones eléctricas innovadoras. Desde el concepto hasta la implementación, ¡te tenemos cubierto!",
    "about.mission.title": "Nuestra Misión",
    "about.mission.desc": "Describe tu visión y objetivos.",
    "about.values.title": "Nuestros Valores",
    "about.values.desc": "Minimalismo, calidad, innovación — o lo que te quede bien.",
    // Projects
    "projects.title": "Proyectos",
    "project1.title": "Proyecto Uno",
    "project1.desc": "Breve descripción del proyecto.",
    "project2.title": "Proyecto Dos",
    "project2.desc": "Breve descripción del proyecto.",
    "project3.title": "Proyecto Tres",
    "project3.desc": "Breve descripción del proyecto.",
    // Contact
    "contact.title": "Contacto",
    "contact.name": "Tu Nombre",
    "contact.email": "Tu Correo Electrónico",
    "contact.message": "Tu Mensaje",
    "contact.send": "Enviar Mensaje",
    // Footer
    "footer.copyright": "© 2026 Advanced Power and Electrical Solutions"
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

// Translate function
function translate(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  // Update current lang display
  document.getElementById('current-lang').innerText = lang.toUpperCase();
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

// Toggle dropdown
function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  translate(currentLang);
  document.querySelector('.language-btn').addEventListener('click', toggleDropdown);
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute('data-lang');
      translate(lang);
      toggleDropdown();
    });
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
      document.querySelector('.dropdown-content').style.display = 'none';
    }
  });
});