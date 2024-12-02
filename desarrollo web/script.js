// Animaciones al hacer scroll
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const scrollPosition = window.innerHeight + window.scrollY;

    elements.forEach(element => {
        if (element.offsetTop < scrollPosition) {
            element.classList.add('active');
        }
    });
});
