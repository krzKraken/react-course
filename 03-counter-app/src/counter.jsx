import { useState } from "react";

import PropTypes from "prop-types";

const CounterApp = ({ valor }) => {
  const [counter, setCounter] = useState(valor);

  const oneMore = () => {
    setCounter(counter + 1);
    console.log("oneMore called");
  };

  const oneLess = () => {
    setCounter(counter - 1);
    console.log("oneLess called");
  };

  const resetCounter = () => {
    setCounter(valor);
    console.log("resetCounter called");
  };

  return (
    <>
      <h1>Contador</h1>
      <p>Numero: {counter} </p>
      <div>
        <button onClick={oneMore}>1+</button>
        <button onClick={oneLess}>1-</button>
        <button onClick={resetCounter}>reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number,
};

CounterApp.defaultProps = {
  valor: 100,
};

export { CounterApp };
