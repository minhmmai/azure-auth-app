import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

async function App() {
  const credential = new DefaultAzureCredential();

  const keyVaultName = "KV_NAME";
  const url = "https://" + keyVaultName + ".vault.azure.net";

  const client = new SecretClient(url, credential);
  const secretName = "azure-auth-app-kv"
  const result = await client.setSecret(secretName, "azure-auth-app-kv");
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
          {result.value}
        </a>
      </header>
    </div>
  );
}

export default App;
