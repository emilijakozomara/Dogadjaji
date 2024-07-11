import React, { useState } from 'react';

const PrijavaDogadjaja = ({ eventId }) => {
  const [brojPrijavljenih, setBrojPrijavljenih] = useState(0);

  const handlePrijava = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/prijava/${eventId}`, {
        method: 'POST',
      });
      if (response.ok) {
        setBrojPrijavljenih(brojPrijavljenih + 1);
      } else {
        console.error('Greška prilikom prijave.');
      }
    } catch (error) {
      console.error('Greška:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePrijava}>Prijavi se</button>
      <p>Broj prijavljenih: {brojPrijavljenih}</p>
    </div>
  );
};

export default PrijavaDogadjaja;
