/* ================================================
   MODALS.JS - Sistema de modales
   ================================================ */

export class Modals {
    static init() {
        this.setupCloseHandlers();
    }
    
    static setupCloseHandlers() {
        // Cerrar modal al hacer clic en el botón de cerrar
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close') || 
                e.target.closest('.modal-close')) {
                this.close();
            }
            
            // Cerrar al hacer clic fuera del contenido
            if (e.target.classList.contains('modal')) {
                this.close();
            }
        });
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }
    
    static show(title, message) {
        const modal = document.getElementById('notificationModal');
        const modalMessage = document.getElementById('modalMessage');
        
        if (modal && modalMessage) {
            modalMessage.innerHTML = message;
            modal.classList.add('active');
        }
    }
    
    static close() {
        const modal = document.getElementById('notificationModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
}
