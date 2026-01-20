// Variables globales
let currentPage = 'inicio';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeAnimations();
    initializeMobileMenu();
    initializeScrollEffects();
});

// Navegación entre páginas
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateToPage(page);
            
            // Cerrar menú móvil si está abierto
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Navegación inicial basada en el hash de la URL
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateToPage(hash);
    }
}

// Función para navegar entre páginas
function navigateToPage(pageName) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
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
            animateVisibleElements();
        }, 100);
    }
}

// Menú móvil
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
}

// Sistema de animaciones
function initializeAnimations() {
    // Configurar Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar elementos con data-animate
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Animar elementos visibles
function animateVisibleElements() {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    animateElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 100);
        }
    });
}

// Efectos de scroll
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll suave a sección de contacto
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Selección de producto
function selectProduct(productName) {
    let productInfo = {
        name: '',
        price: '',
        description: ''
    };
    
    switch(productName) {
        case 'Básico':
            productInfo = {
                name: 'Sitio Web Básico',
                price: '€499',
                description: 'Diseño responsive, hasta 5 páginas, formulario de contacto, optimización SEO básica, Google Analytics, 1 mes de soporte'
            };
            break;
        case 'Profesional':
            productInfo = {
                name: 'Sitio Web Profesional',
                price: '€999',
                description: 'Diseño personalizado, hasta 10 páginas, sistema de blog, optimización SEO avanzada, integración redes sociales, animaciones personalizadas, panel de administración, 3 meses de soporte'
            };
            break;
        case 'E-Commerce':
            productInfo = {
                name: 'E-Commerce Completo',
                price: '€1,999',
                description: 'Tienda online completa, pasarela de pago integrada, gestión de inventario, sistema de pedidos, múltiples métodos de pago, SSL certificado incluido, 6 meses de soporte premium'
            };
            break;
        case 'Empresarial':
            productInfo = {
                name: 'Solución Empresarial',
                price: 'Personalizado',
                description: 'Desarrollo a medida, aplicación web compleja, integración con sistemas, base de datos avanzada, API personalizada, panel de control avanzado, soporte y mantenimiento, escalabilidad garantizada'
            };
            break;
        case 'Mantenimiento':
            productInfo = {
                name: 'Plan de Mantenimiento',
                price: '€99/mes',
                description: 'Actualizaciones mensuales, backups automáticos, monitoreo 24/7, soporte prioritario, corrección de errores, optimización continua, informes mensuales, actualizaciones de seguridad'
            };
            break;
        case 'Diseño':
            productInfo = {
                name: 'Diseño Gráfico',
                price: '€299',
                description: 'Logotipo profesional, identidad corporativa, tarjetas de visita, material publicitario, banners y gráficos web, revisiones ilimitadas, archivos fuente incluidos, entrega en 7 días'
            };
            break;
    }
    
    // Crear el contenido del email
    const subject = `Solicitud de información: ${productInfo.name}`;
    const body = `Hola,

Me interesa el producto "${productInfo.name}" por ${productInfo.price}.

Descripción del producto:
${productInfo.description}

Por favor, contacten conmigo para obtener más información y comenzar con mi proyecto.

Datos de contacto:
Nombre: [Tu nombre]
Teléfono: [Tu teléfono]
Empresa: [Tu empresa (opcional)]

Detalles adicionales del proyecto:
[Escribe aquí cualquier información adicional sobre tu proyecto o necesidades específicas]

Gracias.`;

    // Codificar el contenido para URL
    const mailtoLink = `mailto:sjwebstudio.contact@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Mostrar mensaje de confirmación
    setTimeout(() => {
        const modal = document.getElementById('notificationModal');
        const modalMessage = document.getElementById('modalMessage');
        
        modalMessage.innerHTML = `
            <strong>¡Perfecto!</strong><br><br>
            Se ha abierto tu cliente de correo con la información del producto:<br>
            <strong>${productInfo.name}</strong> - ${productInfo.price}<br><br>
            Solo tienes que completar tus datos personales y enviarnos el mensaje.<br><br>
            <em>Si no se abrió automáticamente, puedes escribirnos a sjwebstudio.contact@gmail.com</em>
        `;
        
        modal.classList.add('active');
        createConfetti();
    }, 500);
    
    // Tracking
    trackEvent('Product', 'Email Request', productInfo.name);
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('notificationModal');
    modal.classList.remove('active');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('notificationModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Efecto de confeti (simulado)
function createConfetti() {
    const colors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#10b981'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(confetti);
        
        // Animar
        setTimeout(() => {
            confetti.style.top = '100vh';
            confetti.style.opacity = '0';
            confetti.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
        }, 10);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Parallax efecto suave en el hero
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Efecto de escritura para el título (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Contador animado para números
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Smooth scroll para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !this.classList.contains('nav-link')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Prevenir el comportamiento por defecto de algunos enlaces
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// Manejar cambios de tamaño de ventana
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Cerrar menú móvil si se redimensiona a escritorio
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
        }
    }, 250);
});

// Preloader (opcional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    animateVisibleElements();
});

// Deshabilitar clic derecho en imágenes (opcional, para protección básica)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// Console log con estilo (para impresionar a los curiosos que abran la consola)
console.log(
    '%c🚀 SJ Web Studio ',
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 10px;'
);
console.log(
    '%c¿Interesado en cómo está hecho? ¡Contáctanos!',
    'color: #6366f1; font-size: 14px; font-weight: bold;'
);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const modal = document.getElementById('notificationModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.innerHTML = '🎮 ¡Código Konami activado! <br><br>🎉 ¡Felicidades! Has encontrado nuestro Easter Egg. <br><br>Disfruta de un <strong>10% de descuento</strong> en tu próximo proyecto. <br><br>Código: <strong>KONAMI2026</strong>';
    modal.classList.add('active');
    
    createConfetti();
    
    // Cambiar temporalmente los colores
    document.documentElement.style.setProperty('--primary-color', '#ff0080');
    document.documentElement.style.setProperty('--secondary-color', '#7928ca');
    
    setTimeout(() => {
        document.documentElement.style.setProperty('--primary-color', '#6366f1');
        document.documentElement.style.setProperty('--secondary-color', '#ec4899');
    }, 5000);
}

// Analytics simulado (en producción, usar Google Analytics)
function trackEvent(category, action, label) {
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    // Aquí iría el código de Google Analytics
}

// Tracking de clics en productos
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        trackEvent('Product', 'View', productName);
    });
});

// Performance monitoring simple
const perfData = window.performance.timing;
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

if (pageLoadTime > 0) {
    console.log(`⚡ Página cargada en ${pageLoadTime}ms`);
}

// Manejar el formulario de contacto
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora, mostramos un mensaje de confirmación
    
    const modal = document.getElementById('notificationModal');
    const modalMessage = document.getElementById('modalMessage');
    
    modalMessage.innerHTML = `
        <strong>¡Gracias por contactarnos, ${name}!</strong><br><br>
        Hemos recibido tu mensaje y nos pondremos en contacto contigo a través de <strong>${email}</strong> 
        en las próximas 24 horas.<br><br>
        ${service ? `Servicio de interés: <strong>${getServiceName(service)}</strong><br><br>` : ''}
        <em>Tu mensaje es importante para nosotros.</em>
    `;
    
    modal.classList.add('active');
    
    // Limpiar el formulario
    form.reset();
    
    // Efecto de confeti
    createConfetti();
    
    // Tracking
    trackEvent('Contact', 'Form Submit', service || 'General');
}

// Obtener nombre del servicio
function getServiceName(serviceValue) {
    const services = {
        'basico': 'Sitio Web Básico',
        'profesional': 'Sitio Web Profesional',
        'ecommerce': 'E-Commerce Completo',
        'empresarial': 'Solución Empresarial',
        'mantenimiento': 'Plan de Mantenimiento',
        'diseno': 'Diseño Gráfico',
        'otro': 'Otro servicio'
    };
    return services[serviceValue] || 'Consulta general';
}
