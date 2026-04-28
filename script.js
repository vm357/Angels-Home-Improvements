// ---------- Before and after page scroller -------------
document.querySelectorAll('.wrapper').forEach(wrapper => {
  const scroller = wrapper.querySelector('.scroller');
  const after = wrapper.querySelector('.after');

  let active = false;

  function scrollIt(x) {
    const rect = wrapper.getBoundingClientRect();
    let pos = x - rect.left;
    let width = Math.max(0, Math.min(pos, rect.width));

    after.style.width = width + "px";
    scroller.style.left = (width - 25) + "px";
  }

  // mouse
  scroller.addEventListener('mousedown', () => {
    active = true;
    scroller.classList.add('scrolling');
  });

  window.addEventListener('mouseup', () => {
    active = false;
    scroller.classList.remove('scrolling');
  });

  window.addEventListener('mousemove', (e) => {
    if (!active) return;
    scrollIt(e.clientX);
  });

  // touch (for mobile)
  scroller.addEventListener('touchstart', () => {
    active = true;
  });

  window.addEventListener('touchend', () => {
    active = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!active) return;
    scrollIt(e.touches[0].clientXX);
  });

  // initial position
  scrollIt(wrapper.offsetWidth / 2);
});
// ------------ End of before and after page scroller ----------

// Showcase page gallery grid
const gallery = document.getElementById("galleryRow");

document.querySelector(".next").onclick = () => {
  gallery.scrollBy({ left: 320, behavior: "smooth" });

  // loop effect
  if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 5) {
    gallery.scrollTo({ left: 0, behavior: "smooth" });
  }
};

document.querySelector(".prev").onclick = () => {
  if (gallery.scrollLeft <= 0) {
    gallery.scrollTo({ left: gallery.scrollWidth, behavior: "smooth" });
  } else {
    gallery.scrollBy({ left: -320, behavior: "smooth" });
  }
};