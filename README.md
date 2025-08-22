# 🚀 Julio Martínez - CV Profesional Data Scientist

Un website personal moderno y profesional construido con **Astro** y **TypeScript**, diseñado para presentar mi perfil como Data Scientist.

## ✨ Características

- 🎨 **Diseño Moderno**: UI limpia y profesional con colores inspirados en LinkedIn
- 📱 **Responsive**: Mobile-first design con breakpoints optimizados
- ⚡ **Performance**: Astro para máxima velocidad y SEO
- 🎭 **Animaciones**: Microinteracciones sutiles y profesionales
- ♿ **Accesible**: Cumple estándares AA/AAA de contraste
- 🔧 **TypeScript**: Código tipado y mantenible
- 🎯 **SEO Optimizado**: Meta tags, Open Graph y estructura semántica

## 🛠️ Tecnologías

- **Framework**: [Astro](https://astro.build) (v5.13.2)
- **Lenguaje**: TypeScript
- **Estilos**: CSS puro con variables CSS
- **Deploy**: Vercel, Netlify, o cualquier hosting estático

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd juliomo89
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 📁 Estructura del Proyecto

```
juliomo89/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del proyecto
│   ├── resume.pdf         # CV mock
│   └── favicon.svg        # Favicon personalizado
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── data/             # Datos mock del perfil
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Páginas de la aplicación
│   └── styles/           # Estilos CSS organizados
├── astro.config.mjs      # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## 🎨 Personalización

### Colores

Los colores se definen en `src/styles/variables.css`:

```css
:root {
  --color-primary: #0A66C2;    /* Azul LinkedIn */
  --color-accent: #00B4D8;     /* Cian suave */
  --color-dark: #0F172A;       /* Gris oscuro */
  --color-light: #F8FAFC;      /* Blanco sucio */
}
```

### Perfil Personal

Edita `src/data/profile.ts` para cambiar:

- Nombre y rol
- Bio y descripción
- Enlaces sociales
- Habilidades técnicas
- Estadísticas

### Proyectos

Modifica `src/data/projects.ts` para:

- Agregar/editar proyectos
- Cambiar descripciones
- Actualizar enlaces
- Modificar skills

### Imágenes

**Reemplaza las imágenes placeholder:**

1. **Avatar**: `public/images/avatar.jpg`
   - Recomendado: Foto profesional 300x300px
   - Formato: JPG, PNG o WebP

2. **Proyectos**: `public/images/project-1.jpg` a `project-4.jpg`
   - Recomendado: 800x600px
   - Temas sugeridos:
     - `project-1.jpg`: Data visualization, charts
     - `project-2.jpg`: Healthcare, medical dashboards
     - `project-3.jpg`: Business analytics, pipelines
     - `project-4.jpg`: BI dashboards, KPIs

3. **Open Graph**: `public/images/og-image.jpg`
   - Recomendado: 1200x630px
   - Banner con nombre y rol

**Obtener imágenes reales:**
- [Unsplash](https://unsplash.com) - Fotos gratuitas de alta calidad
- [Pexels](https://pexels.com) - Imágenes libres de derechos
- [Pixabay](https://pixabay.com) - Recursos visuales gratuitos

## 📱 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Astro

2. **Configuración automática**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. **Conectar repositorio**
   - Ve a [netlify.com](https://netlify.com)
   - "New site from Git"
   - Selecciona tu repositorio

2. **Configuración**
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. **Configurar GitHub Actions**
   - Crea `.github/workflows/deploy.yml`
   - Usa la acción `peaceiris/actions-gh-pages`

2. **Habilitar Pages**
   - Settings > Pages
   - Source: GitHub Actions

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea `.env` para configuraciones locales:

```env
PUBLIC_SITE_URL=https://tudominio.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Analytics

Para Google Analytics, agrega en `Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Formulario de Contacto

El formulario actual es solo frontend. Para funcionalidad real:

1. **EmailJS** (Fácil de implementar)
2. **Formspree** (Sin backend)
3. **Netlify Forms** (Con Netlify)
4. **API personalizada** (Node.js, Python, etc.)

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 SEO

- Meta tags optimizados
- Open Graph para redes sociales
- Estructura semántica HTML5
- Sitemap automático
- Robots.txt configurado

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"

```bash
npm run dev -- --port 3001
```

### Build falla en producción

```bash
npm run build --verbose
```

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Astro](https://astro.build) por el framework increíble
- [Inter Font](https://rsms.me/inter/) por la tipografía
- [Heroicons](https://heroicons.com) por los iconos SVG

## 📞 Contacto

- **Email**: julioonmartinez@gmail.com
- **LinkedIn**: [julioonmartinez](https://www.linkedin.com/in/julio-cesar-martinez-ortega-515690319/)
- **GitHub**: [julioonmartinez](https://github.com/julioonmartinez)

---

⭐ **Si este proyecto te ayuda, dale una estrella en GitHub!**
