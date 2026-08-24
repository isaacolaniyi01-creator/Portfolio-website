document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var readMoreBtn = document.querySelector('.read-more-btn');
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function () {
      var excerpt = document.querySelector('.bio-excerpt');
      var full = document.querySelector('.bio-full');
      if (full.style.display === 'none' || full.style.display === '') {
        excerpt.style.display = 'none';
        full.style.display = 'inline';
      } else {
        excerpt.style.display = 'inline';
        full.style.display = 'none';
      }
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      var msg = document.getElementById('form-message');
      if (msg) {
        msg.style.display = 'block';
        msg.style.color = '#1F9E85';
        msg.textContent = 'Sending your message…';
      }
    });
  }

  // ---- Project slider (Latest Projects) ----
  var track = document.getElementById('slider-track');
  if (track) {
    var slides = track.querySelectorAll('.slide');
    var dots = document.querySelectorAll('#slider-dots .dot');
    var captions = document.querySelectorAll('#slide-captions .slide-caption');
    var prevBtn = document.getElementById('slider-prev');
    var nextBtn = document.getElementById('slider-next');
    var current = 0;
    var total = slides.length;
    var timer = null;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
      captions.forEach(function (c, i) {
        c.classList.toggle('active', i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, 4500);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAuto(); });
    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        goTo(parseInt(d.getAttribute('data-goto'), 10));
        startAuto();
      });
    });

    var sliderEl = document.getElementById('project-slider');
    if (sliderEl) {
      sliderEl.addEventListener('mouseenter', stopAuto);
      sliderEl.addEventListener('mouseleave', startAuto);
    }

    goTo(0);
    startAuto();
  }
});
