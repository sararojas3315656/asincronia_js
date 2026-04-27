/*4. Procesamiento de pedidos con pasos obligatorios y opcionales
Enunciado
Un sistema de ventas debe procesar pedidos en el siguiente flujo:
1. Validar stock (obligatorio).
2. Calcular costos finales (obligatorio).
3. Generar recomendaciones al cliente (opcional).
4. Enviar factura electrónica (obligatorio, pero depende de los dos primeros pasos).
El aprendiz debe simular este proceso asincrónico controlando dependencias, tiempo de
ejecución y manejo de errores.
Requerimientos
• Control estricto del orden de pasos obligatorios.
• Permitir que la recomendación se procese en paralelo sin bloquear el flujo.
• Generar factura solo si los pasos obligatorios son exitosos.
• Mostrar el orden real de ejecución y finalización.
Datos de entrada
• ID del pedido.
• Tiempos estimados por cada proceso.
Datos de salida
• Resultados individuales.
• Flujo real de ejecución.
• Factura generada o error del sistema.*/


const pedido = { id: 101 };

function validarStock() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Stock validado");
            resolve();
        }, 1000);
    });
}

function calcularCostos() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Costos calculados");
            resolve();
        }, 1500);
    });
}

function generarRecomendaciones() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Recomendaciones generadas");
            resolve();
        }, 2000);
    });
}

function enviarFactura() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Factura enviada");
            resolve();
        }, 1000);
    });
}

async function procesarPedido() {
    console.log("Inicio pedido " + pedido.id);

    await validarStock();
    await calcularCostos();

    await Promise.all([enviarFactura(), generarRecomendaciones()]);

    console.log("Pedido completado");
}

export { procesarPedido };

procesarPedido();

/* Por qué async-await? Porque el flujo tiene dependencias claras, unos pasos 
necesitan que otros terminen primero. EL usar async await ayuda a que el código se lea de arriba a abajo,
facilitando ver el orden real de ejecución.*/