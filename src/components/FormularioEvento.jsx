import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function FormularioEvento() {
  const [form, setForm] = useState({
    titulo: "",
    fecha: "",
    categoria: "",
    descripcion: "",
    esPublico: false,
  });
  const [errores, setErrores] = useState({});
  const [eventos, setEventos] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validar = () => {
    const nuevosErrores = {};
    if (form.titulo.length < 5)
      nuevosErrores.titulo = "El título debe tener al menos 5 caracteres.";
    if (!form.fecha) nuevosErrores.fecha = "La fecha es obligatoria.";
    else if (new Date(form.fecha) < new Date())
      nuevosErrores.fecha = "La fecha no puede ser pasada.";
    if (!form.categoria) nuevosErrores.categoria = "Seleccione una categoría.";
    if (form.descripcion.length < 20)
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 20 caracteres.";
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setEventos((prev) => [...prev, form]);
      setForm({
        titulo: "",
        fecha: "",
        categoria: "",
        descripcion: "",
        esPublico: false,
      });
      setMensajeExito(`Evento "${form.titulo}" registrado con éxito.`);
      setTimeout(() => setMensajeExito(""), 4000);
    }
  };

  const estaDeshabilitado =
    !form.titulo ||
    !form.fecha ||
    !form.categoria ||
    form.descripcion.length < 20;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
          {errores.titulo && (
            <Alerta tipo="error" titulo="Error">
              {errores.titulo}
            </Alerta>
          )}
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
          {errores.fecha && (
            <Alerta tipo="error" titulo="Error">
              {errores.fecha}
            </Alerta>
          )}
        </div>
        <div>
          <label>Categoría:</label>
          <select
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            <option value="">Selecciona</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && (
            <Alerta tipo="error" titulo="Error">
              {errores.categoria}
            </Alerta>
          )}
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows={3}
            style={{ width: "100%" }}
          />
          {errores.descripcion && (
            <Alerta tipo="error" titulo="Error">
              {errores.descripcion}
            </Alerta>
          )}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="esPublico"
              checked={form.esPublico}
              onChange={handleChange}
            />
            Público
          </label>
        </div>
        <BotonAccion
          texto="Registrar evento"
          type="submit"
          disabled={estaDeshabilitado}
        />
      </form>
      {mensajeExito && (
        <Alerta tipo="exito" titulo="Éxito">
          {mensajeExito}
        </Alerta>
      )}

      <h3>Eventos registrados</h3>
      {eventos.length === 0 && <p>No hay eventos registrados aún.</p>}
      <ul>
        {eventos.map((e, idx) => (
          <li key={idx}>
            <strong>{e.titulo}</strong> - {e.fecha} - {e.categoria} -{" "}
            {e.esPublico ? "Público" : "Privado"}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FormularioEvento;
