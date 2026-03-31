import React, { useState } from "react";

export default function Home() {
  const [view, setView] = useState("inicio");

  return (
    <div style={{ background: "#111", color: "#eee", minHeight: "100vh", padding: "20px" }}>
      <h1>VALDOCER</h1>
      <p>@valdocer</p>

      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button onClick={() => setView("sobreMi")}>Sobre mí</button>
        <button onClick={() => setView("listaDeseos")}>Lista de deseos</button>
        <button onClick={() => setView("enlaces")}>Enlaces</button>
      </nav>

      <div>
        {view === "inicio" && (
          <p>Bienvenido a mi espacio digital. Aquí encontrarás todos mis enlaces, redes sociales y contenido favorito en un solo lugar.</p>
        )}

        {view === "sobreMi" && (
          <div>
            <h2>Sobre mí</h2>
            <textarea placeholder="Escribe tu biografía aquí"></textarea>
          </div>
        )}

        {view === "listaDeseos" && (
          <div>
            <h2>Mi lista de deseos</h2>
            <input type="text" placeholder="Producto o enlace" />
            <button>Añadir</button>
          </div>
        )}

        {view === "enlaces" && (
          <div>
            <h2>Mis enlaces</h2>
            <ul>
              <li><a href="https://facebook.com/valdocer" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com/valdocer" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://mercadolibre.com/u/valdocer" target="_blank" rel="noreferrer">Mercado Libre</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
