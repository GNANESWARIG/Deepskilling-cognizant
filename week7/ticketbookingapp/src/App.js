import { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={buttonStyle}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={buttonStyle}>
      Logout
    </button>
  );
}

function UserGreeting() {
  return <h1>Welcome back, User! You can now book tickets.</h1>;
}

function GuestGreeting() {
  return <h1>Welcome, Guest! Please login to book your tickets.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
const buttonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  marginTop: '20px',
  cursor: 'pointer'
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
