# Portafolio Técnico — Cristhian Alexis Sánchez Enríquez (`Prolexis`)

Portafolio profesional construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, orientado a ingeniería de software full-stack, inteligencia artificial aplicada, análisis de datos y seguridad defensiva.

---

## Estructura del proyecto

- `src/app/` — Rutas App Router:
  - `/` (`page.tsx`): Portada orientada a reclutamiento (hero con retrato, especialidades, 6 casos destacados, módulo horizontal del reconocimiento UNT/Syscoin, stack técnico agrupado, resumen de perfil, formación y contacto directo).
  - `/proyectos` (`proyectos/page.tsx`): Catálogo completo con filtros por categoría (`Todos`, `IA`, `Web`, `Seguridad`, `Datos`, `Hackathons`) y búsqueda por stack sobre los 6 casos principales y 7 repositorios complementarios.
  - `/proyectos/[slug]` (`proyectos/[slug]/page.tsx`): Casos de estudio detallados (`vasochain-ai`, `minesafe-3d`, `yaku-alert-unt`, `identity-risk-ai`, `establo-ai-leads`, `egresados-system`) con navegación anterior/siguiente y avisos técnicos cuando aplica.
  - `/sobre-mi` (`sobre-mi/page.tsx`): Perfil académico en la UNT, filosofía de ingeniería y canales de contacto verificados.
  - `/logros` (`logros/page.tsx`): Reconocimiento institucional firmado y sellado por la UNT (Hackathon Syscoin 2026), participación en Hackathon Innova Norte 3G 2026 y constancia de SQL Server Fundamentals, con visor modal accesible (`Escape`, zoom, apertura y descarga).
  - `sitemap.ts`, `robots.ts`, `icon.svg`: SEO técnico, metadatos Open Graph/Twitter y marcado estructurado JSON-LD (`Person` y `SoftwareSourceCode`).
- `src/data/` — Datos tipados sin textos quemados en componentes (`profile.ts`, `projects.ts`, `achievements.ts`, `skills.ts`).
- `src/components/` — Componentes de layout, tarjetas, diagramas conceptuales de arquitectura y modal accesible de documentos.
- `public/assets/` — Activos visuales optimizados y documentos originales verificados.

---

## Requisitos y ejecución local

- Node.js 20 o 22 LTS
- npm 10+

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Verificaciones de calidad

```bash
npm run typecheck
npm run lint
npm run build
```

---

## Cómo actualizar datos o agregar un CV descargable

1. **Perfil y enlaces (`src/data/profile.ts`):** Editar correo, biografía o disponibilidad.
2. **Habilitar botón de CV en PDF:** Colocar el archivo en `public/cv/cristhian-sanchez-cv.pdf` y cambiar `cvUrl: null` por `cvUrl: '/cv/cristhian-sanchez-cv.pdf'` en `src/data/profile.ts`.
3. **Proyectos (`src/data/projects.ts`):** Agregar o actualizar casos en `flagshipProjects` y `secondaryProjects`.
4. **Logros y documentos (`src/data/achievements.ts`):** Guardar la imagen en `public/assets/` y referenciarla sin recortes manteniendo su emisor oficial exacto.

---

## Despliegue en GitHub y Vercel

1. Configurar variable de entorno en `.env.local` (opcional en local) o en Vercel:
   ```env
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   ```
2. Subir el repositorio a GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portafolio técnico profesional de Cristhian Sánchez"
   git branch -M main
   git remote add origin https://github.com/Prolexis/<nombre-repo>.git
   git push -u origin main
   ```
3. Importar el repositorio en **Vercel**, confirmar que el preset sea **Next.js** y definir `NEXT_PUBLIC_SITE_URL` en *Environment Variables*. Vercel ejecutará `npm run build` automáticamente en cada push a `main`.
