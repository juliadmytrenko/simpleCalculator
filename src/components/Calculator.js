import React from "react";
import { addPolynomials } from "../utils.ts";

const Calculator = () => {
  const handleOnClick = () => {
    addPolynomials();
  };

  return <button onClick={handleOnClick}>Submit</button>;
};

export default Calculator;
