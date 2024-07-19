document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 50;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    }
});
