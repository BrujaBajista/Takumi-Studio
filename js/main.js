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
do {
    opcion = parseInt(prompt("Solicite su Consulta\n\n1. Solicitar un Presupuesto\n2. Asesoramiento de Enmarcación\n3. Consultas sobre su Compra\n4. Contactarse con Nosotros\n\nPARA SEGUIR NAVEGANDO LA PAGINA INGRESE 0"));

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
                medidas = prompt("Ingrese las Medidas de su Obra en Cm (Ej: 17cmx37)");
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
        default:
            alert("Opción NO Válida");
            break;
    }
} while (!terminar_bucle); 
