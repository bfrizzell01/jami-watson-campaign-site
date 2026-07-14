function copyToClipboard(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = original; }, 2000);
  });
}

document.querySelectorAll('.hdr1__dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = toggle.closest('.hdr1__dropdown');
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
});

document.addEventListener('click', (e) => {
  document.querySelectorAll('.hdr1__dropdown.is-open').forEach(d => {
    if (!d.contains(e.target)) {
      d.classList.remove('is-open');
      d.querySelector('.hdr1__dropdown-toggle').setAttribute('aria-expanded', 'false');
    }
  });
});