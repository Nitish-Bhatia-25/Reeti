(function () {
  const track = document.getElementById("slide-track");
  const progressEl = document.getElementById("progress");
  const firefliesEl = document.getElementById("fireflies");

  const FRAME_SHAPES = ["arch", "leaf", "oval", "plate"];
  let photoIndex = 0; // for progress dots + shape/variant cycling

  const romanIsh = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  function buildSlide(page, i) {
    const el = document.createElement("div");
    el.className = "slide";

    if (page.type === "landing") {
      el.classList.add("slide-landing");
      el.innerHTML = `
        <span class="kicker">for Reeti</span>
        <h1>${page.heading}</h1>
        <p>${page.message}</p>
        <div class="swipe-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 5l7 7-7 7" />
          </svg>
          <span>swipe to open</span>
        </div>`;
      return el;
    }

    if (page.type === "closing") {
      el.classList.add("slide-closing");
      el.innerHTML = `
        <span class="kicker">the last page</span>
        <h1>${page.heading}</h1>
        <p>${page.message}</p>`;
      return el;
    }

    // photo page
    photoIndex += 1;
    const variant = ((photoIndex - 1) % 4) + 1;
    const shape = FRAME_SHAPES[(photoIndex - 1) % FRAME_SHAPES.length];
    const reverse = photoIndex % 2 === 0 ? " row-reverse" : "";

    el.classList.add("slide-photo", `variant-${variant}`, `frame-shape-${shape}`);
    if (reverse) el.classList.add("row-reverse");

    el.innerHTML = `
      <div class="frame-wrap">
        <img src="${page.photo}" alt="" draggable="false"
             onerror="this.replaceWith(Object.assign(document.createElement('div'), {className:'frame-placeholder', textContent:'Photo ${photoIndex}'}))">
      </div>
      <div>
        <span class="page-mark">${romanIsh[photoIndex - 1] || photoIndex}</span>
        <p class="page-text">${page.text}</p>
      </div>`;
    return el;
  }

  function render() {
    PAGES.forEach((page, i) => track.appendChild(buildSlide(page, i)));

    const dotCount = PAGES.filter((p) => p.type === "photo").length;
    for (let i = 0; i < dotCount; i++) {
      const d = document.createElement("span");
      d.className = "dot";
      progressEl.appendChild(d);
    }
  }

  render();

  // ---------- navigation ----------

  let current = 0;
  const total = PAGES.length;

  function goTo(index) {
    current = Math.max(0, Math.min(total - 1, index));
    track.style.transform = `translateX(-${current * 100}%)`;

    const page = PAGES[current];
    const dots = progressEl.querySelectorAll(".dot");
    if (page.type === "photo") {
      progressEl.classList.add("visible");
      const photoOrder = PAGES.slice(0, current + 1).filter((p) => p.type === "photo").length - 1;
      dots.forEach((d, i) => d.classList.toggle("active", i === photoOrder));
    } else {
      progressEl.classList.remove("visible");
    }
  }

  goTo(0);

  // ---------- swipe (touch) ----------

  let touchStartX = 0;
  let touchDeltaX = 0;

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  track.addEventListener("touchend", () => {
    const threshold = 50;
    if (touchDeltaX < -threshold) goTo(current + 1);
    else if (touchDeltaX > threshold) goTo(current - 1);
  });

  // ---------- click-and-drag (desktop) ----------

  let dragging = false;
  let dragStartX = 0;

  track.addEventListener("mousedown", (e) => {
    dragging = true;
    dragStartX = e.clientX;
    track.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const delta = e.clientX - dragStartX;
    track.style.transform = `translateX(calc(-${current * 100}% + ${delta}px))`;
  });

  window.addEventListener("mouseup", (e) => {
    if (!dragging) return;
    dragging = false;
    track.style.transition = "";
    const delta = e.clientX - dragStartX;
    const threshold = 60;
    if (delta < -threshold) goTo(current + 1);
    else if (delta > threshold) goTo(current - 1);
    else goTo(current);
  });

  // ---------- keyboard (desktop) ----------

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });

  // ---------- fireflies ----------

  const FIREFLY_COUNT = 7;
  for (let i = 0; i < FIREFLY_COUNT; i++) {
    const f = document.createElement("span");
    f.className = "firefly";
    f.style.left = `${Math.random() * 100}%`;
    f.style.top = `${20 + Math.random() * 65}%`;
    f.style.animationDelay = `${Math.random() * 9}s`;
    f.style.animationDuration = `${7 + Math.random() * 5}s`;
    firefliesEl.appendChild(f);
  }
})();
