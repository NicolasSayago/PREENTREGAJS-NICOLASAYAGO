let continuar = true;

const mensajeInicial = "Selecciona el modelo del producto: \n" +
                    "1) S21 \n" +
                    "2) S22 \n" +
                    "3) S23 \n" +
                    "4) S24 \n";

function seleccionarProducto() {
    let seleccion = parseInt(prompt(mensajeInicial));
    
    if (seleccion !== 1 && seleccion !== 2 && seleccion !== 3 && seleccion !== 4) {
        alert("TIENE QUE ESTAR DENTRO DEL 1 AL 4");
        return seleccionarProducto();
    }
    
    switch (seleccion) {
        case 1:
            alert("El precio del modelo S21 es de $700.");
            break;
        case 2:
            alert("El precio del modelo S22 es de $900.");
            break;
        case 3:
            alert("El precio del modelo S23 es de $1200.");
            break;
        case 4:
            alert("El precio del modelo S24 es de $1500.");
            break;
    }
    
    return seleccion;
}

function calcularCuotas(precio) {
    let enCuotas = confirm("¿Deseas el producto en cuotas?");

    if (enCuotas) {
        let cuotas = parseInt(prompt("¿En cuántas cuotas deseas pagar? (del 1 al 12)"));
        
        if (!isNaN(cuotas) && cuotas >= 1 && cuotas <= 12) {
            let pagoMensual = precio / cuotas;
            alert("El costo mensual en " + cuotas + " cuotas es de $ " + pagoMensual.toFixed(2));
        } else {
            alert("TIENE QUE SER DEL 1 AL 12");
        }
    } else {
        alert("El costo total del producto es de $ " + precio.toFixed(2));
    }
}

while (continuar) {
    let seleccion = seleccionarProducto();
    let precio = 0;
    
    switch (seleccion) {
        case 1:
            precio = 700;
            break;
        case 2:
            precio = 900;
            break;
        case 3:
            precio = 1200;
            break;
        case 4:
            precio = 1500;
            break;
    }
    
    calcularCuotas(precio);
    continuar = confirm("¿Deseas cotizar otro producto?");
}
