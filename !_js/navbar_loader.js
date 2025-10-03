// !_js/navbar_loader.js
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById('navbar');
  if (!placeholder) return;

  const NAVBAR_PATH = "navbar.html";

  fetch(NAVBAR_PATH)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch navbar: ' + res.status);
      return res.text();
    })
    .then(html => {
      placeholder.innerHTML = html; //html = isi navbar.html
      runNavbarInit();
    })
    .catch(err => {
      console.error('Navbar gagal dimuat:', err);
    });
});

function runNavbarInit() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  initNavScroll(nav);
  setActiveLink();
  initMusicControl();
  initSearchToggle();
}

//1. Nav scroll effect
function initNavScroll(nav) {
  if (nav.dataset.scrollInit) return;
  nav.dataset.scrollInit = 'true';
  const navHeight = nav.offsetHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight + 150) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });
}

function setActiveLink() {
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.getAttribute('href') === currentPath) {
      a.classList.add('current');
    } else {
      a.classList.remove('current');
    }
  });
}


function initMusicControl() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-toggle');
  if (!btn || !music) return;
  if (btn.dataset.musicInit) return;
  btn.dataset.musicInit = 'true';

  const saved = localStorage.getItem('musicPlaying');
  if (saved === 'true') {
    music.volume = 0.5;
    music.play().catch(()=> {});
    btn.textContent = '🎵';
    btn.dataset.musicState = 'playing';
  } else {
    music.pause();
    btn.textContent = '🔇';
    btn.dataset.musicState = 'paused';
  }

  btn.addEventListener('click', () => {
    if (music.paused) {
      music.play().catch(()=>{});
      btn.textContent = '🎵';
      btn.dataset.musicState = 'playing';
      localStorage.setItem('musicPlaying', 'true');
    } else {
      music.pause();
      btn.textContent = '🔇';
      btn.dataset.musicState = 'paused';
      localStorage.setItem('musicPlaying', 'false');
    }
  });
}

// Search toggleeeeeeeeeeeeeee
function initSearchToggle() {
  const search = document.querySelector('.search');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');
  if (!search || !btn || !input) return;

  btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });
}
