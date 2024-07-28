import React, { useEffect, useState } from "react";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/persons.json")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>O nas</h1>
      <p>Informacje o naszej firmie.</p>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Stanowisko</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.position}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;
