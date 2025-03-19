# AMUZIK
Proyecto de Fin de Ciclo, el cual se centrará en un media player con gestión de usuarios.


# Planificación y Desarrollo

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

---entes, botones).

---
