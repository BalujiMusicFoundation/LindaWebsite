document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // On small screens, tapping a dropdown parent opens it instead of navigating.
  document.querySelectorAll('.has-dropdown > a').forEach(function (parentLink) {
    parentLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 820) {
        var item = parentLink.parentElement;
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
});
