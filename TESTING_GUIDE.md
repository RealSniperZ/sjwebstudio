# 🧪 Guía de Testing - SJ Web Studio v1.1.0

## Checklist de Validación Post-Modularización

Esta guía te ayudará a verificar que toda la funcionalidad sigue trabajando correctamente después de la modularización.

---

## 🚀 Preparación

### 1. Iniciar Servidor Local

**Opción A: Python (recomendado)**
```bash
cd /Users/gabrielgodoyrodriguez/Documents/GitHub/sjwebstudio
python3 -m http.server 8000
```

**Opción B: Node.js**
```bash
npx http-server -p 8000
```

**Opción C: PHP**
```bash
php -S localhost:8000
```

Luego abrir: http://localhost:8000

### 2. Abrir DevTools
- **Chrome/Edge:** F12 o Cmd+Option+I (Mac)
- **Firefox:** F12 o Cmd+Option+I (Mac)
- **Safari:** Cmd+Option+I (habilitar menú Desarrollo primero)

---

## ✅ Tests de Funcionalidad

### Test 1: Carga Inicial ⭐ CRÍTICO
- [ ] La página carga sin errores en consola
- [ ] Los estilos se aplican correctamente (colores, fuentes, layout)
- [ ] No hay warnings sobre módulos faltantes
- [ ] La página de inicio es visible

**Verificación en Console:**
```
🚀 SJ Web Studio v1.1.0 - Inicializando...
✅ Todos los módulos inicializados
```

**❌ Si hay errores:** Verificar que las rutas en `index.html` son correctas:
- CSS: `<link rel="stylesheet" href="src/css/main.css">`
- JS: `<script type="module" src="src/js/core/app.js"></script>`

---

### Test 2: Navegación (SPA Routing)
- [ ] Click en "Inicio" → Muestra página de inicio
- [ ] Click en "Productos" → Muestra página de productos
- [ ] Click en "Contacto" → Muestra página de contacto
- [ ] Click en "Aviso Legal" → Muestra página legal
- [ ] Las transiciones son suaves (fade in/out)
- [ ] El ítem activo se marca correctamente en navbar
- [ ] La URL no recarga la página completa

**Verificación:**
- Observar clase `active` en navegación
- Ver animaciones de transición entre páginas
- Consola no muestra errores

---

### Test 3: Menú Móvil
- [ ] Reducir ventana a menos de 768px (o usar DevTools)
- [ ] Aparece botón hamburguesa (☰)
- [ ] Click en hamburguesa abre el menú
- [ ] Links funcionan correctamente
- [ ] Menú se cierra al seleccionar una opción
- [ ] Menú se cierra al hacer click fuera

**Verificación:**
- Ver clase `active` en `#mobileMenu`
- Animación slide-in del menú
- Overflow del body se bloquea cuando menú está abierto

---

### Test 4: Animaciones
- [ ] Hacer scroll en página de inicio
- [ ] Elementos con `data-animate` aparecen al hacerse visibles
- [ ] Formas flotantes se mueven suavemente
- [ ] Logo tiene animación de pulso
- [ ] Hover sobre cards muestra transformación

**Verificación:**
- Elementos con `data-animate` obtienen clase `animate`
- Transiciones suaves sin saltos
- Sin lag o jank en animaciones

---

### Test 5: Formulario de Contacto
- [ ] Navegar a página de Contacto
- [ ] Dejar todos los campos vacíos y enviar → Muestra errores
- [ ] Introducir email inválido → Muestra error "email válido"
- [ ] Introducir mensaje corto (< 10 caracteres) → Muestra error
- [ ] Completar todo correctamente y enviar
- [ ] Aparece modal de éxito
- [ ] Efecto confetti se muestra
- [ ] Se abre cliente de correo

**Datos de prueba válidos:**
```
Nombre: Juan Pérez
Email: juan@ejemplo.com
Teléfono: 666 123 456
Mensaje: Hola, me interesa contratar vuestros servicios de desarrollo web.
```

**Verificación en Console:**
```javascript
// Función handleContactForm ejecutada
// Modal mostrado
// Confetti creado
```

---

### Test 6: Selección de Productos
- [ ] Navegar a página de Productos
- [ ] Click en "Seleccionar" en cualquier producto
- [ ] Se abre cliente de correo con información prellenada
- [ ] Asunto contiene nombre del producto
- [ ] Cuerpo contiene descripción y precio
- [ ] Destinatario es sjwebstudio.contact@gmail.com
- [ ] Aparece modal confirmando la acción
- [ ] Efecto confetti se muestra

**Probar estos productos:**
- [ ] Sitio Web Básico (490€)
- [ ] Sitio Web Profesional (890€)
- [ ] E-commerce Completo (1890€)
- [ ] Solución Empresarial (desde 2890€)
- [ ] Plan de Mantenimiento (desde 89€/mes)
- [ ] Diseño Gráfico (desde 290€)

**Verificación:**
- Email contiene producto correcto
- Precio correcto en el mensaje
- Modal con información del producto

---

### Test 7: Modales
- [ ] Trigger un modal (formulario o producto)
- [ ] Modal aparece con animación slide-up
- [ ] Fondo oscuro (backdrop) es visible
- [ ] Click en "X" cierra el modal
- [ ] Click en "Aceptar" cierra el modal
- [ ] Click fuera del modal cierra el modal
- [ ] Presionar ESC cierra el modal
- [ ] Scroll del body bloqueado mientras modal abierto

**Verificación:**
- Overlay tiene clase `active`
- Body tiene `overflow: hidden` mientras modal visible
- Animaciones suaves al abrir/cerrar

---

### Test 8: Footer Links
- [ ] Click en email del footer → Abre cliente de correo
- [ ] Click en teléfono del footer → Abre marcador/WhatsApp
- [ ] Click en WhatsApp directo → Abre WhatsApp Web
- [ ] Email correcto: sjwebstudio.contact@gmail.com
- [ ] Teléfono correcto: +34 633 542 925

**Verificación:**
```html
mailto:sjwebstudio.contact@gmail.com
tel:+34633542925
https://wa.me/34633542925
```

---

### Test 9: Scroll Effects
- [ ] Hacer scroll hacia abajo
- [ ] Navbar se vuelve translúcido con backdrop-filter
- [ ] Sombra sutil aparece en navbar
- [ ] Smooth scroll al navegar a secciones
- [ ] Sin saltos bruscos

**Verificación:**
- Clase agregada a navbar al hacer scroll
- Transición suave de opacidad

---

### Test 10: Responsive Design
Probar en estos breakpoints:

**Desktop (1280px+)**
- [ ] Layout full width
- [ ] 3 columnas en features
- [ ] Navbar completo visible

**Tablet (768px - 1279px)**
- [ ] Layout adaptado
- [ ] 2 columnas en grids
- [ ] Navbar completo visible

**Mobile (< 768px)**
- [ ] Menú hamburguesa visible
- [ ] 1 columna en todo
- [ ] Touch targets adecuados
- [ ] Texto legible sin zoom

**Mobile Small (< 480px)**
- [ ] Todo funciona correctamente
- [ ] Sin overflow horizontal
- [ ] Botones apilados verticalmente

---

## 🔍 Tests de Consola

### Verificar Imports
Abrir Network tab en DevTools:
- [ ] Todos los archivos CSS cargan (200 OK)
- [ ] Todos los archivos JS cargan (200 OK)
- [ ] No hay 404 Not Found
- [ ] No hay CORS errors

**Archivos esperados:**
```
src/css/main.css
src/css/base/reset.css
src/css/base/variables.css
src/css/base/typography.css
... (todos los módulos CSS)
src/js/core/app.js
src/js/core/config.js
... (todos los módulos JS)
```

### Verificar Variables Globales
En Console, ejecutar:
```javascript
// Verificar que las funciones globales existen
typeof window.navigateToPage // → "function"
typeof window.closeModal // → "function"
typeof window.selectProduct // → "function"
typeof window.handleContactForm // → "function"

// Verificar variable de página actual
window.currentPage // → "inicio" (o la página actual)
```

### Verificar Módulos
```javascript
// Estos NO deberían existir en window (están encapsulados)
window.Navigation // → undefined (correcto, es módulo privado)
window.Forms // → undefined (correcto)
window.Animations // → undefined (correcto)
```

---

## 🐛 Problemas Comunes y Soluciones

### ❌ Error: "Failed to load module"
**Causa:** Ruta incorrecta en imports o no hay servidor web
**Solución:** 
- Verificar que se usa `http://localhost` (no `file://`)
- Revisar rutas en import statements

### ❌ Estilos no se aplican
**Causa:** Orden de imports incorrecto en main.css
**Solución:**
- Verificar orden: base → components → pages → utils
- Comprobar que main.css importa todos los módulos

### ❌ Funciones globales no definidas
**Causa:** app.js no exportó correctamente a window
**Solución:**
- Verificar que app.js tiene exports: `window.navigateToPage = ...`
- Comprobar que script tiene `type="module"`

### ❌ Modal no cierra con ESC
**Causa:** Event listener no registrado
**Solución:**
- Verificar que Modals.init() se ejecutó
- Comprobar en Console: `document.addEventListener('keydown'...)`

### ❌ Animaciones no funcionan
**Causa:** IntersectionObserver no inicializado
**Solución:**
- Verificar que Animations.init() se ejecutó
- Comprobar browser support: `'IntersectionObserver' in window`

---

## 📊 Checklist Final

### Funcionalidad Core
- [ ] ✅ Todas las páginas cargan correctamente
- [ ] ✅ Navegación SPA funciona sin recargar
- [ ] ✅ Menú móvil funciona en pantallas pequeñas
- [ ] ✅ Formulario valida y envía correctamente
- [ ] ✅ Productos abren email prellenado
- [ ] ✅ Modales abren y cierran correctamente
- [ ] ✅ Footer links funcionan (email, teléfono, WhatsApp)

### Experiencia Visual
- [ ] ✅ Animaciones suaves y sin lag
- [ ] ✅ Transiciones entre páginas fluidas
- [ ] ✅ Hover effects en cards y botones
- [ ] ✅ Responsive en todos los breakpoints
- [ ] ✅ Tipografía legible en todos los tamaños

### Técnico
- [ ] ✅ Consola sin errores
- [ ] ✅ Todos los módulos cargan (Network 200 OK)
- [ ] ✅ Funciones globales expuestas correctamente
- [ ] ✅ No hay warnings de módulos
- [ ] ✅ Performance aceptable (sin lag)

---

## 🎯 Métricas de Éxito

| Métrica | Objetivo | Estado |
|---------|----------|--------|
| Errores en Console | 0 | ⬜ |
| Warnings | 0 | ⬜ |
| Páginas funcionando | 4/4 | ⬜ |
| Formulario valida | ✅ | ⬜ |
| Productos funcionan | 6/6 | ⬜ |
| Responsive | 4 breakpoints | ⬜ |
| Navegación fluida | < 300ms | ⬜ |

---

## 📝 Registro de Testing

**Fecha:** ___________  
**Tester:** ___________  
**Navegador:** ___________  
**Versión:** v1.1.0  

**Resultados:**
```
□ Todo funciona perfectamente
□ Encontrados problemas menores (especificar abajo)
□ Encontrados problemas mayores (especificar abajo)

Notas:
_____________________________________________
_____________________________________________
_____________________________________________
```

---

## 🎊 Si Todo Funciona

**¡Felicidades!** 🎉

La modularización está completa y funcionando correctamente.

Próximos pasos:
1. Commit de cambios a Git
2. Push a repositorio remoto
3. Continuar con Fase 1 (SSL, SEO, Analytics)

```bash
git add .
git commit -m "feat: Implementar modularización del código v1.1.0"
git push origin main
```

---

**Documento creado:** Enero 2026  
**Versión:** 1.1.0  
**Contacto:** sjwebstudio.contact@gmail.com
