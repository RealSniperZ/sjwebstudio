/* ================================================
   APP.JS - Punto de entrada principal
   Inicializa todos los módulos de la aplicación
   ================================================ */

import { Navigation } from '../components/navigation.js';
import { Animations } from '../components/animations.js';
import { Forms } from '../components/forms.js';
import { Modals } from '../components/modals.js';
import { Products } from '../components/products.js';

// Variables globales
window.currentPage = 'inicio';

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SJ Web Studio v1.1.0 - Inicializando...');
    
    // Inicializar módulos
    Navigation.init();
    Animations.init();
    Forms.init();
    Modals.init();
    Products.init();
    
    console.log('✅ Todos los módulos inicializados');
});

// Exportar funciones globales para compatibilidad
window.navigateToPage = (pageName) => Navigation.navigateToPage(pageName);
window.closeModal = () => Modals.close();
window.selectProduct = (productName) => Products.select(productName);
window.handleContactForm = (event) => Forms.handleContact(event);
