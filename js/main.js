const preciosProductos = {
    "S21": 700,
    "S22": 900,
    "S23": 1200,
    "S24": 1500
};

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarProducto(producto) {
    const precio = preciosProductos[producto];
    carrito.push({ producto, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    carrito.forEach((item, index) => {
        const tr = document.createElement('tr');
        
        const tdProducto = document.createElement('td');
        tdProducto.textContent = item.producto;
        tr.appendChild(tdProducto);

        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = `$${item.precio}`;
        tr.appendChild(tdPrecio);

        const tdAccion = document.createElement('td');
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarProducto(index);
        tdAccion.appendChild(eliminarBtn);
        tr.appendChild(tdAccion);

        carritoElement.appendChild(tr);
    });
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarCuadroCuotas() {
    const cuadroCuotas = document.getElementById('cuadroCuotas');
    cuadroCuotas.style.display = 'block';
}

function cerrarCuadroCuotas() {
    const cuadroCuotas = document.getElementById('cuadroCuotas');
    cuadroCuotas.style.display = 'none';
}

function procesarCompra() {
    const cuotas = document.getElementById('cuotas').value;
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    const pagoMensual = total / cuotas;
    alert(`El total es $${total.toFixed(2)} en ${cuotas} cuotas de $${pagoMensual.toFixed(2)}`);
    vaciarCarrito();
    cerrarCuadroCuotas();
}

document.addEventListener('DOMContentLoaded', actualizarCarrito);

window.onclick = function(event) {
    const cuadroCuotas = document.getElementById('cuadroCuotas');
    if (event.target == cuadroCuotas) {
        cuadroCuotas.style.display = 'none';
    }
};
