// ============================================================
//  CONFIG — редагуй тільки цей блок
// ============================================================
const CONFIG = {
  names: {
    her: "Влада",
    him: "Бубсік",
  },
  colors: {
    accent1: "#ff6b9d",   // тепло-рожевий
    accent2: "#c77dff",   // холодно-рожевий/ліловий
    glow: "#ff6b9d99",
  },
  bgMusic: {
    // Laufey — постав шлях до mp3 якщо є, або залиш ""
    src: "",
    artist: "Laufey",
    track: "From The Start",
  },

  // ── Секція 1 ─────────────────────────────────────────────
  section1: {
    date: "26 листопада",
    time: "десь з 10 вечора",
    story: `Скільки б я не намагався згадати день, коли ми почали спілкуватись — мені спадало на думку тільки Clash Royale і фотосесія. Але цей день, 26 листопада, буде нашим найяскравішим і офіційним днем народження наших стосунків. 🩷`,
    photo: null,
  },

  // ── Секція 2 — Прогулянки ─────────────────────────────────
  section2: {
    albums: [
      {
        title: "14 лютого — наш перший спільний день закоханих 💝",
        folder: "14 лютого",
        photos: [
          "photo_2026-11-17_18-26-29.jpg",
          "photo_2026-11-17_18-26-32.jpg",
          "photo_2026-11-17_18-26-33.jpg",
          "photo_2026-11-17_18-26-34.jpg",
        ],
      },
      {
        title: "Випускний",
        folder: "випускний",
        photos: [
          "photo_2026-11-17_18-31-47.jpg",
          "photo_2026-11-17_18-32-04.jpg",
          "photo_2026-11-17_18-32-43.jpg",
          "photo_2026-11-17_18-32-44 (2).jpg",
          "photo_2026-11-17_18-32-44.jpg",
        ],
      },
      {
        title: "Перша поїздка в улюблений КНЛУ",
        folder: "вонючий київ 1",
        photos: [
          "photo_2026-11-17_18-32-38 (2).jpg",
          "photo_2026-11-17_18-32-39.jpg",
          "photo_2026-11-17_18-32-40 (2).jpg",
          "photo_2026-11-17_18-32-40.jpg",
          "photo_2026-11-17_18-32-41.jpg",
          "photo_2026-11-17_18-32-42 (2).jpg",
        ],
      },
      {
        title: "ДР Ксюші і пляжні посіделки",
        folder: "впершйи раз на твоїй дачі",
        photos: [
          "photo_2026-11-17_18-32-50 (2).jpg",
          "photo_2026-11-17_18-32-50.jpg",
          "photo_2026-11-17_18-32-51 (2).jpg",
          "photo_2026-11-17_18-32-51.jpg",
        ],
      },
      {
        title: "Прогулянка з педіками 🎃",
        folder: "гелоувін",
        photos: [
          "photo_2026-11-17_18-31-49 (2).jpg",
          "photo_2026-11-17_18-31-50 (2).jpg",
          "photo_2026-11-17_18-31-50.jpg",
        ],
      },
      {
        title: "Були маленькими — ще не знали, що зустрінемось 🥹",
        folder: "дитячі фоткі",
        photos: [
          "photo_2026-11-17_18-31-38.jpg",
          "photo_2026-11-17_18-48-14.jpg",
        ],
      },
      {
        title: "Наш перший день народження (і в один день лол)",
        folder: "др",
        photos: [
          "photo_2026-11-17_18-31-58 (2).jpg",
          "photo_2026-11-17_18-31-58.jpg",
        ],
      },
      {
        title: "Наш перший день народження (і в один день лол) ч.2",
        folder: "др2",
        photos: [
          "photo_2026-11-17_18-31-53.jpg",
          "photo_2026-11-17_18-31-54 (2).jpg",
          "photo_2026-11-17_18-31-54.jpg",
          "photo_2026-11-17_18-31-55.jpg",
          "photo_2026-11-17_18-31-56 (2).jpg",
        ],
      },
      {
        title: "Квітнева фотосесія — ти і так завжди красива",
        folder: "квітнева фотосесія",
        photos: [
          "photo_2026-11-17_18-32-07 (2).jpg",
          "photo_2026-11-17_18-32-07.jpg",
          "photo_2026-11-17_18-32-09.jpg",
          "photo_2026-11-17_18-32-10.jpg",
        ],
      },
      {
        title: "Знову Київ і черті поруч",
        folder: "київ2",
        photos: [
          "photo_2026-11-17_18-31-51 (2).jpg",
          "photo_2026-11-17_18-31-51.jpg",
          "photo_2026-11-17_18-31-52.jpg",
        ],
      },
      {
        title: "Круасани після тривоги — бо найкраща антистрес-терапія це ти",
        folder: "круасанчики після тривоги",
        photos: [
          "photo_2026-11-17_18-32-13 (2).jpg",
          "photo_2026-11-17_18-32-16.jpg",
          "photo_2026-11-17_18-32-17 (2).jpg",
          "photo_2026-11-17_18-32-18.jpg",
        ],
      },
      {
        title: "Кіно — дрімворкс знову дропнули імбу",
        folder: "кіношка1",
        photos: [
          "photo_2026-11-17_18-31-46 (2).jpg",
          "photo_2026-11-17_18-31-46.jpg",
        ],
      },
      {
        title: "Літо, Алексєєв і мохіто",
        folder: "літо алексеев",
        photos: [
          "photo_2026-11-17_18-32-46.jpg",
          "photo_2026-11-17_18-32-47 (2).jpg",
          "photo_2026-11-17_18-32-47.jpg",
        ],
      },
      {
        title: "Пляжні прогулянки",
        folder: "літо просто рандомнйи день на пляжєу",
        photos: [
          "photo_2026-11-17_18-32-48 (2).jpg",
          "photo_2026-11-17_18-32-48.jpg",
          "photo_2026-11-17_18-32-49 (2).jpg",
          "photo_2026-11-17_18-32-49.jpg",
        ],
      },
      {
        title: "Навіть сон приємніший, коли поруч ти",
        folder: "ми спимо одне на одному",
        photos: [
          "photo_2026-11-17_18-32-11 (2).jpg",
          "photo_2026-11-17_18-44-35.jpg",
        ],
      },
      {
        title: "Остання прогулянка з моїми фріками — але точно не остання з тобою",
        folder: "остання прогулянка з тіпами",
        photos: [
          "photo_2026-11-17_18-31-48 (2).jpg",
          "photo_2026-11-17_18-31-49.jpg",
        ],
      },
      {
        title: "Перша кіношка разом",
        folder: "перша кіношка разом",
        photos: [
          "photo_2026-11-17_18-32-28 (2).jpg",
          "photo_2026-11-17_18-32-28.jpg",
        ],
      },
      {
        title: "Перша пройдена гра 🎮",
        folder: "перша пройдена гра",
        photos: [
          "photo_2026-11-17_18-32-19 (2).jpg",
          "photo_2026-11-17_18-32-20.jpg",
          "photo_2026-11-17_18-32-21.jpg",
        ],
      },
      {
        title: "Просто мімі фотки 🥰",
        folder: "просто мімі фотки",
        photos: [
          "photo_2026-11-17_18-31-48.jpg",
          "photo_2026-11-17_18-32-30 (2).jpg",
          "photo_2026-11-17_18-32-30.jpg",
        ],
      },
      {
        title: "Рандомний день у Француа",
        folder: "рандомний день у францув",
        photos: [
          "photo_2026-11-17_18-32-22 (2).jpg",
          "photo_2026-11-17_18-32-22.jpg",
        ],
      },
      {
        title: "Рандомний день у Француа ч.2",
        folder: "рандомнийдень у француа 2",
        photos: [
          "photo_2026-11-17_18-32-37 (2).jpg",
          "photo_2026-11-17_18-32-38.jpg",
          "photo_2026-11-17_18-44-58.jpg",
        ],
      },
      {
        title: "Просто літній день. Просто щастя ☀️",
        folder: "рандомнйи літній дкень",
        photos: [
          "photo_2026-11-17_18-32-52 (2).jpg",
          "photo_2026-11-17_18-32-52.jpg",
          "photo_2026-11-17_18-32-53.jpg",
          "photo_2026-11-17_18-32-54.jpg",
        ],
      },
      {
        title: "Рофл фоткі 😂",
        folder: "рофл фоткі",
        photos: [
          "photo_2026-11-17_18-32-27 (2).jpg",
          "photo_2026-11-17_18-32-31.jpg",
          "photo_2026-11-17_18-32-40 (2).jpg",
        ],
      },
      {
        title: "Стендап і позоріща Ніколаєва",
        folder: "стендап 1",
        photos: [
          "photo_2026-11-17_18-31-44.jpg",
          "photo_2026-11-17_18-31-45 (2).jpg",
          "photo_2026-11-17_18-31-45.jpg",
        ],
      },
      {
        title: "Стендап і позоріща Ніколаєва ч.2",
        folder: "стендап 2",
        photos: [
          "photo_2026-11-17_18-55-53.jpg",
          "photo_2026-11-17_18-55-56.jpg",
          "photo_2026-11-17_18-56-01.jpg",
        ],
      },
      {
        title: "Шашлик сезон відкрито 🔥",
        folder: "шашлик",
        photos: [
          "photo_2026-11-17_18-31-39 (2).jpg",
          "photo_2026-11-17_18-31-39.jpg",
        ],
      },
      {
        title: "Шашлик сезон відкрито ч.2 🔥",
        folder: "шашлик 2",
        photos: [
          "photo_2026-11-17_18-32-00 (2).jpg",
          "photo_2026-11-17_18-32-00.jpg",
          "photo_2026-11-17_18-32-01 (2).jpg",
          "photo_2026-11-17_18-32-01.jpg",
        ],
      },
    ],
  },

  // ── Секція 3 — Статистика ──────────────────────────────────
  section3: {
    stats: [
      { icon: "💕", value: "365", label: "днів разом" },
      { icon: "☕", value: "∞", label: "чашок чаю" },
      { icon: "✈️", value: "4", label: "спільні подорожі" },
      { icon: "🤗", value: "∞", label: "міцних обіймів" },
      { icon: "💋", value: "∞", label: "поцілунків" },
      { icon: "⏰", value: "∞", label: "часу разом" },
    ],
  },

  // ── Секція 4 — Звички ─────────────────────────────────────
  section4: {
    habits: [
      "Як тебе розбирає з максимально тупих жартів — і я кожного разу розтаю 😭",
      "Твій палаючий погляд і те, як ти захлинаючись розповідаєш про те, що тебе щойно захопило",
      "Як ти затято сперечаєшся до переможного, а в момент повного провалу своєї теорії — робити вигляд, що так і було задумано",
      "Як ти міцно обіймаєш мене обома руками, ніби намагаєшся мене придушити 🥹",
    ],
  },

  // ── Секція 5 — Музика ─────────────────────────────────────
  section5: {
    her: [
      { title: "Perfect Day", artist: "Hoku" },
      { title: "Дискографія", artist: "Laufey (найбільше ♥)" },
      { title: "House Tour", artist: "Sabrina Carpenter" },
      { title: "Дискографія", artist: "Mitski" },
    ],
    him: [
      { title: "Paradise City", artist: "Guns N' Roses" },
      { title: "Phoenix", artist: "Fall Out Boy" },
      { title: "Spin", artist: "Kroi" },
      { title: "Through The Fire And Flames", artist: "DragonForce" },
    ],
    ours: [
      { title: "Rock You Like A Hurricane", artist: "Scorpions (найперша 🔥)" },
      { title: "Tears", artist: "Sabrina Carpenter" },
      { title: "Blood On The Dancefloor", artist: "Michael Jackson" },
    ],
  },

  // ── Секція 6 — Чому я тебе кохаю ─────────────────────────
  section6: {
    reasons: [
      "Бо з тобою навіть мовчати затишно",
      "Бо ти смієшся, коли не права",
      "Бо ти найкрасивіша зранку",
      "Бо з тобою навіть найтемніший день стає яскравим",
      "Бо з тобою не страшні навіть 48 годин без світла",
      "Бо з тобою жодна моя тривога не впорається",
      "Бо з тобою я можу не соромитись особистих помилок",
      "Бо ти розділяєш усі мої інтереси",
      "Бо з тобою усі мої мрії стають реальними",
      "Бо з тобою мій плейліст збагачується новою музикою",
      "Бо поруч з тобою не існує проблем",
      "Бо поруч з тобою постійно кицюня і лордік",
      "Бо прогулянки з тобою завжди дуже цікаві",
      "Бо я ніколи не нудьгую з тобою",
      "Бо ти мотивуєш мене розвиватись",
      "Бо ти розумієш мене так, як ніхто інший",
      "Бо з тобою навіть Clash Royale на уроці інформатики — романтика",
      "Бо твій сміх коли ти програла суперечку — найкраща нагорода",
      "Бо з тобою навіть вонючий Київ стає найкращим містом",
      "Бо ти це ти",
    ],
  },

  // ── Секція 7 — Найяскравіший спогад ──────────────────────
  section7: {
    story: `Найяскравіший спогад для мене — це наше перше велике свято, 14 лютого. Я дуже багато нервував через подарунок і взагалі, але це не завадило тому дню стати неймовірним. Хочу додати, що мені дуже складно виділити один момент, бо кожна мить з тобою для мене стає особливою. Кожна. 🥹`,
    photos: [
      "photo_2026-11-17_18-26-29.jpg",
      "photo_2026-11-17_18-26-32.jpg",
      "photo_2026-11-17_18-26-33.jpg",
      "photo_2026-11-17_18-26-34.jpg",
    ],
  },

  // ── Секція 8 — Вікторина ──────────────────────────────────
  section8: {
    questions: [
      {
        q: "Як ти мене називаєш?",
        answers: ["кицюня", "Бубсік", "бусінка", "котичек"],
        correct: [0, 1, 2, 3], // усі правильні
        fun: "Усі правильні — ти справді мене знаєш 🥹",
      },
      {
        q: "Мій найулюбленіший виконавець?",
        answers: ["Fall Out Boy", "DragonForce", "Guns N' Roses", "Scorpions"],
        correct: [0, 1, 2, 3], // усі правильні
        fun: "Усі правильні — смак у мене широкий 🎸",
      },
      {
        q: "Що я прям обожнюю їсти?",
        answers: ["Сирі овочі", "Солодощі", "Випічка і фастфуд", "М'ясні страви"],
        correct: [2],
        wrong: "Ну ти ж знаєш мене! Думай ще раз 😏",
        fun: "Так! Випічка і фастфуд — моя любов і слабкість 🍕",
      },
      {
        q: "Яку гру я єбашу вже 11 років?",
        answers: ["Роблокс", "Майнкрафт", "Ліга Залуп (обнова скоро!)", "Ішачок"],
        correct: [1],
        wrong: "Серйозно?! Ти ж бачила мене за цією грою 100 разів 😂",
        fun: "МАЙНКРАФТ! 11 років вірності — це серйозно 💎",
      },
    ],
  },

  // ── Секція 9 — Фінальний лист ─────────────────────────────
  section9: {
    letter: `Дорога, навіть уже рідна Владо!\n\nУ мене просто бракує слів, щоб описати, наскільки я вражений тим, як швидко пролетів цей рік. І ще більше дивуюся тому, наскільки він був насиченим та яскравим на події. З твоєю появою в моєму житті змінилося дуже багато всього, та й ти сама мене змінила. Я ніколи раніше не відвідував стільки культурних вистав (бо просто не було з ким), не бував у такій кількості цікавих місць…\n\nЗвісно, не можу промовчати про те, скільки різних складнощів виникало цього року. Але, якщо чесно, я вже далеко не перший день ловлю себе на думці: поруч із тобою я не можу згадати нічого поганого. Не тому, що забув чи цього не було, а тому, що, думаючи про тебе, я бачу лише щасливі миті. Скільки б я не намагався, не зможу описати, як я буквально тану від самих лише спогадів, — а що вже говорити про те, як було проживати це все разом.\n\nРоблячи цю міні-листівочку, я прагнув згадати всі моменти, які ми прожили вдвох. Але точно знаю, що багато чого пропустив, адже просто неможливо вмістити цілий рік у такий маленький об'єм. І це лише свідчить про те, наскільки наші стосунки насправді глибокі й масштабні.\n\nЩе одна річ, яка мене захоплює, — це те, наскільки ми одночасно схожі й різні люди. Ти відкрила для мене те, що дивишся сама, поділилася своїм музичним смаком і показала мені речі, про які я б сам ніколи не дізнався. І мені це шалено подобається.\n\nЯ ніколи не втомлюся знову і знову повторювати, наскільки безмежно я закоханий у тебе. Наскільки я щасливий, що провів цей рік поруч із тобою. Наскільки прагну любити тебе щиро й відверто та як сильно хочу бути з тобою все життя.\n\nЦей рік без перебільшення був найкращим у моєму житті, і це винятково твоя заслуга — і більше нічия. Я настільки сильно тебе кохаю, що впевнений: кожен наступний рік буде тільки кращим, а моя любов до тебе ніколи не згасне.\n\nДуже тебе кохаю і бажаю нам чудово провести час у цей особливий день! 💕\n\nЗ любов'ю, Бубсік`,
  },
};
// ============================================================
//  END CONFIG
// ============================================================


// ── Стан ────────────────────────────────────────────────────
let state = {
  phase: 0,         // 0=старт 1=орбіта 2=фінал
  read: new Set(),
  quizAnswers: {},
  albumsOpen: false,
};

// ── DOM готовий ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initOrbit();
  initMusic();
  document.getElementById("central-heart").addEventListener("click", onHeartClick);
});

// ──────────────────────────────────────────────────────────────
//  ЧАСТИНКИ
// ──────────────────────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = 0.3 + Math.abs(Math.sin(Date.now() / 2000 + p.a)) * 0.5;
      ctx.fillStyle = "#ff9dc8";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = innerWidth;
      if (p.x > innerWidth) p.x = 0;
      if (p.y < 0) p.y = innerHeight;
      if (p.y > innerHeight) p.y = 0;
    }
    requestAnimationFrame(loop);
  }
  loop();
}

// ──────────────────────────────────────────────────────────────
//  МУЗИКА
// ──────────────────────────────────────────────────────────────
function initMusic() {
  if (!CONFIG.bgMusic.src) return;
  const audio = document.createElement("audio");
  audio.src = CONFIG.bgMusic.src;
  audio.loop = true;
  audio.volume = 0.25;
  const btn = document.getElementById("music-btn");
  btn.style.display = "flex";
  btn.addEventListener("click", () => {
    if (audio.paused) { audio.play(); btn.textContent = "🎵"; }
    else { audio.pause(); btn.textContent = "🔇"; }
  });
}

// ──────────────────────────────────────────────────────────────
//  ОРБІТА
// ──────────────────────────────────────────────────────────────
const ORBIT_ITEMS = [
  { icon: "💕", label: "Початок", section: 1 },
  { icon: "🚶", label: "Прогулянки", section: 2 },
  { icon: "📊", label: "Статистика", section: 3 },
  { icon: "🥰", label: "Звички", section: 4 },
  { icon: "🎵", label: "Музика", section: 5 },
  { icon: "🔮", label: "Чому", section: 6 },
  { icon: "✨", label: "Спогад", section: 7 },
  { icon: "🎯", label: "Вікторина", section: 8 },
];

function initOrbit() {
  const container = document.getElementById("orbit-container");
  ORBIT_ITEMS.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.className = "orbit-btn";
    btn.dataset.section = item.section;
    btn.dataset.index = i;
    btn.innerHTML = `<span class="orbit-icon">${item.icon}</span><span class="orbit-label">${item.label}</span>`;
    btn.addEventListener("click", (e) => {
      if (item.section === 2) {
        openAlbumsOrbit(e.currentTarget);
      } else {
        openSection(item.section);
      }
    });
    container.appendChild(btn);
  });
  positionOrbitBtns();
  // дебаунс resize — чекаємо поки вікно перестане змінюватись
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      positionOrbitBtns();
      // якщо альбомна орбіта відкрита — закриваємо без анімації і відкриваємо знову
      if (state.albumsOpen) {
        const container = document.getElementById("albums-orbit");
        if (container) {
          container.remove();
          state.albumsOpen = false;
        }
      }
    }, 150);
  });
}

function positionOrbitBtns() {
  const btns = document.querySelectorAll(".orbit-btn");
  const cx = innerWidth / 2;
  const cy = innerHeight / 2;
  const r = Math.min(innerWidth, innerHeight) * 0.33;
  btns.forEach((btn, i) => {
    const angle = (i / btns.length) * Math.PI * 2 - Math.PI / 2;
    const tx = cx + Math.cos(angle) * r - 40;
    const ty = cy + Math.sin(angle) * r - 40;
    btn.dataset.targetX = tx;
    btn.dataset.targetY = ty;
    // якщо орбіта вже відкрита — одразу оновлюємо позицію без анімації
    if (state.phase === 1 && btn.classList.contains("visible")) {
      btn.style.transition = "none";
      btn.style.left = tx + "px";
      btn.style.top  = ty + "px";
      // повертаємо transition наступного кадру
      requestAnimationFrame(() => {
        btn.style.transition = "";
      });
    }
  });
}

// ──────────────────────────────────────────────────────────────
//  КЛІК НА СЕРЦЕ
// ──────────────────────────────────────────────────────────────
function onHeartClick() {
  if (state.phase === 0) {
    launchOrbit();
  } else if (state.phase === 1 && state.read.size === 8) {
    launchFinale();
  }
}

function launchOrbit() {
  state.phase = 1;
  const heart = document.getElementById("central-heart");
  heart.classList.add("small");
  burst();

  document.getElementById("hint").textContent = "Натискай на кнопки навколо серця 💕";
  document.getElementById("hint").classList.add("visible");

  const btns = document.querySelectorAll(".orbit-btn");
  btns.forEach((btn, i) => {
    setTimeout(() => {
      btn.style.left = btn.dataset.targetX + "px";
      btn.style.top = btn.dataset.targetY + "px";
      btn.classList.add("visible");
    }, i * 80);
  });
}

function burst() {
  const b = document.getElementById("burst");
  b.classList.add("active");
  setTimeout(() => b.classList.remove("active"), 800);
}

function updateProgress() {
  const count = state.read.size;
  const heart = document.getElementById("central-heart");
  document.getElementById("progress-text").textContent = `${count}/8`;

  document.querySelectorAll(".orbit-btn").forEach(btn => {
    const idx = parseInt(btn.dataset.section) - 1;
    if (state.read.has(idx + 1)) btn.classList.add("done");
  });

  if (count === 8) {
    heart.classList.add("glow");
    document.getElementById("hint").textContent = "Натисни на серце ще раз ✨";
  }
}

// ──────────────────────────────────────────────────────────────
//  ФІНАЛ
// ──────────────────────────────────────────────────────────────
function launchFinale() {
  state.phase = 2;
  document.querySelectorAll(".orbit-btn").forEach(btn => {
    btn.style.transform = "scale(0)";
    btn.style.opacity = "0";
  });

  setTimeout(() => {
    document.getElementById("dark-scene").style.display = "none";
    document.getElementById("finale-scene").style.display = "flex";
    spawnConfetti();
    typewriterLetter();
  }, 600);
}

function spawnConfetti() {
  const container = document.getElementById("confetti-container");
  const shapes = ["💖", "🌸", "✨", "🎀", "💕", "🩷"];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement("span");
    el.className = "confetti-piece";
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 3 + "s";
    el.style.fontSize = (Math.random() * 20 + 14) + "px";
    container.appendChild(el);
  }
}

function typewriterLetter() {
  const el = document.getElementById("final-letter-text");
  const lines = CONFIG.section9.letter.split("\n");
  let html = "";
  lines.forEach(l => { html += (l === "" ? "<br>" : `<p>${l}</p>`); });
  el.innerHTML = "";
  el.style.opacity = "1";
  const temp = document.createElement("div");
  temp.innerHTML = html;
  const finalHTML = temp.innerHTML;
  let i = 0;
  function type() {
    if (i <= finalHTML.length) {
      el.innerHTML = finalHTML.substring(0, i);
      i += 3;
      setTimeout(type, 20);
    }
  }
  setTimeout(type, 500);
}

// ──────────────────────────────────────────────────────────────
//  АЛЬБОМНА ОРБІТА (Прогулянки)
// ──────────────────────────────────────────────────────────────
const ALBUM_EMOJIS = ['💝','🎓','🏙️','🌿','🎃','👶','🎂','🎂','🌸','🌆',
                      '🥐','🎬','🎸','🏖️','😴','👥','🎬','🎮','😍','☕',
                      '☕','☀️','😂','🎭','🎭','🔥','🔥'];

function openAlbumsOrbit(srcBtn) {
  if (state.albumsOpen) return;
  state.albumsOpen = true;

  const albums = CONFIG.section2.albums;
  const rect   = srcBtn.getBoundingClientRect();
  const srcCX  = rect.left + rect.width  / 2;
  const srcCY  = rect.top  + rect.height / 2;

  // Responsive sizes
  const isMobile  = window.innerWidth < 540;
  const circleSize = isMobile ? 50 : 65;
  const gap        = isMobile ? 8  : 12;
  const cols       = 4;
  const cell       = circleSize + gap;

  const rows   = Math.ceil(albums.length / cols); // 7
  const gridW  = cols * cell - gap;
  const gridH  = rows * cell - gap;
  const gridL  = (window.innerWidth  - gridW) / 2;
  const gridT  = Math.max(56, (window.innerHeight - gridH) / 2);

  // Overlay container
  const container = document.createElement('div');
  container.id = 'albums-orbit';
  document.body.appendChild(container);

  // Semi-transparent backdrop (click = close)
  const backdrop = document.createElement('div');
  backdrop.id = 'albums-backdrop';
  backdrop.onclick = closeAlbumsOrbit;
  container.appendChild(backdrop);

  // Back button
  const backBtn = document.createElement('button');
  backBtn.id = 'albums-back-btn';
  backBtn.innerHTML = '← Назад';
  backBtn.onclick = closeAlbumsOrbit;
  container.appendChild(backBtn);

  // Build circles
  albums.forEach((album, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);

    // Centre the last incomplete row
    const rowItems = (row === rows - 1 && albums.length % cols !== 0)
      ? albums.length % cols : cols;
    const rowOffset = ((cols - rowItems) / 2) * cell;

    const targetX = gridL + rowOffset + col * cell;
    const targetY = gridT + row * cell;

    const btn = document.createElement('button');
    btn.className = 'album-mini-btn';
    btn.dataset.title = album.title;
    btn.style.cssText = `
      left: ${srcCX - circleSize / 2}px;
      top:  ${srcCY - circleSize / 2}px;
      width:  ${circleSize}px;
      height: ${circleSize}px;
      font-size: ${isMobile ? '18px' : '22px'};
    `;
    btn.innerHTML = `<span class="alb-emoji">${ALBUM_EMOJIS[i] || '📸'}</span>`;
    btn.onclick = () => openAlbumModal(i);
    container.appendChild(btn);

    // Fly to target
    requestAnimationFrame(() => {
      setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.left = targetX + 'px';
        btn.style.top  = targetY + 'px';
      }, 30 + i * 38);
    });
  });
}

function closeAlbumsOrbit() {
  const container = document.getElementById('albums-orbit');
  if (!container) return;

  container.querySelectorAll('.album-mini-btn').forEach((btn, i) => {
    setTimeout(() => {
      btn.style.opacity   = '0';
      btn.style.transform = 'scale(0.4)';
    }, i * 18);
  });

  setTimeout(() => {
    container.remove();
    state.albumsOpen = false;
    state.read.add(2);
    updateProgress();
  }, 450);
}

function openAlbumModal(idx) {
  const album = CONFIG.section2.albums[idx];
  let photoIdx = 0;

  // Remove previous if any
  document.getElementById('album-modal-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'album-modal-overlay';
  document.body.appendChild(overlay);

  function render() {
    const src = `./фото/фото для пункту 2/${album.folder}/${album.photos[photoIdx]}`;
    overlay.innerHTML = `
      <div class="album-modal-box">
        <button class="album-modal-close" aria-label="Закрити">✕</button>
        <div class="album-modal-title">${album.title}</div>
        <div class="album-modal-photo-wrap">
          ${album.photos.length > 1 ? '<button class="nav-arrow album-ph-prev">◀</button>' : ''}
          <img class="album-modal-img" src="${src}" alt="photo">
          ${album.photos.length > 1 ? '<button class="nav-arrow album-ph-next">▶</button>' : ''}
        </div>
        ${album.photos.length > 1
          ? `<div class="album-modal-counter">${photoIdx + 1} / ${album.photos.length}</div>`
          : ''}
      </div>`;

    overlay.querySelector('.album-modal-close').onclick = () => overlay.remove();
    overlay.querySelector('.album-modal-img').onclick   = () => openLightbox(src);
    overlay.querySelector('.album-ph-prev')?.addEventListener('click', () => {
      photoIdx = (photoIdx - 1 + album.photos.length) % album.photos.length;
      render();
    });
    overlay.querySelector('.album-ph-next')?.addEventListener('click', () => {
      photoIdx = (photoIdx + 1) % album.photos.length;
      render();
    });

    // свайп на мобільному
    if (album.photos.length > 1) {
      const photoWrap = overlay.querySelector('.album-modal-photo-wrap');
      addSwipe(
        photoWrap,
        () => { photoIdx = (photoIdx + 1) % album.photos.length; render(); },   // свайп вліво = наступне
        () => { photoIdx = (photoIdx - 1 + album.photos.length) % album.photos.length; render(); } // вправо = попереднє
      );
    }
  }
  render();
}


function openSection(n) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = "";

  switch (n) {
    case 1: renderSection1(body); break;
    case 2: renderSection2(body); break;
    case 3: renderSection3(body); break;
    case 4: renderSection4(body); break;
    case 5: renderSection5(body); break;
    case 6: renderSection6(body); break;
    case 7: renderSection7(body); break;
    case 8: renderSection8(body); break;
  }

  modal.classList.add("open");
  modal.dataset.section = n;

  modal.querySelector(".modal-close").onclick = () => {
    modal.classList.remove("open");
    state.read.add(n);
    updateProgress();
  };
}

// ── Секція 1: Початок ────────────────────────────────────────
function renderSection1(body) {
  const c = CONFIG.section1;
  body.innerHTML = `
    <div class="sec1-wrap">
      <h2 class="modal-title">💕 День, коли все почалося</h2>
      <div class="sec1-date">${c.date}</div>
      <div class="sec1-time">десь о ${c.time} 🌙</div>
      <p class="sec1-story">${c.story}</p>
    </div>`;
}

// ── Секція 2: Прогулянки ─────────────────────────────────────
function renderSection2(body) {
  const albums = CONFIG.section2.albums;
  let albumIdx = 0;
  let photoIdx = 0;

  body.innerHTML = `
    <h2 class="modal-title">🚶 Наші прогулянки</h2>
    <div class="carousel-wrap">
      <div class="album-nav">
        <button class="nav-arrow" id="prev-album">◀</button>
        <div class="album-title" id="album-title"></div>
        <button class="nav-arrow" id="next-album">▶</button>
      </div>
      <div class="album-counter" id="album-counter"></div>
      <div class="photo-stage" id="photo-stage">
        <button class="nav-arrow photo-prev" id="prev-photo">◀</button>
        <img class="carousel-photo" id="carousel-photo" src="" alt="photo">
        <button class="nav-arrow photo-next" id="next-photo">▶</button>
      </div>
      <div class="photo-counter" id="photo-counter"></div>
    </div>`;

  function getPhotoPath(album, filename) {
    return `./фото/фото для пункту 2/${album.folder}/${filename}`;
  }

  function renderAlbum() {
    const album = albums[albumIdx];
    photoIdx = 0;
    document.getElementById("album-title").textContent = album.title;
    document.getElementById("album-counter").textContent = `Альбом ${albumIdx + 1} / ${albums.length}`;
    renderPhoto();
  }

  function renderPhoto() {
    const album = albums[albumIdx];
    const img = document.getElementById("carousel-photo");
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = getPhotoPath(album, album.photos[photoIdx]);
      img.style.opacity = "1";
    }, 150);
    document.getElementById("photo-counter").textContent =
      album.photos.length > 1 ? `${photoIdx + 1} / ${album.photos.length}` : "";
  }

  document.getElementById("prev-album").onclick = () => {
    albumIdx = (albumIdx - 1 + albums.length) % albums.length;
    renderAlbum();
  };
  document.getElementById("next-album").onclick = () => {
    albumIdx = (albumIdx + 1) % albums.length;
    renderAlbum();
  };
  document.getElementById("prev-photo").onclick = () => {
    const album = albums[albumIdx];
    photoIdx = (photoIdx - 1 + album.photos.length) % album.photos.length;
    renderPhoto();
  };
  document.getElementById("next-photo").onclick = () => {
    const album = albums[albumIdx];
    photoIdx = (photoIdx + 1) % album.photos.length;
    renderPhoto();
  };

  // свайп на мобільному — по фото (горизонталь) та по альбому (потяг вгору/вниз)
  const photoStage = document.getElementById("photo-stage");
  addSwipe(
    photoStage,
    () => { const a = albums[albumIdx]; photoIdx = (photoIdx + 1) % a.photos.length; renderPhoto(); },
    () => { const a = albums[albumIdx]; photoIdx = (photoIdx - 1 + a.photos.length) % a.photos.length; renderPhoto(); }
  );

  renderAlbum();
}

// ── Секція 3: Статистика ─────────────────────────────────────
function renderSection3(body) {
  body.innerHTML = `<h2 class="modal-title">📊 Статистика нашого кохання</h2>
    <div class="stats-grid">
      ${CONFIG.section3.stats.map(s => `
        <div class="stat-card glass">
          <div class="stat-icon">${s.icon}</div>
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`).join("")}
    </div>`;
}

// ── Секція 4: Звички ─────────────────────────────────────────
function renderSection4(body) {
  body.innerHTML = `<h2 class="modal-title">🥰 Твої звички, від яких я тану</h2>
    <div class="habits-list">
      ${CONFIG.section4.habits.map((h, i) => `
        <div class="habit-card glass" style="animation-delay:${i * 0.12}s">
          <span class="habit-num">${i + 1}</span>
          <p>${h}</p>
        </div>`).join("")}
    </div>`;
}

// ── Секція 5: Музика ─────────────────────────────────────────
function renderSection5(body) {
  const { her, him, ours } = CONFIG.section5;
  const renderList = (list) => list.map(t =>
    `<div class="track-item"><span class="track-title">${t.title}</span><span class="track-artist">${t.artist}</span></div>`).join("");

  body.innerHTML = `<h2 class="modal-title">🎵 Музичні смаки</h2>
    <div class="vinyl-wrap">

      <!-- Її платівка -->
      <div class="vinyl-block">
        <div class="vinyl-disc her-disc">
          <div class="vinyl-cover" style="background-image:url('./фото/плейліст обкладикнки/влада.jpg')"></div>
          <div class="vinyl-hole"></div>
          <div class="vinyl-label-static">Її платівка</div>
        </div>
        <div class="track-list her-tracks">${renderList(her)}</div>
      </div>

      <!-- Наш саундтрек -->
      <div class="vinyl-block center-vinyl">
        <div class="vinyl-disc ours-disc small-disc">
          <div class="vinyl-cover-split">
            <div class="split-her"  style="background-image:url('./фото/плейліст обкладикнки/влада.jpg')"></div>
            <div class="split-him"  style="background-image:url('./фото/плейліст обкладикнки/міша.jpg')"></div>
            <div class="split-line"></div>
          </div>
          <div class="vinyl-hole"></div>
          <div class="vinyl-label-static small-label">Наш саундтрек</div>
        </div>
        <div class="track-list ours-tracks">${renderList(ours)}</div>
      </div>

      <!-- Його платівка -->
      <div class="vinyl-block">
        <div class="vinyl-disc him-disc">
          <div class="vinyl-cover" style="background-image:url('./фото/плейліст обкладикнки/міша.jpg')"></div>
          <div class="vinyl-hole"></div>
          <div class="vinyl-label-static">Його платівка</div>
        </div>
        <div class="track-list him-tracks">${renderList(him)}</div>
      </div>

    </div>`;
}

// ── Секція 6: Чому я тебе кохаю ──────────────────────────────
let reasonIdx = 0;
function renderSection6(body) {
  reasonIdx = Math.floor(Math.random() * CONFIG.section6.reasons.length);
  body.innerHTML = `
    <h2 class="modal-title">🔮 Чому я тебе кохаю</h2>
    <div class="reason-wrap">
      <div class="reason-bubble" id="reason-bubble">
        ${CONFIG.section6.reasons[reasonIdx]}
      </div>
      <button class="reason-btn" id="reason-btn">Ще одна причина ✨</button>
      <div class="reason-hint">Натисни стільки разів, скільки хочеш</div>
    </div>`;

  document.getElementById("reason-btn").onclick = () => {
    const bubble = document.getElementById("reason-bubble");
    bubble.style.opacity = "0";
    bubble.style.transform = "scale(0.9)";
    setTimeout(() => {
      reasonIdx = (reasonIdx + 1) % CONFIG.section6.reasons.length;
      bubble.textContent = CONFIG.section6.reasons[reasonIdx];
      bubble.style.opacity = "1";
      bubble.style.transform = "scale(1)";
    }, 200);
  };
}

// ── Секція 7: Найяскравіший спогад ───────────────────────────
function renderSection7(body) {
  const { story, photos } = CONFIG.section7;
  body.innerHTML = `
    <h2 class="modal-title">✨ Найяскравіший спогад</h2>
    <p class="memory-story">${story}</p>
    <div class="memory-gallery">
      ${photos.map(p => `
        <div class="polaroid">
          <img src="./фото/фото для пункту 7/${p}" alt="spohad" onclick="openLightbox(this.src)">
        </div>`).join("")}
    </div>`;
}

// ── Секція 8: Вікторина ───────────────────────────────────────
function renderSection8(body) {
  const qs = CONFIG.section8.questions;
  let current = 0;
  let score = 0;

  function renderQ() {
    if (current >= qs.length) {
      body.innerHTML = `
        <h2 class="modal-title">🎯 Результат!</h2>
        <div class="quiz-result">
          <div class="quiz-score">${score} / ${qs.length}</div>
          <p>${score === qs.length ? "Ти знаєш мене ідеально! Я не здивований 🥹" : score >= 2 ? "Непогано, але є куди зростати 😏" : "Ну ти точно мене знаєш, просто хитруєш 😄"}</p>
        </div>`;
      return;
    }
    const q = qs[current];
    body.innerHTML = `
      <h2 class="modal-title">🎯 Питання ${current + 1} / ${qs.length}</h2>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-answers">
        ${q.answers.map((a, i) => `
          <button class="quiz-ans-btn" data-idx="${i}">${a}</button>`).join("")}
      </div>
      <div class="quiz-feedback" id="quiz-fb"></div>`;

    document.querySelectorAll(".quiz-ans-btn").forEach(btn => {
      btn.onclick = () => {
        const chosen = parseInt(btn.dataset.idx);
        const isCorrect = q.correct.includes(chosen);
        const fb = document.getElementById("quiz-fb");

        document.querySelectorAll(".quiz-ans-btn").forEach(b => {
          b.disabled = true;
          if (q.correct.includes(parseInt(b.dataset.idx))) b.classList.add("correct");
          else b.classList.add("wrong");
        });

        if (isCorrect) {
          score++;
          fb.textContent = "✅ " + (q.fun || "Правильно!");
          fb.style.color = "#7fff7f";
        } else {
          fb.textContent = "❌ " + (q.wrong || "Не зовсім...");
          fb.style.color = "#ff7f7f";
        }

        setTimeout(() => { current++; renderQ(); }, 1800);
      };
    });
  }
  renderQ();
}

// ──────────────────────────────────────────────────────────────
//  СВАЙП-ХЕЛПЕР (для мобільних)
// ──────────────────────────────────────────────────────────────
function addSwipe(el, onLeft, onRight) {
  let startX = null;
  let startY = null;

  el.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  el.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    // спрацьовує тільки якщо рух горизонтальніший за вертикальний
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {
      if (dx < 0) onLeft();   // свайп вліво → наступне
      else        onRight();  // свайп вправо → попереднє
    }
    startX = null;
    startY = null;
  }, { passive: true });
}


function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  lb.classList.add("open");
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lightbox").onclick = function () {
    this.classList.remove("open");
  };
});
