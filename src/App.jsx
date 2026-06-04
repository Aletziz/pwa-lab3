import { useState } from "react";
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import BotonAccion from "./components/BotonAccion";
import Contador from "./components/Contador";
import ListaContactos from "./components/ListaContactos";
import FormularioEvento from "./components/FormularioEvento";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="container">
      <h1>📘 Laboratorio 3 </h1>

      <Acordeon
        titulo="Ejercicio 1 - Alertas y Acordeones"
        defaultExpandido={true}
      >
        <h3>Alertas</h3>
        <Alerta tipo="exito" titulo="Éxito">
          Operación completada correctamente.
        </Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">
          Revisa los datos ingresados.
        </Alerta>
        <Alerta tipo="error" titulo="Error">
          No se pudo guardar el archivo.
        </Alerta>
        <Alerta tipo="info" titulo="Información">
          Este es un mensaje informativo.
        </Alerta>
        <h3>Acordeones</h3>
        <Acordeon titulo="Sección 1">Contenido del primer acordeón.</Acordeon>
        <Acordeon titulo="Sección 2">Contenido del segundo acordeón.</Acordeon>
        <Acordeon titulo="Sección 3">Contenido del tercer acordeón.</Acordeon>
      </Acordeon>

      <Acordeon titulo="Ejercicio 2 - Modal, Botones y Contador">
        <BotonAccion
          texto="Abrir modal"
          onClick={() => setModalAbierto(true)}
        />
        <Modal titulo="Modal de prueba" abierto={modalAbierto}>
          <p>Este es el contenido del modal.</p>
          <BotonAccion
            texto="Cerrar"
            variante="secundario"
            onClick={() => setModalAbierto(false)}
          />
        </Modal>
        <Contador />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3 - Lista de Contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4 - Formulario de Eventos">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default App;
