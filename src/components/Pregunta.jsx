import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <>
      <h2>Coloca su presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca su presupuesto"
          onChange={handleChange}
        />
        <input
          type="submit"
          className=" button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
