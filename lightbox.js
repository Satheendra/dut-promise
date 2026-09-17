/* Flat photo lightbox for event pages.
   Wires every image inside .eventpg-gallery plus the lead .eventpg-figure
   image into one shared overlay: click to enlarge, arrows / arrow keys to
   move, Escape / Close / backdrop click to dismiss. No URLs change; the
   page stays exactly where it was. */
(function () {
  var photos = Array.prototype.slice.call(
    document.querySelectorAll('.eventpg-figure img, .eventpg-gallery img')
  );
  if (!photos.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-flat';
  overlay.hidden = true;
  overlay.innerHTML =
    '<div class="lightbox-flat-backdrop" data-lightbox-close></div>' +
    '<button type="button" class="lightbox-flat-close" data-lightbox-close>Close &#10005;</button>' +
    '<button type="button" class="lightbox-flat-prev" aria-label="Previous photo">&#8592;</button>' +
    '<button type="button" class="lightbox-flat-next" aria-label="Next photo">&#8594;</button>' +
    '<div class="lightbox-flat-stage"><img class="lightbox-flat-img" alt=""></div>' +
    '<div class="lightbox-flat-counter"></div>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('.lightbox-flat-img');
  var counter = overlay.querySelector('.lightbox-flat-counter');
  var prevBtn = overlay.querySelector('.lightbox-flat-prev');
  var nextBtn = overlay.querySelector('.lightbox-flat-next');
  var current = 0;
  var lastFocus = null;

  function show(i) {
    current = (i + photos.length) % photos.length;
    var src = photos[current].currentSrc || photos[current].src;
    img.src = src;
    img.alt = photos[current].alt || '';
    counter.textContent = (current + 1) + ' / ' + photos.length;
    var single = photos.length < 2;
    prevBtn.disabled = single;
    nextBtn.disabled = single;
  }

  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    overlay.hidden = false;
    document.body.classList.add('lightbox-flat-open');
    prevBtn.disabled ? overlay.querySelector('.lightbox-flat-close').focus() : nextBtn.focus();
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove('lightbox-flat-open');
    img.src = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  photos.forEach(function (photo, i) {
    photo.classList.add('lightbox-flat-trigger');
    photo.setAttribute('tabindex', '0');
    photo.setAttribute('role', 'button');
    photo.setAttribute('aria-label', 'View photo larger');
    photo.addEventListener('click', function () { open(i); });
    photo.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(i);
      }
    });
  });

  prevBtn.addEventListener('click', function () { show(current - 1); });
  nextBtn.addEventListener('click', function () { show(current + 1); });
  overlay.querySelectorAll('[data-lightbox-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (overlay.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });
})();
