// scripts.js

function scrollLeft() {
    const container = document.querySelector('#Projetos .Projetos-wrapper');
    container.scrollBy({
        left: -container.clientWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('#Projetos .Projetos-wrapper');
    container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth'
    });
}

// Adiciona eventos aos botões de navegação
document.querySelector('.nav-left').addEventListener('click', scrollLeft);
document.querySelector('.nav-right').addEventListener('click', scrollRight);

// Ajustar tamanho dos botões de navegação quando o mouse passa sobre eles
const navButtons = document.querySelectorAll('.nav-left, .nav-right');
navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.2)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Função para revelar elementos ao rolar
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // Ajuste o valor conforme necessário

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        } else {
            reveal.classList.remove('visible');
        }
    });
}

// Adiciona evento de rolagem para revelar elementos
window.addEventListener('scroll', revealOnScroll);

// Inicializa a visibilidade dos elementos ao carregar a página
document.addEventListener('DOMContentLoaded', revealOnScroll);