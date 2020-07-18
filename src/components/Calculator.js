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
        <div>
          <p>
            Adds two polynomials and returns the result. For this function to
            add polynomials properly:
            <br />- expressions of each polynomial must be ordered from the
            greatest power to the lowest power
            <br />
            e.g.
            <br />
            `[5,4],[3,3],[7,2],[10,0],[2,-1]` // OK
            <br />
            `[5,3],[3,4],[7,2]` // WRONG (should be `[3,4],[5,3],[7,2]`)
            <br />- expressions in single polynomial must not be duplicated
            <br />
            e.g.
            <br />
            `[5,4],[5,4],[5,4]` // WRONG (will return incorrect result)
          </p>
          <p>
            [coefficient, power], [coefficients, power], [coefficients, pow] ...
            <br />
            which equals to <code>coeff*x^pow</code>
          </p>
        </div>
        <label htmlFor="calculatorInput1">First polynomial values: </label>
        <input
          type="text"
          name="calculatorInput1"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
        />
        <br />
        <label htmlFor="calculatorInput2">Second polynomial values: </label>
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
