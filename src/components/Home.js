import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ login }) => {
  const [countdown, setCountdown] = useState(5);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 1) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "123") {
      login();
      navigate("/secret");
    } else {
      setMessage("Hasło jest niepoprawne. Spróbuj ponownie.");
    }
  };

  return (
    <div>
      <h1>Witaj na stronie głównej!</h1>
      {countdown > 0 ? (
        <p>Odliczanie: {countdown} sekund</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>
              <i>Podaj sekretne hasło:</i>
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Wyślij</button>
          </form>
          {message && <p className="error-message">{message}</p>}
        </>
      )}
    </div>
  );
};

export default Home;
