/*3. Validación de un formulario con múltiples verificaciones externas
Enunciado
Un sistema debe validar un formulario realizando tres verificaciones asincrónicas:
1. Validar correo en un servicio externo.
2. Validar documento en una base remota.
3. Validar disponibilidad del usuario en un registro global.
Las tres validaciones pueden ocurrir en paralelo, pero el sistema solo puede continuar si
todas responden satisfactoriamente.
Requerimientos
• Ejecutar las validaciones en paralelo.
• Capturar errores individuales y globales.
• Consolidar un objeto con los estados de validación.
• Medir el tiempo total del proceso.
Datos de entrada
• Datos básicos del usuario (correo, documento, nombre).
• Tiempos simulados de respuesta de cada verificación.
Datos de salida
• Estado individual de cada validación.
• Resultado final: “Formulario validado” o “Validación fallida”.
• Tiempo total del proceso.*/


const usuario = {
    correo: "sararojas@gmail.com",
    documento: "1097783999",
    nombre: "Sara rojas"
};

function validarCorreo() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve("Correo validado."); }, 2000);
    });
}

function validarDocumento() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve("Documento validado"); }, 2000);
    });
}

function validarDisponibilidad() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve("Disponibilidad validada"); }, 3000);
    });
}

async function validarFormulario() {
    const inicio = Date.now();
    console.log("Inicio");

    try {
        const resultados = await Promise.all([
            validarCorreo(),
            validarDocumento(),
            validarDisponibilidad()
        ]);

        resultados.forEach(function(r) { console.log(r); });
        console.log("Formulario validado");

    } catch(error) {
        console.log("Validacion fallida: " + error);
    }

    console.log("Tiempo total: " + (Date.now() - inicio) + "ms");
}

export { validarFormulario };

validarFormulario();

//promise all para correr en paralelo a las 3 validaciones que corren independientes 