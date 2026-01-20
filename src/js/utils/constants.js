/* ================================================
   CONSTANTS.JS - Constantes de la aplicación
   ================================================ */

// Tiempos de animación (milisegundos)
export const ANIMATION_DURATION = {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
    VERY_SLOW: 800
};

// Breakpoints para responsive
export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280
};

// Z-index layers
export const Z_INDEX = {
    BASE: 1,
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
    NOTIFICATION: 1080
};

// Mensajes de error
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'Este campo es obligatorio',
    INVALID_EMAIL: 'Por favor, introduce un email válido',
    INVALID_PHONE: 'Por favor, introduce un teléfono válido',
    MIN_LENGTH: (min) => `Mínimo ${min} caracteres`,
    MAX_LENGTH: (max) => `Máximo ${max} caracteres`,
    SUBMIT_ERROR: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.',
    NETWORK_ERROR: 'Error de conexión. Verifica tu conexión a internet.'
};

// Mensajes de éxito
export const SUCCESS_MESSAGES = {
    FORM_SUBMITTED: '¡Mensaje enviado con éxito!',
    COPIED: 'Copiado al portapapeles',
    SAVED: 'Guardado correctamente'
};

// Límites de validación
export const VALIDATION_LIMITS = {
    NAME_MIN: 2,
    NAME_MAX: 100,
    MESSAGE_MIN: 10,
    MESSAGE_MAX: 1000,
    PHONE_MIN: 9,
    PHONE_MAX: 15
};

// Configuración de almacenamiento local
export const STORAGE_KEYS = {
    THEME: 'sjweb-theme',
    LANGUAGE: 'sjweb-language',
    USER_PREFERENCES: 'sjweb-preferences',
    FORM_DRAFT: 'sjweb-form-draft'
};

// Expresiones regulares comunes
export const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_ES: /^(\+34|34)?[6-9]\d{8}$/,
    PHONE_INTERNATIONAL: /^\+?\d{8,15}$/,
    URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
    LETTERS_ONLY: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
};

// Configuración de API (para futuras integraciones)
export const API_CONFIG = {
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
};

// Rutas de la aplicación
export const ROUTES = {
    HOME: 'home',
    PRODUCTS: 'products',
    CONTACT: 'contact',
    LEGAL: 'legal'
};

// Meta información de las páginas
export const PAGE_META = {
    home: {
        title: 'SJ Web Studio - Desarrollo Web Profesional',
        description: 'Creamos sitios web modernos y profesionales en España. Diseño web, e-commerce y soluciones digitales para tu negocio.'
    },
    products: {
        title: 'Nuestros Servicios - SJ Web Studio',
        description: 'Descubre nuestros servicios de desarrollo web: desde sitios básicos hasta e-commerce completos y soluciones empresariales.'
    },
    contact: {
        title: 'Contacto - SJ Web Studio',
        description: 'Contacta con nosotros para tu proyecto web. Estamos en España y respondemos en 24h.'
    },
    legal: {
        title: 'Avisos Legales - SJ Web Studio',
        description: 'Información legal, política de privacidad y condiciones de uso de SJ Web Studio.'
    }
};
