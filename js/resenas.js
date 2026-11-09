const cancionesPorAlbum = {
    "Ramones": [
        { titulo: "Blitzkrieg Bop", estrellas: 5 },
        { titulo: "Beat on the Brat", estrellas: 4 },
        { titulo: "Judy Is a Punk", estrellas: 4 },
        { titulo: "I Wanna Be Your Boyfriend", estrellas: 3 }
    ],
    "Apocalypse: Save us": [
        { titulo: "Intro: Save us", estrellas: 4 },
        { titulo: "BEcause", estrellas: 5 },
        { titulo: "Vision", estrellas: 4 },
        { titulo: "Fairytale", estrellas: 4 }
    ],
    "Thriller": [
        { titulo: "Wanna Be Startin' Somethin'", estrellas: 4 },
        { titulo: "Thriller", estrellas: 5 },
        { titulo: "Beat It", estrellas: 5 },
        { titulo: "Billie Jean", estrellas: 5 }
    ],
    "Nevermind": [
        { titulo: "Smells Like Teen Spirit", estrellas: 5 },
        { titulo: "Come as You Are", estrellas: 5 },
        { titulo: "Lithium", estrellas: 4 },
        { titulo: "In Bloom", estrellas: 4 }
    ]
};

function dibujarEstrellas(cantidad) {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
        estrellas += i <= cantidad ? "★" : "☆";
    }
    return estrellas;
}

function mostrarDetalle(album) {
    const detalle = document.getElementById("detalle-album");
    const contenido = document.getElementById("contenido-detalle");

    // Buscar las canciones de este álbum
    const canciones = cancionesPorAlbum[album.nombre] || [];

    // Armar la lista con estrellas
    let lista = "";
    canciones.forEach(cancion => {
        lista += `
            <li class="cancion-item">
                <span class="titulo-cancion">${cancion.titulo}</span>
                <span class="estrellas">${dibujarEstrellas(cancion.estrellas)}</span>
            </li>
        `;
    });

    contenido.innerHTML = `
        <h3>${album.nombre}</h3>
        <p class="artista">${album.artista} · ${album.anio} · ${album.genero}</p>
        <ul class="lista-canciones">${lista}</ul>
    `;

    detalle.style.display = "block";
}

// Ocultar el detalle
function cerrarDetalle() {
    document.getElementById("detalle-album").style.display = "none";
}

// Escuchar clics en "Ver detalle" y en la ✖ (delegación de eventos)
document.addEventListener("click", function(evento) {
    const boton = evento.target.closest(".btn-detalle");
    if (boton) {
        // Buscar el álbum por su id en el arreglo "albumes" (de albumes.js)
        const id = Number(boton.dataset.id);
        const album = albumes.find(a => a.id === id);
        if (album) {
            mostrarDetalle(album);
        }
    }
 if (evento.target.id === "cerrar-detalle") {
        cerrarDetalle();
    }
});
