# Amuzik - Planificación y Desarrollo

## Descripción del Proyecto
**Nombre:** Amuzik  
**Tipo:** Aplicación de reproducción de música con sincronización en tiempo real entre usuarios.  
**Inspiración:** Spotify + Spicetify  
**Objetivo:** Permitir a los usuarios escuchar la misma canción al mismo tiempo desde diferentes lugares.

## Tecnologías
### Frontend
- **Framework:** Ionic 7 con Angular
- **Lenguaje:** TypeScript
- **UI/UX:** TailwindCSS

### Backend
- **Lenguaje:** PHP
- **Framework:** CodeIgniter4 (API REST)
- **Base de Datos:** PostgreSQL
- **Autenticación:** JWT (JSON Web Token)

### APIs Externas
- **SoundCloud API:** Reproducción de música
- **WebSockets (PHP Ratchet o Node.js):** Sincronización en tiempo real

---

## Planificación del Proyecto

### 1. Planificación Inicial

| Fase | Fecha de Inicio | Fecha de Fin |
|-----------------------------|-----------------|--------------|
| Definición de Funcionalidades | 18/03/2025 | 20/03/2025 |
| Análisis del Proyecto | 21/03/2025 | 09/04/2025 |
| Definición del Entorno | 21/03/2025 | 25/03/2025 |
| Definición de Herramientas | 26/03/2025 | 01/04/2025 |
| Definición del Modelo de Datos (E/R) | 02/04/2025 | 09/04/2025 |

---

### 2. Diseño y Arquitectura

| Fase | Fecha de Inicio | Fecha de Fin |
|-----------------------------|-----------------|--------------|
| Diseño de Datos | 10/04/2025 | 10/04/2025 |
| Diseño de Clases | 11/04/2025 | 15/04/2025 |
| Diseño de la UI (Colores y Temas) | 16/04/2025 | 16/04/2025 |
| Definición de la Estructura de la Aplicación | 17/04/2025 | 18/04/2025 |

---

### 3. Implementación

| Fase | Fecha de Inicio | Fecha de Fin |
|-----------------------------|-----------------|--------------|
| Desarrollo de la Interfaz Gráfica | 18/04/2025 | 11/06/2025 |
| Desarrollo del Backend | 18/04/2025 | 11/06/2025 |

---

### 4. Pruebas y Ajustes Finales

| Fase | Fecha de Inicio | Fecha de Fin |
|-----------------------------|-----------------|--------------|
| Pruebas Unitarias y de Integración | 12/06/2025 | 20/06/2025 |
| Creación del Manual de Usuario | 23/06/2025 | 24/06/2025 |
| Implantación y Cierre | 25/06/2025 | 25/06/2025 |

---

## Módulos Principales

### Módulo de Usuarios
- Registro e inicio de sesión con autenticación segura.
- Creación, edición y eliminación de cuentas.
- Lista de amigos (agregar, aceptar, rechazar solicitudes).
- Perfiles de usuario con configuración personalizada.

### Módulo de Reproducción de Música
- Reproducción de canciones desde la API de SoundCloud.
- Control de reproducción (pausar, avanzar, retroceder).
- Sincronización con otros usuarios en tiempo real.

### Módulo de Sincronización y Conexión
- Creación de salas privadas para escuchar juntos.
- Uso de WebSockets para sincronización en tiempo real.
- Opción de invitar amigos a una sesión en curso.

### Módulo de Personalización
- Cambio de temas (claro, oscuro, colores personalizados).
- Modificación del tamaño de elementos (fuentes, botones).
