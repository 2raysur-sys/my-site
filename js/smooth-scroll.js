const HEADER_OFFSET = 110;
const DURATION = 700; // ミリ秒（気持ちいい速さ）

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

document.querySelectorAll('.section-left-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    const start = window.pageYOffset;
    const targetPos =
      target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

    const startTime = performance.now();

    const scroll = now => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, start + (targetPos - start) * eased);

      if (progress < 1) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  });
});
