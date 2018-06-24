import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome.js';


class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      titulo : "Hola mundo desde estado"
    }

  }

  cambiarTitulo = () => {
    this.setState({
      titulo : "Nuevo titulo"
    })
  }

  render() {
    const nombres = ["Pablo", "Pedro", "Laura"];

    return (
      <div>
        {nombres.map((nombre, index) => <Welcome key={index} name={nombre} />)}

        <h1>{this.state.titulo}</h1>

        <button onClick={this.cambiarTitulo}>Cambiar el titulo del estado</button>
      </div>
    );
  }
}

export default App;
