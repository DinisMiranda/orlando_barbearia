/**
 * Barbearia Orlando - Main JavaScript
 * 
 * @description Funcionalidades interativas do site
 * @version 1.0.0
 * @author Barbearia Orlando
 */

(function() {
    'use strict';

    /**
     * Smooth scroll para links de navegação
     * Permite navegação suave entre seções da página
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Atualiza o link ativo na navegação baseado na seção visível
     * Destaca a seção atual no menu de navegação
     */
    function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    /**
     * Lightbox para galeria de imagens
     * Permite visualizar imagens em tamanho maior ao clicar
     */
    function initGalleryLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (!img) return;

                // Criar overlay do lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox-overlay';
                lightbox.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    cursor: pointer;
                    animation: fadeIn 0.3s ease;
                `;
                
                // Criar imagem ampliada
                const lightboxImg = document.createElement('img');
                lightboxImg.src = img.src.replace('w=300', 'w=1200');
                lightboxImg.alt = img.alt || 'Imagem ampliada';
                lightboxImg.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    object-fit: contain;
                    border-radius: 8px;
                `;
                
                lightbox.appendChild(lightboxImg);
                document.body.appendChild(lightbox);
                document.body.style.overflow = 'hidden'; // Prevenir scroll do body
                
                // Fechar ao clicar no overlay
                lightbox.addEventListener('click', () => {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                });

                // Fechar com tecla ESC
                const handleEscape = (e) => {
                    if (e.key === 'Escape' && document.body.contains(lightbox)) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = '';
                        document.removeEventListener('keydown', handleEscape);
                    }
                };
                document.addEventListener('keydown', handleEscape);
            });
        });
    }

    /**
     * Animações ao entrar na viewport
     * Adiciona efeito de fade-in e slide-up aos elementos
     */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Parar de observar após animar
                }
            });
        }, observerOptions);

        // Aplicar animação aos elementos
        document.querySelectorAll('.gallery-item, .shop-item, .about-content').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    /**
     * Inicialização quando o DOM estiver pronto
     */
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            initSmoothScroll();
            initActiveNav();
            initGalleryLightbox();
            initScrollAnimations();
        }
    }

    // Iniciar aplicação
    init();

})();
