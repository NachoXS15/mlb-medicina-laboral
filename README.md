# MLB Medicina Laboral

Sitio institucional + área privada de clientes de Medicina Laboral Dra. Basso (La Rioja).

- **Stack:** Next.js 15 (App Router), React 19, Tailwind 4, Supabase (Auth, Postgres, Storage), EmailJS.
- **Sitio público:** `src/app/page.tsx` (formulario de contacto vía EmailJS).
- **Área privada:** `/admin/*`
  - `/admin/login` – inicio de sesión.
  - `/admin/dashboardA` – panel de administración (alta/edición de clientes, reseteo de contraseña, carga y borrado de documentos).
  - `/admin/dashboardU` – panel del cliente (ve y descarga sus documentos).

## Variables de entorno

Crear `.env.local` (no se commitea):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>   # SOLO servidor. Nunca con prefijo NEXT_PUBLIC_.

NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

Usar **npm** (el lockfile versionado es `package-lock.json`).

## Modelo de seguridad

- `src/middleware.ts` refresca la sesión de Supabase y bloquea `/admin/*` sin sesión.
- Los layouts/páginas verifican rol y estado (`src/app/lib/auth.ts` → `getSessionProfile()`).
- **Toda Server Action de admin empieza con `requireAdmin()`.** Las Server Actions son endpoints públicos: el layout NO las protege.
- El cliente con service role (`src/app/utils/supabase/admin.ts`) se usa solo en el servidor y solo después de verificar permisos.
- Documentos (`src/app/lib/doc-actions.ts`):
  - Subida: el servidor valida y emite una URL firmada de subida para `"<user_id>/<uuid>.pdf"`; el navegador sube directo a Storage; luego se registra en `docs`.
  - Descarga: URL firmada de 60 s, solo para el dueño del documento o un admin.
  - Borrado: solo admin.
- Cerrar sesión se hace por POST (Server Action `signOut`), nunca por GET.

## Supabase (esquema esperado)

- `profiles`: `id uuid (= auth.users.id)`, `name`, `mail`, `type` (`Pyme` | `Particular` | `Empresa Grande`), `status` (`Activo` | `Inactivo`), `role` (`client` | `admin`), `img` (URL https, opcional), `created_at`.
- `docs`: `id`, `user_id uuid`, `path_name`, `doc_name`, `type`, `year`, `month`, `created_at`.
- Storage: bucket **privado** `docsbucket`.

Configuración recomendada (ver `AUDITORIA.md`): registro público de usuarios deshabilitado y RLS habilitado en `profiles`, `docs` y `storage.objects`.
