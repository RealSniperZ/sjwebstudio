/* ================================================
   NAVIGATION.JS - Sistema de navegación SPA
   ================================================ */

export class Navigation {
    static init() {
        this.setupNavLinks();
        this.setupMobileMenu();
        this.setupInitialPage();
        this.setupScrollEffects();
    }
    
    static setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateToPage(page);
                
                // Cerrar menú móvil si está abierto
                const navMenu = document.getElementById('navMenu');
                const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileMenuToggle) {
                        mobileMenuToggle.classList.remove('active');
                    }
                }
            });
        });
    }
    
    static setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }
    }
    
    static setupInitialPage() {
        // Navegación inicial basada en el hash de la URL
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.navigateToPage(hash);
        }
    }
    
    static setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });
    }
    
    static navigateToPage(pageName) {
        // Ocultar todas las páginas
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Mostrar la página seleccionada
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
            window.currentPage = pageName;
            
            // Actualizar navegación activa
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === pageName) {
                    link.classList.add('active');
                }
            });
            
            // Scroll al inicio
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Actualizar URL sin recargar
            window.history.pushState({}, '', `#${pageName}`);
            
            // Reiniciar animaciones de la página
            setTimeout(() => {
                this.animateVisibleElements();
            }, 100);
        }
    }
    
    static animateVisibleElements() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }
}
