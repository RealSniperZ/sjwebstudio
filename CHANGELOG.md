# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.1.0] - 2026-01-20

### 🎉 Cambios Importantes - Modularización del Código

Esta versión implementa la **Fase 2.1: Modularización del Código** de la propuesta de mejoras.

### Añadido

#### Estructura Modular CSS
- **Nueva carpeta:** `src/css/` con arquitectura modular organizada
- **Base:**
  - `base/reset.css` - Reset y normalización CSS
  - `base/variables.css` - Variables CSS (colores, espaciado, sombras)
  - `base/typography.css` - Tipografía y estilos de texto
- **Componentes:**
  - `components/navbar.css` - Barra de navegación
  - `components/buttons.css` - Estilos de botones
  - `components/cards.css` - Tarjetas de características y productos
  - `components/forms.css` - Formularios y validación
  - `components/footer.css` - Pie de página
  - `components/modals.css` - Sistema de modales
- **Páginas:**
  - `pages/home.css` - Estilos específicos de la página de inicio
  - `pages/products.css` - Estilos de la página de productos
  - `pages/contact.css` - Estilos de la página de contacto
  - `pages/legal.css` - Estilos de la página legal
- **Utilidades:**
  - `utils/animations.css` - Animaciones y transiciones
  - `utils/responsive.css` - Media queries y responsive
- **Punto de entrada:** `main.css` - Importa todos los módulos en el orden correcto

#### Estructura Modular JavaScript
- **Nueva carpeta:** `src/js/` con módulos ES6
- **Core:**
  - `core/app.js` - Punto de entrada principal, inicializa todos los módulos
  - `core/config.js` - Configuración centralizada (contacto, productos, mensajes)
- **Componentes:**
  - `components/navigation.js` - Clase Navigation para SPA routing
  - `components/animations.js` - Clase Animations para efectos visuales
  - `components/forms.js` - Clase Forms para validación y envío
  - `components/modals.js` - Clase Modals para gestión de diálogos
  - `components/products.js` - Clase Products para selección de productos
- **Utilidades:**
  - `utils/validators.js` - Funciones de validación (email, teléfono, etc.)
  - `utils/helpers.js` - Funciones auxiliares (formateo, scroll, debounce)
  - `utils/constants.js` - Constantes globales (tiempos, breakpoints, mensajes)

#### Estructura de Carpetas
- **Nueva carpeta:** `src/assets/images/` - Para futuros recursos visuales
- Total: **30+ archivos** organizados en **12 directorios**

### Cambiado
- ✅ `index.html` ahora usa `src/css/main.css` en lugar de `styles.css`
- ✅ `index.html` ahora usa `src/js/core/app.js` con `type="module"` en lugar de `script.js`
- ✅ CSS separado de **1 archivo monolítico (1318 líneas)** a **16 módulos organizados**
- ✅ JavaScript separado de **1 archivo monolítico (509 líneas)** a **10 módulos con clases ES6**
- ✅ Implementado patrón de diseño basado en clases con métodos estáticos
- ✅ Configuración centralizada en `config.js`

### Mejorado
- 🚀 **Mantenibilidad:** Código organizado por responsabilidades
- 🚀 **Escalabilidad:** Fácil añadir nuevos componentes o páginas
- 🚀 **Reutilización:** Componentes independientes y reutilizables
- 🚀 **Colaboración:** Estructura clara para trabajo en equipo
- 🚀 **Testing:** Módulos pequeños más fáciles de probar
- 🚀 **Debugging:** Errores más fáciles de localizar
- 🚀 **Documentación:** Cada módulo con comentarios explicativos

### Técnico
- **Arquitectura CSS:** Sistema de imports con `@import` en `main.css`
- **Arquitectura JS:** Módulos ES6 con `import`/`export`
- **Patrón de diseño:** Clases con métodos estáticos para componentes
- **Compatibilidad:** Funciones expuestas globalmente via `window` para HTML existente
- **Separación de conceptos:** Base → Componentes → Páginas → Utilidades

### Notas de Migración
Los archivos originales `styles.css` y `script.js` se mantienen como referencia pero ya no se usan.
Para volver a la versión monolítica, cambiar las referencias en `index.html`:
- De: `src/css/main.css` → A: `styles.css`
- De: `src/js/core/app.js` → A: `script.js`

## [1.0.0] - 2026-01-20

### Añadido
- Estructura inicial del sitio web
- Página de Inicio con hero section y características
- Página de Productos con 6 servicios diferentes
- Página de Contacto profesional con formulario
- Página de Aviso Legal
- Sistema de navegación SPA (Single Page Application)
- Diseño responsive para móvil, tablet y escritorio
- Animaciones y transiciones suaves
- Menú móvil hamburguesa
- Sistema de formularios
- Integración de WhatsApp y email
- Footer con información de contacto
- Sistema de modales
- Efectos de confetti
- Easter egg (código Konami)

### Información de Contacto
- Email: sjwebstudio.contact@gmail.com
- Teléfono/WhatsApp: +34 633 542 925
- Ubicación: España

### Tecnologías Utilizadas
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Google Fonts (Poppins)

### Estructura del Proyecto
```
sjwebstudio/
├── index.html        # Página principal
├── styles.css        # Estilos globales
├── script.js         # Funcionalidad JavaScript
├── LICENSE          # Licencia del proyecto
├── VERSION.txt      # Versión actual
└── CHANGELOG.md     # Este archivo
```

### Páginas Disponibles
- **Inicio (#inicio)** - Presentación de la empresa y características
- **Productos (#productos)** - Catálogo de servicios y precios
- **Contacto (#contacto)** - Formulario y métodos de contacto
- **Aviso Legal (#aviso-legal)** - Información legal

### Productos Ofrecidos
1. Sitio Web Básico - €499
2. Sitio Web Profesional - €999
3. E-Commerce Completo - €1,999
4. Solución Empresarial - Personalizado
5. Plan de Mantenimiento - €99/mes
6. Diseño Gráfico - €299

---

## [Unreleased] - Próximas Mejoras

### Planeado
- Sistema de control de versiones Git avanzado
- Backend con Node.js + Express
- Base de datos (MongoDB/PostgreSQL)
- Sistema de envío de emails automatizado
- Google Analytics 4
- SEO avanzado con meta tags completos
- Portfolio/Galería de proyectos
- Sistema de blog
- Calculadora de presupuestos
- Live Chat
- Newsletter
- Testing automatizado
- CI/CD con GitHub Actions
- Certificado SSL/HTTPS
- Optimización de performance
- PWA (Progressive Web App)
- Modo oscuro
- Multi-idioma (i18n)

---

## Tipos de Cambios
- **Añadido** - Para nuevas funcionalidades
- **Modificado** - Para cambios en funcionalidades existentes
- **Obsoleto** - Para funcionalidades que pronto se eliminarán
- **Eliminado** - Para funcionalidades eliminadas
- **Corregido** - Para correcciones de bugs
- **Seguridad** - Para mejoras de seguridad

---

## Guía de Versionado

**MAJOR.MINOR.PATCH** (Ejemplo: 2.1.3)

- **MAJOR** (2.x.x) - Cambios incompatibles con versiones anteriores
  - Rediseño completo
  - Cambio de arquitectura
  - Eliminación de funcionalidades importantes

- **MINOR** (x.1.x) - Nuevas funcionalidades compatibles
  - Nueva página o sección
  - Nueva funcionalidad
  - Mejora significativa

- **PATCH** (x.x.3) - Correcciones y mejoras menores
  - Corrección de bugs
  - Mejoras de estilo
  - Optimizaciones menores

---

**Última actualización:** 20 de Enero 2026  
**Mantenido por:** SJ Web Studio
