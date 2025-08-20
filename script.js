// Slide navigation
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < slideCount - 1) currentIndex++;
  updateSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) currentIndex--;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// --- Swipe handling ---
let startX = 0;
let endX = 0;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = endX - startX;

  if (swipeDistance > 50 && currentIndex > 0) {
    // swipe right → previous slide
    currentIndex--;
    updateSlide();
  } else if (swipeDistance < -50 && currentIndex < slideCount - 1) {
    // swipe left → next slide
    currentIndex++;
    updateSlide();
  }
}

// --- Keyboard navigation ---
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && currentIndex < slideCount - 1) {
    currentIndex++;
    updateSlide();
  } else if (e.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});


// Keep balloon + confetti setup
function createBalloons(count) { /* ...same code... */ }
function createConfetti(count) { /* ...same code... */ }

// Keyframes injection (same as before)
const style = document.createElement("style");
style.textContent = `
@keyframes floatUp {
  to { transform: translateY(-120vh); }
}
@keyframes confettiFall {
  to { transform: translateY(120vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

window.onload = () => {
  createBalloons(20);
  createConfetti(50);
};

// Balloons animation
function createBalloons(count) {
  const colors = ['#ff4757','#ffa502','#2ed573','#1e90ff','#ff6b81','#ffdd59'];
  const container = document.getElementById('balloons');
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.classList.add('balloon');
    const size = 50 + Math.random() * 50;
    b.style.width = size + 'px';
    b.style.height = size * 1.2 + 'px';
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    b.style.left = Math.random() * 100 + 'vw';
    b.style.position = "absolute";
    b.style.bottom = "-150px";
    b.style.borderRadius = "50%";
    b.style.animation = `floatUp ${5 + Math.random() * 5}s linear infinite`;
    container.appendChild(b);
  }
}

// Confetti animation
function createConfetti(count) {
  const colors = ['#feca57','#ff9ff3','#00d2d3','#48dbfb','#1dd1a1','#5f27cd'];
  const container = document.getElementById('confetti');
  for (let i = 0; i < count; i++) {
    const c = document.createElement('div');
    c.classList.add('confetti');
    c.style.width = "10px";
    c.style.height = "10px";
    c.style.position = "absolute";
    c.style.top = "-20px";
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.opacity = "0.8";
    c.style.animation = `confettiFall ${3 + Math.random() * 3}s linear infinite`;
    container.appendChild(c);
  }
}

// Keyframes for JS-generated elements
const style = document.createElement("style");
style.textContent = `
@keyframes floatUp {
  to { transform: translateY(-120vh); }
}
@keyframes confettiFall {
  to { transform: translateY(120vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);

// Initialize
window.onload = () => {
  createBalloons(20);
  createConfetti(50);
};
