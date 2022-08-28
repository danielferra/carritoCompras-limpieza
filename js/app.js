const productos = [
    {nombre: "suavizante", precio: 50},
    {nombre: "jabon liquido", precio: 80},
    {nombre: "jabon en polvo", precio: 150},
    {nombre: "detergente", precio: 180},
    {nombre: "limpiavidrios", precio: 90},
];
let carrito = [];

let seleccion = prompt("¿Desea comprar algun producto si o no?");

while(seleccion != "si" && seleccion != "no"){
    alert("ingrese si o no");
    seleccion = prompt("¿Desea comprar algo si o no?")
}

if(seleccion == "si"){
    alert("Estos son nuestros productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + 
    producto.precio + "$");
    alert(todoslosProductos.join(" - "));
}else if(seleccion == "no"){
    alert("Gracias por visitarnos!");
}
while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito!");
    let precio = 0;
    if(producto == "suavizante" || producto == "jabon liquido" || producto == "jabon en polvo" || producto == "detergente" || producto == "limpiavidrios"){
      switch(producto){
        case "suavizante":
            precio = 50;
            break;
            case "jabon liquido":
            precio = 80;
            break;
            case "jabon en polvo":
            precio = 150;
            break;
            case "detergente":
            precio = 180;
            break;
            case "limpiavidrios":
            precio = 90;
            break;
            default:
            break;
      }  
    let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"));
    
    carrito.push({producto, unidades, precio});
    console.log(carrito);
    }else{
        alert("No disponemos de ese producto");
    }
    seleccion = prompt("¿Desea seguir comprando?");

    while(seleccion === "no"){
        alert("Muchas gracias por su compra!")
        carrito.forEach((carritoFinal) => {
         console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
         total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        });
    break;    
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar por su compra es: ${total}`);