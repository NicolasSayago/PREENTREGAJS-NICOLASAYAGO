const preciosProductos = {
    "S21": 700,
    "S22": 900,
    "S23": 1200,
    "S24": 1500
};

let historialCompras = [];

function seleccionarProducto() {
    const mensajeInicial = "Selecciona el modelo del producto: \n" +
                            "1) S21 \n" +
                            "2) S22 \n" +
                            "3) S23 \n" +
                            "4) S24 \n";

    let seleccion = parseInt(prompt(mensajeInicial));

    if (seleccion < 1 || seleccion > Object.keys(preciosProductos).length) {
        alert("Debe seleccionar un número válido.");
        return seleccionarProducto();
    }

    return Object.keys(preciosProductos)[seleccion - 1];
}

function calcularCuotas(producto, precio) {
    let enCuotas = confirm("¿Deseas el producto en cuotas?");
    let cuotas = 1;
    let pagoMensual = precio;

    if (enCuotas) {
        cuotas = parseInt(prompt("¿En cuántas cuotas deseas pagar? (del 1 al 12)"));

        if (!isNaN(cuotas) && cuotas >= 1 && cuotas <= 12) {
            pagoMensual = precio / cuotas;
            alert("El costo mensual en " + cuotas + " cuotas es de $ " + pagoMensual.toFixed(2));
        } else {
            alert("Número de cuotas no válido. Se calculará el precio total.");
        }
    }

    historialCompras.push({ producto: producto, precioTotal: precio, cuotas: cuotas, pagoMensual: pagoMensual });
}

let continuar = true;
let cantidadPedidos = 0;

while (continuar) {
    let producto = seleccionarProducto();
    let precio = preciosProductos[producto];
    alert(`El precio del modelo ${producto} es de $${precio}.`);
    calcularCuotas(producto, precio);
    cantidadPedidos++;

    continuar = confirm("¿Deseas cotizar otro producto?");
}

if (!continuar) {
    let revisarHistorial = confirm(`¿Quieres revisar el historial de ${cantidadPedidos} pedidos realizados?`);

    if (revisarHistorial) {
        let pedidoDeseado = parseInt(prompt(`Han sido hechos ${cantidadPedidos} pedidos. Ingresa el número de pedido que deseas revisar (del 1 al ${cantidadPedidos}):`));

        if (pedidoDeseado >= 1 && pedidoDeseado <= cantidadPedidos) {
            let pedido = historialCompras[pedidoDeseado - 1];
            alert(`Detalles del pedido ${pedidoDeseado}:
            - Producto: ${pedido.producto}
            - Precio: $${pedido.precioTotal}
            - Cuotas: ${pedido.cuotas}
            - Pago Mensual: $${pedido.pagoMensual.toFixed(2)}`);
            
            let hacerOtraConsulta = confirm("¿Deseas hacer otra consulta?");
            
            while (hacerOtraConsulta) {
                pedidoDeseado = parseInt(prompt(`Ingresa otro número de pedido que deseas revisar (del 1 al ${cantidadPedidos}):`));
                
                if (pedidoDeseado >= 1 && pedidoDeseado <= cantidadPedidos) {
                    pedido = historialCompras[pedidoDeseado - 1];
                    alert(`Detalles del pedido ${pedidoDeseado}:
                    - Producto: ${pedido.producto}
                    - Precio: $${pedido.precioTotal}
                    - Cuotas: ${pedido.cuotas}
                    - Pago Mensual: $${pedido.pagoMensual.toFixed(2)}`);
                    
                    hacerOtraConsulta = confirm("¿Deseas hacer otra consulta?");
                } else {
                    alert("Número de pedido inválido.");
                }
            }
        } else {
            alert("Número de pedido inválido.");
        }
    }
}

console.log("Historial de Compras:");
console.log(historialCompras);
