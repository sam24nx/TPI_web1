const albumes = [
    {
        id: 1,
        nombre: "Ramones",
        artista: "Los Ramones",
        anio: 1976,
        genero: "Punk Rock",
        imagen: "img/ramones.jpg",
        reseña: "El primer disco de los Ramones, considerado uno de los álbumes más influyentes del punk rock.",
        canciones: [
            { titulo: "Blitzkrieg Bop", duracion: "2:12", calificacion: 5 },
            { titulo: "Beat on the Brat", duracion: "2:31", calificacion: 4 },
            { titulo: "Judy Is a Punk", duracion: "1:32", calificacion: 4 },
            { titulo: "I Wanna Be Your Boyfriend", duracion: "2:24", calificacion: 3 }
        ]
    },
    {
        id: 2,
        nombre: "Apocalypse: Save us",
        artista: "Dreamcatcher",
        anio: 2022,
        genero: "Punk Rock",
        imagen: "img/dreamcatcher.jpg",
        reseña: "Su primer álbum de estudio de larga duración en coreano, aclamado mundialmente por consolidar su sonido.",
        canciones: [
            { titulo: "Intro: Save Us", duracion: "1:15", calificacion: 4 },
            { titulo: "Locked Inside a Door", duracion: "3:38", calificacion: 5 },
            { titulo: "MAISON", duracion: "3:05", calificacion: 4 },
            { titulo: "Starlight", duracion: "3:45", calificacion: 5 },
            { titulo: "Together", duracion: "3:30", calificacion: 4 },
            { titulo: "For You", duracion: "3:20", calificacion: 5 },
            { titulo: "Skit: The seven doors", duracion: "1:10", calificacion: 3 },
            { titulo: "Cherry (Real miracle)", duracion: "3:15", calificacion: 4 },
            { titulo: "No dot", duracion: "3:50", calificacion: 5 },
            { titulo: "Ecstasy", duracion: "3:40", calificacion: 4 },
            { titulo: "Midwinter", duracion: "3:25", calificacion: 4 },
            { titulo: "For", duracion: "3:30", calificacion: 5 },
            { titulo: "Beauty Full", duracion: "3:55", calificacion: 4 },
            { titulo: "Playground", duracion: "3:45", calificacion: 5 },
        
        ]
    },
    {
        id: 3,
        nombre: "Thriller",
        artista: "Michael Jackson",
        anio: 1982,
        genero: "Pop",
        imagen: "img/Thriller.jpg",
        reseña: "El disco más vendido de todos los tiempos, con hits como Billie Jean y Beat It.",
        canciones: [
            { titulo: "Wanna Be Startin' Somethin'", duracion: "6:02", calificacion: 4 },
            { titulo: "Thriller", duracion: "5:57", calificacion: 5 },
            { titulo: "Beat It", duracion: "4:18", calificacion: 5 },
            { titulo: "Billie Jean", duracion: "4:54", calificacion: 5 }
        ]
    },
    {
        id: 4,
        nombre: "Nevermind",
        artista: "Nirvana",
        anio: 1991,
        genero: "Grunge",
        imagen: "img/nevermind.jpg",
        reseña: "El disco que llevó al grunge a la masividad, con Smells Like Teen Spirit a la cabeza.",
        canciones: [
            { titulo: "Smells Like Teen Spirit", duracion: "5:01", calificacion: 5 },
            { titulo: "In Bloom", duracion: "4:14", calificacion: 4 },
            { titulo: "Come as You Are", duracion: "3:39", calificacion: 4 },
            { titulo: "Lithium", duracion: "4:17", calificacion: 4 }
        ]
    }
];

function mostrarAlbumes() {
    const grilla = document.getElementById("grilla-albumes");
    grilla.innerHTML = "";

    albumes.forEach(album => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-album";
        tarjeta.innerHTML = `
            <img src="${album.imagen}" alt="Portada del álbum ${album.nombre}">
            <h3>${album.nombre}</h3>
            <p class="artista">${album.artista} · ${album.anio} · ${album.genero}</p>
            <p class="reseña">${album.reseña}</p>
            <button class="btn-detalle" data-id="${album.id}">Ver detalle</button>
        `;

        grilla.appendChild(tarjeta);
    });
}

mostrarAlbumes();