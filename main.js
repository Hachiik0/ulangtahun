let isBlown = false;

// Fungsi Meniup Lilin
function blowCandle() {
  if (isBlown) return;
  isBlown = true;

  // Matikan Api
  document.getElementById('main-flame').classList.add('flame-out');

  // Ubah Ekpresi Wajah Lilin (Terkejut/Kaget Bahagia)
  const face = document.getElementById('candle-face');
  face.innerHTML = `
    <div class="flex space-x-2">
      <div class="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
      <div class="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
    </div>
    <div class="w-2 h-2 bg-slate-800 rounded-full mt-1"></div>
  `;

  // Jalankan Konfeti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Otomatis Putar Musik Musik
  const bgm = document.getElementById('bgm');
  bgm.play().catch(e => console.log("Autoplay ditahan browser"));
  document.getElementById('play-icon').classList.add('hidden');
  document.getElementById('pause-icon').classList.remove('hidden');

  // Transisi Mulus ke Halaman Utama setelah 1 detik
  setTimeout(() => {
    const candlePage = document.getElementById('candle-page');
    const mainPage = document.getElementById('main-page');

    candlePage.classList.add('opacity-0', '-translate-y-6');
    
    setTimeout(() => {
      candlePage.classList.add('hidden');
      mainPage.classList.remove('hidden');
      mainPage.classList.add('opacity-0', 'translate-y-6');

      setTimeout(() => {
        mainPage.classList.remove('opacity-0', 'translate-y-6');
      }, 50);
    }, 500);
  }, 1000);
}

// Control Pemutar Musik
function toggleMusic() {
  const bgm = document.getElementById('bgm');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (bgm.paused) {
    bgm.play();
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    bgm.pause();
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }
}

// Modal Controls (Buka & Tutup Pop-Up)
function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}