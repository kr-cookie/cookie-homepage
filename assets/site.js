(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('cookie-theme');
  if (savedTheme === 'light') root.dataset.theme = 'light';
  else root.dataset.theme = 'dark';

  function updateToggle() {
    const toggle = document.querySelector('[data-theme-toggle]');
    if (!toggle) return;
    const isDark = root.dataset.theme === 'dark';
    toggle.textContent = isDark ? '☀️' : '🌙';
    toggle.title = isDark ? '라이트 모드' : '다크 모드';
    toggle.setAttribute('aria-label', toggle.title);
  }

  function applySearch(query) {
    const q = query.trim().toLowerCase();
    document.querySelectorAll('[data-search-item]').forEach((item) => {
      const haystack = (item.textContent || '').toLowerCase();
      item.hidden = q.length > 0 && !haystack.includes(q);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateToggle();
    const toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        localStorage.setItem('cookie-theme', next);
        updateToggle();
      });
    }

    const input = document.querySelector('[data-site-search]');
    if (input) input.addEventListener('input', (event) => applySearch(event.target.value));
  });
})();
