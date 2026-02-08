document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.scroll_down_wrap');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          observer.unobserve(entry.target); // 1回だけ発火
        }
      });
    },
    {
      rootMargin: '-110px 0px -20% 0px', // fixedヘッダー分オフセット
      threshold: 0
    }
  );

  targets.forEach(target => observer.observe(target));
});
