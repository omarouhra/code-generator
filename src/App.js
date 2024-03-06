import React, { useState } from "react";

const PATTERNS = [
  { key: "easy", pattern: "0123456789" },
  {
    key: "strong",
    pattern: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  },
  {
    key: "veryStrong",
    pattern: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  },
];

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = (strength) => {
    const pattern = PATTERNS.find((p) => p.key === strength).pattern;

    let code = "";
    for (let i = 0; i < 12; i++) {
      code += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }

    setPassword(code);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const strength = event.target.elements.strength.value;
    generatePassword(strength);
  };

  return (
    <div>
      {password ? <h1> YOUR PASSWORD IS:</h1> : <h1>PASSWORD GENERATOR</h1>}
      <form onSubmit={handleSubmit}>
        <label>Password Strength:</label>
        <select id="strength">
          <option value="easy">Easy</option>
          <option value="strong">Strong</option>
          <option value="veryStrong">Very strong</option>
        </select>
        <br />
        <br />

        <button type="submit">generate password</button>
      </form>

      {password && (
        <div>
          <h2>{password}</h2>
          <button onClick={() => copyCode()}>Copy code</button>
        </div>
      )}
    </div>
  );
}

export default App;
