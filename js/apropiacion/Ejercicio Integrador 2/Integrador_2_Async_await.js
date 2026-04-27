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
- (Async/Await):
o Implementar el procesamiento de todas las órdenes con async/await.
o Procesarlas en serie (una detrás de otra).
o Luego procesarlas en paralelo (todas a la vez).
o Comparar tiempos y justificar la diferencia.

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

function verificar(orden) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Orden " + orden.id + " - " + orden.cliente + ": Verificad@");
            resolve(orden);
        }, 1500);
    });
}

function procesar(orden) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Orden " + orden.id + " - " + orden.cliente + ": Procesad@");
            resolve(orden);
        }, 2000);
    });
}

function registrar(orden) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Orden " + orden.id + " - " + orden.cliente + ": Registrad@");
            resolve(orden);
        }, 1000);
    });
}

function notificar(orden) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Orden " + orden.id + " - " + orden.cliente + ": Notificad@");
            resolve(orden);
        }, 500);
    });
}

async function procesarOrden(orden) {
    const inicio = Date.now();
    console.log("Inicio orden " + orden.id + " - " + orden.cliente);

    await verificar(orden);
    await procesar(orden);
    await registrar(orden);
    await notificar(orden);

    const fin = Date.now();
    console.log("Fin orden " + orden.id + " - Tiempo total: " + (fin - inicio) + "ms");
}

async function procesar1() {
    const inicio = Date.now();

    for (const orden of ordenes) {
        await procesarOrden(orden);
    }

    const fin = Date.now();
    console.log("Reporte final serie - Tiempo total: " + (fin - inicio) + "ms");
}

async function procesar2() {
    const inicio = Date.now();

    await Promise.all(ordenes.map(function(orden) {
        return procesarOrden(orden);
    }));

    const fin = Date.now();
    console.log("Reporte final paralelo - Tiempo total: " + (fin - inicio) + "ms");
}

export { procesar1, procesar2 };

async function ejecutar() {
    await procesar1();
    await procesar2();
}

ejecutar();

//corregido el procesar. 
/* antes: export { procesar1, procesar2 };

procesarEnSerie();
procesarEnParalelo();

razón: Código muy desorganizado, se ejecutaba todo a la vez y era dificil de entender bien todo */

/*¿Por qué la versión sincrónica bloquearía todo?
Si los pasos fueran síncronos, se tendría que quedarse esperando cada 'setTimeout' antes de continuar. 
Durante los 5000ms por orden el programa no se podría hacer nada más. 
Con 'async/await', el 'await' hace que el programa espere y evita el bloqueo de este
Y el event loop sigue ejecutando para atender otras tareas mientras espera. */

/* ¿Qué tareas pueden correr en paralelo?
Las 3 órdenes (Ana, Luis, Maria) pueden correr en paralelo ya que no dependen entre sí. 
Una orden no necesita que la otra orden termine para poder empezar. Por eso Promise.all funciona para lanzar las 3 al mismo tiempo.
Los pasos dentro de cada orden (verificar, procesar, registrar, notificar) no pueden ir en paralelo porque sí dependen entre sí 
No puede notificar sin haber procesado primero.*/

/* Tiempos reales vs teóricos
                            Teórico            Real aproximado
Una orden                    5000ms              ~5040ms
Serie (3 órdenes)            15000ms             ~15100ms
Paralelo (3 órdenes)         5000ms              ~5040ms  */

/* ¿Cómo ordena el event loop la ejecución?
En serie:
Inicia Ana, manda verificar a esperar
Cuando verificar termina, manda procesar a esperar
Cuando Ana termina, empieza Luis y de ultima Maria

En paralelo:
Lanza Ana, Luis y Maria al mismo tiempo
El event loop va recogiendo cada paso cuando su timer termina
Por eso los mensajes se mezclan pero todos terminan en ~5000ms*/

/*¿Cuándo usar cada técnica?
- Callback: operación simple, código legacy
- Promesas: operaciones encadenadas, necesitas .catch() 
- Async/Await: serie, el orden importa. Cada paso depende del anterior Async/Await paralelo, tareas independientes, máxima velocidad */