/*Ejercicio integrador 1 Async/Await:
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo con:
• Con async/await
Meta: identificar ventajas y desventajas reales de cada técnica.*/


function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Usuario encontrado"), 1000);
    });
}

function consultarPermisos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Permisos aprobados"), 2000);
    });
}

function generarReporte() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Reporte generado"), 1000);
    });
}

async function consultaUsuario() {
    console.log("Inicio");
    
    const usuario = await buscarUsuario();
    console.log(usuario);
    
    const permisos = await consultarPermisos();
    console.log(permisos);
    
    const reporte = await generarReporte();
    console.log(reporte);
    
    console.log("Fin");
}

consultaUsuario();

/* Vi que el uso de setTimeout no funciona por si solo en el async await ya que el await solo pausa
promesas y el timeout no es promesa sino función. Para usar un timeout hay dos maneras: 
1. Usarlo como lo he hecho, dentro de una promesa para que se pueda ejecutar
2. usar un function. Ejemplo: function tiempo (ms) { - es lo mismo solo que esto lo vuelve una promesa
 y cuando pasen los milisegunfos la promsesa se cumple  */ 

 //Ventaja: Código limpio, manejo de errores sencillo (try catch), escala
 //Desventaja: Si olvidas un await va a dar errores algo dificiles de detectar, no funciona en algunos browsers/nodes 
 //Comparación con los otros metodos: Callback es más sencillo, pero Async await es más ordenado.