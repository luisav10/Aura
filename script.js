document.addEventListener('DOMContentLoaded', () => {
    // ... (seu código existente para initial-logo-overlay, header, hero, features) ...

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                // Opcional: remover 'appear' se quiser que a animação aconteça novamente ao rolar para cima
                // entry.target.classList.remove('appear');
            }
        });
    }, { threshold: 0.1 }); // Ajuste o threshold conforme necessário

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Adicionar o footer aos elementos observados, se ele já não estiver incluído
    const footerElement = document.querySelector('.main-footer');
    if (footerElement) { // Garante que o elemento existe antes de tentar observá-lo
        observer.observe(footerElement);
    }

    // Animação da logo inicial
    const initialLogoOverlay = document.querySelector('.initial-logo-overlay');
    const initialLogoImg = document.querySelector('.initial-logo-img');

    setTimeout(() => {
        initialLogoImg.style.transform = 'scale(1.1)'; // Um pequeno pulso
        initialLogoImg.style.opacity = '0.7';
    }, 300); // Começa a animar após um pequeno delay

    setTimeout(() => {
        initialLogoOverlay.classList.add('hidden');
        // Revelar o header e o hero content após o overlay desaparecer
        document.querySelector('.main-header').classList.add('appear');
        document.querySelector('.hero-content').classList.add('appear');
        document.querySelector('.hero-image').classList.add('appear');
        // Revelar a imagem dentro do hero-image-placeholder
        const heroImageInner = document.querySelector('.hero-image-placeholder');
        if (heroImageInner) {
            heroImageInner.classList.add('revealed');
            const heroImg = heroImageInner.querySelector('img');
            if (heroImg) {
                heroImg.style.opacity = '1';
            }
        }
        // Animar individualmente os itens da navegação
        document.querySelectorAll('.nav-links li').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + index * 100);
        });
        document.querySelector('.logo-wrapper').classList.add('appear');
        document.querySelector('.hamburger-menu').classList.add('appear');

    }, 1800); // Tempo total para a animação do overlay (inclui o pulso)

    // Menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});