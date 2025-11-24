# Mi Tienda - E-commerce React

## 🧭 Descripción general

Aplicación web de e‑commerce construida con React + Vite. Permite:
- Explorar catálogo de productos, ver destacados y detalle.
- Agregar productos al carrito (soporta modo simulación).
- Realizar “checkout” simulado que genera órdenes.
- Panel de administración para gestionar productos (con múltiples imágenes), usuarios (bloquear/desbloquear) y órdenes (pendiente/enviada/rechazada, y eliminar).
- Integración con Xano para endpoints REST. Si algún endpoint no está disponible, se activa un modo fallback de simulación usando `localStorage` para continuar la demo sin bloquear flujos.

## 🚀 Desarrollo Local

### Instalación
```bash
npm install
```

Requisitos:
- Node.js 18+ recomendado
- Crear archivo `.env` a partir de `env.example` y completar valores (ver sección Variables de entorno)

### Comandos de Desarrollo

#### Modo de desarrollo (con hot reload automático)
```bash
npm run dev
```
Esto iniciará el servidor en `http://localhost:5173` (o el siguiente puerto disponible)

#### Modo de desarrollo que abre automáticamente el navegador
```bash
npm run dev:open
```

#### Alternativa (comando corto)
```bash
npm start
```

### ✨ Características del Hot Reload

- **Recarga automática**: Los cambios se reflejan instantáneamente sin necesidad de recargar manualmente
- **Preserva estado**: React Fast Refresh mantiene el estado de los componentes al hacer cambios
- **Detección de errores**: Los errores se muestran en pantalla automáticamente

### 🔧 Configuración Optimizada

El proyecto incluye:
- Hot Module Replacement (HMR) habilitado
- Polling de archivos para Windows
- Error Boundaries para evitar pantallas en blanco
- Manejo robusto de errores de autenticación

### 📱 Páginas Disponibles

- `/` - Página principal
- `/productos` - Catálogo de productos
- `/nosotros` - Acerca de nosotros
- `/contacto` - Información de contacto
- `/login` - Inicio de sesión
- `/admin` - Panel de administración (requiere autenticación)

### 🛠️ Comandos Adicionales

```bash
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run lint     # Verificar código con ESLint
```

---
**Nota**: Una vez que ejecutes `npm run dev`, cualquier cambio que hagas en los archivos se reflejará automáticamente en el navegador sin necesidad de recargar o ejecutar comandos adicionales.

## ⚙️ Variables de entorno

Crea un archivo `.env` (usa `env.example` como base). Variables más importantes:

- Conexión a APIs (Xano):
  - `VITE_API_BASE_URL` → API principal (productos, carrito, órdenes)
  - `VITE_AUTH_API_URL` → API de autenticación (login/registro)
  - `VITE_XANO_BASE_URL` → API alternativa genérica (si se usa)
- Subida de imágenes:
  - `VITE_UPLOAD_FILE_FIELD` (por defecto `file`)
  - `VITE_UPLOAD_IMAGES_ENDPOINT` (opcional; si se deja vacío usa subidas individuales a `/upload`)
  - `VITE_PRODUCT_IMAGE_FIELD` (por defecto `image`, para envío multipart directo al endpoint de producto si se habilita)
- Demo:
  - `VITE_CART_SIMULATED=true` → Fuerza carrito 100% simulado (recomendado para demo/video)

> En modo demo, el carrito y las órdenes usan almacenamiento local si la API no está disponible, garantizando que todos los flujos funcionen.

## 🗄️ Backend utilizado

- Backend: Xano (REST)
- Estrategia de integración:
  - Endpoints reales mediante Axios (ver `src/services`).
  - Fallback automático a simulación con `localStorage` si un endpoint no responde o si `VITE_CART_SIMULATED=true`.
  - Subida de imágenes:
    - Por defecto: se suben a `/upload` y se guarda el arreglo `image` en el producto con las URLs retornadas por Xano.
    - Alternativa: multipart directo al endpoint de producto (`POST/PATCH /product`), configurable con `VITE_PRODUCT_IMAGE_FIELD`.

## 👤 Usuarios de prueba (dummy)

- Admin
  - Email: `admin@mitienda.com`
  - Password: `123456`
  - Nota: la app reconoce al admin si el email es `admin@mitienda.com`. En demo, puedes usar el panel Admin → Usuarios para generar usuarios simulados.
- Cliente
  - Email: `cliente@mitienda.com`
  - Password: `123456`

> Si tu backend de auth no está configurado aún, puedes ejecutar en modo demo (carrito/órdenes simuladas) y usar solo el flujo de navegación/checkout simulado.

## 🌐 Rutas (frontend)

- `/` → Home
- `/productos` → Catálogo
- `/contacto`, `/nosotros`
- `/login`
- `/checkout` → Pago simulado (genera orden “pending”)
- `/orders` → Órdenes del usuario
- `/orders/:id` → Detalle de orden
- `/account` → Mi cuenta (editar datos)
- `/admin` → Dashboard
- `/admin/products`, `/admin/products/new`, `/admin/products/edit/:id`
- `/admin/orders` → Listar/filtrar, cambiar estado (pendiente/enviado/rechazado), eliminar
- `/admin/users` → Listar, bloquear/desbloquear, generar/resetear simulados

## 🔌 Endpoints utilizados (Xano)

Variables base: `${VITE_API_BASE_URL}`, `${VITE_AUTH_API_URL}`

- Productos
  - `GET /product`
  - `GET /product/{id}`
  - `POST /product` (opcional multipart)
  - `PATCH /product/{id}` (JSON o multipart)
  - `DELETE /product/{id}`
  - Subida: `POST /upload` (multipart, campo `VITE_UPLOAD_FILE_FIELD`, default `file`)
- Carrito
  - `GET /cart`
  - `POST /cart`
  - `GET /cart_product?cart_id={id}`
  - `POST /cart_product` (body: `cart_id`, `product_id`, `quantity`)
  - `PATCH /cart_product/{id}` (modificar cantidad)
  - `DELETE /cart_product/{id}`
- Órdenes
  - `GET /order`
  - `GET /order/{id}`
  - `POST /order` (body: `total`, `status`, `shipping_*`)
  - `PATCH /order/{id}` (body: `status`)
  - `GET /order_product?order_id={id}`
  - `POST /order_product` (body: `order_id`, `product_id`, `quantity`, `price`)
- Autenticación
  - `POST /auth/login`
  - `POST /auth/signup`
- (Opcional de ejemplo) Contenido
  - `POST /contacto`

> En demo, si alguna ruta no existe en tu Xano aún, la app usa simulación con `localStorage` para que el flujo del video no se bloquee (carrito, órdenes y usuarios).

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🚀 Despliegue (opcional)

- Vercel / Netlify / Render
- Comando: `npm run build`
- Servir la carpeta `dist/`
- (Opcional) Enlace al despliegue: agrega aquí tu URL pública cuando esté lista.
