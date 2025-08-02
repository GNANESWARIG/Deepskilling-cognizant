import './App.css';

function App() {
  // Office space object
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    image: 'https://img.freepik.com/free-photo/interior-modern-office_105762-2117.jpg' // Replace with your own or static placeholder if needed
  };

  // Conditional style based on rent
  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Office Space , at Affordable Range</h1>

      <img
        src={office.image}
        alt="Office"
        style={{ width: '300px', height: '200px', marginTop: '20px' }}
      />

      <h2 style={{ marginTop: '20px' }}>Name: {office.name}</h2>

      <p style={rentStyle}>Rent: Rs. {office.rent}</p>

      <p><strong>Address:</strong> {office.address}</p>
    </div>
  );
}

export default App;
