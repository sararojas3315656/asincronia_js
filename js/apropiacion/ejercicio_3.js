/*3. Manejo de asincronía con Callbacks
Ejercicio:
Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de
3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido
entregado”.
Meta: comprender la ejecución diferida.*/

function procesarPedido(callback) {
    console.log("Inicio");
    
    setTimeout(function() {
        console.log("Pedido entregado");
        callback();
    }, 3000);
}

procesarPedido(function() {
    console.log("Fin");
});

export { procesarPedido };