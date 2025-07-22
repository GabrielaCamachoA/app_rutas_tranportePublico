# BusConnect SPA (HTML, CSS y JS puro)

## Descripción
Este proyecto es una Single Page Application (SPA) que simula el sistema BusConnect, permitiendo a los usuarios:
- Iniciar sesión
- Buscar rutas de bus
- Ver noticias y actualizaciones
- Recibir notificaciones
- Consultar historial y tips de la comunidad

Todo está implementado usando **HTML, CSS y JavaScript puro**, sin frameworks ni librerías externas.

---

## Estructura de archivos

- `index.html`: Estructura base de la aplicación. Solo contiene un contenedor principal (`#app`) donde se renderizan dinámicamente las vistas.
- `styles.css`: Estilos globales y utilidades. Incluye estilos para el fondo, menú lateral, botones, inputs y tarjetas, siguiendo el diseño de las imágenes proporcionadas.
- `script.js`: Lógica de la SPA. Gestiona la navegación entre vistas, el login, y muestra datos de ejemplo (mock) en cada sección.

---

## ¿Cómo funciona la SPA?

- **Navegación SPA**: Todo el contenido se muestra y oculta dinámicamente en el mismo archivo HTML, sin recargar la página. Esto se logra cambiando el contenido de `#app` y de la sección principal según la vista seleccionada.
- **Login**: Se valida contra un usuario de ejemplo. Si el login es correcto, se muestra el layout principal con menú lateral y las diferentes secciones.
- **Menú lateral**: Permite navegar entre Buscar, Noticias, Notificaciones e Historial. El botón "Salir" cierra la sesión y vuelve al login.
- **Datos de ejemplo**: Todas las rutas, noticias, notificaciones e historial usan datos mock definidos en el JS para simular la funcionalidad real.
- **Estilos**: Se usó la fuente Inter y una paleta de colores azul, blanco y acentos suaves, siguiendo el diseño de las imágenes.

---

## Decisiones técnicas y razones

- **SPA sin frameworks**: Se eligió JS puro para máxima compatibilidad y simplicidad, ideal para proyectos pequeños o educativos.
- **Renderizado dinámico**: Cada vista se "pinta" reemplazando el HTML interno del contenedor principal. Esto permite simular una SPA sin necesidad de rutas reales ni recarga de página.
- **Datos mock**: Facilita el desarrollo y pruebas sin depender de un backend real. Puedes reemplazar estos datos por peticiones reales en el futuro.
- **Estilos modulares**: Se usaron clases y utilidades para mantener el CSS organizado y fácil de modificar.
- **Accesibilidad y UX**: Inputs accesibles, botones grandes, colores contrastantes y mensajes claros para el usuario.

---

## ¿Cómo continuar?

- Puedes reemplazar los datos de ejemplo por peticiones a un backend real.
- Puedes mejorar la lógica de búsqueda, agregar validaciones, o expandir las vistas.
- Si quieres internacionalización, solo cambia los textos en el JS y HTML.

---

## ¿Por qué esta estructura?

- **Simplicidad**: Todo en 3 archivos, fácil de entender y modificar.
- **Escalabilidad**: Puedes dividir el JS en módulos o migrar a un framework si el proyecto crece.
- **Fidelidad visual**: El diseño sigue fielmente las imágenes proporcionadas, usando colores, iconos y disposición similar.

---

## Créditos
- Inspirado en las imágenes y requerimientos proporcionados por el usuario.
- Desarrollado en 2025. 