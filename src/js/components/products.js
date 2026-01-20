/* ================================================
   PRODUCTS.JS - Gestión de productos
   ================================================ */

import { CONFIG } from '../core/config.js';
import { Modals } from './modals.js';
import { Animations } from './animations.js';

export class Products {
    static init() {
        // Los botones de productos se manejan con onclick en HTML
        // pero podríamos migrarlos aquí en el futuro
    }
    
    static select(productName) {
        // Obtener información del producto
        const productKey = productName.toLowerCase().replace(/\s+/g, '-').replace('á', 'a').replace('é', 'e');
        const product = this.getProductInfo(productKey);
        
        if (!product) {
            console.error('Producto no encontrado:', productName);
            return;
        }
        
        // Crear el contenido del email
        const subject = `Solicitud de información: ${product.name}`;
        const body = `Hola,

Me interesa el producto "${product.name}" por ${product.price}.

Descripción del producto:
${product.description}

Por favor, contacten conmigo para obtener más información y comenzar con mi proyecto.

Datos de contacto:
Nombre: [Tu nombre]
Teléfono: [Tu teléfono]
Empresa: [Tu empresa (opcional)]

Detalles adicionales del proyecto:
[Escribe aquí cualquier información adicional sobre tu proyecto o necesidades específicas]

Gracias.`;

        // Codificar el contenido para URL
        const mailtoLink = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Abrir el cliente de correo
        window.location.href = mailtoLink;
        
        // Mostrar mensaje de confirmación
        setTimeout(() => {
            const message = `
                <strong>¡Perfecto!</strong><br><br>
                Se ha abierto tu cliente de correo con la información del producto:<br>
                <strong>${product.name}</strong> - ${product.price}<br><br>
                Solo tienes que completar tus datos personales y enviarnos el mensaje.<br><br>
                <em>Si no se abrió automáticamente, puedes escribirnos a ${CONFIG.contact.email}</em>
            `;
            
            Modals.show('Información del Producto', message);
            Animations.createConfetti();
        }, 500);
        
        // Trackear evento
        this.trackEvent('Product', 'Email Request', product.name);
    }
    
    static getProductInfo(productKey) {
        const products = {
            'básico': 'basico',
            'basico': 'basico',
            'sitio-web-básico': 'basico',
            'profesional': 'profesional',
            'sitio-web-profesional': 'profesional',
            'e-commerce': 'ecommerce',
            'ecommerce': 'ecommerce',
            'e-commerce-completo': 'ecommerce',
            'empresarial': 'empresarial',
            'solución-empresarial': 'empresarial',
            'mantenimiento': 'mantenimiento',
            'plan-de-mantenimiento': 'mantenimiento',
            'diseño': 'diseno',
            'diseno': 'diseno',
            'diseño-gráfico': 'diseno'
        };
        
        const configKey = products[productKey.toLowerCase()];
        return configKey ? CONFIG.products[configKey] : null;
    }
    
    static trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }
}
