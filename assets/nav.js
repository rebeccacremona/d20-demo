
const toggleButton = document.getElementById('toggle-nav');

toggleButton.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
  if (document.body.classList.contains('nav-open')) {
    toggleButton.setAttribute('aria-label', 'hide menu');
    toggleButton.setAttribute('aria-expanded', 'true');
  } else {
    toggleButton.setAttribute('aria-label', 'show menu');
    toggleButton.setAttribute('aria-expanded', 'false');
  }
}) 
