<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>VALDOCER</title>
  <style>
    body { background:#111; color:#eee; font-family:sans-serif; }
    nav { display:flex; gap:20px; margin-bottom:20px; }
    button { background:#333; color:#eee; border:none; padding:10px; cursor:pointer; }
    button:hover { background:#555; }
    #contenido { margin-top:20px; }
  </style>
</head>
<body>
  <h1>VALDOCER</h1>
  <p>@valdocer</p>

  <nav>
    <button onclick="mostrarSobreMi()">Sobre mí</button>
    <button onclick="mostrarListaDeseos()">Lista de deseos</button>
    <button onclick="mostrarEnlaces()">Enlaces</button>
  </nav>

  <div id="contenido">
    <p>Bienvenido a mi espacio digital. Aquí encontrarás todos mis enlaces, redes sociales y contenido favorito en un solo lugar.</p>
  </div>

  <script>
    function mostrarSobreMi() {
      document.getElementById("contenido").innerHTML = `
        <h2>Sobre mí</h2>
        <form onsubmit="guardarBio(event)">
          <textarea id="bio" placeholder="Escribe tu biografía aquí"></textarea><br>
          <button type="submit">Guardar</button>
        </form>
      `;
    }

    function guardarBio(event) {
      event.preventDefault();
      const bio = document.getElementById("bio").value;
      document.getElementById("contenido").innerHTML = `
        <h2>Sobre mí</h2>
        <p>${bio}</p>
      `;
    }

    function mostrarListaDeseos() {
      document.getElementById("contenido").innerHTML = `
        <h2>Mi lista de deseos</h2>
        <ul id="wishlist"></ul>
        <input type="text" id="nuevoItem" placeholder="Producto o enlace">
        <button onclick="agregarItem()">Añadir</button>
      `;
    }

    function agregarItem() {
      const item = document.getElementById("nuevoItem").value;
      if(item.trim() !== "") {
        const lista = document.getElementById("wishlist");
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
        document.getElementById("nuevoItem").value = "";
      }
    }

    function mostrarEnlaces() {
      document.getElementById("contenido").innerHTML = `
        <h2>Mis enlaces</h2>
        <ul>
          <li><a href="https://facebook.com/valdocer" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com/valdocer" target="_blank">Instagram</a></li>
          <li><a href="https://mercadolibre.com/u/valdocer" target="_blank">Mercado Libre</a></li>
        </ul>
      `;
    }
  </script>
</body>
</html>
