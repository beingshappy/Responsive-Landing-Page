// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  // Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  navLinks.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
  
  // Close mobile menu on window resize (if screen becomes larger)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      navLinks.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
});