/* ================================================
   CONFIG.JS - Configuración de la aplicación
   ================================================ */

export const CONFIG = {
    // Información de contacto
    contact: {
        email: 'sjwebstudio.contact@gmail.com',
        phone: '+34633542925',
        whatsapp: '+34633542925',
        location: 'España'
    },
    
    // Configuración de animaciones
    animations: {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        duration: 300
    },
    
    // Configuración de productos
    products: {
        basico: {
            name: 'Sitio Web Básico',
            price: '€499',
            description: 'Diseño responsive, hasta 5 páginas, formulario de contacto, optimización SEO básica, Google Analytics, 1 mes de soporte'
        },
        profesional: {
            name: 'Sitio Web Profesional',
            price: '€999',
            description: 'Diseño personalizado, hasta 10 páginas, sistema de blog, optimización SEO avanzada, integración redes sociales, animaciones personalizadas, panel de administración, 3 meses de soporte'
        },
        ecommerce: {
            name: 'E-Commerce Completo',
            price: '€1,999',
            description: 'Tienda online completa, pasarela de pago integrada, gestión de inventario, sistema de pedidos, múltiples métodos de pago, SSL certificado incluido, 6 meses de soporte premium'
        },
        empresarial: {
            name: 'Solución Empresarial',
            price: 'Personalizado',
            description: 'Desarrollo a medida, aplicación web compleja, integración con sistemas, base de datos avanzada, API personalizada, panel de control avanzado, soporte y mantenimiento, escalabilidad garantizada'
        },
        mantenimiento: {
            name: 'Plan de Mantenimiento',
            price: '€99/mes',
            description: 'Actualizaciones mensuales, backups automáticos, monitoreo 24/7, soporte prioritario, corrección de errores, optimización continua, informes mensuales, actualizaciones de seguridad'
        },
        diseno: {
            name: 'Diseño Gráfico',
            price: '€299',
            description: 'Logotipo profesional, identidad corporativa, tarjetas de visita, material publicitario, banners y gráficos web, revisiones ilimitadas, archivos fuente incluidos, entrega en 7 días'
        }
    },
    
    // Mensajes del sistema
    messages: {
        formSuccess: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.',
        formError: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
        productSelected: '¡Perfecto! Se ha abierto tu cliente de correo con la información del producto.'
    }
};
