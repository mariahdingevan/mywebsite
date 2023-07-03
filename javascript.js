window.onload = function() {
  const body = document.querySelector('body');
  const modeToggle = document.getElementById('mode-toggle');
  function toggleMode() {
    body.classList.toggle('dark-mode');
    console.log("Toggled mode")
  }
  modeToggle.addEventListener('click', toggleMode);
};