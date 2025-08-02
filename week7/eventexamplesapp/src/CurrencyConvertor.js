import { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const converted = parseFloat(rupees) / 88.5; // Example rate
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <label>
        Enter amount in Rupees:
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Convert</button>

      {euro && (
        <p>€ {euro}</p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
