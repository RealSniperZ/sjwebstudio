/* ================================================
   VALIDATORS.JS - Funciones de validación
   ================================================ */

export class Validators {
    // Validar email
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Validar teléfono (formatos españoles e internacionales)
    static isValidPhone(phone) {
        // Eliminar espacios y caracteres especiales
        const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
        
        // Validar formato español (+34 o 34 seguido de 9 dígitos)
        const spanishRegex = /^(\+34|34)?[6-9]\d{8}$/;
        
        // Validar formato internacional básico
        const internationalRegex = /^\+?\d{8,15}$/;
        
        return spanishRegex.test(cleanPhone) || internationalRegex.test(cleanPhone);
    }
    
    // Validar longitud mínima
    static minLength(value, min) {
        return value.length >= min;
    }
    
    // Validar longitud máxima
    static maxLength(value, max) {
        return value.length <= max;
    }
    
    // Validar que no esté vacío
    static required(value) {
        return value.trim().length > 0;
    }
    
    // Validar URL
    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
    
    // Validar número
    static isNumber(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    }
    
    // Validar rango de números
    static inRange(value, min, max) {
        const num = parseFloat(value);
        return num >= min && num <= max;
    }
}
