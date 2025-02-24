document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const projetos = document.querySelectorAll('.projeto'); // Seleciona todas as imagens
    let currentIndex = 0; // Começa no índice da primeira imagem

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

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Exibe a imagem com base no índice
    function showProjeto(index) {
        projetos.forEach((projeto, i) => {
            if (i === index) {
                projeto.classList.add('show'); // Exibe a imagem atual
            } else {
                projeto.classList.remove('show'); // Oculta as demais imagens
            }
        });
        checkArrows(); // Verifica as setas após exibir o projeto
    }

    // Função para navegar entre as imagens usando as setas
    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + projetos.length) % projetos.length; // Navega para a imagem anterior
        showProjeto(currentIndex);
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % projetos.length; // Navega para a próxima imagem
        showProjeto(currentIndex);
    });

    // Inicializa com a primeira imagem visível
    showProjeto(currentIndex);

    // Função para verificar as setas
    function checkArrows() {
        if (window.innerWidth <= 800) { // Apenas para telas menores
            if (projetos.length <= 1) {
                // Se houver apenas um projeto, esconde ambas as setas
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            } else {
                // Esconde a seta da esquerda se estiver no primeiro projeto
                if (currentIndex === 0) {
                    leftArrow.style.display = 'none';
                } else {
                    leftArrow.style.display = 'block';
                }

                // Esconde a seta da direita se estiver no último projeto
                if (currentIndex === projetos.length - 1) {
                    rightArrow.style.display = 'none';
                } else {
                    rightArrow.style.display = 'block';
                }
            }
        } else {
            // Para telas maiores, esconde as setas se houver 2 ou menos projetos
            if (projetos.length <= 2) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            } else {
                // Mostra as setas conforme necessário
                if (currentIndex === 0) {
                    leftArrow.style.display = 'none';
                } else {
                    leftArrow.style.display = 'block';
                }

                if (currentIndex === projetos.length - 1) {
                    rightArrow.style.display = 'none';
                } else {
                    rightArrow.style.display = 'block';
                }
            }
        }
    }

    // Verifica as setas no carregamento inicial
    checkArrows();

    // Funcionalidade de scroll
    const projetosWrapper = document.querySelector('.projetos-wrapper');
    window.addEventListener('scroll', debounce(revealOnScroll));
    revealOnScroll(); // Executa no carregamento

    // Função para aplicar o efeito de digitação em sequência
    function typeEffect(element, speed, delay, callback) {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.visibility = 'visible'; // Torna o elemento visível
        let i = 0;
        setTimeout(() => {
            const timer = setInterval(function() {
                if (i < text.length) {
                    if (text.charAt(i) === '<') {
                        const endTag = text.indexOf('>', i);
                        if (endTag !== -1) {
                            element.innerHTML += text.substring(i, endTag + 1);
                            i = endTag + 1;
                        }
                    } else {
                        element.append(text.charAt(i));
                        i++;
                    }
                } else {
                    clearInterval(timer);
                    if (callback) callback();
                }
            }, speed);
        }, delay);
    }

    // Aplicar o efeito de digitação em sequência
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const description = document.getElementById('description');

    typeEffect(title, 70, 0, function() {
        typeEffect(subtitle, 70, 0, function() {
            typeEffect(description, 60, 0); 
        });
    });
});