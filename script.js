/**
 * ============================================================================
 * PERSONALIZATION CONFIGURATION (CENTRALIZED CONFIG)
 * ============================================================================
 * Customize names, dates, messages, local photo paths, and audio paths here.
 * Missing local photos are replaced by illustrated SVG portraits.
 * Background music is silent when audio1.mp3 or audio2.mp3 is missing.
 */
const CONFIG = {
  girlfriendName: "Dien",
  boyfriendName: "LDD",
  birthdayDate: "28 THÁNG 10",
  birthdayFullDate: "28/10/2026",
  targetAge: 20,
  daysOnEarth: "7.305",
  smilesCount: "520.000",

  // SCENE-BASED SOUNDTRACK: put audio1.mp3 and audio2.mp3 in assets/.
  // Audio 1: from pressing/holding the candle until Scene 2 ends.
  // Scene 3: no background music, to hear the cassette clearly.
  // Audio 2: from Scene 4 onward, including the ending, looped.
  audio1Path: "assets/audio1.mp3",
  audio2Path: "assets/audio2.mp3",
  cassetteVoicePath: "assets/voice.mp3",

  // Optional: paste your own Formspree endpoint here to receive written wishes.
  // Example format: https://formspree.io/f/xxxxxxxx
  // Leave empty to keep the original offline-only wishing interaction.
  wishReceiverEndpoint: "https://formspree.io/f/xbggobld",

  // Local customizable photos (automatically falls back to illustrated romantic portraits if missing)
  photoPaths: [
    "assets/photo1.jpg",
    "assets/photo2.jpg",
    "assets/photo3.png",
    "assets/photo4.jpeg",    
    "assets/photo5.jpg",
    "assets/photo6.jpg",
    
  ],

  photoCaptions: [
    "Khoảnh khắc ước nguyện bên ánh nến",
    "Nụ cười rạng rỡ ngày sinh nhật",
    "Ánh mắt dịu dàng dưới ánh đèn vàng",
    "Chiếc bánh kem ngọt ngào tuổi 20",
    "Vương miện nhỏ cho công chúa ngày hôm nay",
    "Mãi giữ nụ cười tỏa nắng như thế nhé"
  ],

  // Scene 1: Collage text
  collageSub: "my love",

  // Scene 2: Cake & Candle
  cakeBoardInscription: "Chúc em luôn xinh như hoa",
  birthdayMessages: {
    lightingStatus: "Đang thắp nến cho em...",
    giftHeadline: "Có một món quà nhỏ dành cho em...",
    giftSubline: "Nhưng trước khi mở, thổi nến trước nhé 🎂",
    holdInstruction: "👆 Nhấn & giữ ngọn nến để thổi tắt ✨",
    holdingFeedback: "Giữ nữa... giữ tiếp..."
  },

  // Scene 3: Vintage Cassette
  cassetteMessage: {
    preTitle: "Khoan đã... có một cuộn băng nhỏ gửi riêng cho em 📼",
    kicker: "CUỘN BĂNG DÀNH RIÊNG CHO BÉ",
    title: "Có những điều anh không viết thành chữ được, nên anh đã thu âm lại...",
    transcriptSegments: [
      "Hôm nay là sinh nhật của một người rất đặc biệt...",
      "Chúc người đặc biệt sinh nhật vui vẻ, bước sang tuổi mới rồi!",
      "Mong rằng bạn nhỏ của anh lúc nào cũng lạc quan, yêu đời ✨"
    ]
  },

  // Scene 4: Age 20 Counter
  ageMessages: {
    headline: "20 tuổi rồi đó nha!",
    daysLine: "• 7.305 ngày có mặt trên đời",
    smilesLine: "• khoảng 520.000 lần cười",
    quote: "Tuổi 20 — mong em vẫn là em, chỉ là vui hơn một chút thôi."
  },

  // Scene 5: Postcard Love Letter
  loveLetter: [
    "anh không giỏi nói mấy lời hoa mỹ, nên viết đơn giản thôi: chúc mừng sinh nhật em nhé.",
    "Thêm một tuổi, chẳng cần em phải đổi thay gì, cứ như em vẫn là đã tốt hơn hôm nay — giỏi hơn em nghĩ nhiều đấy.",
    "anh chỉ mong em luôn cười tươi đó, bớt lo một chút, và nhớ là luôn có người ở đây khi em cần."
  ],

  // Scene 6: Heart Halves Merge
  heartMergeMessages: {
    poem: "Một nửa ở chỗ anh, một nửa ở chỗ em... \nđặt tay lên để ghép lại nhé.",
    initialHint: "👆 Đặt tay lên vị trí gần nhau",
    holdingHint: "Giữ thêm chút nữa... thấy ảnh rõ không...",
    completedQuote: "Ghép lại rồi đó. Xa mấy thì tim anh vẫn ở cạnh em."
  },

  // Scene 7: Default Wish if user clicks "Ước thầm trong lòng" or leaves empty
  wishingMessages: {
    defaultUserWish: "Thật đẹp và thật nhiều niềm vui tuổi 20 ✨"
  },

  // Scene 8: Wishing Jar Messages
  wishingJarMessages: {
    // 3 Wishes from "anh"
    threeWishes: [
      "Mong em luôn được yêu thương nhiều như cách em yêu thương mọi người (trừ toi).",
      "Mong mỗi sáng thức dậy, em đều có một lý do để mỉm cười.",
      "Mong tuổi mới em bớt lo nghĩ, ngủ thật ngon, ăn thật nhiều."
    ],
    // Special 4th Star ("ĐIỀU anh MUỐN NÓI NHẤT...")
    specialFourthWish: "Cảm ơn em vì đã luôn ở đây. Tuổi mới, dù có chuyện gì, anh vẫn sẽ ở cạnh em như thế.",
    constellationHeader: "• CHÒM SAO CỦA em · 28 THÁNG 10 •",
    constellationTitle: "Sinh nhật vui vẻ✨",
    constellationDescription: "Từ nay trên trời có một chòm sao mang tên em, điều ước của em ở giữa, những điều anh ước cho em ở quanh."
  },

  // Scene 9: Ending
  endingMessages: {
    quote: "No matter what happens,\n I will always love you.",
    signature: "LDD"
  },

  // Centralized Scene Instructions
  sceneInstructions: {
    scene3Idle: "Nhấn nút ▶ trên máy để nghe lời nhắn nhé, nhớ bật loa lên 🔊",
    scene3Playing: "Đang phát... cứ nghe hết nhé, đừng vội bấm tắt ngang đó 💛",
    scene3Finished: "Cảm ơn em đã lắng nghe đến cuối 💛",
    scene5Front: "Chạm vào tấm thiệp để lật mặt sau 💌",
    scene5Back: "Chạm vào con tem để xem ảnh to 🔍",
    scene8Initial: "Chạm vào từng ngôi sao để mở ra đọc nhé ⭐",
    scene8LastStarHeadline: "Còn một ngôi sao cuối cùng... ngôi sao anh để dành đến cuối ✨"
  }
};

/**
 * ============================================================================
 * ROMANTIC ILLUSTRATED PORTRAIT FALLBACKS (SVG DATA URIs)
 * ============================================================================
 */
function createRomanticPortraitURI(variantIndex) {
  const palettes = [
    { bg1: "#3A2229", bg2: "#1C1015", accent: "#F6C9D6", glow: "#FFE599" },
    { bg1: "#452A32", bg2: "#24151B", accent: "#E99DB5", glow: "#FFD479" },
    { bg1: "#2E2238", bg2: "#161020", accent: "#DCC8F2", glow: "#FFE6A3" },
    { bg1: "#3E2723", bg2: "#1B1110", accent: "#F5D9A8", glow: "#FFC870" },
    { bg1: "#38222E", bg2: "#1A0F16", accent: "#F6C9D6", glow: "#FFE599" },
    { bg1: "#33242B", bg2: "#171014", accent: "#E99DB5", glow: "#FFE08C" }
  ];
  const p = palettes[variantIndex % palettes.length];
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" fill="none">
    <defs>
      <radialGradient id="g${variantIndex}" cx="50%" cy="42%" r="65%">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="100%" stop-color="${p.bg2}"/>
      </radialGradient>
      <radialGradient id="candleGlow${variantIndex}" cx="50%" cy="65%" r="40%">
        <stop offset="0%" stop-color="${p.glow}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${p.glow}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="400" height="520" fill="url(#g${variantIndex})"/>
    <circle cx="75" cy="95" r="24" fill="${p.glow}" opacity="0.16"/>
    <circle cx="330" cy="110" r="32" fill="${p.accent}" opacity="0.14"/>
    <circle cx="60" cy="360" r="28" fill="${p.accent}" opacity="0.12"/>
    <circle cx="340" cy="300" r="20" fill="${p.glow}" opacity="0.18"/>
    <circle cx="200" cy="330" r="160" fill="url(#candleGlow${variantIndex})"/>

    <path d="M125 190 C115 260, 105 340, 118 420 L282 420 C295 340, 285 260, 275 190 C265 130, 135 130, 125 190 Z" fill="#1A1115"/>
    <polygon points="168,136 180,104 200,124 220,104 232,136" fill="#F5D9A8" stroke="#E5B96F" stroke-width="2"/>
    <ellipse cx="200" cy="205" rx="46" ry="54" fill="#F7D7C8"/>
    <path d="M152 192 C165 150, 235 150, 248 192 C230 172, 170 172, 152 192 Z" fill="#23161B"/>
    <path d="M176 204 Q185 212 194 204" stroke="#4A2E2B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M206 204 Q215 212 224 204" stroke="#4A2E2B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="172" cy="216" rx="9" ry="5" fill="#E99DB5" opacity="0.6"/>
    <ellipse cx="228" cy="216" rx="9" ry="5" fill="#E99DB5" opacity="0.6"/>
    <path d="M191 228 Q200 236 209 228" stroke="#B85D6F" stroke-width="2.5" stroke-linecap="round" fill="none"/>

    <path d="M120 440 C130 345, 270 345, 280 440 Z" fill="#F6C9D6" opacity="0.85"/>

    <rect x="135" y="385" width="130" height="68" rx="12" fill="#FFF8F1" stroke="#F6C9D6" stroke-width="3"/>
    <path d="M135 402 Q152 416 168 402 T200 402 T232 402 T265 402" stroke="#E99DB5" stroke-width="5" fill="none"/>
    <rect x="196" y="348" width="8" height="37" rx="3" fill="#E99DB5"/>
    <path d="M200 322 C192 334, 194 346, 200 346 C206 346, 208 334, 200 322 Z" fill="#FFE680"/>
    <circle cx="200" cy="336" r="18" fill="#FFE680" opacity="0.4"/>

    <circle cx="48" cy="465" r="28" fill="#F6C9D6" opacity="0.85"/>
    <circle cx="48" cy="465" r="16" fill="#E99DB5" opacity="0.9"/>
    <circle cx="352" cy="465" r="28" fill="#F6C9D6" opacity="0.85"/>
    <circle cx="352" cy="465" r="16" fill="#E99DB5" opacity="0.9"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function applyPhotoWithFallback(element, path, fallbackIndex) {
  if (!element) return;
  const fallbackURI = createRomanticPortraitURI(fallbackIndex);
  element.style.backgroundImage = `url('${fallbackURI}')`;
  if (!path) return;
  const img = new Image();
  img.onload = () => {
    element.style.backgroundImage = `url('${path}')`;
  };
  img.src = path;
}

/**
 * ============================================================================
 * SOUND & MUSIC ENGINE (External MP3 + Synthesized Acoustic Music Box Fallback)
 * ============================================================================
 */
class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.currentScene = 1;
    this.candleStarted = false;
    this.activeTrack = null;
    this.tracks = {
      audio1: this.createTrack(CONFIG.audio1Path, 0.72),
      audio2: this.createTrack(CONFIG.audio2Path, 0.55)
    };
  }

  createTrack(path, volume) {
    const track = new Audio(path);
    track.loop = true; // Music is repeated even when the MP3 is short.
    track.preload = "auto";
    track.volume = volume;
    // No synthesized fallback: missing files remain silent, as requested.
    track.addEventListener("error", () => this.updateMusicButtonUI());
    return track;
  }

  getCurrentAudio() {
    return this.activeTrack ? this.tracks[this.activeTrack] : null;
  }

  // Scene 1: silence. Scene 2: music only after candle interaction.
  // Scene 3: background music off, voice recording uses its own audio player.
  // Scenes 4-9: audio2 plays continuously (no restart between scenes).
  onSceneChange(scene) {
    this.currentScene = scene;
    if (scene === 1 || scene === 3) {
      this.stopBackground();
    } else if (scene === 2) {
      this.stopBackground();
      this.candleStarted = false;
    } else if (scene >= 4 && scene <= 9) {
      this.playTrack("audio2");
    }
    this.updateMusicButtonUI();
  }

  startCandleMusic() {
    if (this.currentScene !== 2 || this.candleStarted) return;
    this.candleStarted = true;
    this.playTrack("audio1");
  }

  playTrack(key) {
    if (this.activeTrack === key) {
      this.updateMusicButtonUI();
      return;
    }
    this.stopBackground();
    this.activeTrack = key;
    const audio = this.tracks[key];
    try { audio.currentTime = 0; } catch (_) {}
    if (!this.isMuted) {
      // Scene 2 is started by pointerdown; Scene 4 by a real Next-button click.
      // Both user gestures make mobile browser playback more reliable.
      audio.play().catch(() => this.updateMusicButtonUI());
    }
    this.updateMusicButtonUI();
  }

  stopBackground() {
    for (const audio of Object.values(this.tracks)) {
      audio.pause();
      try { audio.currentTime = 0; } catch (_) {}
    }
    this.activeTrack = null;
    this.updateMusicButtonUI();
  }

  toggleMute() {
    // Do not start music in intentional silent sections.
    if (!this.activeTrack) return;
    this.isMuted = !this.isMuted;
    const audio = this.getCurrentAudio();
    if (this.isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => this.updateMusicButtonUI());
    }
    this.updateMusicButtonUI();
  }

  updateMusicButtonUI() {
    const btn = document.getElementById("musicToggle");
    if (!btn) return;
    const available = !!this.activeTrack;
    const playing = available && !this.isMuted;
    btn.classList.toggle("track-available", available);
    btn.classList.toggle("playing", playing);
    btn.disabled = !available;
    btn.setAttribute("aria-label", playing ? "Tắt nhạc nền" : "Bật nhạc nền");
    btn.title = playing ? "Tắt nhạc nền" : "Bật nhạc nền";
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx?.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  // Keep the original small chime effects ONLY after the cassette scene.
  playMusicBoxTone(freq, duration = 0.5, gainLevel = 0.08) {
    if (this.isMuted || this.currentScene <= 3) return;
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  playSparkleChime() {
    if (this.isMuted || this.currentScene <= 3) return;
    const chord = [523.25, 659.25, 783.99, 1046.5];
    chord.forEach((frequency, index) => {
      setTimeout(() => this.playMusicBoxTone(frequency, 0.45, 0.07), index * 75);
    });
  }
}

const audioEngine = new RomanticAudioEngine();

/**
 * ============================================================================
 * MULTI-LAYER PARALLAX PETALS, FIREFLIES & SWIRL CELEBRATION CANVAS
 * ============================================================================
 */
class FloralParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.petals = [];
    this.fireflies = [];
    this.burstParticles = [];
    this.swirlParticles = [];
    this.pointerX = 0;
    this.pointerY = 0;
    this.targetPointerX = 0;
    this.targetPointerY = 0;

    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
      this.initAmbient();
    });
    this.bindParallax();
    this.initAmbient();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = this.canvas.width = rect.width;
    this.height = this.canvas.height = rect.height;
  }

  bindParallax() {
    window.addEventListener("pointermove", (e) => {
      const nx = (e.clientX / Math.max(1, this.width)) - 0.5;
      const ny = (e.clientY / Math.max(1, this.height)) - 0.5;
      this.targetPointerX = nx * 26;
      this.targetPointerY = ny * 26;
      const stage = document.getElementById("appStage");
      if (stage) {
        stage.style.setProperty("--px", `${this.targetPointerX.toFixed(1)}px`);
        stage.style.setProperty("--py", `${this.targetPointerY.toFixed(1)}px`);
      }
    }, { passive: true });
  }

  initAmbient() {
    this.petals = [];
    this.fireflies = [];
    const isDesktop = this.width >= 900;
    const petalCount = isDesktop ? 42 : 24;
    const fireflyCount = isDesktop ? 32 : 18;
    const petalColors = ["#F6C9D6", "#E99DB5", "#FFF8F1", "#DCC8F2", "#F5D9A8"];

    for (let i = 0; i < petalCount; i++) {
      const depth = i % 3;
      const scaleMult = depth === 0 ? 0.65 : depth === 1 ? 1.0 : 1.45;
      this.petals.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: (5 + Math.random() * 5.5) * scaleMult,
        speedY: (0.32 + Math.random() * 0.55) * scaleMult,
        speedX: (-0.28 + Math.random() * 0.56) * scaleMult,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.024,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.015 + Math.random() * 0.02,
        color: petalColors[i % petalColors.length],
        opacity: depth === 0 ? 0.32 : depth === 1 ? 0.65 : 0.85,
        depth: depth
      });
    }

    for (let i = 0; i < fireflyCount; i++) {
      this.fireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: 1.4 + Math.random() * 2.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.035,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }
  }

  triggerBurst(originX, originY, count = 48) {
    const colors = ["#F6C9D6", "#E99DB5", "#FFE699", "#DCC8F2", "#FFF8F1", "#A9C3A0"];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const speed = 2.2 + Math.random() * 6.5;
      this.burstParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.6,
        size: 4.5 + Math.random() * 6.5,
        color: colors[i % colors.length],
        alpha: 1,
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.14
      });
    }
  }

  triggerSwirlCelebration() {
    const cx = this.width / 2;
    const cy = this.height / 2;
    const count = this.width >= 900 ? 54 : 34;
    const colors = ["#F6C9D6", "#E99DB5", "#FFE699", "#FFF8F1", "#DCC8F2"];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const radius = 30 + Math.random() * Math.min(this.width, this.height) * 0.38;
      this.swirlParticles.push({
        cx,
        cy,
        angle,
        radius,
        angularSpeed: 0.028 + Math.random() * 0.025,
        radialSpeed: 0.65 + Math.random() * 1.2,
        size: 5 + Math.random() * 6,
        color: colors[i % colors.length],
        alpha: 0.95,
        rotation: Math.random() * Math.PI * 2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.pointerX += (this.targetPointerX - this.pointerX) * 0.06;
    this.pointerY += (this.targetPointerY - this.pointerY) * 0.06;

    // 1. Ambient Multi-Layer Falling Petals
    for (const p of this.petals) {
      p.swayPhase += p.swaySpeed;
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.swayPhase) * 0.45;
      p.angle += p.spin;

      if (p.y > this.height + 24) {
        p.y = -24;
        p.x = Math.random() * this.width;
      }
      if (p.x > this.width + 24) p.x = -24;
      if (p.x < -24) p.x = this.width + 24;

      const pxOffset = this.pointerX * (p.depth - 1) * 0.45;
      const pyOffset = this.pointerY * (p.depth - 1) * 0.45;

      this.ctx.save();
      this.ctx.translate(p.x + pxOffset, p.y + pyOffset);
      this.ctx.rotate(p.angle);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.moveTo(0, -p.size);
      this.ctx.bezierCurveTo(p.size, -p.size * 0.6, p.size * 0.85, p.size * 0.8, 0, p.size);
      this.ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.8, -p.size, -p.size * 0.6, 0, -p.size);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 2. Glowing Fireflies & Golden Spores
    for (const f of this.fireflies) {
      f.phase += f.speed;
      f.x += f.vx;
      f.y += f.vy;
      if (f.x < 0) f.x = this.width;
      if (f.x > this.width) f.x = 0;
      if (f.y < 0) f.y = this.height;
      if (f.y > this.height) f.y = 0;

      const alpha = 0.22 + ((Math.sin(f.phase) + 1) / 2) * 0.68;
      this.ctx.save();
      this.ctx.globalAlpha = alpha;
      this.ctx.fillStyle = "#FFE8A3";
      this.ctx.shadowColor = "#FFE8A3";
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 3. Swirling Grand Reveal Vortex Petals
    for (let i = this.swirlParticles.length - 1; i >= 0; i--) {
      const s = this.swirlParticles[i];
      s.angle += s.angularSpeed;
      s.radius += s.radialSpeed;
      s.alpha -= 0.011;
      s.rotation += 0.06;

      if (s.alpha <= 0) {
        this.swirlParticles.splice(i, 1);
        continue;
      }

      const x = s.cx + Math.cos(s.angle) * s.radius;
      const y = s.cy + Math.sin(s.angle) * s.radius * 0.75;

      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(s.rotation);
      this.ctx.globalAlpha = s.alpha;
      this.ctx.fillStyle = s.color;
      this.ctx.shadowColor = "#FFE6A3";
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, s.size, s.size * 0.58, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 4. Celebratory Burst Particles
    for (let i = this.burstParticles.length - 1; i >= 0; i--) {
      const b = this.burstParticles[i];
      b.x += b.vx;
      b.y += b.vy;
      b.vy += 0.1;
      b.alpha -= 0.015;
      b.rotation += b.spin;

      if (b.alpha <= 0) {
        this.burstParticles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(b.x, b.y);
      this.ctx.rotate(b.rotation);
      this.ctx.globalAlpha = b.alpha;
      this.ctx.fillStyle = b.color;
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, b.size, b.size * 0.6, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

/**
 * ============================================================================
 * SCENE MANAGER & INTERACTIVE CONTROLLERS (SCENES 1 TO 9)
 * ============================================================================
 */
let currentSceneNumber = 1;
let isTransitioning = false;
let particleSystem = null;
let userSavedWish = CONFIG.wishingMessages.defaultUserWish;

const SCENE_THEMES = {
  1: "dark-warm",
  2: "dark-warm",
  3: "daylight-floral",
  4: "daylight-floral",
  5: "vintage-paper",
  6: "rose-twilight",
  7: "rose-twilight",
  8: "starry-night",
  9: "intimate-finale"
};

function goToScene(targetScene) {
  if (isTransitioning || targetScene === currentSceneNumber) return;
  isTransitioning = true;

  const appStage = document.getElementById("appStage");
  const prevEl = document.getElementById(`scene-${currentSceneNumber}`);
  const nextEl = document.getElementById(`scene-${targetScene}`);

  // Gentle transition petal shimmer
  if (particleSystem) {
    particleSystem.triggerBurst(
      particleSystem.width * 0.5,
      particleSystem.height * 0.5,
      24
    );
  }

  if (prevEl) prevEl.classList.remove("active");
  if (nextEl) nextEl.classList.add("active");

  appStage.setAttribute("data-theme", SCENE_THEMES[targetScene] || "dark-warm");

  const fairyLights = document.getElementById("fairyLights");
  if (fairyLights) {
    fairyLights.style.opacity = (targetScene === 3 || targetScene === 4 || targetScene === 5) ? "0.22" : "0.88";
  }

  currentSceneNumber = targetScene;
  audioEngine.onSceneChange(targetScene);

  if (targetScene === 1) runScene1Entrance();
  if (targetScene === 2) runScene2Entrance();
  if (targetScene === 3) runScene3Entrance();
  if (targetScene === 4) runScene4Entrance();
  if (targetScene === 5) runScene5Entrance();
  if (targetScene === 6) runScene6Entrance();
  if (targetScene === 7) runScene7Entrance();
  if (targetScene === 8) runScene8Entrance();
  if (targetScene === 9) runScene9Entrance();

  setTimeout(() => {
    isTransitioning = false;
  }, 750);
}

/* ----------------------------------------------------------------------------
   SCENE 1: OPENING PHOTO COLLAGE & 5-STAGE CINEMATIC REVEAL (0:03 - 0:11)
   ---------------------------------------------------------------------------- */
let scene1Timers = [];

function initScene1DOM() {
  const grid = document.getElementById("collageGrid");
  grid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const cell = document.createElement("div");
    cell.className = "collage-cell";
    cell.id = `collageCell-${i}`;
    const inner = document.createElement("div");
    inner.className = "collage-cell-inner";
    applyPhotoWithFallback(inner, CONFIG.photoPaths[i], i);
    cell.appendChild(inner);
    grid.appendChild(cell);
  }

  // The first picture starts full-bleed and flies back into collage cell 0.
  const hero = document.getElementById("openingHeroPhoto");
  const heroImage = document.getElementById("openingHeroImage");
  applyPhotoWithFallback(heroImage, CONFIG.photoPaths[0], 0);
  document.getElementById("collageSubText").textContent = CONFIG.collageSub;

  document.getElementById("scene1NextBtn").addEventListener("click", () => {
    // Opening and initial candle-lighting are deliberately silent.
    goToScene(2);
  });
}

function runScene1Entrance() {
  scene1Timers.forEach(clearTimeout);
  scene1Timers = [];

  const scene = document.getElementById("scene-1");
  const hero = document.getElementById("openingHeroPhoto");
  const cinematicStage = document.getElementById("collageCinematicStage");
  const overlay = document.getElementById("collageCenterOverlay");
  const ctaGroup = document.getElementById("collageCtaGroup");
  const nextBtn = document.getElementById("scene1NextBtn");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (cinematicStage) cinematicStage.classList.remove("camera-push-in");
  if (overlay) overlay.classList.remove("show-1", "show-2", "show-3", "climax-glow");
  if (ctaGroup) ctaGroup.classList.remove("visible");
  if (nextBtn) nextBtn.classList.remove("visible");

  for (let i = 0; i < 6; i++) {
    document.getElementById(`collageCell-${i}`)?.classList.remove("revealed", "grand-glow");
  }

  // Clear old inline target geometry so replay really starts as one large photo.
  hero.classList.remove("docking", "finished");
  hero.style.left = "0px";
  hero.style.top = "0px";
  hero.style.width = "100%";
  hero.style.height = "100%";
  hero.style.borderRadius = "0px";
  hero.style.boxShadow = "none";
  // Force the initial geometry to be applied before the transition begins.
  void hero.offsetWidth;

  const later = (fn, ms) => scene1Timers.push(setTimeout(fn, ms));

  const dockFirstPhoto = () => {
    const firstCell = document.getElementById("collageCell-0");
    const sceneRect = scene.getBoundingClientRect();
    const cellRect = firstCell.getBoundingClientRect();
    // Measure the ACTUAL responsive cell: handles both 2x3 mobile and 3x2 desktop.
    const x = cellRect.left - sceneRect.left;
    const y = cellRect.top - sceneRect.top;
    hero.classList.add("docking");
    hero.style.left = `${x}px`;
    hero.style.top = `${y}px`;
    hero.style.width = `${cellRect.width}px`;
    hero.style.height = `${cellRect.height}px`;
    hero.style.borderRadius = window.innerWidth >= 900 ? "20px" : "0px";
    hero.style.boxShadow = window.innerWidth >= 900
      ? "0 18px 45px rgba(0,0,0,.5)" : "none";
  };

  if (reduceMotion) {
    // Motion-sensitive visitors still see the full composition immediately.
    hero.classList.add("finished");
    if (cinematicStage) cinematicStage.classList.add("camera-push-in");
    for (let i = 0; i < 6; i++) {
      document.getElementById(`collageCell-${i}`)?.classList.add("revealed", "grand-glow");
    }
    overlay?.classList.add("show-1", "show-2", "show-3");
    ctaGroup?.classList.add("visible");
    nextBtn?.classList.add("visible");
    return;
  }

  // ACT 1: one big full-screen photograph.
  // ACT 2: picture physically scales/moves into the upper-left collage corner.
  later(dockFirstPhoto, 750);
  later(() => {
    document.getElementById("collageCell-0")?.classList.add("revealed");
    hero.classList.add("finished");
    cinematicStage?.classList.add("camera-push-in");
  }, 2450);

  // ACT 3: five remaining photos appear one at a time, from blur to sharp.
  const remaining = [1, 3, 5, 2, 4];
  remaining.forEach((photoIndex, order) => {
    later(() => {
      document.getElementById(`collageCell-${photoIndex}`)?.classList.add("revealed");
      if (order === 0) overlay?.classList.add("show-1");
      if (order === 2) {
        overlay?.classList.add("show-2", "climax-glow");
        particleSystem?.triggerSwirlCelebration();
        particleSystem?.triggerBurst(
          particleSystem.width * 0.5, particleSystem.height * 0.48, 65
        );
      }
      if (order === 3) overlay?.classList.add("show-3");
      if (order === remaining.length - 1) {
        for (let k = 0; k < 6; k++) {
          document.getElementById(`collageCell-${k}`)?.classList.add("grand-glow");
        }
      }
    }, 2650 + order * 390);
  });

  // ACT 4: pause on finished birthday collage, then show the action hint.
  later(() => {
    ctaGroup?.classList.add("visible");
    nextBtn?.classList.add("visible");
  }, 4750);
}

/* ----------------------------------------------------------------------------
   SCENE 2: BIRTHDAY CAKE, MATCH LIGHTING & CANDLE BLOWING (0:12 - 0:22)
   ---------------------------------------------------------------------------- */
let candleIsLit = false;
let candleExtinguished = false;
let candleHoldProgress = 0;
let candleHoldRAF = null;
let isHoldingCandle = false;

function initScene2DOM() {
  document.getElementById("cakeBoardSubText").textContent = CONFIG.cakeBoardInscription;
  document.getElementById("cakeLightingStatus").textContent = CONFIG.birthdayMessages.lightingStatus;
  document.getElementById("cakeHeadline").textContent = CONFIG.birthdayMessages.giftHeadline;
  document.getElementById("cakeSubline").textContent = CONFIG.birthdayMessages.giftSubline;
  document.getElementById("candleHoldHint").innerHTML = `<span>${CONFIG.birthdayMessages.holdInstruction}</span>`;

  const holdArea = document.getElementById("cakeHoldArea");
  const hintPill = document.getElementById("candleHoldHint");

  const startHold = (e) => {
    if (e.cancelable) e.preventDefault();
    if (!candleIsLit || candleExtinguished) return;
    audioEngine.startCandleMusic();
    isHoldingCandle = true;
    document.getElementById("candleFlameWrap").classList.add("blowing");
    document.getElementById("candleProgressTrack").classList.add("active");
    hintPill.innerHTML = `<span>${CONFIG.birthdayMessages.holdingFeedback}</span>`;
    cancelAnimationFrame(candleHoldRAF);
    candleHoldRAF = requestAnimationFrame(stepCandleBlow);
  };

  const endHold = () => {
    if (!isHoldingCandle || candleExtinguished) return;
    isHoldingCandle = false;
    document.getElementById("candleFlameWrap").classList.remove("blowing");
    hintPill.innerHTML = `<span>${CONFIG.birthdayMessages.holdInstruction}</span>`;
  };

  [holdArea, hintPill].forEach(el => {
    el.addEventListener("pointerdown", startHold);
    el.addEventListener("touchstart", startHold, { passive: false });
  });
  window.addEventListener("pointerup", endHold);
  window.addEventListener("touchend", endHold);
  window.addEventListener("pointercancel", endHold);
}

function stepCandleBlow() {
  const flameWrap = document.getElementById("candleFlameWrap");
  const progressBar = document.getElementById("candleProgressBar");

  if (isHoldingCandle && !candleExtinguished) {
    candleHoldProgress = Math.min(100, candleHoldProgress + 1.45);
    const scale = Math.max(0.15, 1 - (candleHoldProgress / 100) * 0.85);
    flameWrap.style.transform = `translateX(-50%) scale(${scale})`;
    progressBar.style.width = `${candleHoldProgress}%`;

    if (candleHoldProgress >= 100) {
      completeCandleExtinguish();
      return;
    }
    candleHoldRAF = requestAnimationFrame(stepCandleBlow);
  } else if (!candleExtinguished && candleHoldProgress > 0) {
    candleHoldProgress = Math.max(0, candleHoldProgress - 2.5);
    const scale = Math.max(0.15, 1 - (candleHoldProgress / 100) * 0.85);
    flameWrap.style.transform = `translateX(-50%) scale(${scale})`;
    progressBar.style.width = `${candleHoldProgress}%`;
    if (candleHoldProgress > 0) {
      candleHoldRAF = requestAnimationFrame(stepCandleBlow);
    } else {
      document.getElementById("candleProgressTrack").classList.remove("active");
    }
  }
}

function completeCandleExtinguish() {
  candleExtinguished = true;
  isHoldingCandle = false;

  const cakeBox = document.getElementById("cakeHoldArea");
  const flameWrap = document.getElementById("candleFlameWrap");
  const instructions = document.getElementById("cakeInstructions");

  flameWrap.classList.remove("lit", "blowing");
  flameWrap.style.opacity = "0";
  cakeBox.classList.remove("lit");
  cakeBox.classList.add("extinguished");
  instructions.classList.remove("ready");

  document.getElementById("smokeWisp1").classList.add("rise");
  setTimeout(() => document.getElementById("smokeWisp2").classList.add("rise"), 180);

  audioEngine.playSparkleChime();
  if (particleSystem) {
    particleSystem.triggerBurst(particleSystem.width / 2, particleSystem.height * 0.35, 55);
  }

  setTimeout(() => {
    goToScene(3);
  }, 1500);
}

function runScene2Entrance() {
  candleIsLit = false;
  candleExtinguished = false;
  candleHoldProgress = 0;

  const cakeBox = document.getElementById("cakeHoldArea");
  const matchstick = document.getElementById("matchstickAnim");
  const flameWrap = document.getElementById("candleFlameWrap");
  const lightingStatus = document.getElementById("cakeLightingStatus");
  const preTitle = document.getElementById("cakePreTitle");
  const instructions = document.getElementById("cakeInstructions");

  cakeBox.classList.remove("lit", "extinguished");
  flameWrap.classList.remove("lit", "blowing");
  flameWrap.style.opacity = "";
  flameWrap.style.transform = "";
  document.getElementById("smokeWisp1").classList.remove("rise");
  document.getElementById("smokeWisp2").classList.remove("rise");
  document.getElementById("candleProgressBar").style.width = "0%";
  document.getElementById("candleProgressTrack").classList.remove("active");
  document.getElementById("candleHoldHint").innerHTML = `<span>${CONFIG.birthdayMessages.holdInstruction}</span>`;

  lightingStatus.style.display = "block";
  preTitle.style.opacity = "1";
  instructions.classList.remove("ready");

  setTimeout(() => {
    matchstick.classList.add("striking");
  }, 300);

  setTimeout(() => {
    candleIsLit = true;
    matchstick.classList.remove("striking");
    cakeBox.classList.add("lit");
    flameWrap.classList.add("lit");
    lightingStatus.style.display = "none";
    preTitle.style.opacity = "0";
    instructions.classList.add("ready");
    audioEngine.playMusicBoxTone(523.25, 0.4, 0.06);
  }, 1450);
}

/* ----------------------------------------------------------------------------
   SCENE 3: VINTAGE CASSETTE / RADIO PLAYER (Video 0:23 - 0:36)
   ---------------------------------------------------------------------------- */
let cassetteIsPlaying = false;
let cassetteElapsed = 0;
const CASSETTE_TOTAL_DURATION = 10;
let cassetteInterval = null;
let voiceAudioEl = null;
let hasCustomVoiceFile = false;

function initScene3DOM() {
  document.getElementById("cassettePre").textContent = CONFIG.cassetteMessage.preTitle;
  document.getElementById("cassetteKicker").textContent = CONFIG.cassetteMessage.kicker;
  document.getElementById("cassetteTitle").textContent = CONFIG.cassetteMessage.title;
  document.getElementById("cassetteStatus").textContent = CONFIG.sceneInstructions.scene3Idle;

  const vAudio = new Audio();
  vAudio.src = CONFIG.cassetteVoicePath;
  vAudio.addEventListener("canplaythrough", () => {
    hasCustomVoiceFile = true;
    voiceAudioEl = vAudio;
  }, { once: true });

  document.getElementById("radioPlayBtn").addEventListener("click", () => {
    if (cassetteIsPlaying) {
      pauseCassette();
    } else {
      playCassette();
    }
  });

  document.getElementById("radioPauseBtn").addEventListener("click", () => {
    pauseCassette();
  });

  document.getElementById("radioRewBtn").addEventListener("click", () => {
    cassetteElapsed = 0;
    if (voiceAudioEl && hasCustomVoiceFile) voiceAudioEl.currentTime = 0;
    updateCassetteUI();
  });

  document.getElementById("radioFwdBtn").addEventListener("click", () => {
    cassetteElapsed = Math.min(CASSETTE_TOTAL_DURATION, cassetteElapsed + 3);
    updateCassetteUI();
  });

  document.getElementById("scene3NextBtn").addEventListener("click", () => {
    pauseCassette();
    audioEngine.playSparkleChime();
    goToScene(4);
  });
}

function playCassette() {
  // Scene 3 has no background soundtrack so the recorded voice stays clear.
  if (cassetteElapsed >= CASSETTE_TOTAL_DURATION) {
    cassetteElapsed = 0;
  }
  cassetteIsPlaying = true;

  document.getElementById("reelLeft").classList.add("spinning");
  document.getElementById("reelRight").classList.add("spinning");
  document.getElementById("radioPlayBtn").classList.add("pressed");
  document.getElementById("playFingerHint").style.display = "none";
  document.getElementById("cassetteStatus").textContent = CONFIG.sceneInstructions.scene3Playing;
  document.getElementById("voiceSubtitlePill").classList.add("visible");

  if (voiceAudioEl && hasCustomVoiceFile) {
    voiceAudioEl.play().catch(() => {});
  }

  clearInterval(cassetteInterval);
  cassetteInterval = setInterval(() => {
    cassetteElapsed = Math.min(CASSETTE_TOTAL_DURATION, cassetteElapsed + 0.2);
    updateCassetteUI();

    if (cassetteElapsed >= 6) {
      const nextWrap = document.getElementById("cassetteNextWrap");
      nextWrap.style.opacity = "1";
      nextWrap.style.pointerEvents = "auto";
    }

    if (cassetteElapsed >= CASSETTE_TOTAL_DURATION) {
      finishCassette();
    }
  }, 200);
}

function pauseCassette() {
  cassetteIsPlaying = false;
  clearInterval(cassetteInterval);
  document.getElementById("reelLeft").classList.remove("spinning");
  document.getElementById("reelRight").classList.remove("spinning");
  document.getElementById("radioPlayBtn").classList.remove("pressed");
  if (voiceAudioEl && hasCustomVoiceFile) {
    voiceAudioEl.pause();
  }
}

function finishCassette() {
  pauseCassette();
  document.getElementById("cassetteStatus").textContent = CONFIG.sceneInstructions.scene3Finished;
  const nextWrap = document.getElementById("cassetteNextWrap");
  nextWrap.style.opacity = "1";
  nextWrap.style.pointerEvents = "auto";
  audioEngine.playSparkleChime();
}

function updateCassetteUI() {
  const sec = Math.floor(cassetteElapsed);
  document.getElementById("cassetteCurrentTime").textContent = `0:${sec < 10 ? "0" + sec : sec}`;
  const pct = (cassetteElapsed / CASSETTE_TOTAL_DURATION) * 100;
  document.getElementById("cassetteProgressFill").style.width = `${pct}%`;

  const segs = CONFIG.cassetteMessage.transcriptSegments;
  const pill = document.getElementById("voiceSubtitlePill");
  if (cassetteElapsed < 3.4) {
    pill.textContent = `"${segs[0]}"`;
  } else if (cassetteElapsed < 6.8) {
    pill.textContent = `"${segs[1]}"`;
  } else {
    pill.textContent = `"${segs[2]}"`;
  }
}

function runScene3Entrance() {
  pauseCassette();
  cassetteElapsed = 0;
  updateCassetteUI();
  document.getElementById("playFingerHint").style.display = "block";
  document.getElementById("cassetteStatus").textContent = CONFIG.sceneInstructions.scene3Idle;
  document.getElementById("voiceSubtitlePill").classList.remove("visible");
  const nextWrap = document.getElementById("cassetteNextWrap");
  nextWrap.style.opacity = "0";
  nextWrap.style.pointerEvents = "none";
}

/* ----------------------------------------------------------------------------
   SCENE 4: NEW AGE COUNTER (01 -> 20) & STATS (Video 0:37 - 0:44)
   ---------------------------------------------------------------------------- */
let ageInterval = null;

function initScene4DOM() {
  applyPhotoWithFallback(document.getElementById("ageBgPhoto"), CONFIG.photoPaths[0], 0);
  document.getElementById("ageHeadline").textContent = CONFIG.ageMessages.headline;
  document.getElementById("ageStatDays").textContent = CONFIG.ageMessages.daysLine;
  document.getElementById("ageStatSmiles").textContent = CONFIG.ageMessages.smilesLine;
  document.getElementById("ageQuote").textContent = CONFIG.ageMessages.quote;

  const confettiLayer = document.getElementById("ageConfettiLayer");
  const colors = ["#E99DB5", "#A9C3A0", "#F5D9A8", "#DCC8F2", "#7BC8F6"];
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("span");
    dot.style.position = "absolute";
    dot.style.width = `${4 + (i % 4)}px`;
    dot.style.height = `${4 + (i % 4)}px`;
    dot.style.borderRadius = "50%";
    dot.style.background = colors[i % colors.length];
    dot.style.left = `${8 + (i * 19) % 84}%`;
    dot.style.top = `${10 + (i * 23) % 80}%`;
    confettiLayer.appendChild(dot);
  }

  document.getElementById("scene4NextBtn").addEventListener("click", () => {
    audioEngine.playSparkleChime();
    goToScene(5);
  });
}

function runScene4Entrance() {
  clearInterval(ageInterval);
  const card = document.getElementById("agePhotoCard");
  const tensEl = document.getElementById("ageDigitTens");
  const onesEl = document.getElementById("ageDigitOnes");
  const headline = document.getElementById("ageHeadline");
  const statDays = document.getElementById("ageStatDays");
  const statSmiles = document.getElementById("ageStatSmiles");
  const quote = document.getElementById("ageQuote");
  const nextWrap = document.getElementById("ageNextWrap");

  card.classList.remove("pastel-mode");
  [headline, statDays, statSmiles, quote, nextWrap].forEach(el => el.classList.remove("show"));

  let currentAge = 1;
  const target = CONFIG.targetAge || 20;
  tensEl.textContent = "0";
  onesEl.textContent = "1";

  ageInterval = setInterval(() => {
    currentAge++;
    const str = currentAge < 10 ? `0${currentAge}` : `${currentAge}`;
    tensEl.textContent = str[0];
    onesEl.textContent = str[1];

    if (currentAge === 15) {
      card.classList.add("pastel-mode");
    }

    if (currentAge >= target) {
      clearInterval(ageInterval);
      if (particleSystem) {
        particleSystem.triggerBurst(particleSystem.width / 2, particleSystem.height * 0.32, 42);
      }
      setTimeout(() => headline.classList.add("show"), 200);
      setTimeout(() => statDays.classList.add("show"), 650);
      setTimeout(() => statSmiles.classList.add("show"), 1100);
      setTimeout(() => quote.classList.add("show"), 1600);
      setTimeout(() => nextWrap.classList.add("show"), 2150);
    }
  }, 85);
}

/* ----------------------------------------------------------------------------
   SCENE 5: "LÁ THƯ NHỎ" 3D FLIPPING POSTCARD & STAMP ZOOM (0:45 - 0:59)
   ---------------------------------------------------------------------------- */
let postcardFlipped = false;
let typewriterTimers = [];

function initScene5DOM() {
  applyPhotoWithFallback(document.getElementById("postcardFrontImg"), CONFIG.photoPaths[2], 2);
  applyPhotoWithFallback(document.getElementById("photoStampImg"), CONFIG.photoPaths[1], 1);
  applyPhotoWithFallback(document.getElementById("stampLightboxImg"), CONFIG.photoPaths[1], 1);
  document.getElementById("postcardRecipientName").textContent = CONFIG.girlfriendName;

  const flipCard = document.getElementById("postcardFlipCard");
  const stampBtn = document.getElementById("photoStampBtn");
  const lightbox = document.getElementById("stampLightbox");

  flipCard.addEventListener("click", (e) => {
    if (e.target.closest("#photoStampBtn")) return;
    if (!postcardFlipped) {
      postcardFlipped = true;
      flipCard.classList.add("flipped");
      document.getElementById("postcardHint").textContent = CONFIG.sceneInstructions.scene5Back;
      audioEngine.playMusicBoxTone(440, 0.35, 0.06);
      startPostcardTypewriter();
    }
  });

  stampBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lightbox.classList.add("open");
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  document.getElementById("scene5NextBtn").addEventListener("click", () => {
    audioEngine.playSparkleChime();
    goToScene(6);
  });
}

function startPostcardTypewriter() {
  typewriterTimers.forEach(t => clearTimeout(t));
  typewriterTimers = [];

  const lineEls = [
    document.getElementById("letterLine1"),
    document.getElementById("letterLine2"),
    document.getElementById("letterLine3")
  ];
  lineEls.forEach(el => (el.textContent = ""));

  let delay = 550;
  CONFIG.loveLetter.forEach((paragraph, pIdx) => {
    const targetEl = lineEls[pIdx];
    if (!targetEl) return;
    for (let i = 1; i <= paragraph.length; i++) {
      typewriterTimers.push(
        setTimeout(() => {
          targetEl.textContent = paragraph.slice(0, i);
        }, delay + i * 28)
      );
    }
    delay += paragraph.length * 28 + 380;
  });

  typewriterTimers.push(
    setTimeout(() => {
      document.getElementById("postcardNextWrap").classList.add("visible");
    }, delay)
  );
}

function runScene5Entrance() {
  postcardFlipped = false;
  typewriterTimers.forEach(t => clearTimeout(t));
  typewriterTimers = [];

  document.getElementById("postcardFlipCard").classList.remove("flipped");
  document.getElementById("postcardHint").textContent = CONFIG.sceneInstructions.scene5Front;
  document.getElementById("postcardNextWrap").classList.remove("visible");
  document.getElementById("letterLine1").textContent = "";
  document.getElementById("letterLine2").textContent = "";
  document.getElementById("letterLine3").textContent = "";
}

/* ----------------------------------------------------------------------------
   SCENE 6: MERGING HEART HALVES & POLAROID REVEAL (Video 1:00 - 1:12)
   ---------------------------------------------------------------------------- */
let heartMergeProgress = 0;
let isHoldingHearts = false;
let heartsMergedDone = false;
let heartMergeRAF = null;

function initScene6DOM() {
  applyPhotoWithFallback(document.getElementById("heartPolaroidImg"), CONFIG.photoPaths[4], 4);
  document.getElementById("heartPoem").innerHTML = CONFIG.heartMergeMessages.poem.replace(/\n/g, "<br/>");
  document.getElementById("heartCompleteQuote").textContent = CONFIG.heartMergeMessages.completedQuote;

  const zone = document.getElementById("heartHoldZone");
  const statusEl = document.getElementById("heartStatusText");

  const startHeartHold = (e) => {
    if (e.cancelable) e.preventDefault();
    if (heartsMergedDone) return;
    isHoldingHearts = true;
    statusEl.textContent = CONFIG.heartMergeMessages.holdingHint;
    cancelAnimationFrame(heartMergeRAF);
    heartMergeRAF = requestAnimationFrame(stepHeartMerge);
  };

  const endHeartHold = () => {
    if (!isHoldingHearts || heartsMergedDone) return;
    isHoldingHearts = false;
    statusEl.textContent = CONFIG.heartMergeMessages.initialHint;
  };

  zone.addEventListener("pointerdown", startHeartHold);
  zone.addEventListener("touchstart", startHeartHold, { passive: false });
  window.addEventListener("pointerup", endHeartHold);
  window.addEventListener("touchend", endHeartHold);

  document.getElementById("scene6NextBtn").addEventListener("click", () => {
    audioEngine.playSparkleChime();
    goToScene(7);
  });
}

function stepHeartMerge() {
  if (heartsMergedDone) return;

  const leftHalf = document.getElementById("heartHalfLeft");
  const rightHalf = document.getElementById("heartHalfRight");
  const polaroidImg = document.getElementById("heartPolaroidImg");

  if (isHoldingHearts) {
    heartMergeProgress = Math.min(100, heartMergeProgress + 1.35);
  } else {
    heartMergeProgress = Math.max(0, heartMergeProgress - 2.2);
  }

  const t = heartMergeProgress / 100;
  const offset = 34 - t * 25;
  const rot = 12 * (1 - t);

  leftHalf.style.transform = `translateX(${-offset}px) rotate(${-rot}deg)`;
  rightHalf.style.transform = `translateX(${offset}px) rotate(${rot}deg)`;

  const blurPx = (1 - t) * 16;
  const gray = (1 - t) * 0.55;
  const bright = 0.6 + t * 0.4;
  polaroidImg.style.filter = `blur(${blurPx.toFixed(1)}px) grayscale(${gray.toFixed(2)}) brightness(${bright.toFixed(2)})`;

  if (heartMergeProgress >= 100) {
    completeHeartMerge();
    return;
  }

  if (isHoldingHearts || heartMergeProgress > 0) {
    heartMergeRAF = requestAnimationFrame(stepHeartMerge);
  }
}

function completeHeartMerge() {
  heartsMergedDone = true;
  isHoldingHearts = false;

  const zone = document.getElementById("heartHoldZone");
  const statusEl = document.getElementById("heartStatusText");
  const completeBox = document.getElementById("heartCompleteBox");
  const appStage = document.getElementById("appStage");

  zone.classList.add("merged");
  statusEl.style.display = "none";
  completeBox.classList.add("visible");
  appStage.setAttribute("data-theme", "rose-warm-glow");

  audioEngine.playSparkleChime();
  if (particleSystem) {
    particleSystem.triggerBurst(particleSystem.width / 2, particleSystem.height * 0.55, 50);
  }
}

function runScene6Entrance() {
  heartsMergedDone = false;
  isHoldingHearts = false;
  heartMergeProgress = 0;

  const zone = document.getElementById("heartHoldZone");
  const statusEl = document.getElementById("heartStatusText");
  const completeBox = document.getElementById("heartCompleteBox");
  const polaroidImg = document.getElementById("heartPolaroidImg");
  const leftHalf = document.getElementById("heartHalfLeft");
  const rightHalf = document.getElementById("heartHalfRight");

  zone.classList.remove("merged");
  leftHalf.style.transform = "translateX(-34px) rotate(-12deg)";
  rightHalf.style.transform = "translateX(34px) rotate(12deg)";
  polaroidImg.style.filter = "blur(16px) grayscale(0.55) brightness(0.6)";
  statusEl.style.display = "block";
  statusEl.textContent = CONFIG.heartMergeMessages.initialHint;
  completeBox.classList.remove("visible");
}

/* ----------------------------------------------------------------------------
   SCENE 7: WRITE A WISH & FOLD ORIGAMI STAR (Video 1:13 - 1:25)
   ---------------------------------------------------------------------------- */
let isFoldingStar = false;

// Formspree sends the wish to the inbox linked to YOUR Formspree form.
// Do not put your email password or an API secret in this publicly hosted file.
async function deliverBirthdayWish(message) {
  const endpoint = CONFIG.wishReceiverEndpoint.trim();
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    throw new Error("No valid Formspree endpoint configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      message,
      _subject: "Điều ước sinh nhật tuổi 20",
      submittedAt: new Date().toISOString()
    })
  });

  if (!response.ok) throw new Error(`Wish delivery failed: ${response.status}`);
}

let isSendingBirthdayWish = false;

function initScene7DOM() {
  const textarea = document.getElementById("wishTextarea");
  const livePreview = document.getElementById("wishLivePreview");
  const charCount = document.getElementById("wishCharCount");
  const foldBtn = document.getElementById("foldStarBtn");
  const silentBtn = document.getElementById("silentWishBtn");

  textarea.addEventListener("input", () => {
    const val = textarea.value;
    livePreview.textContent = val;
    charCount.textContent = `${val.length}/200`;
  });

  // Explicitly let the visitor know before any written wish is sent.
  const receiverEnabled = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(
    CONFIG.wishReceiverEndpoint.trim()
  );
  let deliveryHint = null;
  if (receiverEnabled) {
    deliveryHint = document.createElement("p");
    deliveryHint.className = "wish-delivery-note";
    deliveryHint.setAttribute("role", "status");
    deliveryHint.setAttribute("aria-live", "polite");
    deliveryHint.textContent = "💌 Điều ước viết ra sẽ được gửi riêng đến anh. Nếu muốn giữ cho riêng mình, chọn ‘Ước thầm trong lòng’ nhé.";
    foldBtn.insertAdjacentElement("beforebegin", deliveryHint);
  }

  foldBtn.addEventListener("click", async () => {
    if (isFoldingStar || isSendingBirthdayWish) return;
    const trimmed = textarea.value.trim();
    userSavedWish = trimmed || CONFIG.wishingMessages.defaultUserWish;

    // Do not transmit a fabricated default wish or an explicitly silent wish.
    if (receiverEnabled && trimmed) {
      isSendingBirthdayWish = true;
      foldBtn.disabled = true;
      if (deliveryHint) deliveryHint.textContent = "Đang gửi điều ước... 💌";
      try {
        await deliverBirthdayWish(trimmed);
        if (deliveryHint) deliveryHint.textContent = "Điều ước đã được gửi rồi 💗";
      } catch (error) {
        console.error("Unable to deliver birthday wish:", error);
        if (deliveryHint) deliveryHint.textContent = "Chưa gửi được điều ước. Em nhấn lại để thử, hoặc chọn ‘Ước thầm trong lòng’ để tiếp tục nhé.";
        isSendingBirthdayWish = false;
        foldBtn.disabled = false;
        return;
      }
      isSendingBirthdayWish = false;
      foldBtn.disabled = false;
    }
    triggerOrigamiStarFold();
  });

  silentBtn.addEventListener("click", () => {
    if (isFoldingStar || isSendingBirthdayWish) return;
    userSavedWish = CONFIG.wishingMessages.defaultUserWish;
    triggerOrigamiStarFold();
  });
}

function triggerOrigamiStarFold() {
  if (isFoldingStar) return;
  isFoldingStar = true;

  const uiContent = document.getElementById("wishUiContent");
  const foldingStage = document.getElementById("foldingStage");
  const stripAnim = document.getElementById("paperStripAnim");
  const starSvg = document.getElementById("foldedStarSvg");

  uiContent.classList.add("folding-hide");
  foldingStage.classList.add("active");
  stripAnim.classList.add("step-ribbon");

  audioEngine.playMusicBoxTone(587.33, 0.45, 0.06);

  setTimeout(() => {
    starSvg.classList.add("bloom");
    audioEngine.playSparkleChime();
    if (particleSystem) {
      particleSystem.triggerBurst(particleSystem.width / 2, particleSystem.height / 2, 44);
    }
  }, 950);

  setTimeout(() => {
    goToScene(8);
  }, 2350);
}

function runScene7Entrance() {
  isFoldingStar = false;
  document.getElementById("wishUiContent").classList.remove("folding-hide");
  document.getElementById("foldingStage").classList.remove("active");
  document.getElementById("paperStripAnim").classList.remove("step-ribbon");
  document.getElementById("foldedStarSvg").classList.remove("bloom");
}

/* ----------------------------------------------------------------------------
   SCENE 8: MAGICAL WISHING JAR & CONSTELLATION (Video 1:26 - 2:02)
   ---------------------------------------------------------------------------- */
let openedStarsSet = new Set();
let activeStarIndex = null;

function initScene8DOM() {
  document.getElementById("constellationDateTag").textContent = CONFIG.wishingJarMessages.constellationHeader;
  document.getElementById("constellationWishTitle").textContent = CONFIG.wishingJarMessages.constellationTitle;
  document.getElementById("constellationWishDesc").textContent = CONFIG.wishingJarMessages.constellationDescription;

  for (let i = 0; i < 5; i++) {
    const starBtn = document.getElementById(`jarStar${i}`);
    starBtn.addEventListener("click", () => openJarStarModal(i));
  }

  document.getElementById("starModalCloseBtn").addEventListener("click", () => {
    closeJarStarModal();
  });

  document.getElementById("scene8NextBtn").addEventListener("click", () => {
    audioEngine.playSparkleChime();
    goToScene(9);
  });
}

function openJarStarModal(index) {
  activeStarIndex = index;
  const backdrop = document.getElementById("starModalBackdrop");
  const unfoldStrip = document.getElementById("starUnfoldStrip");
  const noteCard = document.getElementById("starNoteCard");
  const kickerEl = document.getElementById("starModalKicker");
  const bodyEl = document.getElementById("starModalBody");
  const progressEl = document.getElementById("starModalProgress");

  audioEngine.playMusicBoxTone(659.25, 0.35, 0.06);

  if (index === 0) {
    kickerEl.textContent = "ĐIỀU ƯỚC CỦA em";
    bodyEl.textContent = userSavedWish;
    progressEl.style.display = "none";
  } else if (index === 1) {
    kickerEl.textContent = "ĐIỀU anh MUỐN NÓI NHẤT...";
    bodyEl.textContent = CONFIG.wishingJarMessages.specialFourthWish;
    progressEl.style.display = "none";
  } else {
    const wishIdx = index - 2;
    kickerEl.textContent = "ANh ƯỚC CHO EM...";
    bodyEl.textContent = CONFIG.wishingJarMessages.threeWishes[wishIdx];
    progressEl.style.display = "block";
    progressEl.textContent = `★ ${wishIdx + 1}/3`;
  }

  backdrop.classList.add("open");

  if (index === 1 && !openedStarsSet.has(1)) {
    noteCard.style.display = "none";
    unfoldStrip.classList.add("active");
    setTimeout(() => {
      unfoldStrip.classList.remove("active");
      noteCard.style.display = "block";
    }, 520);
  } else {
    unfoldStrip.classList.remove("active");
    noteCard.style.display = "block";
  }
}

function closeJarStarModal() {
  const backdrop = document.getElementById("starModalBackdrop");
  backdrop.classList.remove("open");

  if (activeStarIndex === null) return;
  const idx = activeStarIndex;
  activeStarIndex = null;

  const starBtn = document.getElementById(`jarStar${idx}`);
  starBtn.classList.remove(`pos-jar-${idx}`, "pulse-attention");
  starBtn.classList.add(`pos-sky-${idx}`, "sky-risen");

  openedStarsSet.add(idx);
  audioEngine.playMusicBoxTone(783.99, 0.35, 0.06);

  updateJarProgressionState();
}

function updateJarProgressionState() {
  const headline = document.getElementById("jarHeadline");
  const subtext = document.getElementById("jarSubtext");
  const hint = document.getElementById("jarHint");

  const threeWishesOpened = [2, 3, 4].filter(i => openedStarsSet.has(i)).length;

  if (threeWishesOpened === 3 && !openedStarsSet.has(1)) {
    headline.textContent = CONFIG.sceneInstructions.scene8LastStarHeadline;
    subtext.style.display = "none";
    hint.style.display = "none";
    document.getElementById("jarStar1").classList.add("pulse-attention");
  }

  if (openedStarsSet.size === 5) {
    setTimeout(() => {
      document.getElementById("constellationSvg").classList.add("connected");
      headline.style.display = "none";
      subtext.style.display = "none";
      hint.style.display = "none";
      document.getElementById("constellationDoneBox").classList.add("visible");
      audioEngine.playSparkleChime();
      if (particleSystem) {
        particleSystem.triggerBurst(particleSystem.width / 2, particleSystem.height * 0.25, 50);
      }
    }, 650);
  }
}

function runScene8Entrance() {
  openedStarsSet.clear();
  activeStarIndex = null;

  document.getElementById("constellationSvg").classList.remove("connected");
  document.getElementById("constellationDoneBox").classList.remove("visible");

  const headline = document.getElementById("jarHeadline");
  const subtext = document.getElementById("jarSubtext");
  const hint = document.getElementById("jarHint");

  headline.style.display = "block";
  headline.textContent = "Ngôi sao của em đã nằm trong hũ rồi ✨";
  subtext.style.display = "block";
  hint.style.display = "block";

  for (let i = 0; i < 5; i++) {
    const starBtn = document.getElementById(`jarStar${i}`);
    starBtn.classList.remove(`pos-sky-${i}`, "sky-risen", "pulse-attention");
    starBtn.classList.add(`pos-jar-${i}`);
  }
}

/* ----------------------------------------------------------------------------
   SCENE 9: FINAL INTIMATE MESSAGE & REPLAY (Video 2:03 - 2:13)
   ---------------------------------------------------------------------------- */
function initScene9DOM() {
  document.getElementById("finalQuoteText").innerHTML = CONFIG.endingMessages.quote.replace(/\n/g, "<br/>");
  document.getElementById("finalSignText").textContent = CONFIG.endingMessages.signature;

  document.getElementById("replayAllBtn").addEventListener("click", () => {
    audioEngine.playSparkleChime();
    goToScene(1);
  });
}

function runScene9Entrance() {
  const quote = document.getElementById("finalQuoteText");
  const sign = document.getElementById("finalSignText");
  const replay = document.getElementById("finalReplayWrap");

  [quote, sign, replay].forEach(el => el.classList.remove("show"));

  setTimeout(() => quote.classList.add("show"), 500);
  setTimeout(() => sign.classList.add("show"), 1350);
  setTimeout(() => replay.classList.add("show"), 2200);
}

/**
 * ============================================================================
 * INITIALIZE APPLICATION ON DOM READY
 * ============================================================================
 */
window.addEventListener("DOMContentLoaded", () => {
  particleSystem = new FloralParticleSystem("petalCanvas");

  document.getElementById("musicToggle").addEventListener("click", () => {
    audioEngine.toggleMute();
  });

  initScene1DOM();
  initScene2DOM();
  initScene3DOM();
  initScene4DOM();
  initScene5DOM();
  initScene6DOM();
  initScene7DOM();
  initScene8DOM();
  initScene9DOM();

  document.getElementById("appStage").setAttribute("data-theme", SCENE_THEMES[1]);
  audioEngine.onSceneChange(1);
  runScene1Entrance();
});