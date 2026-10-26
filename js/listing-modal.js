(function () {
  var overlay = document.getElementById('listing-modal');
  var closeBtn = document.getElementById('listing-modal-close');
  if (!overlay || !closeBtn) return;

  function openModal(e) {
    if (e) e.preventDefault();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.js-open-listing').forEach(function (trigger) {
    trigger.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  if (window.location.hash === '#current-listing') openModal();

  // Auto-open once per visit when the visitor scrolls past the About section.
  var scrollTrigger = document.getElementById('listing-scroll-trigger');
  if (scrollTrigger && 'IntersectionObserver' in window) {
    var alreadyShown = false;
    try { alreadyShown = sessionStorage.getItem('bowery-popup-shown') === '1'; } catch (err) {}

    if (!alreadyShown) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            openModal();
            try { sessionStorage.setItem('bowery-popup-shown', '1'); } catch (err) {}
            observer.disconnect();
          }
        });
      }, { threshold: 0 });
      observer.observe(scrollTrigger);
    }
  }
})();
