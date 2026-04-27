/*Ejercicio integrador 2:
Centro de Procesamiento de Órdenes
Vamos a simular un centro que procesa órdenes de forma asincrónica. Cada orden
requiere pasar por varios pasos: verificación, procesamiento, registro y notificación.
Algunos pasos tardan más tiempo que otros y debemos garantizar que el sistema no se bloquee. 
Usaremos callbacks, promesas y async/await dentro del mismo ejercicio para
comparar cómo evoluciona el flujo.
Este ejercicio exige analizar: tiempos, dependencias, orden de ejecución y estructura del
código.

Requerimientos del programa

Datos de entrada
• Una lista de órdenes en un arreglo, por ejemplo:
const ordenes = [
{ id: 1, cliente: "Ana", monto: 120000 },
{ id: 2, cliente: "Luis", monto: 80000 },
{ id: 3, cliente: "María", monto: 150000 }
];
• Tiempos simulados de los procesos:
• Verificación: 1500 ms
• Procesamiento: 2000 ms
• Registro: 1000 ms
• Notificación: 500 ms
Datos de salida esperados
• Mensajes con marcas de tiempo que permitan determinar:
o Duración total del proceso por orden
o Orden de ejecución real
o Identificación de procesos paralelos y procesos secuenciales
• Un reporte final indicando qué órdenes se completaron y en qué tiempos.

Tareas
1. Primera parte (Callbacks):
o Implementar el flujo completo de una sola orden usando callbacks.
o Analizar el tiempo total.
o Identificar visualmente el “callback hell” y documentarlo.

Objetivos de análisis
Se requiere analizar los siguientes puntos:
• Explicar por qué la versión sincrónica (si existiera) bloquearía todo.
• Identificar qué tareas sí pueden correr en paralelo y justificarlas.
• Comparar los tiempos reales vs. los tiempos teóricos.
• Explicar cómo el event loop ordena la ejecución.
• Reconocer cuándo usar callbacks, promesas o async/await para problemas reales.
*/


const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "Maria", monto: 150000 }
];

function verificar(orden, callback) {
    setTimeout(function() {
        console.log("Orden " + orden.id + " - " + orden.cliente + ": Verificad@");
        callback();
    }, 1500);
}

function procesar(orden, callback) {
    setTimeout(function() {
        console.log("Orden " + orden.id + " - " + orden.cliente + ": Procesad@");
        callback();
    }, 2000);
}

function registrar(orden, callback) {
    setTimeout(function() {
        console.log("Orden " + orden.id + " - " + orden.cliente + ": Registrad@");
        callback();
    }, 1000);
}

function notificar(orden, callback) {
    setTimeout(function() {
        console.log("Orden " + orden.id + " - " + orden.cliente + ": Notificad@");
        callback();
    }, 500);
}

function processOrden(orden) {
    const inicio = Date.now();
    console.log("Inicio." + orden.id + " - " + orden.cliente);

    verificar(orden, function() {
        procesar(orden, function() {
            registrar(orden, function() {
                notificar(orden, function() {
                    const fin = Date.now();
                    console.log("Fin." + " - Tiempo total: " + (fin - inicio) + "ms");
                });
            });
        });
    });
}

export { processOrden };

processOrden(ordenes[0]);
//Solo se procesó la orden de Ana pues solo pide 1, por eso pongo el 0. Si se quiere en aleatorio entonces es:
/* const Aleatorio = ordenes[Math.floor(Math.random() * ordenes.length)];
procesarOrdenCallback(Aleatorio); ... es lo mismo que en python jaja, solo que sin el import random y random.choice pero se entiende igual ¿*/

/* A pesar de usar el ordencallback 0, que hace que solo ejecute la orden de Ana,
 pongo el @ al final de cada palabra para que cuente ambos bandos y no sea solo una declaración femenina o masculina */