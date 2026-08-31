(function () {
  const track = document.getElementById("slide-track");
  const progressEl = document.getElementById("progress");
  const firefliesEl = document.getElementById("fireflies");

  const FRAME_SHAPES = ["arch", "leaf", "oval", "plate"];
  let photoIndex = 0; // for progress dots + shape/variant cycling

  const romanIsh = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  const FLOWER_ICONS = {
    marigold: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <circle cx="12" cy="12" r="2.6"/>
      <path d="M12 3.5c1.6 0 2.4 1.6 1.6 3.2C12.8 8.3 12 9 12 9s-.8-.7-1.6-2.3C9.6 5.1 10.4 3.5 12 3.5z"/>
      <path d="M12 20.5c1.6 0 2.4-1.6 1.6-3.2C12.8 15.7 12 15 12 15s-.8.7-1.6 2.3c-.8 1.6 0 3.2 1.6 3.2z"/>
      <path d="M20.5 12c0 1.6-1.6 2.4-3.2 1.6C15.7 12.8 15 12 15 12s.7-.8 2.3-1.6c1.6-.8 3.2 0 3.2 1.6z"/>
      <path d="M3.5 12c0 1.6 1.6 2.4 3.2 1.6C8.3 12.8 9 12 9 12s-.7-.8-2.3-1.6c-1.6-.8-3.2 0-3.2 1.6z"/>
      <path d="M17.5 6.5c1.1 1.1.6 2.9-1.1 3.3-1.7.4-2.7-.2-2.7-.2s.2-1 1.1-2.4c.9-1.4 1.6-1.7 2.7-.7z"/>
      <path d="M6.5 17.5c-1.1-1.1-.6-2.9 1.1-3.3 1.7-.4 2.7.2 2.7.2s-.2 1-1.1 2.4c-.9 1.4-1.6 1.7-2.7.7z"/>
      <path d="M17.5 17.5c-1.1 1.1-2.9.6-3.3-1.1-.4-1.7.2-2.7.2-2.7s1 .2 2.4 1.1c1.4.9 1.7 1.6.7 2.7z"/>
      <path d="M6.5 6.5c-1.1-1.1-.6-2.9 1.1-3.3 1.7-.4 2.7.2 2.7.2s-.2 1-1.1 2.4C8.3 7.2 7.6 7.5 6.5 6.5z"/>
    </svg>`,
    cosmos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
      <circle cx="12" cy="12" r="1.8"/>
      <path d="M12 12 4.8 8.3c-1-1.6.3-3.5 2-3 2.9.8 5.2 3.7 5.2 6.7z"/>
      <path d="M12 12 8.3 19.2c-1.6 1-3.5-.3-3-2 .8-2.9 3.7-5.2 6.7-5.2z"/>
      <path d="M12 12l7.2-3.7c1.6-1 3.5.3 3 2-.8 2.9-3.7 5.2-6.7 5.2z"/>
      <path d="M12 12l3.7 7.2c1 1.6-.3 3.5-2 3-2.9-.8-5.2-3.7-5.2-6.7z"/>
      <path d="M12 12l3.7-7.2c1-1.6 3.5-.3 3 2-.8 2.9-3.7 5.2-6.7 5.2z"/>
    </svg>`
  };

  function divider() {
    return `<svg class="divider" viewBox="0 0 132 16" fill="none" stroke="currentColor" stroke-width="0.9" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="8" x2="52" y2="8"/>
      <circle cx="66" cy="8" r="2.4" fill="currentColor" stroke="none"/>
      <line x1="80" y1="8" x2="128" y2="8"/>
    </svg>`;
  }


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
        ${divider()}
        <span class="kicker">the last page</span>
        <h1>${page.heading}</h1>
        <p>${page.message}</p>`;
      return el;
    }

    // photo page — alternates marigold / cosmos as its recurring motif
    photoIndex += 1;
    const variant = ((photoIndex - 1) % 4) + 1;
    const flower = photoIndex % 2 === 1 ? "marigold" : "cosmos";
    const reverse = photoIndex % 2 === 0 ? " row-reverse" : "";

    el.classList.add("slide-photo", `variant-${variant}`, `on-${flower}`);
    if (reverse) el.classList.add("row-reverse");

    el.innerHTML = `
      <div class="frame-wrap">
        <img src="${page.photo}" alt="" draggable="false"
             onerror="this.replaceWith(Object.assign(document.createElement('div'), {className:'frame-placeholder', textContent:'Photo ${photoIndex}'}))">
      </div>
      <div>
        <div class="flower-row">${FLOWER_ICONS[flower]}<span>${flower}</span></div>
        ${divider()}
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
