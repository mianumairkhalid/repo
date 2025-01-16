import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import { IdentityKitProvider } from '@nfid/identitykit/react';
import '@nfid/identitykit/react/styles.css';
import Welcome from './pages/Welcome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdentityKitProvider
      // authType={IdentityKitAuthType.DELEGATION}
      signerClientOptions={{
        targets: ['bd3sg-teaaa-aaaaa-qaaba-cai'],
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Welcome />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </IdentityKitProvider>
  </React.StrictMode>
);
