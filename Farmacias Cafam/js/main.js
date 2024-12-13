// PRODUCTOS
const productos = [
    // Shampoos
    {
        id: "shampoo-01",
        titulo: "Shampoo 01",
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/24441613/Shampoo-400ml-Acondicionador-170ml-Pantene-Restauracin-1000035_a.jpg?v=638609307051800000",
        categoria: {
            nombre: "Shampoos",
            id: "shampoo"
        },
        precio: 20000
    },
    {
        id: "shampoo-02",
        titulo: "Shampoo 02",
        imagen: "https://colsubsidio.vteximg.com.br/arquivos/ids/163624-1200-1200/7891150008953.jpg?v=637219666636000000",
        categoria: {
            nombre: "Shampoos",
            id: "shampoo"
        },
        precio: 15000
    },
    {
        id: "shampoo-03",
        titulo: "Shampoo03",
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/26358504-512-512/20144875.jpg",
        categoria: {
            nombre: "Shampoos",
            id: "shampoo"
        },
        precio: 25000
    },
    // Desodorantes
    {
        id: "desodorante-01",
        titulo: "Desodorante01",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Vas6mHiMScxYu_sH8cBya5diWWpfb9Z3UA&s",
        categoria: {
            nombre: "Desodorantes",
            id: "desodorante"
        },
        precio: 11000
    },
    {
        id: "desodorante-02",
        titulo: "Desodorante 02",
        imagen: "https://locatelcolombia.vtexassets.com/arquivos/ids/327541/7702018913640_1_Gillette-Power-Beads-Cool-Wave-Gel-Invisible-Antitranspirante-X-82g.jpg?v=638023256006100000",
        categoria: {
            nombre: "Desodorates",
            id: "desodorante"
        },
        precio: 12000
    },
    {
        id: "desodorante-03",
        titulo: "Desodorante 03",
        imagen: "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/7/b/9/bcd154a22b4b4ab79a00054c81246f74-web_1010x1180_transparent_png.png",
        categoria: {
            nombre: "Desodorantes",
            id: "desodorante"
        },
        precio: 95000
    },
    // Cremas para cuerpo
    {
        id: "crema-01",
        titulo: "Crema 01",
        imagen: "https://images.ctfassets.net/ft324xor1pp0/4lMwqMZUBYaUc35Vh3ZWaz/d902b6015493ebf09130cc89e064c818/lubriderm-producto-piel-sensible-2-es-co",
        categoria: {
            nombre: "Cremas",
            id: "crema"
        },
        precio: 18000
    },
    {
        id: "crema-02",
        titulo: "Crema 02",
        imagen: "https://locatelcolombia.vtexassets.com/arquivos/ids/336685/4005808319695_2_CREMA-CORPORAL-NIVEA-BODY-MILK-NUTRITIVA-X-400ML.jpg?v=638173803180300000",
        categoria: {
            nombre: "Cremas",
            id: "crema"
        },
        precio: 12000
    },
    {
        id: "crema-03",
        titulo: "Crema 03",
        imagen: "https:https://images.ctfassets.net/ft324xor1pp0/1s1Ek8ttAusfS94xucRzGy/7997205e4803a00af8a55791fae05e88/jb_cliq_antes_de_dormir_12x200_f-es-co",
        categoria: {
            nombre: "Cremas",
            id: "crema"
        },
        precio: 20000
    },
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}