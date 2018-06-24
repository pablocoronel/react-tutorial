import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ["Pedro", "Pablo", "Carlos"];

    return (
      <div>
        <h1>Hola mundo</h1>

        <ul>
          {names.map(nombre =>
            <li>{nombre}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
