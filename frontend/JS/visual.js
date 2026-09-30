/* Presentación progresiva: el contenido permanece visible sin este archivo. */
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  if (button) {
    function reflectTheme() {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro');
      button.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    }
    reflectTheme();
    button.hidden = false;
    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = theme;
      try { localStorage.setItem('tpl-tema', theme); } catch (error) { /* Almacenamiento opcional. */ }
      reflectTheme();
    });
  }
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches || !("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll(".section-heading, .card, .contact-copy, .footer-intro");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.06 });

  elements.forEach((element) => {
    const index = element.parentElement.classList.contains("grid")
      ? Array.from(element.parentElement.children).indexOf(element) % 4 : 0;
    element.style.setProperty("--reveal-delay", `${index * 65}ms`);
    element.classList.add("reveal");
    observer.observe(element);
  });

  // Navegar con teclado nunca deja un control esperando su animación.
  document.addEventListener("focusin", (event) => {
    const element = event.target.closest(".reveal");
    if (element) element.classList.add("is-visible");
  });
  preference.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    elements.forEach((element) => element.classList.add("is-visible"));
  });
});
