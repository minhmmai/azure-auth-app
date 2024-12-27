import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { kvClient } from './client/kv';

const App = () => {
  const [value, setValue] = useState<string>("")
  useEffect(() => {
    const getSecretValue = async () => {
      return (await kvClient.getSecret("test-secret")).value
    }
    if (!value) {
      setValue(getSecretValue() as any)
    }
  }, [value])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      </header>
    </div>
  );
}

export default App;
