import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import cheet from 'cheet.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import easterA from './images/easter-a.png';
import easterb from './images/easter-b.png';




const initialState ={
  isAnimated:false,
  menu : [
   {
     href:'index.html',
     title: 'Home',
   },
   {
     href:'#guitarras',
     title: 'Guitarras',
   },
   {
     href:'precios.html',
     title:'Precios',
   }
 ],
 logoPortada : logoPortada,
 guitarras: [
  {
    image:acustica,
    alt:'Guitarra Invie Acustica',
    name:'Invie Acustica',
    features:[
      'Estilo vintage',
      'Madera pura',
      'Incluye estuche invisible de aluminio',
    ]
  },
  {
    image:classic,
    alt:'Guitarra Invie Classic',
    name:'Invie clasic',
    features:[
      'Estilo vintage',
      'Liviana',
      'Empieza tu camino como rockstar',
    ]
  }
]
}
 
function reducer(state, action){
  switch(action.type){
    case'UPDATE_PROPS':{
      const newProps=action.payload.props;
      return{...state, ...newProps}
    }
    default:
      return state
  }
}
const store= createStore(reducer, initialState);

const easter={
  isAnimated:'is-animated',
  menu : [
    
  ],
  logoPortada: logoPlatzi,
  
  guitarras : [
    {
      image: easterA,
      alt:'Guitarra padre de familia',
      name:'Invie familiar',
      features:[
        'Lista para copiar a los simpsons',
        'aire puro',
        'chistes malos',
      ]
    },
    {
      image: easterb,
      alt:'Guitarra Invie Classic',
      name:'Invie clasic',
      features:[
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstar',
      ]
    }
  ]
 }


cheet ('i n v i e', ()=>{
  store.dispatch({
    type:'UPDATE_PROPS',
    payload:{
      props: easter
    }
  });
 // console.log('eso es')
});
cheet ('g o b a c k', ()=>{
  store.dispatch({
    type:'UPDATE_PROPS',
    payload:{
      props: initialState
    }
  });
 // console.log('de vuelta')
});

ReactDOM.render(
<Provider store={store}>
  <Invie />
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

