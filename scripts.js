// Carrito de compras inicial
let carrito = [];

// Función para cargar los productos desde el archivo JSON
function cargarProductos() {
  fetch('data.json')  // Cargar el archivo JSON
    .then(response => response.json())  // Convertir la respuesta en formato JSON
    .then(productos => {
      // Para cada producto, crear su elemento HTML y agregarlo a la página
      const contenedorProductos = document.getElementById("productos");
      productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.id = `producto-${producto.id}`;

        divProducto.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button onclick="añadirAlCarrito(${producto.id})">Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
      });
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
    });
}

// Función para añadir productos al carrito
function añadirAlCarrito(idProducto) {
  fetch('data.json')  // Nuevamente, cargamos el archivo JSON para obtener los productos
    .then(response => response.json())
    .then(productos => {
      const producto = productos.find(p => p.id === idProducto);
      if (producto) {
        carrito.push(producto);
        mostrarCarrito();
      }
    });
}

// Función para mostrar el carrito en el HTML
function mostrarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = ''; // Limpiar el contenido del carrito

  let total = 0;

  carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    listaCarrito.appendChild(li);
    total += producto.precio;
  });

  // Mostrar el total en el carrito
  const totalElement = document.getElementById("total");
  totalElement.textContent = `Total: $${total}`;
}

// Llamamos a la función para cargar los productos al cargar la página
window.onload = cargarProductos;