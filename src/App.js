import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [name, setName] = useState('');

  const namesList = [
    {
      "nome": "Goncalo",
      "imagem": "images/gony1.jpg"
    },
    {
      "nome": "Diogo",
      "imagem": "images/diogo1.jpg"
    },
    {
      "nome": "Jorge",
      "imagem": "images/jorge1.jpg"
    },
    {
      "nome": "Gui",
      "imagem": "images/gui1.jpg"
    },
    {
      "nome": "António",
      "imagem": "images/tony2.jpg"
    }
  ]

  const getName = () => {
    var randomName = Math.floor(Math.random()*namesList.length);
    setName(namesList[randomName]);
    console.log(namesList[randomName])
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Gony APP!</h1> */}
        <button class="btn btn-primary gameButton" onClick={getName}>Gerenate Name</button>
        <div className="showPerson">
          <img src={name.imagem} alt=""/>
          <h3>{name.nome}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
