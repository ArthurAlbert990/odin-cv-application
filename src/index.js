import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'
import App from './App.js';
import PersonalInfo from './Components/PersonalInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='w-screen h-auto bg-teal-400 flex items-center justify-center'>
      <h1 className='text-2xl font-medium text-slate-50 p-2'>CV Application</h1>
    </section>
    <App />
    <PersonalInfo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



//INÍCIO 11/04:
// 11:25 ÀS 12:00 INSTALANDO TAILWIND 
// 13:06 às 14:00 Tailwind funcionando, precisou reiniciar o VS Code.
//18/04:
// 09:00 ÀS 09:38 // tailwind, estilizando página.
//
