import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter  } from 'react-router-dom';
// import { ReactDOM } from 'react-dom/client';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//   </React.StrictMode>
// );


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
