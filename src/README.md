# 📁 Estructura Modular - SJ Web Studio v1.1.0

Esta carpeta contiene la arquitectura modular del proyecto, organizada para máxima mantenibilidad y escalabilidad.

## 🎨 Estructura CSS (`/css`)

### Base
Fundamentos del diseño que afectan a todo el sitio:
- **reset.css** - Reset CSS, normalización, box-sizing
- **variables.css** - Variables CSS (colores, espaciado, sombras, z-index)
- **typography.css** - Tipografía, fuentes, contenedores de texto

### Components
Componentes reutilizables en múltiples páginas:
- **navbar.css** - Barra de navegación con logo, menú y versión móvil
- **buttons.css** - Estilos de botones (primary, secondary, outline, large)
- **cards.css** - Tarjetas de características y productos con efectos hover
- **forms.css** - Inputs, textareas, selects, estados de validación
- **footer.css** - Pie de página con enlaces y diseño responsive
- **modals.css** - Sistema de ventanas modales con animaciones

### Pages
Estilos específicos para cada página:
- **home.css** - Hero section, formas flotantes, sección de características
- **products.css** - Página de productos (usa principalmente cards.css)
- **contact.css** - Hero de contacto, formulario, métodos de contacto
- **legal.css** - Contenido legal, política de privacidad

### Utils
Utilidades y helpers:
- **animations.css** - Keyframes, transiciones, data-animate
- **responsive.css** - Media queries para 768px, 480px y móviles

### Punto de Entrada
- **main.css** - Importa todos los módulos en el orden correcto

## ⚙️ Estructura JavaScript (`/js`)

### Core
Núcleo de la aplicación:
- **app.js** - Punto de entrada, inicializa módulos, expone funciones globales
- **config.js** - Configuración centralizada (contacto, productos, mensajes)

### Components
Componentes funcionales con clases ES6:
- **navigation.js** - `Navigation` class para SPA routing y menú móvil
- **animations.js** - `Animations` class para efectos visuales e IntersectionObserver
- **forms.js** - `Forms` class para validación y envío de formularios
- **modals.js** - `Modals` class para gestión de diálogos
- **products.js** - `Products` class para selección y email de productos

### Utils
Utilidades y helpers:
- **validators.js** - `Validators` class con métodos de validación (email, teléfono, etc.)
- **helpers.js** - `Helpers` class con utilidades (formateo, debounce, scroll)
- **constants.js** - Constantes globales (tiempos, breakpoints, mensajes, regex)

## 🎯 Assets (`/assets`)

### Images
Carpeta preparada para almacenar:
- Logos y iconos
- Imágenes de productos
- Gráficos y decoraciones
- Optimizaciones futuras (WebP, SVG)

## 📖 Cómo Funciona

### CSS
```html
<!-- En index.html -->
<link rel="stylesheet" href="src/css/main.css">
```

El archivo `main.css` importa todos los módulos en este orden:
1. Base (reset, variables, typography)
2. Components (navbar, buttons, cards, forms, footer, modals)
3. Pages (home, products, contact, legal)
4. Utils (animations, responsive)

### JavaScript
```html
<!-- En index.html -->
<script type="module" src="src/js/core/app.js"></script>
```

El archivo `app.js`:
1. Importa todos los componentes
2. Inicializa cada módulo en `DOMContentLoaded`
3. Exporta funciones globales via `window` para compatibilidad

## 🔧 Añadir Nuevos Módulos

### Nuevo Componente CSS
1. Crear `src/css/components/mi-componente.css`
2. Añadir `@import 'components/mi-componente.css';` en `main.css`
3. Documentar el componente con comentarios

### Nuevo Componente JavaScript
1. Crear `src/js/components/MiComponente.js`:
```javascript
export class MiComponente {
    static init() {
        // Inicialización
    }
    
    static miMetodo() {
        // Funcionalidad
    }
}
```
2. Importar en `app.js`:
```javascript
import { MiComponente } from '../components/MiComponente.js';
```
3. Inicializar en `DOMContentLoaded`:
```javascript
MiComponente.init();
```

### Nueva Página
1. Crear `src/css/pages/mi-pagina.css`
2. Añadir sección en HTML con `class="page" data-page="mi-pagina"`
3. Actualizar navegación en `config.js` si es necesario

## 🎨 Convenciones de Código

### CSS
- **BEM Naming:** `.bloque__elemento--modificador`
- **Variables:** `--color-primary`, `--spacing-md`
- **Comentarios:** Secciones separadas con comentarios de bloque

### JavaScript
- **Clases:** PascalCase (`Navigation`, `Forms`)
- **Métodos:** camelCase (`navigateTo`, `validateForm`)
- **Constantes:** UPPER_SNAKE_CASE (`API_CONFIG`, `BREAKPOINTS`)
- **Archivos:** kebab-case (`navigation.js`, `helpers.js`)

## 🚀 Beneficios de Esta Estructura

✅ **Mantenibilidad:** Fácil encontrar y modificar código específico  
✅ **Escalabilidad:** Añadir nuevas funcionalidades sin afectar código existente  
✅ **Reutilización:** Componentes independientes usables en múltiples contextos  
✅ **Colaboración:** Múltiples desarrolladores pueden trabajar sin conflictos  
✅ **Testing:** Módulos pequeños más fáciles de probar unitariamente  
✅ **Performance:** Posibilidad futura de lazy loading y code splitting  
✅ **Debugging:** Errores más fáciles de rastrear y solucionar  

## 📝 Próximos Pasos

- [ ] Implementar build process (webpack/vite) para optimización
- [ ] Añadir minificación automática de CSS/JS
- [ ] Implementar lazy loading de imágenes
- [ ] Añadir source maps para debugging
- [ ] Configurar linting (ESLint, Stylelint)
- [ ] Implementar testing unitario (Jest)

---

**Versión:** 1.1.0  
**Fecha:** Enero 2026  
**Autor:** SJ Web Studio
