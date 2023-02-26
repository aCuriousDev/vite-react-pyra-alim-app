import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Progression from './components/Progression';
import Navigation from './components/Navigation';
import Results from './components/Results';

// Temp list of aliments - to move into db afterward
const Aliments = [
  {
    id: '1',
    name: 'Pain blanc',
    ref_freq: '1',
    img: './img/Picto1.png',
    color01: '#7C5434',
    color02: '#DA9C4A',
  },
  {
    id: '2',
    name: 'Viande Rouge',
    ref_freq: '1',
    img: './img/Picto2.png',
    color01: '#CA433C',
    color02: '#EFC2AE',
  },
  {
    id: '3',
    name: 'Produits laitiers de vache (lait, yaourt, fromage',
    ref_freq: '1',
    img: './img/Picto3.png',
    color01: '#2434A4',
    color02: '#FFFFFF',
  },
  {
    id: '4',
    name: 'Confiture',
    ref_freq: '1',
    img: './img/Picto4.png',
    color01: '#3C0908',
    color02: '#B82C3C',
  },
  {
    id: '5',
    name: 'Boissons sucrée (jus de fruits, soda...)',
    ref_freq: '1',
    img: './img/Picto5.png',
    color01: '#2b211f',
    color02: '#4e3834',
  },
  {
    id: '6',
    name: 'Boisson énergisante',
    ref_freq: '1',
    img: './img/Picto6.png',
    color01: '#344b8c',
    color02: '#FFFFFF',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="title started drop-shadow">Pyra'Alim</h1>
      <p className="subtitle">
        L'outil simple pour auto-évaluer la qualité de mon alimentation et
        équilibrer ma pyramide alimentaire.
      </p>
      <button className="button-start">Commencer le test</button>
      {/* <Progression/>
      <Cards/>
      <Navigation/>
      <Results/> */}
    </div>
  );
}

export default App;
