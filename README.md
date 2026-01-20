# ⚡ SJ Web Studio - Sitio Web Corporativo

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**Sitio web profesional para SJ Web Studio - Agencia de Desarrollo Web**

[Ver Demo](#) · [Reportar Bug](https://github.com/RealSniperZ/sjwebstudio/issues) · [Solicitar Feature](https://github.com/RealSniperZ/sjwebstudio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Páginas](#-páginas)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

---

## 🚀 Acerca del Proyecto

SJ Web Studio es una agencia digital 100% online especializada en desarrollo web profesional. Este repositorio contiene el código fuente de nuestro sitio web corporativo, diseñado con las mejores prácticas de desarrollo web moderno.

### ¿Por qué este proyecto?

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **100% Responsive**: Perfecto en móviles, tablets y escritorio
- ⚡ **Alto Rendimiento**: Optimizado para carga rápida
- 🎯 **UX Optimizada**: Navegación intuitiva y clara
- 🔒 **Seguro**: Validación de formularios y buenas prácticas

---

## ✨ Características

### Páginas Principales
- **🏠 Inicio**: Presentación de la empresa con sección hero y características destacadas
- **📦 Productos**: Catálogo de 6 servicios con precios y descripciones detalladas
- **📧 Contacto**: Formulario profesional con múltiples métodos de contacto
- **⚖️ Aviso Legal**: Información legal completa

### Funcionalidades
- ✅ Navegación SPA (Single Page Application) sin recargas
- ✅ Animaciones y transiciones suaves con Intersection Observer
- ✅ Menú móvil hamburguesa responsive
- ✅ Formulario de contacto con validación
- ✅ Integración directa con WhatsApp (+34 633 542 925)
- ✅ Sistema de modales informativos
- ✅ Enlaces de email con información pre-rellenada
- ✅ Efectos visuales (confetti)
- ✅ Easter egg oculto (Konami Code)
- ✅ Scroll suave entre secciones
- ✅ Footer con enlaces de contacto clickeables

### Productos Ofrecidos
1. **Sitio Web Básico** - €499
2. **Sitio Web Profesional** - €999 (Recomendado)
3. **E-Commerce Completo** - €1,999
4. **Solución Empresarial** - Personalizado
5. **Plan de Mantenimiento** - €99/mes
6. **Diseño Gráfico** - €299

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con:
  - Custom Properties (Variables CSS)
  - CSS Grid y Flexbox
  - Animaciones con @keyframes
  - Media Queries para responsive
- **JavaScript ES6+** - Funcionalidad con:
  - Vanilla JS (sin frameworks)
  - Intersection Observer API
  - History API para navegación
  - Local Storage
  - Event Delegation

### Diseño
- **Google Fonts** - Poppins (300, 400, 600, 700)
- **Color Palette**:
  - Primary: `#6366f1` (Azul)
  - Secondary: `#ec4899` (Rosa)
  - Accent: `#14b8a6` (Verde azulado)

### Herramientas
- **Git** - Control de versiones
- **GitHub** - Hosting del repositorio
- **VS Code** - Editor recomendado

---

## 📁 Estructura del Proyecto

```
sjwebstudio/
├── index.html              # Página principal
├── styles.css              # Estilos globales (~1300 líneas)
├── script.js               # Lógica JavaScript (~500 líneas)
├── LICENSE                 # Licencia del proyecto
├── README.md               # Este archivo
├── VERSION.txt             # Versión actual (1.0.0)
├── CHANGELOG.md            # Historial de cambios
├── PROPUESTA_MEJORAS.md    # Plan de evolución del proyecto
└── .gitignore              # Archivos a ignorar en Git
```

### Próxima Estructura (Fase 2+)
```
sjwebstudio/
├── index.html
├── src/
│   ├── css/
│   │   ├── base/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── js/
│   │   ├── core/
│   │   ├── components/
│   │   ├── services/
│   │   └── utils/
│   └── assets/
│       ├── images/
│       ├── fonts/
│       └── icons/
├── docs/
├── tests/
└── config/
```

---

## 💻 Instalación

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (recomendado: VS Code)
- Git (opcional)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/RealSniperZ/sjwebstudio.git
cd sjwebstudio
```

2. **Abrir el proyecto**
```bash
# Opción 1: Abrir index.html directamente en el navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opción 2: Usar un servidor local (recomendado)
# Con Python 3:
python3 -m http.server 8000

# Con Node.js (http-server):
npx http-server -p 8000

# Con VS Code:
# Instalar extensión "Live Server" y hacer clic derecho > Open with Live Server
```

3. **Acceder al sitio**
```
http://localhost:8000
```

---

## 🎯 Uso

### Navegación
El sitio utiliza navegación SPA (Single Page Application):
```javascript
// En JavaScript
navigateToPage('productos');

// En HTML
<a href="#productos" onclick="navigateToPage('productos')">Productos</a>
```

### Formulario de Contacto
```javascript
// El formulario está en #contacto
// Al enviarlo, se validan los campos y se procesa el mensaje
handleContactForm(event);
```

### Selección de Productos
```javascript
// Al hacer clic en "Seleccionar" de cualquier producto
selectProduct('Profesional');
// Se abre el cliente de email con información pre-rellenada
```

### Configuración

#### Cambiar Información de Contacto
```javascript
// En index.html buscar y reemplazar:
sjwebstudio.contact@gmail.com  // Email
+34 633 542 925                // Teléfono/WhatsApp
España                          // Ubicación
```

#### Modificar Colores
```css
/* En styles.css */
:root {
    --primary-color: #6366f1;      /* Tu color principal */
    --secondary-color: #ec4899;    /* Tu color secundario */
    --accent-color: #14b8a6;       /* Tu color de acento */
}
```

#### Agregar Nuevo Producto
```javascript
// 1. En index.html, duplicar un .product-card y modificar:
<div class="product-card" data-animate>
    <div class="product-badge">Nuevo</div>
    <div class="product-header">
        <h3>Tu Nuevo Producto</h3>
        <div class="product-price">
            <span class="price-amount">€XXX</span>
            <span class="price-period">Pago único</span>
        </div>
    </div>
    <!-- ... resto del contenido ... -->
    <button class="btn btn-primary" onclick="selectProduct('NuevoProducto')">Seleccionar</button>
</div>

// 2. En script.js, agregar caso en selectProduct():
case 'NuevoProducto':
    productInfo = {
        name: 'Tu Nuevo Producto',
        price: '€XXX',
        description: 'Descripción completa...'
    };
    break;
```

---

## 📄 Páginas

### 🏠 Inicio (`#inicio`)
- Hero section con llamadas a la acción
- 6 tarjetas de características
- Sección de contacto rápido
- Animaciones de entrada

### 📦 Productos (`#productos`)
- Grid de 6 productos
- Badges de popularidad
- Precios destacados
- Botones de selección que abren email

### 📧 Contacto (`#contacto`)
- Banner hero con estadísticas
- Formulario de contacto profesional
- Tarjetas clickeables de contacto:
  - WhatsApp (enlace directo)
  - Email (mailto)
  - Teléfono (tel)
- Información de horarios y cobertura
- Sección de preguntas frecuentes

### ⚖️ Aviso Legal (`#aviso-legal`)
- Información legal completa
- 11 secciones detalladas
- Datos de la empresa
- Condiciones de uso

---

## 🗺️ Roadmap

Ver el archivo [PROPUESTA_MEJORAS.md](PROPUESTA_MEJORAS.md) para el plan completo de evolución.

### Fase 1 - Fundamentos (Q1 2026) ⏳
- [ ] Control de versiones Git avanzado
- [ ] CHANGELOG.md ✅
- [ ] Certificado SSL/HTTPS
- [ ] Meta tags SEO completos
- [ ] Google Analytics 4
- [ ] Sitemap y robots.txt

### Fase 2 - Optimización (Q2 2026)
- [ ] Modularización del código
- [ ] Lazy loading de imágenes
- [ ] Service Worker (PWA)
- [ ] Optimización de performance
- [ ] Sistema de componentes

### Fase 3 - Backend (Q3 2026)
- [ ] Node.js + Express
- [ ] Base de datos MongoDB
- [ ] API RESTful
- [ ] Sistema de emails automatizado
- [ ] Calculadora de presupuestos

### Fase 4 - Contenido (Q4 2026)
- [ ] Portfolio de proyectos
- [ ] Sistema de blog
- [ ] Newsletter
- [ ] Live Chat
- [ ] SEO Local

### Fase 5 - Calidad (Q1 2027)
- [ ] Testing automatizado
- [ ] CI/CD
- [ ] Monitoreo y logging
- [ ] Backups automáticos

### Fase 6 - Avanzado (Q2 2027)
- [ ] Modo oscuro
- [ ] Multi-idioma (ES/EN/FR)
- [ ] Accesibilidad WCAG 2.1
- [ ] ChatBot personalizado

---

## 🤝 Contribuir

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. **Cualquier contribución que hagas será muy apreciada**.

### Cómo Contribuir

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Cambios en documentación
style: Cambios de formato (no afectan el código)
refactor: Refactorización de código
test: Agregar o modificar tests
chore: Cambios en el build o herramientas
```

### Guía de Estilo

- Usar indentación de 4 espacios
- Comentar código complejo
- Usar nombres descriptivos para variables y funciones
- Seguir la estructura del proyecto existente

---

## 📧 Contacto

**SJ Web Studio**

- 🌐 Website: [www.sjwebstudio.com](#)
- 📧 Email: [sjwebstudio.contact@gmail.com](mailto:sjwebstudio.contact@gmail.com)
- 📱 WhatsApp: [+34 633 542 925](https://wa.me/34633542925)
- 🐙 GitHub: [@RealSniperZ](https://github.com/RealSniperZ)

**Repositorio del Proyecto:** [https://github.com/RealSniperZ/sjwebstudio](https://github.com/RealSniperZ/sjwebstudio)

---

## 📄 Licencia

Este proyecto es propiedad de **SJ Web Studio**. Todos los derechos reservados.

```
Copyright © 2026 SJ Web Studio
Todos los derechos reservados.

Este código es propiedad privada y confidencial.
No está permitido copiar, modificar, distribuir o usar
este software sin autorización explícita por escrito.
```

---

## 🙏 Agradecimientos

- [Google Fonts](https://fonts.google.com/) - Tipografía Poppins
- [GitHub](https://github.com/) - Hosting del repositorio
- [VS Code](https://code.visualstudio.com/) - Editor de código

---

## 📊 Estadísticas del Proyecto

- **Versión actual:** 1.0.0
- **Última actualización:** 20 de Enero 2026
- **Líneas de código:** ~2,400
  - HTML: ~630 líneas
  - CSS: ~1,300 líneas
  - JavaScript: ~510 líneas
- **Páginas:** 4
- **Productos:** 6
- **Tiempo de desarrollo:** 40+ horas

---

<div align="center">

**Hecho con ❤️ por SJ Web Studio**

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub

[⬆ Volver arriba](#-sj-web-studio---sitio-web-corporativo)

</div>
