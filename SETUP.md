# 🛍️ Mi Tienda - Frontend

Una tienda virtual moderna desarrollada con React + Vite, conectada a un backend de Xano.

## 🚀 Características

- ✅ Navegación con React Router DOM
- ✅ Diseño responsive y moderno
- ✅ Integración con API de Xano
- ✅ Páginas: Home, Nosotros, Productos, Contacto
- ✅ Gestión de estados de carga y errores
- ✅ Formulario de contacto funcional

## 📋 Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

Edita el archivo `.env` y configura tu URL de Xano:
```env
VITE_XANO_BASE_URL=https://tu-instancia.xano.io/api:tu-api-key
```

### 3. Configurar endpoints de Xano

Asegúrate de que tu backend de Xano tenga los siguientes endpoints configurados:

#### Productos
- `GET /productos` - Obtener todos los productos
- `GET /productos?categoria={categoria}` - Filtrar por categoría
- `GET /productos/{id}` - Obtener producto específico

#### Categorías
- `GET /categorias` - Obtener todas las categorías

#### Contacto
- `POST /contacto` - Enviar mensaje de contacto

### 4. Estructura de datos esperada

#### Producto
```json
{
  "id": 1,
  "nombre": "Nombre del producto",
  "descripcion": "Descripción del producto",
  "precio": 99.99,
  "categoria": "electronica",
  "imagen": "https://url-de-la-imagen.jpg"
}
```

#### Categoría
```json
{
  "id": "electronica",
  "nombre": "Electrónica"
}
```

#### Mensaje de Contacto
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "telefono": "+1234567890",
  "asunto": "Consulta sobre productos",
  "mensaje": "Hola, me interesa..."
}
```

## 🖥️ Comandos de desarrollo

```bash
# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── Navbar.jsx      # Barra de navegación
├── hooks/              # Custom hooks
│   ├── useProductos.js # Hook para productos
│   └── useCategorias.js # Hook para categorías
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal
│   ├── Nosotros.jsx    # Página sobre nosotros
│   ├── Productos.jsx   # Catálogo de productos
│   └── Contacto.jsx    # Página de contacto
├── services/           # Servicios de API
│   ├── xanoAPI.js      # Configuración de Axios
│   └── apiServices.js  # Servicios específicos
└── App.jsx             # Componente principal con rutas
```

## 🔧 Personalización

### Colores y estilos
Los estilos están organizados en archivos CSS individuales para cada componente. Puedes personalizar los colores y estilos editando los archivos `.css` correspondientes.

### Agregar nuevas páginas
1. Crea el componente en `src/pages/`
2. Agrega la ruta en `App.jsx`
3. Actualiza la navegación en `Navbar.jsx`

### Conectar nuevos endpoints
1. Agrega el servicio en `src/services/apiServices.js`
2. Crea un custom hook si es necesario
3. Usa el hook en el componente correspondiente

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Subir la carpeta dist/ a Netlify
```

### Vercel
```bash
npm run build
# Conectar con Vercel CLI o desde el dashboard
```

## 📞 Soporte

Si tienes problemas con la configuración, verifica:

1. ✅ Las variables de entorno están correctamente configuradas
2. ✅ Los endpoints de Xano están disponibles y responden correctamente
3. ✅ La estructura de datos coincide con lo esperado
4. ✅ No hay errores de CORS (configurar en Xano si es necesario)

---

Desarrollado con ❤️ usando React + Vite + Xano