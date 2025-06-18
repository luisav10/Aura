// assets/js/portifolio.js

document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada para os itens de projeto na grade
    const projectItems = document.querySelectorAll('.project-item');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Quando 10% do elemento estiver visível
    };

    const projectItemObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um atraso escalonado para uma animação em cascata
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // Atraso levemente maior para um efeito mais dramático

                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    projectItems.forEach(item => {
        item.classList.add('hidden'); // Garante que os itens comecem escondidos
        projectItemObserver.observe(item);
    });

    // Lógica para links da navegação (mantida para referência, pode ser removida se não for usada)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Este bloco pode ser removido se não houver SPA ou lógica de navegação complexa.
            // navItems.forEach(ni => ni.classList.remove('active'));
            // item.classList.add('active');
        });
    });
});