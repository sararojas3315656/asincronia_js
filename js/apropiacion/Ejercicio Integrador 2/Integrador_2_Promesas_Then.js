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
- (Promesas + then):
o Reescribir el mismo proceso usando promesas.
o Validar si la estructura se vuelve más clara.
o Registrar tiempos.

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

function procesarOrden(orden) {
    const inicio = Date.now();
    console.log("Inicio: " + orden.id + " - " + orden.cliente);

    verificar(orden)
        .then(function(orden) {
            return procesar(orden);
        })
        .then(function(orden) {
            return registrar(orden);
        })
        .then(function(orden) {
            return notificar(orden);
        })
        .then(function(orden) {
            const fin = Date.now();
            console.log("Fin." + " - Tiempo total: " + (fin - inicio) + "ms");
        });
}


export { procesarOrden };

procesarOrden(ordenes[0]);

//Según la tarea, si se vuelve más claro de esta manera y más ordenado ya que se anida a la derecha y no hacia abajo

/*Por qué la versión sincrónica bloquearía todo?
Tendría que esperar que termine cada tarea antes de seguir con la otra. Durante esos 5000ms el programa estaría 
estático, sin poder responder más tareas. 
Con promesas, se registra la tarea y sigue con otras tareas mientras espera, sin interrumpir. */

/*¿Qué tareas pueden correr en paralelo?
Todas las tareas pueden corren en secuencia ya que una depende de la anterior.
Pero si tuvieras que procesar las 3 órdenes (Ana, Luis, Maria), esas 3 sí podrían correr en paralelo porque no 
dependen entre sí, Ana puede estar en verificación mientras Luis está en procesamiento. */

/*Tiempos reales vs teóricos    
Paso              tiempo teórico
Verificación         1500ms
Procesamiento        2000ms
Registro             1000ms
Notificación         500ms
Total                5000ms */

/* ¿Cómo ordena el event loop la ejecución?

Ejecuta "Inicio" al principio de todo de manera inmediata
Encuentra el 'setTimeout' de 'verificar' y lo manda a espera
Cuando pasan 1500ms regresa a la cola de ejecución
Ejecuta 'verificar', encuentra el siguiente 'setTimeout' y lo manda a espera
Y así hasta que finaliza. */

/* ¿Cuándo usar cada técnica en problemas reales?
- Callbacks: código simple, una operación asíncrona, compatibilidad con diversos códigos
- Promesas: varias operaciones encadenadas, necesitas .catch() centralizado
- Async/Await: flujos complejos, múltiples operaciones, código que necesita ser fácil de mantener */