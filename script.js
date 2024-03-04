document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('contrastToggle');
  
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
});

  
