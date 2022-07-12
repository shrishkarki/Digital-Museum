import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import { IndexContextProvider } from './Components/ContextAPi/IndexContext';
import { hydrate, render } from "react-dom";

const APP=(
  <IndexContextProvider>
      <App />
  </IndexContextProvider>
);
 
const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//   <IndexContextProvider>
//  <App />
//   </IndexContextProvider>

// );


reportWebVitals();
