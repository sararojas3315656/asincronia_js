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