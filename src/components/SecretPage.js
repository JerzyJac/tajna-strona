import React from "react";

const SecretPage = () => (
  <div>
    <h1>Hackerman</h1>
    <img src={`${process.env.PUBLIC_URL}/tajny-obraz.jpg`} alt="Tajny obraz" />
  </div>
);

export default SecretPage;
