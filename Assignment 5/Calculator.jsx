// ============================================
// React Assignment 1 - Calculator
// Developed by: Yogesh Verma
// ============================================

import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function handleAdd() {
    let ans = parseFloat(num1) + parseFloat(num2);
    setResult("Addition: " + ans);
  }

  function handleSubtract() {
    let ans = parseFloat(num1) - parseFloat(num2);
    setResult("Subtraction: " + ans);
  }

  function handleMultiply() {
    let ans = parseFloat(num1) * parseFloat(num2);
    setResult("Multiplication: " + ans);
  }

  function handleDivide() {
    if (parseFloat(num2) === 0) {
      setResult("Cannot divide by zero!");
      return;
    }
    let ans = parseFloat(num1) / parseFloat(num2);
    setResult("Division: " + ans);
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>React Calculator</h2>

      <div style={styles.inputBox}>
        <input
          type="number"
          placeholder="Enter Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Enter Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.buttonBox}>
        <button onClick={handleAdd} style={styles.btn}>Add</button>
        <button onClick={handleSubtract} style={styles.btn}>Subtract</button>
        <button onClick={handleMultiply} style={styles.btn}>Multiply</button>
        <button onClick={handleDivide} style={styles.btn}>Divide</button>
      </div>

      {result !== "" && (
        <div style={styles.result}>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#0a1628",
    marginBottom: "20px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  buttonBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 20px",
    fontSize: "14px",
    backgroundColor: "#00d4d4",
    color: "#0a1628",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  result: {
    backgroundColor: "#0a1628",
    color: "#00d4d4",
    padding: "15px",
    borderRadius: "8px",
    fontSize: "18px",
  },
};

export default Calculator;
