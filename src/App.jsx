import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Pitfall</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Go to learn pitfall
        </button>
      </div>
    </>
  );
}

export default App;
