// Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('#hamburger');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Close menu on link click
    navLinks.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
  // Typed.js Effect
  var typed = new Typed('.typed', {
    strings: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    });
  });
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Prevents the context menu from appearing
    alert("Right-click has been disabled on this page.");
  });