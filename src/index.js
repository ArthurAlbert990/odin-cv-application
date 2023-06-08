import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css'
//import App from './App.js';
import PersonalInfo from './Components/PersonalInfo';
import WorkExperience from './Components/WorkExperience';
import Summary from './Components/Summary';
import Education from './Components/Education';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* full page */}
    <section className="flex flex-col h-screen">
      {/* title section */}
      <section className=' flex flex-col justify-center items-center w-screen h-auto bg-neutral-50 border-t-4 border-teal-400'>
        <h1 className='text-2xl font-medium text-teal-500 p-2'>CV Application!</h1>
      </section>
      {/* <App /> */}
      {/* content section: */}
      <div class="content-container"> {/*styled on index.css*/}
        <section className='flex flex-col items-center w-screen border-red-500 border-2 p-4'>
          <section className='border-2 border-gray-300 shadow-2xl p-8 rounded-xl w-1/2 space-y-4'>
            <PersonalInfo/>
            <Summary/>
            <Education/>
            <WorkExperience/>

          </section>
        </section>
      </div>
    </section>
    
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
//28/05:
//10:00 às 11:21// Tailwind, estilizando página.
//29/05:
//19:10 ás 20:15 // Tailwind, criei arquivos de outros componentes.


// ! ! ! ! ! ! PRÓXIMO = CONTINUAR CONSTRUINDO COMPONENTES ! ! ! ! ! ! ! ! !