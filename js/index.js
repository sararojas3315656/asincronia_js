/* archivo barril para exportar todo lo que hay en la carpeta js */

// Ejercicios apropiacion
export { ejercicio1 } from "./apropiacion/ejercicio_1.js";
export { ejercicio2 } from "./apropiacion/ejercicio_2.js";
export { procesarPedido as procesarPedidoEj3 } from "./apropiacion/ejercicio_3.js";
export { validarFormulario } from "./apropiacion/ejercicio_4.js";
export { procesarPedido } from "./apropiacion/ejercicio_5.js";
export { ejecutarProceso } from "./apropiacion/ejercicio_6.js";
export { ejecutarAsync } from "./apropiacion/ejercicio_7.js";

// Ejercicio Integrador 1
export { consultaUsuario as consultaUsuarioCallback } from "./apropiacion/Ejercicio Integrador 1/Integrador_1_Callbacks.js";
export { consultaUsuario as consultaUsuarioPromesa } from "./apropiacion/Ejercicio Integrador 1/Integrador_1_promesas.js";
export { consultaUsuario as consultaUsuarioAsync } from "./apropiacion/Ejercicio Integrador 1/Integrador_1_async_await.js";

// Ejercicio Integrador 2
export { processOrden } from "./apropiacion/Ejercicio Integrador 2/Integrador_2_Callbacks.js";
export { procesarOrden } from "./apropiacion/Ejercicio Integrador 2/Integrador_2_Promesas_Then.js";
export { procesarEnSerie, procesarEnParalelo } from "./apropiacion/Ejercicio Integrador 2/Integrador_2_Async_await.js";

// Ejercicio Integrador 3
export { versionBloqueante } from "./apropiacion/Ejercicio Integrador 3/Integrador_3_bloqueante.js";