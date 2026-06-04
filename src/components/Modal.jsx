function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "24px",
          minWidth: "300px",
        }}
      >
        <h3>{titulo}</h3>
        {children}
      </div>
    </div>
  );
}
export default Modal;
