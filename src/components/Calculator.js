import React, { useState } from "react";
import { addPolynomials } from "../utils.ts";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput();

    addPolynomials();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="calculatorInput1">First polynomial values: </label>
        <input
          type="text"
          name="calculatorInput1"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
        />
        <br />
        <label for="calculatorInput2">Second polynomial values: </label>
        <input
          type="text"
          name="calculatorInput2"
          value={input2}
          onChange={(event) => setInput2(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <span>Output: {output}</span>
    </div>
  );
};

export default Calculator;
