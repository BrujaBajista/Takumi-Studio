//Carrito

let carrito = JSON.parse(localStorage.getItem("storage_del_carrito")) || [];

const agregar_carrito = (nombre, precio) => {
    const carritoIndex = carrito.findIndex((e) => e.nombre === nombre);
    if (carritoIndex !== -1) {
        carrito[carritoIndex].cantidad += 1;
    } else {
        const precioFloat = parseFloat(precio.replace("$", ""));
        carrito.push({ nombre, precio: precioFloat, cantidad: 1 });
    };
    actualizar_carrito();
    carrito_local_storage();
    console.log(carrito);
    Toastify({
        text: "Producto agregado al Carrito",
        duration: 700,
        className: "notificacion_producto_agregado",
        style: {
            borderRadius: '27px',
            fontWeight: "bold",
            color: "#000000",
            background: "linear-gradient(to right, #ff8846, #ffdb46)",
        },
    }).showToast();
};

const sumar_producto = (nombre) => {
    carrito = carrito.map((e) => {
        const { nombre: productoNombre, ...resto } = e;
        if (productoNombre === nombre) {
            return { nombre: productoNombre, ...resto, cantidad: e.cantidad + 1 };
        } else {
            return e;
        };
    });
    actualizar_carrito();
    carrito_local_storage();
    Toastify({
        text: "Agregado",
        duration: 700,
        className: "notificacion_producto_sumado",
        style: {
            borderRadius: '27px',
            fontWeight: "bold",
            color: "#000000",
            background: "linear-gradient(to right, #ff8846, #ffdb46)",
        },
    }).showToast();
};

const restar_producto = (nombre) => {
    carrito = carrito.map((e) => {
        const { nombre: productoNombre, ...resto } = e;
        if (productoNombre === nombre) {
            if (e.cantidad > 1) {
                e.cantidad -= 1;
                Toastify({
                    text: "Eliminado",
                    duration: 700,
                    className: "notificacion_producto_restado",
                    style: {
                        borderRadius: '27px',
                        fontWeight: "bold",
                        color: "#000000",
                        background: "linear-gradient(to right, #ff8846, #ffdb46)",
                    },
                }).showToast();
            } else {
                e.cantidad = 0;
                Toastify({
                    text: "Producto eliminado del Carrito",
                    duration: 700,
                    className: "notificacion_producto_eliminado",
                    style: {
                        borderRadius: '27px',
                        fontWeight: "bold",
                        color: "#000000",
                        background: "linear-gradient(to right, #ff8846, #ffdb46)",
                    },
                }).showToast();
            };
        };
        return e;
    });
    actualizar_carrito();
    carrito_local_storage();
};

const actualizar_carrito = () => {
    const lista_carrito = document.getElementById("carrito-lista");
    const precio_total = document.getElementById("precio-total");
    lista_carrito.innerHTML = "";
    let total = 0;

    carrito.forEach(({ nombre, precio, cantidad }) => {
        if (cantidad >= 1) {
            const item = document.createElement("li");
            const subtotal = precio * cantidad;
            item.textContent = `${nombre} - $${(subtotal).toFixed(2)} - ${ "(" + cantidad + ")"}`;

            const boton_agregar_unidades = document.createElement("button");
            boton_agregar_unidades.textContent = "+";
            boton_agregar_unidades.classList.add("mas-unidades");
            boton_agregar_unidades.addEventListener("click", () => {
                sumar_producto(nombre);
            });

            const boton_restar_unidades = document.createElement("button")
            boton_restar_unidades.textContent = "-";
            boton_restar_unidades.classList.add("menos-unidades");
            boton_restar_unidades.addEventListener("click", () => {
                restar_producto(nombre);
            });

            item.appendChild(boton_agregar_unidades);
            item.appendChild(boton_restar_unidades);
            lista_carrito.appendChild(item);
            total += subtotal;
        };
    });
    precio_total.textContent = `Total: $${total.toFixed(2)}`;
};

const carrito_local_storage = () => {
    localStorage.setItem("storage_del_carrito", JSON.stringify(carrito));
};

let botones_agregar_carrito = document.querySelectorAll(".agregar-carrito");
botones_agregar_carrito.forEach((boton) => {
    boton.addEventListener("click", () => {
        let { textContent: nombre_producto } = boton.parentNode.querySelector(".nombre-productos");
        let { textContent: precio_producto } = boton.parentNode.querySelector(".precio-productos");
        agregar_carrito(nombre_producto, precio_producto);
    });
});
actualizar_carrito();