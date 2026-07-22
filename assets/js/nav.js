document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  /* mobile menu */
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  /* mobile dropdown open-on-tap */
  document.querySelectorAll('.has-dropdown > a').forEach(function (parent) {
    parent.addEventListener('click', function (e) {
      if (window.innerWidth <= 860) {
        var item = parent.parentElement;
        if (!item.classList.contains('open')) {
          e.preventDefault();
          document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
            el.classList.remove('open');
          });
          item.classList.add('open');
        }
      }
    });
  });

  /* transparent header over a full-bleed hero -> solid on scroll */
  if (header && header.classList.contains('over-hero')) {
    var onScroll = function () {
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
