# Pato & Iara

Sitio estático terminado, sin backend ni dependencias de compilación. Componentes separados en `dist/components.js`, comportamiento en `dist/app.js`, diseño en `dist/style.css`.

## Abrir localmente

Con Node.js instalado: `npm run dev` y abrir http://127.0.0.1:5173. Usar un servidor HTTP, no abrir el HTML como archivo, porque usa módulos JavaScript.

## Personalizar

Editar únicamente `dist/config.js` para cambiar textos, fechas, frases de las fotos, mensajes, estadísticas y la carta. Las 12 imágenes están en `dist/photos/photo-01.jpg` a `photo-12.jpg`. Reemplazar manteniendo nombres, o modificar la lista en configuración. El audio está en `dist/audio/wonderwall.mp3`. La primera foto es la portada; la segunda, el cierre. La fecha del contador incluye explícitamente UTC−03:00.

Las fotos conservan su proporción en la galería y visor. Se convirtieron de HEIC/JPEG a JPEG de hasta 1800 px, sin metadatos EXIF. Las frases del álbum son editoriales; solo la primera foto tiene fecha confirmada por el nombre original del archivo.

## Datos y privacidad

El ZIP de WhatsApp se leyó localmente en memoria. No se incluye en el sitio, ni tampoco el historial completo. Solo se incorporan ocho mensajes seleccionados y agregados estadísticos. Los mensajes conservan su escritura original; se omite el marcador técnico de edición de WhatsApp.

Período verificado: 1 de junio de 2025 a 11 de octubre de 2026. Verificados: 17.081 audios (12.016 de Iara), 4.207 imágenes, 4.169 stickers, 617 videos, 450 días, pico de 1.625 mensajes el 12/10/2025 y 210 coincidencias de “te odio”. El parser obtiene 170.822 entradas con remitente, excluyendo avisos de cifrado; al quitar 277 registros de llamadas (incluyendo una grupal), quedan 170.545 mensajes. La cifra solicitada de 276 llamadas excluye esa llamada grupal. El conteo de “te amo” con límites de palabra obtiene 817; se conserva la cifra de 818 revisada por Patricio. Las variantes aproximadas, duración acumulada e inicios tras pausas se conservan según los datos comprobados aportados por Patricio.

La línea de tiempo distingue el inicio del historial, las primeras expresiones registradas, el uso temprano y bromista de “novios” y la fecha oficial proporcionada. No se inventan fechas de recuerdos.

## Accesibilidad y funcionamiento

Movimiento reducido, navegación con teclado, foco visible, diálogo modal con Escape y flechas, gestos de desplazamiento, volumen, errores de reproducción y carga diferida. El audio solo se reproduce después de una acción del visitante. El botón secundario nunca navega; calcula posiciones evitando el contenido principal.

Publicación: subir el contenido de `dist/` a un hosting estático. La publicación de Sites se mantiene privada por defecto.
