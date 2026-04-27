/*Ejercicio integrador 1 promesas
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo con:
• Con promesas
Meta: identificar ventajas y desventajas reales de cada técnica.*/

// .Then: Función tipo Callback que procesa valores obtenidos. Recibe funciones 

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

function consultaUsuario() {       
    console.log("Inicio");

    buscarUsuario()
        .then((resultado) => {
            console.log(resultado);
            return consultarPermisos();
        })
        .then((resultado) => {
            console.log(resultado);
            return generarReporte();
        })
        .then((resultado) => {
            console.log(resultado);
            console.log("Fin");
        });
}

export { consultaUsuario };

consultaUsuario();

    //.Then (): recibe el resultado de la anterior promesa y luego retorna a la siguiente 
    /*Para algo más realista o mejor ejercicio se podía usar un fetch para usar datos directamente del
    internet de una API. El fetch no usa el new promise pues ya viene con promesa. Con eso hace entrada el 
    json, pues el fetch solo trae los datos planos, el json los hace pbjetos utilizabes...
    - Eso solo es alternativa para algo más serio, yo no lo necesito pq lo simulo con timeout y ya ddefiní con el resolve y pues no estoy haciendo uso de datos de internet.  */

    //Ventajas: no tan anidado, manejo de errores fácil con .catch(), base para saber usar el async await
    //Desventajas: .then() suele ser poco legible, siempre se debe usar el return, más complejo que callback.
    //Comparación con los otros: es lineal a diferencia de los otors, un poco ordenado 