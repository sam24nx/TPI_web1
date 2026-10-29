
const imagenes = [
    { ruta: "img/concierto.jpg", alt: "Concierto en vivo", descripcion: "Conciertos en vivo" },
    { ruta: "img/guitar.jpg", alt: "Estudio de grabacion", descripcion: "Detras de escena en el estudio" },
    { ruta: "img/vinilos.jpg", alt: "Disco de vinilo", descripcion: "Novedades en vinilo" }
];

let indiceActual = 0;


const imagen = document.getElementById("imagen-carrusel");
const descripcion = document.getElementById("descripcion-carrusel");
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");


function mostrarImagen() {
    imagen.src = imagenes[indiceActual].ruta;
    imagen.alt = imagenes[indiceActual].alt;
    descripcion.textContent = imagenes[indiceActual].descripcion;
}

// Avanza a la siguiente imagen 
function avanzar() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
}

// Retrocede a la anterior 
function retroceder() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}

// Conecta los botones con las funciones
botonSiguiente.addEventListener("click", avanzar);
botonAnterior.addEventListener("click", retroceder);


mostrarImagen();
