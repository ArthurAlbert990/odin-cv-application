import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'
import App from './App.js';
import PersonalInfo from './Components/PersonalInfo';
import WorkExperience from './Components/WorkExperience';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='w-screen h-auto bg-neutral-50 border-t-4 border-teal-400 flex justify-start'>
      <h1 className='text-2xl font-medium text-teal-500 p-2'>CV Application!</h1>
    </section>
    {/* <App /> */}
    <PersonalInfo/>
    <WorkExperience/>
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
// 11:00 às 11:32 // Construindo forms, lembrar de adicionar padding, continuar...
