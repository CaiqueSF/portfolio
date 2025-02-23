document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const rect = reveal.getBoundingClientRect();
            const elementVisible = 150; // Ajuste a sensibilidade

            // Adiciona classe quando o elemento entra na tela
            if (rect.top < windowHeight - elementVisible && rect.bottom > 0) {
                reveal.classList.add('visible');
            } 
            // Remove a classe somente se o elemento estiver totalmente fora da tela
            else if (rect.bottom < 0 || rect.top > windowHeight) {
                reveal.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executa no carregamento

    // Adiciona funcionalidade das setas
    document.querySelector('.left-arrow').addEventListener('click', function() {
        document.querySelector('.projetos-wrapper').scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        document.querySelector('.projetos-wrapper').scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});