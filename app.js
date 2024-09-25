// Arreglo para almacenar el carrito con un solo objeto JSON
let tienda = {
    carrito: [], // Este es el único arreglo
    productos: { 
        1: { nombre: "Camisa", precio: 300 },
        2: { nombre: "Pantalón", precio: 500 },
        3: { nombre: "Zapatos", precio: 800 },
        4: { nombre: "Sombrero", precio: 200 }
    }
};
/*Con el objeto, en lugar de crear variables separadas como ropa o precio, lo que buscamos 
es acceder a sus atributos para mas comodidad a la hora de realizar las operaciones matematicas y sacar el total
tambien en el arreglo se van a agregar de forma mas sencilla  
*/

// Función flecha para mostrar el menú y capturar la opción
const mostrarMenu = () => parseInt(prompt(`
    "Seleccione una opción para agregar al carrito:"
    1.- Camisa - $300
    2.- Pantalón - $500
    3.- Zapatos - $800 
    4.- Sombrero - $200
    5.- Ver Carrito y Total
    6.- Salir
    "Elige una opción"
`));

// Estructura de control para manejar las opciones del menú
let continuar = true;
while (continuar) {
    let opcion = mostrarMenu();

    if (opcion >= 1 && opcion <= 4) {
        let producto = tienda.productos[opcion];
        tienda.carrito.push(producto); // Agregar al carrito
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);
        alert(`Producto "${producto.nombre}" agregado al carrito.`);
    } 
    else if (opcion === 5) {
        if (tienda.carrito.length === 0) {
            alert("El carrito está vacío.");
        } else {
            let mensaje = "Carrito de compras:\n";
            let total = 0;
            
            tienda.carrito.forEach((producto, index) => {
                mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
                total += producto.precio;
            });

            mensaje += `\nTotal: $${total}`;
            alert(mensaje);
        }
    } 
    else if (opcion === 6) {
        alert("Saliendo del programa...");
        continuar = false; // Terminar el programa
    } 
    else {
        alert("Opción no válida, intenta nuevamente.");
    }
}

alert("Programa finalizado.");
