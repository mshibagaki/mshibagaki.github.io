const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.textContent = isOpen ? 'Menu' : 'Close';
  siteNav.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    if (navToggle) navToggle.textContent = 'Menu';
    siteNav.classList.remove('is-open');
  });
});

document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
