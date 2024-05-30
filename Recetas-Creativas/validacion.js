function validarEnviar() {
    var formulario = document.getElementById('Datos');
    var error = document.getElementById('error');
    error.innerHTML = ''; 
    var nombre = formulario.nombre.value;
    var asunto = formulario.asunto.value;
    var email = formulario.email.value;
    var pais = formulario.pais.value;
    var mensajeError = '';
    var mensaje = formulario.mensaje.value;
    // Validar nombre
    if (nombre.length <= 2) {
        mensajeError += 'Nombre incorrecto. Debe tener más de 2 caracteres.<br>';
    }
    // Validar asunto
    if (asunto.length < 2) {
        mensajeError += 'Asunto incompleto.';
    }

    // Validar email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        mensajeError += 'Correo electrónico inválido.<br>';
    }
    // Validar mensaje
    if (mensaje.length === 0) {
        mensajeError += 'Debe ingresar un mensaje.<br>';
    }
    // Validar país
    if (!pais) {
        mensajeError += 'Debe seleccionar un país.<br>';
    }
    // Validar si desea recibir recetas
    if (!tipoReceta) {
        mensajeError += 'Debe seleccionar si desea recibir recetas.<br>';
    }
    // Mostrar mensajes de error
    if (mensajeError !== '') {
        error.innerHTML = mensajeError;
        error.style.color = 'red';
        return false; // No enviar el formulario
    } else {
        error.innerHTML = 'Gracias por completar el formulario!';
        error.style.color = 'green';
        return true; // Enviar el formulario
    }
}
