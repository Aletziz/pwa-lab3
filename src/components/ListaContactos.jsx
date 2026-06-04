import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Modal from "./Modal";
import Alerta from "./Alerta";

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Ana López", telefono: "123456789", favorito: false },
    { id: 2, nombre: "Luis Pérez", telefono: "987654321", favorito: true },
    { id: 3, nombre: "Carlos Ruiz", telefono: "555123456", favorito: false },
    { id: 4, nombre: "Marta Gómez", telefono: "999888777", favorito: true },
    { id: 5, nombre: "Sofía Martínez", telefono: "444555666", favorito: false },
  ]);
  const [busqueda, setBusqueda] = useState("");
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  const toggleFavorito = (id) => {
    setContactos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c)),
    );
  };
  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
    setModalAbierto(false);
  };
  const filtrar = () => {
    let filtrados = contactos.filter(
      (c) =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.telefono.includes(busqueda),
    );
    if (soloFavoritos) filtrados = filtrados.filter((c) => c.favorito);
    return filtrados;
  };
  const filtrados = filtrar();
  const totalFavoritos = contactos.filter((c) => c.favorito).length;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <BotonAccion
        texto={soloFavoritos ? "Mostrar todos" : "Mostrar solo favoritos"}
        variante="secundario"
        onClick={() => setSoloFavoritos(!soloFavoritos)}
      />
      <p>
        Total contactos: {contactos.length} | Favoritos: {totalFavoritos} |
        Resultados búsqueda: {filtrados.length}
      </p>
      {filtrados.length === 0 && (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos
        </Alerta>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtrados.map((c) => (
          <li
            key={c.id}
            style={{
              border: "1px solid #ddd",
              margin: "8px 0",
              padding: "8px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{c.nombre}</strong> - {c.telefono}
              <span
                onClick={() => toggleFavorito(c.id)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  fontSize: "1.3rem",
                }}
              >
                {c.favorito ? "★" : "☆"}
              </span>
            </div>
            <BotonAccion
              texto="Eliminar"
              variante="peligro"
              onClick={() => {
                setContactoAEliminar(c);
                setModalAbierto(true);
              }}
            />
          </li>
        ))}
      </ul>
      <Modal titulo="Confirmar eliminación" abierto={modalAbierto}>
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>
        <BotonAccion
          texto="Cancelar"
          variante="secundario"
          onClick={() => setModalAbierto(false)}
        />
        <BotonAccion
          texto="Eliminar"
          variante="peligro"
          onClick={() => eliminarContacto(contactoAEliminar.id)}
        />
      </Modal>
    </div>
  );
}
export default ListaContactos;
