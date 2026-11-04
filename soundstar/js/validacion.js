const formulario = document.getElementById("formulario-contacto");

// Expresiones regulares
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTelefono = /^[0-9\s\-+()]{7,15}$/;

// Muestra un mensaje de error en el span correspondiente
function mostrarError(campoId, mensaje) {
    const error = document.getElementById("error-" + campoId);
    error.textContent = mensaje;
    error.style.color = "#e94560";
}

// Limpia el error de un campo
function limpiarError(campoId) {
    document.getElementById("error-" + campoId).textContent = "";
}

// Valida un campo y devuelve true/false
function validarCampo(campoId, valor, mensaje) {
    if (valor.trim() === "") {
        mostrarError(campoId, mensaje);
        return false;
    }
    limpiarError(campoId);
    return true;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita el envio tradicional

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    let valido = true;

    // Nombre: obligatorio y minimo 3 caracteres
    if (!validarCampo("nombre", nombre, "El nombre es obligatorio.")) {
        valido = false;
    } else if (nombre.trim().length < 3) {
        mostrarError("nombre", "El nombre debe tener al menos 3 caracteres.");
        valido = false;
    }

    // Email: obligatorio y con formato valido
    if (!validarCampo("email", email, "El correo es obligatorio.")) {
        valido = false;
    } else if (!regexEmail.test(email.trim())) {
        mostrarError("email", "Ingrese un correo electronico valido.");
        valido = false;
    }

    // Telefono: obligatorio y con formato valido
    if (!validarCampo("telefono", telefono, "El telefono es obligatorio.")) {
        valido = false;
    } else if (!regexTelefono.test(telefono.trim())) {
        mostrarError("telefono", "Ingrese un telefono valido (solo numeros y guiones).");
        valido = false;
    }

    // Mensaje: obligatorio y minimo 10 caracteres
    if (!validarCampo("mensaje", mensaje, "El mensaje es obligatorio.")) {
        valido = false;
    } else if (mensaje.trim().length < 10) {
        mostrarError("mensaje", "El mensaje debe tener al menos 10 caracteres.");
        valido = false;
    }

    // Si todo es valido, mostrar el resumen
    if (valido) {
        mostrarResumen(nombre.trim(), email.trim(), telefono.trim(), mensaje.trim());
        formulario.reset(); // Deja el formulario listo para un nuevo envio
    }
});

// Crea los elementos HTML del resumen con createElement()
function mostrarResumen(nombre, email, telefono, mensaje) {
    const contenedor = document.getElementById("resumen-envio");
    contenedor.innerHTML = ""; // Limpia envios anteriores

    const titulo = document.createElement("h3");
    titulo.textContent = "Datos enviados:";
    contenedor.appendChild(titulo);

    const datos = [
        "Nombre: " + nombre,
        "Correo: " + email,
        "Telefono: " + telefono,
        "Mensaje: " + mensaje
    ];

    datos.forEach(function (texto) {
        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        contenedor.appendChild(parrafo);
    });
}
