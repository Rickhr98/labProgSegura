// Crear elementos HTML y agregarlos al documento
const body = document.body;

// Crear encabezado
const h1 = document.createElement('h1');
h1.textContent = 'Camara Web';
body.appendChild(h1);

// Crear video
const video = document.createElement('video');
video.id = 'video';
video.width = 640;
video.height = 480;
video.setAttribute('autoplay', 'true');
body.appendChild(video);

// Crear lienzo (canvas)
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = 640;
canvas.height = 480;
canvas.style.display = 'none';
body.appendChild(canvas);

// Función para acceder a la cámara web
function initCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error('Error al acceder a la cámara web: ', err);
    });
}

// Inicializar la cámara web al cargar la página
initCamera();
