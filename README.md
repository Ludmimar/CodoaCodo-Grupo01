# 🏥 Salus - Plataforma de Cursos de Salud Online

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Plataforma educativa profesional dedicada a la formación en el área de la salud**

[Ver Demo](#) |

</div>

---

## 📋 Descripción

**Salus** es una plataforma educativa online especializada en cursos de formación profesional en el sector salud. Ofrece una experiencia de aprendizaje moderna, accesible y completamente responsive, con más de 10 años de trayectoria formando profesionales de la salud.

La plataforma cuenta con **6 cursos especializados**, sistema de inscripciones online, múltiples sedes físicas y una interfaz intuitiva diseñada para facilitar el acceso a la información académica.

---

## ✨ Características Principales

### 🎓 Oferta Académica
- **Paramédico** - Atención prehospitalaria y emergencias
- **Secretariado en Salud** - Gestión administrativa médica
- **Terapias Alternativas** - Medicina holística complementaria
- **Auxiliar de Enfermería** - Cuidados básicos de enfermería
- **Auxiliar de Farmacia** - Dispensación y gestión farmacéutica
- **Auxiliar de Emergencias Médicas** - Soporte vital y urgencias

### 💻 Funcionalidades Web
- **Navegación Intuitiva**: Menú desplegable con categorización clara de cursos
- **Diseño Responsive**: Adaptación perfecta a desktop, tablet y móvil
- **Carousel Automático**: Promociones e inscripciones destacadas con autoplay
- **Formulario de Contacto**: Sistema de consultas con validación en tiempo real
- **Scroll Suave**: Navegación fluida entre secciones
- **Botón Volver Arriba**: Acceso rápido al inicio de página
- **Sección Nosotros**: Historia, valores y ubicaciones de sedes

### 🎨 Diseño
- **Grid Moderno**: Layout basado en CSS Grid para organización visual
- **Animaciones Suaves**: Efectos de entrada y hover en elementos
- **Gradientes Elegantes**: Paleta de colores profesional y atractiva
- **Tipografía Premium**: Google Fonts (Source Code Pro, Kanit, Source Serif Pro)
- **Iconografía**: Boxicons para interfaz clara y moderna
- **Sombras y Profundidad**: Efectos visuales que mejoran la jerarquía

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
|-----------|-----------|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Estilos, Grid Layout, Flexbox, animaciones |
| **JavaScript Vanilla** | Interactividad y funcionalidades dinámicas |
| **jQuery 3.6.0** | Manipulación DOM (compatibilidad) |
| **Google Fonts** | Tipografía profesional |
| **Boxicons** | Librería de iconos vectoriales |

---

## 📁 Estructura del Proyecto

```
CodoaCodo-Grupo01/
├── index.html              # Página principal con grid de cursos
├── nosotros.html           # Información institucional y sedes
├── contacto.html           # Formulario de contacto
├── paramedico.html         # Detalle curso Paramédico
├── secreSalud.html         # Detalle Secretariado en Salud
├── teraAlter.html          # Detalle Terapias Alternativas
├── auxEnfermeria.html      # Detalle Aux. Enfermería
├── auxFarmacia.html        # Detalle Aux. Farmacia
├── auxEmerMedi.html        # Detalle Aux. Emergencias Médicas
│
├── css/
│   ├── estilos.css         # Estilos globales y header/footer
│   ├── estilosCursos.css   # Estilos páginas de cursos
│   ├── estilosContacto.css # Estilos formulario contacto
│   └── estilosNosotros.css # Estilos página institucional
│
├── js/
│   └── logica.js           # JavaScript principal
│
├── img/
│   ├── cursos/             # Imágenes de cada curso
│   ├── programas/          # Programas académicos
│   ├── sedes/              # Fotos de sedes
│   └── *.jpg               # Imágenes generales
│
└── README.md
```

---

## 🎯 Páginas del Sitio

### 🏠 Inicio (`index.html`)
- Hero section con mensaje inspiracional
- Grid visual de 6 cursos con imágenes
- Banner de inscripciones abiertas
- Acceso directo a cada curso

### 👥 Nosotros (`nosotros.html`)
- Historia y trayectoria institucional
- Valores y diferenciadores
- Proceso de calidad (ISO 9001:2015)
- Ubicación de 3 sedes con mapas integrados:
  - Córdoba Capital
  - Alta Gracia
  - Cosquín

### 📞 Contacto (`contacto.html`)
- Formulario completo con validación JavaScript
- Campos: nombre, email, teléfono, curso de interés, mensaje
- Información de contacto (teléfono, email, dirección)
- Horarios de atención
- Enlaces a redes sociales

### 📚 Páginas de Cursos
Cada curso incluye:
- Carousel de promociones
- Descripción detallada del curso
- Duración, modalidad y certificación
- Temario (lo que aprenderás)
- Requisitos de ingreso
- Botón de inscripción

---

## 🎨 Características de Diseño

### Responsive Design
El sitio se adapta perfectamente a todos los dispositivos:

- **Desktop (>992px)**: Layout completo con grids multi-columna
- **Tablet (768-992px)**: Grids de 2 columnas
- **Móvil (<768px)**: 
  - Layout de 1 columna
  - Menú hamburguesa lateral
  - Navegación optimizada

### Paleta de Colores
```css
--primary-color: #a8edea     /* Turquesa suave */
--secondary-color: #fed6e3   /* Rosa pastel */
--accent-color: #ca87cc      /* Púrpura */
--gradient-1: #667eea → #764ba2
--gradient-2: #f093fb → #f5576c
```

### Animaciones
- **Entrada de secciones**: fadeInUp con delays escalonados
- **Hover en tarjetas**: Elevación y cambio de sombra
- **Menú móvil**: Deslizamiento lateral suave
- **Carousel**: Transición automática cada 5 segundos
- **Scroll suave**: Navegación fluida entre secciones

---

## 🛠️ Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para fuentes y librerías CDN)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/usuario/CodoaCodo-Grupo01.git
```

2. **Navegar al directorio**
```bash
cd CodoaCodo-Grupo01
```

3. **Abrir en el navegador**
```bash
# Opción 1: Doble click en index.html
# Opción 2: Usar un servidor local
python -m http.server 8000
# o
npx serve
```

4. **Acceder al sitio**
```
http://localhost:8000
```

---

## 🌐 Navegación del Sitio

### Menú Principal
- **Inicio**: Página principal con todos los cursos
- **Cursos**: Dropdown con 6 opciones de formación
- **Nosotros**: Información institucional
- **Contacto**: Formulario de consultas

### Footer
- Información de contacto
- Enlaces rápidos
- Redes sociales
- Copyright

---

## 📱 Compatibilidad

| Navegador | Versión Mínima | Estado |
|-----------|----------------|---------|
| Chrome | 90+ | ✅ Soportado |
| Firefox | 88+ | ✅ Soportado |
| Safari | 14+ | ✅ Soportado |
| Edge | 90+ | ✅ Soportado |
| Opera | 76+ | ✅ Soportado |

### Dispositivos Probados
- 💻 Desktop (1920px, 1366px)
- 📱 Tablet (iPad, Android tablets)
- 📱 Móvil (iPhone, Android phones)

---

## 🔧 Funcionalidades JavaScript

### Menú de Navegación
- Menú hamburguesa para dispositivos móviles
- Dropdown con hover en desktop
- Dropdown con click en móvil
- Cierre automático al seleccionar opción
- Overlay semi-transparente

### Carousel
- Autoplay cada 5 segundos
- Pausa automática al hacer hover
- Controles manuales (flechas y puntos)
- Transiciones suaves

### Formulario de Contacto
- Validación de campos obligatorios
- Validación de formato de email
- Validación de teléfono (8-15 dígitos)
- Mensajes de error descriptivos
- Mensaje de éxito al enviar
- Reset automático del formulario

### Scroll
- Comportamiento suave en toda la navegación
- Botón "volver arriba" que aparece tras 300px de scroll
- Header sticky con efecto al scrollear

---

## 🙏 Agradecimientos

- **Codo a Codo** - Programa de formación
- **Google Fonts** - Tipografías profesionales
- **Boxicons** - Librería de iconos
- **Unsplash/Pixabay** - Imágenes de stock

---

## 📝 Notas de Versión

### Versión 2.0 (Actual)
- ✅ Diseño completamente responsive
- ✅ Menú hamburguesa funcional
- ✅ Formulario de contacto con validación
- ✅ Carousel automático
- ✅ Footer completo con redes sociales
- ✅ Mejoras de accesibilidad (ARIA labels)
- ✅ Optimizaciones SEO (meta tags)
- ✅ Animaciones y transiciones suaves
- ✅ Scroll suave y botón volver arriba

### Versión 1.0
- Estructura base del sitio
- Grid de cursos
- Páginas individuales de cursos
- Estilos básicos

---

## 👨‍💻 Autor

**Desarrollador**: Ludmila Martos

## 📞 Contacto

- **Email**: [ludmilamartos@gmail.com](mailto:ludmilamartos@gmail.com)
- **LinkedIn**: [ludmimar89](https://www.linkedin.com/in/ludmimar89/)
- **GitHub**: [Ludmimar](https://github.com/Ludmimar)


---

<div align="center">

**Desarrollado con ❤️ por Grupo 01 - Codo a Codo**

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub

</div>
