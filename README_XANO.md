# 🛒 Mi Tienda - E-commerce con React + Vite + Xano

Una aplicación de tienda virtual moderna construida con React, Vite y conectada a Xano como backend.

## 🚀 Características

- ✅ **Navegación** con React Router DOM
- ✅ **Autenticación** de usuarios (Login/Registro)
- ✅ **Catálogo de productos** con filtros
- ✅ **Carrito de compras** funcional
- ✅ **Formulario de contacto** integrado
- ✅ **Diseño responsive** y moderno
- ✅ **Integración completa con Xano**

## 🛠️ Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
Copia el archivo `.env.template` como `.env.local` y configura tus URLs de Xano:

```env
VITE_API_BASE_URL=https://x8ki-letl-twmt.n7.xano.io/api:W-lgR84A
VITE_AUTH_API_URL=https://x8ki-letl-twmt.n7.xano.io/api:PJ2xSnM6
```

### 3. Ejecutar la aplicación
```bash
npm run dev
```

## 📡 Endpoints de Xano Configurados

### API Principal (`VITE_API_BASE_URL`)
- `GET /product` - Obtener todos los productos
- `GET /product/:id` - Obtener producto por ID
- `POST /product` - Crear producto (admin)
- `GET /cart` - Obtener carrito del usuario
- `POST /cart` - Crear carrito
- `GET /cart_product` - Obtener productos del carrito
- `POST /cart_product` - Agregar producto al carrito
- `GET /order` - Obtener órdenes del usuario
- `POST /order` - Crear nueva orden
- `GET /shipping` - Obtener opciones de envío

### API de Autenticación (`VITE_AUTH_API_URL`)
- `POST /auth/login` - Iniciar sesión
- `POST /auth/signup` - Registrar usuario

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── Navbar.jsx      # Barra de navegación
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página principal
│   ├── Nosotros.jsx    # Página sobre nosotros
│   ├── Productos.jsx   # Catálogo de productos
│   ├── Contacto.jsx    # Formulario de contacto
│   └── Login.jsx       # Página de login
├── services/           # Servicios de API
│   ├── api.js          # Configuración base de axios
│   ├── productService.js    # Servicios de productos
│   ├── cartService.js       # Servicios de carrito
│   ├── orderService.js      # Servicios de órdenes
│   ├── authService.js       # Servicios de autenticación
│   └── contactService.js    # Servicios de contacto
├── hooks/              # Hooks personalizados
│   ├── useProducts.js  # Hook para productos
│   └── useCart.js      # Hook para carrito
├── context/            # Contextos de React
│   └── AuthContext.jsx # Context de autenticación
└── App.jsx            # Componente principal
```

## 🎨 Funcionalidades Implementadas

### 🏠 Página Home
- Hero section atractivo
- Productos destacados desde la API
- Botones de navegación

### 🛍️ Página Productos
- Lista de productos desde Xano
- Filtros por categoría dinámicos
- Botón "Agregar al carrito"
- Estados de loading y error

### 🛒 Carrito de Compras
- Agregar productos al carrito
- Ver cantidad total de items
- Integración completa con la API

### 👤 Autenticación
- Login de usuarios
- Gestión de sesiones con localStorage
- Contexto global de autenticación

### 📞 Contacto
- Formulario funcional
- Envío de mensajes a Xano
- Validación de campos

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción  
- `npm run preview` - Vista previa de producción

## 🌟 Próximas Funcionalidades

- [ ] Página de carrito completa
- [ ] Proceso de checkout
- [ ] Página de perfil de usuario
- [ ] Historial de órdenes
- [ ] Sistema de reseñas
- [ ] Búsqueda de productos
- [ ] Wishlist/Favoritos

## 🤝 Configuración de Xano

Asegúrate de tener configuradas las siguientes tablas en tu backend de Xano:

1. **Products** - Para el catálogo de productos
2. **Users** - Para la autenticación de usuarios  
3. **Cart** - Para los carritos de compra
4. **Cart_Product** - Para los productos en el carrito
5. **Orders** - Para las órdenes de compra
6. **Order_Product** - Para los productos de las órdenes
7. **Shipping** - Para las opciones de envío

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Móviles (320px+)
- 💻 Tablets (768px+)  
- 🖥️ Desktop (1024px+)

---

¡Tu tienda virtual está lista para usar! 🎉