import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './css/index.css';

//components
import QrGenerator from './Components/QrGenerator';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QrGenerator />
    <Footer></Footer>
  </React.StrictMode>
);


