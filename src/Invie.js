import React from 'react';
import logo from './logo.svg';
import Portada from './componentes/Portada.jsx';
import Guitarras from './componentes/Guitarras.jsx';
import Footer from './componentes/Footer.jsx';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';


// const data ={

//    menu : [
//     {
//       href:'index.html',
//       title: 'Home',
//     },
//     {
//       href:'#guitarras',
//       title: 'Guitarras',
//     },
//     {
//       href:'precios.html',
//       title:'Precios',
//     }
//   ],
//   logoPortada : logoPortada,

//   guitarras : [
//     {
//       image:acustica,
//       alt:'Guitarra Invie Acustica',
//       name:'Invie Acustica',
//       features:[
//         'Estilo vintage',
//         'Madera pura',
//         'Incluye estuche invisible de aluminio',
//       ]
//     },
//     {
//       image:classic,
//       alt:'Guitarra Invie Classic',
//       name:'Invie clasic',
//       features:[
//         'Estilo vintage',
//         'Liviana',
//         'Empieza tu camino como rockstar',
//       ]
//     }
//   ]
// }


function App() {
  return (
    <section className="Invie">
      {/* <Portada menu ={data.menu} logo={data.logoPortada} /> */}
      <Portada  />
      {/* port*/}
      {/* <Guitarras guitarras={data.guitarras} /> */}
      <Guitarras  />
      <Footer />
     
    </section>
  );
}

export default App;
