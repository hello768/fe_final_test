import React, { useEffect, useState } from "react";

export default function PositionList() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("/teacher-positions")
      .then(res => res.json())
      .then(data => setPositions(data));
  }, []);

  return (
    <ul>
      {positions.map(p => (
        <li key={p._id}>{p.code} - {p.name}</li>
      ))}
    </ul>
  );
}
