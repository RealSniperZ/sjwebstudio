/* ================================================
   FORMS.JS - Manejo de formularios
   ================================================ */

import { CONFIG } from '../core/config.js';
import { Modals } from './modals.js';
import { Animations } from './animations.js';

export class Forms {
    static init() {
        this.setupContactForm();
    }
    
    static setupContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleContact(e));
        }
    }
    
    static handleContact(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validar datos
        if (!this.validateForm(data)) {
            return;
        }
        
        // Simular envío (en producción, aquí iría la llamada a la API)
        console.log('📧 Formulario enviado:', data);
        
        // Mostrar mensaje de éxito
        Modals.show(
            '¡Mensaje Enviado!',
            CONFIG.messages.formSuccess
        );
        
        // Efectos visuales
        Animations.createConfetti();
        
        // Limpiar formulario
        form.reset();
        
        // Trackear evento (si hay analytics configurado)
        this.trackEvent('Form', 'Submit', 'Contact Form');
    }
    
    static validateForm(data) {
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, introduce un email válido.');
            return false;
        }
        
        // Validar campos requeridos
        if (!data.name || !data.email || !data.message) {
            alert('Por favor, completa todos los campos obligatorios.');
            return false;
        }
        
        return true;
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
