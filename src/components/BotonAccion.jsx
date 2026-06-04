function BotonAccion({
  texto,
  variante = "primario",
  disabled = false,
  onClick,
  type = "button",
}) {
  const estilos = {
    primario: { backgroundColor: "#007bff", color: "white" },
    secundario: { backgroundColor: "#6c757d", color: "white" },
    peligro: { backgroundColor: "#dc3545", color: "white" },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilos[variante],
        border: "none",
        borderRadius: "4px",
        padding: "8px 16px",
        margin: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {texto}
    </button>
  );
}
export default BotonAccion;
