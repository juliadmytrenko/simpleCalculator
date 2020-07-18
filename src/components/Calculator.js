import React from "react";
import { testAddPoly } from "../utils.ts";

const Calculator = () => {
  const handleOnClick = () => {
    testAddPoly();
  };

  return <button onClick={handleOnClick}>Submit</button>;
};

export default Calculator;
