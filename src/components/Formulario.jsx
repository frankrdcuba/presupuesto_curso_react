import React, { useState } from "react";
import Error from "./Error";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setnombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);

    const gasto = {
      id: v4(),
      nombre,
      cantidad,
    };
    setGasto(gasto);
    setCrearGasto(true);
    setnombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar sus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={(e) => setnombre(e.target.value)}
          value={nombre}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 200"
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          value={cantidad}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
