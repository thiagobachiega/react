import {useState} from 'react'
import './App.css';
import Nome from './components/Nome'
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <Nome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;