// Efeito de mudar o fundo do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
    } else {
        header.style.padding = "20px 0";
    }
});

// Lógica básica para o menu mobile (pode ser expandida com CSS classes)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // Aqui você pode alternar uma classe para mostrar/esconder o menu no mobile
    alert('Menu mobile acionado! Implemente a classe active no CSS para expandir.');
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
