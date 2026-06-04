import { useState } from "react";

function Acordeon({ titulo, children, defaultExpandido = false }) {
  const [expandido, setExpandido] = useState(defaultExpandido);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          padding: "12px",
          cursor: "pointer",
          backgroundColor: "#f8f9fa",
          fontWeight: "bold",
        }}
      >
        {expandido ? "▼" : "▶"} {titulo}
      </div>
      {expandido && <div style={{ padding: "12px" }}>{children}</div>}
    </div>
  );
}
export default Acordeon;
