document.getElementById("formulario-contacto").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let valido = true;

    // 1. Nombre: no vacío y al menos 2 caracteres
    if (nombre === "" || nombre.length < 2) {
        mostrarError("error-nombre", "Ingresá tu nombre (mínimo 2 caracteres).");
        valido = false;
    } else {
        limpiarError("error-nombre");
    }

    // 2. Email: formato válido
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!patronEmail.test(email)) {
        mostrarError("error-email", "Ingresá un correo válido, por ejemplo: nombre@dominio.com");
        valido = false;
    } else {
        limpiarError("error-email");
    }

    // 3. Teléfono: solo números, entre 7 y 15 dígitos
    const patronTelefono = /^\d{7,15}$/;
    if (!patronTelefono.test(telefono)) {
        mostrarError("error-telefono", "Ingresá un teléfono con solo números (7 a 15 dígitos).");
        valido = false;
    } else {
        limpiarError("error-telefono");
    }

    // 4. Mensaje: no vacío
    if (mensaje === "") {
        mostrarError("error-mensaje", "Escribí un mensaje.");
        valido = false;
    } else {
        limpiarError("error-mensaje");
    }

    if (valido) {
        alert("¡Mensaje enviado con éxito!");
        document.getElementById("formulario-contacto").reset();
    }
});

function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

function limpiarError(id) {
    document.getElementById(id).textContent = "";
}
