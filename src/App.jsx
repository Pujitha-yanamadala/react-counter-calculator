
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator) {
    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    const a = Number(num1);
    const b = Number(num2);

    if (operator === "+") {
      setResult(a + b);
    } else if (operator === "-") {
      setResult(a - b);
    } else if (operator === "*") {
      setResult(a * b);
    } else if (operator === "/") {
      setResult(b === 0 ? "Cannot divide by zero" : a / b);
    }
  }

  return (
    <div className="container">
      <h1>React Applications</h1>

      <div className="card">
        <h2>Counter App</h2>

        <h3>Count: {count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase (+)
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease (-)
        </button>
      </div>

      <div className="card">
        <h2>Calculator App</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>*</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>

        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;
