function Alerta({ tipo = "info", titulo, children }) {
  const config = {
    exito: { icono: "✅", color: "#d4edda", borde: "#28a745" },
    advertencia: { icono: "⚠️", color: "#fff3cd", borde: "#ffc107" },
    error: { icono: "❌", color: "#f8d7da", borde: "#dc3545" },
    info: { icono: "ℹ️", color: "#d1ecf1", borde: "#17a2b8" },
  };
  const estilo = {
    backgroundColor: config[tipo]?.color || config.info.color,
    borderLeft: `5px solid ${config[tipo]?.borde || config.info.borde}`,
    borderRadius: "8px",
    padding: "12px 16px",
    margin: "10px 0",
  };
  return (
    <div style={estilo}>
      <strong>
        {config[tipo]?.icono} {titulo}
      </strong>
      <div style={{ marginTop: "8px" }}>{children}</div>
    </div>
  );
}
export default Alerta;
