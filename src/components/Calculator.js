import React, { useState } from "react";
import { addTwoExpressions, convertStringToArrayOfNumbers } from "../utils.js";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(
      addTwoExpressions(
        convertStringToArrayOfNumbers(input1),
        convertStringToArrayOfNumbers(input2)
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="calculatorInput1"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="calculatorInput2"
          value={input2}
          onChange={(event) => setInput2(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <span>Output: {output}</span>
    </div>
  );
};

export default Calculator;
