(function () {
  var btn = document.getElementById('hamburger-btn');
  var panel = document.getElementById('mobile-nav-panel');
  if (!btn || !panel) return;

  function closeMenu() {
    panel.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('is-open');
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
