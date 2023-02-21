import './App.css';
import React from 'react';
import Topo from './Componentes/Header';
import Banner from './Componentes/Baanner';
import Sobre from './Componentes/Sobre';
import Serviços from './Componentes/Serviços';
import Linkwhats from './Componentes/linkwhats';
import Footer from './Componentes/Footer';
import PopUp from './Componentes/PopUp';
import Texto from './Componentes/Texto';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Banner/>
      <Texto/>
      <Sobre/>
      <Serviços/>
      <Linkwhats/>
      <Footer/>
      <PopUp/>
    </div>
  );
}

export default App;
