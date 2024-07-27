import React, { useState } from "react";

const SecretForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "123") {
      onSubmit();
    } else {
      setErrorMessage("Niepoprawne hasło. Spróbuj ponownie.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <i>Podaj sekretne hasło:</i>
        <input type="password" value={password} onChange={handleChange} />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default SecretForm;
