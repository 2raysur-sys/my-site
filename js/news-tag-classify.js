document.addEventListener('DOMContentLoaded', () => {
  const colors = {
    NEWS: '#ff9800',
    INFORMATION: '#2196f3',
    RELEASE: '#4caf50',
  };

  document.querySelectorAll('.tag').forEach(tag => {
    const key = tag.textContent.trim().toUpperCase();
    tag.style.background = colors[key] || '#999';
  });
});
