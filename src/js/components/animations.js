/* ================================================
   ANIMATIONS.JS - Sistema de animaciones
   ================================================ */

import { CONFIG } from '../core/config.js';

export class Animations {
    static observer = null;
    
    static init() {
        this.setupIntersectionObserver();
        this.observeElements();
    }
    
    static setupIntersectionObserver() {
        const observerOptions = {
            threshold: CONFIG.animations.threshold,
            rootMargin: CONFIG.animations.rootMargin
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
    }
    
    static observeElements() {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            this.observer.observe(el);
        });
    }
    
    static createConfetti() {
        const confettiCount = 50;
        const colors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#10b981'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '50%';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const translateX = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 10}px) translateX(${translateX}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
}
