document.querySelectorAll('.hdr1__dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggle.closest('.hdr1__dropdown').classList.toggle('is-open');
  });
});

document.addEventListener('click', (e) => {
  document.querySelectorAll('.hdr1__dropdown.is-open').forEach(d => {
    if (!d.contains(e.target)) {
      d.classList.remove('is-open');
    }
  });
});