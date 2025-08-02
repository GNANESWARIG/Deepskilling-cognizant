import { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello(); 
  };


  const sayHello = () => {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  };


  const sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };


  const handlePress = (e) => {
    alert("I was clicked");
    console.log("Synthetic event triggered:", e.type);
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <hr />

      <button onClick={handlePress}>OnPress</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
