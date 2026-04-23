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