document.addEventListener('DOMContentLoaded', function () {
  var player = document.querySelector('.player');
  if (!player) return;

  var audio   = player.querySelector('.player-audio');
  var rows    = Array.prototype.slice.call(player.querySelectorAll('.playlist button'));
  var art     = player.querySelector('.player-art img');
  var title   = player.querySelector('.player-title');
  var sub     = player.querySelector('.player-sub');
  var playBtn = player.querySelector('.pl-play');
  var prevBtn = player.querySelector('.pl-prev');
  var nextBtn = player.querySelector('.pl-next');
  var scrub   = player.querySelector('.player-scrub');
  var fill    = player.querySelector('.player-fill');
  var elapsed = player.querySelector('.player-elapsed');
  var total   = player.querySelector('.player-total');

  if (!audio || !rows.length) return;

  var current = -1;

  function fmt(secs) {
    if (!isFinite(secs)) return '--:--';
    var m = Math.floor(secs / 60), s = Math.floor(secs % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* Point the player at a track. Loads it, but only starts playing when asked. */
  function load(index, play) {
    if (index < 0) index = rows.length - 1;
    if (index >= rows.length) index = 0;

    if (index !== current) {
      var row = rows[index];
      current = index;

      audio.src = row.getAttribute('data-src');
      title.textContent = row.getAttribute('data-title');
      sub.textContent = row.getAttribute('data-sub');
      art.src = row.getAttribute('data-art');
      art.alt = row.getAttribute('data-title');
      total.textContent = row.getAttribute('data-time');
      elapsed.textContent = '0:00';
      fill.style.width = '0%';
      scrub.setAttribute('aria-valuenow', 0);

      rows.forEach(function (r, i) {
        r.classList.toggle('playing', i === index);
        r.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
    }

    if (play) audio.play();
  }

  playBtn.addEventListener('click', function () {
    if (current === -1) load(0, true);
    else if (audio.paused) audio.play();
    else audio.pause();
  });

  prevBtn.addEventListener('click', function () {
    /* Restart the song first, the way a physical player does. */
    if (audio.currentTime > 3) audio.currentTime = 0;
    else load(current - 1, true);
  });

  nextBtn.addEventListener('click', function () { load(current + 1, true); });

  rows.forEach(function (row, i) {
    row.addEventListener('click', function () {
      if (i === current && !audio.paused) audio.pause();
      else load(i, true);
    });
  });

  audio.addEventListener('play', function () {
    player.classList.add('is-playing');
    playBtn.setAttribute('aria-label', 'Pause');
  });

  audio.addEventListener('pause', function () {
    player.classList.remove('is-playing');
    playBtn.setAttribute('aria-label', 'Play');
  });

  audio.addEventListener('timeupdate', function () {
    if (!audio.duration) return;
    var pct = audio.currentTime / audio.duration * 100;
    fill.style.width = pct + '%';
    elapsed.textContent = fmt(audio.currentTime);
    scrub.setAttribute('aria-valuenow', Math.round(pct));
    scrub.setAttribute('aria-valuetext', fmt(audio.currentTime) + ' of ' + fmt(audio.duration));
  });

  audio.addEventListener('loadedmetadata', function () {
    total.textContent = fmt(audio.duration);
  });

  /* Play the album straight through, then stop at the end. */
  audio.addEventListener('ended', function () {
    if (current < rows.length - 1) load(current + 1, true);
    else {
      audio.currentTime = 0;
      fill.style.width = '0%';
      elapsed.textContent = '0:00';
    }
  });

  function seek(e) {
    var box = scrub.getBoundingClientRect();
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - box.left;
    var ratio = Math.min(1, Math.max(0, x / box.width));
    if (audio.duration) audio.currentTime = ratio * audio.duration;
  }

  scrub.addEventListener('click', seek);

  scrub.addEventListener('keydown', function (e) {
    if (!audio.duration) return;
    if (e.key === 'ArrowRight') { audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { audio.currentTime = Math.max(0, audio.currentTime - 5); e.preventDefault(); }
  });

  /* Cue the first song so the panel reads as ready rather than blank. */
  load(0, false);
});
