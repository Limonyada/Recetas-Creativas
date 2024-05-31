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
    var tipoReceta = formulario.tipo.value;
    // validar nombre
    if (nombre.length <= 2) {
        mensajeError += 'Nombre incorrecto. Debe tener más de 2 caracteres.<br>';
    }
    // validar asunto
    if (asunto.length < 2) {
        mensajeError += 'Asunto incompleto.<br>';
    }
    // validar email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        mensajeError += 'Correo electrónico inválido.<br>';
    }
    // validar mensaje
    if (mensaje.length === 0) {
        mensajeError += 'Debe ingresar un mensaje.<br>';
    }
    // validar país
    if (!pais) {
        mensajeError += 'Debe seleccionar un país.<br>';
    }
    // validar si desea recibir recetas
    if (!tipoReceta) {
        mensajeError += 'Debe seleccionar si desea recibir recetas.<br>';
    }
    // mostrar mensajes de error
    if (mensajeError !== '') {
        error.innerHTML = mensajeError;
        error.className = 'error';
        return false; // No enviar el formulario
    } else {
        error.innerHTML = 'Gracias por completar el formulario!';
        error.className = 'aceptado';
        return true; // Enviar el formulario
    }
}
