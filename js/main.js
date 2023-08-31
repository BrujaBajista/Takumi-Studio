let opcion;
let terminar_bucle = false;
let datos_contacto1 = "Si necesitas asesoramiento escribinos en instagram: @gakubuchiatelier\n\nHorarios de Atención de 12 a 18";
let datos_contacto2 = "Si tenes consulta con tu compra comunicate a nuestro mail: zaidaalvarezquintana@gmail.com\n\nHorarios de Atención de 12 a 18";
let datos_contacto3 = "¿Queres contactarnos? Escribinos al wsp: 01150298996\n\nHorarios de Atención de 12 a 18";
const contactanos1 = () => {
    alert(datos_contacto1);
};
const contactanos2 = () => {
    alert(datos_contacto2);
};
const contactanos3 = () => {
    alert(datos_contacto3);
};

const productos = [
    { id: 1, nombre: "Cuadro A3 (30x45)", precio: 10000 },
    { id: 2, nombre: "Cuadro A4 (21x30cm)", precio: 8000 },
    { id: 3, nombre: "Cuadro A5 (15x25cm)", precio: 6000 },
    { id: 4, nombre: "Cuadro Porta Retrato (13x18cm)", precio: 4000 },
    { id: 5, nombre: "Ventana de Passepartou", precio: 2000 },
    { id: 6, nombre: "Espejo Personalizado", precio: 0 },
    { id: 7, nombre: "Cuadro Personalizado", precio: 0 },
];

const carrito = [];

function agregar_carrito(id) {
    const producto_encontrado = productos.find((producto) => producto.id === id);
    if (producto_encontrado) {
        carrito.push(producto_encontrado);
        alert(`Producto "${producto_encontrado.nombre}" agregado al carrito.`);
    } else {
        alert("Producto Fuera de Stock.");
    }
}

function mostrar_carrito() {
    let carrito_info = "Productos en el carrito:\n\n";
    carrito.forEach((producto) => {
        carrito_info += `${producto.nombre} - Precio: ${producto.precio}\n`;
    });
    const carrito_total = carrito.reduce((total, producto) => total + producto.precio, 0);
    carrito_info += `\nPrecio total del carrito: ${carrito_total}`;
    alert(carrito_info);
}

do {
    opcion = parseInt(prompt("Solicite su Consulta\n\n1. Solicitar un Presupuesto\n2. Asesoramiento de Enmarcación\n3. Consultas sobre su Compra\n4. Contactarse con Nosotros\n5. Ver Productos y Carrito\n\nPARA SEGUIR NAVEGANDO LA PAGINA INGRESE 0"));
    switch (opcion) {
        case 0:
            alert("¡Que Disfrutes la Página!");
            terminar_bucle = true;
            break;
        case 1:
            let medidas;
            let consulta;
            let mail;
            do {
                medidas = prompt("Ingrese las Medidas de su Obra en Centimetros (Ej: 17cm x 37cm)");
                consulta = prompt("Ingrese su Consulta");
                mail = prompt("Ingrese su Correo Electrónico");
                alert("Gracias por su Consulta y que Disfrutes la Página");
            } while (false);
            terminar_bucle = true;
            break;
        case 2:
            contactanos1();
            break;
        case 3:
            contactanos2();
            break;
        case 4:
            contactanos3();
            break;
        case 5:
            while (true) {
                const seleccion = parseInt(prompt("Seleccione sus Productos\n\n1. Cuadro A3 (30x45)\n2. Cuadro A4 (21x30cm)\n3. Cuadro A5 (15x25cm)\n4. Cuadro Porta Retrato (13x18cm)\n5. Ventana de Passepartou\n6. Espejo Personalizado\n7. Cuadro Personalizado\n\nPARA FINALIZAR EL CARRITO INGRESE 0"));
                if (seleccion === 0) {
                    break;
                }
                agregar_carrito(seleccion);
            }
            mostrar_carrito();
            break;
        default:
            if (!isNaN(opcion)) {
                alert("Opción NO Válida");
            }
            break;
    }
} while (!terminar_bucle);