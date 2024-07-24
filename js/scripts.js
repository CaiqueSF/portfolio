document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('nav a[href="#home"]');
    const aboutLink = document.querySelector('nav a[href="#about"]');
    const skillsLink = document.querySelector('nav a[href="#skills"]');
    const portfolioLink = document.querySelector('nav a[href="#portfolio"]');
    const contactLink = document.querySelector('nav a[href="#contact"]');
  
    // Scroll suave ao clicar nos links de navegação
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
  
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  
    skillsLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    });
  
    portfolioLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });
  
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  
    // Adiciona efeito de tremor às imagens na seção de Habilidades
    const skillImages = document.querySelectorAll('#skills img');
    skillImages.forEach(function(img) {
      img.addEventListener('mouseover', function() {
        img.style.animation = 'tremble 0.1s infinite';
      });
      img.addEventListener('mouseout', function() {
        img.style.animation = '';
      });
      img.addEventListener('touchstart', function() {
        img.style.animation = 'tremble 0.1s infinite';
      });
      img.addEventListener('touchend', function() {
        img.style.animation = '';
      });
    });
  });
  