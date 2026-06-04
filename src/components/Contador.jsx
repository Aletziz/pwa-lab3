import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function Contador() {
  const [valor, setValor] = useState(0);
  const incrementar = () => setValor((v) => v + 1);
  const decrementar = () => setValor((v) => (v > 0 ? v - 1 : 0));
  const incrementar5 = () => setValor((v) => v + 5);
  const reiniciar = () => setValor(0);

  return (
    <div>
      <h3>Valor: {valor}</h3>
      <BotonAccion
        texto="-1"
        variante="secundario"
        onClick={decrementar}
        disabled={valor === 0}
      />
      <BotonAccion texto="+1" variante="primario" onClick={incrementar} />
      <BotonAccion texto="+5" variante="primario" onClick={incrementar5} />
      <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      {valor === 0 && (
        <Alerta tipo="info" titulo="Cero">
          El contador está en cero
        </Alerta>
      )}
      {valor > 10 && (
        <Alerta tipo="advertencia" titulo="¡Valor alto!">
          Has superado 10
        </Alerta>
      )}
    </div>
  );
}
export default Contador;
