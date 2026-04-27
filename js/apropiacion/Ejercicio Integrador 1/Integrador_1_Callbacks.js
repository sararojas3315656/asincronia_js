/*Ejercicio integrador 1 Callbacks:
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo con :
• Con callbacks
Meta: identificar ventajas y desventajas reales de cada técnica.*/

/* function inicio () {
    console.log ("Inicio")
}

setTimeout (inicio, 1000);

function buscarUsuario () {
    console.log ("Usuario ubicado")
}
setTimeout (buscarUsuario, 1000);

function consultPermisos () {
    console.log ("Permisos aprovados")
}

setTimeout (consultPermisos, 2000);

function Reporte () {
    console.log ("Reporte generado")
}

setTimeout (Reporte, 1000);

function finalizar () {
    console.log ("Fin")
}
setTimeout (finalizar, 2500); */


/*l código diseñado por mi tiene una peculiaridad y es que todos arrancar al mismo tiempo, revisando los requisitos tiene fallos pues:
- Callback: El código está en paralelo, no espera a que una función termine para iniciar la otra sino que van todas al mismo tiempo
- Encadenar: no se encadena una dentro de otra, No hay un finalizado ni un llamado a la otra función 
- Callback Hell — necesita que se note cómo el código se va anidando */ 

//Debido a esto, he realizado un código que anida todas las funciones para que se ejecuten después de que se haya finalizado cada una y sería de esta manera:

function consultaUsuario() {
    console.log("Inicio");

    setTimeout(function() {
        console.log("Usuario encontrado");

        setTimeout(function() {
            console.log("Permisos aprobados");

            setTimeout(function() {
                console.log("Reporte generado");

                setTimeout(function() {
                    console.log("Fin");
                }, 1000);

            }, 1000);

        }, 2000);

    }, 1000);
}

export { consultaUsuario };
consultaUsuario();