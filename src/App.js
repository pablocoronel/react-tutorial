import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Pasar props en el contructor y en super(), a la clase padre
  constructor(props){
    super(props);

    this.state = {
      tareas : ["Tarea 1", "Tarea 2"]
    }
  }

  // Agrega tareas al array
  agregarTarea = () => {
    this.setState({
      tareas : this.state.tareas.concat("Nuevo elemento")
    })
  }

  // Modifica un elemento de un array
  modificarTarea = () => {
    const index = this.state.tareas.findIndex(task => task === "Tarea 2");
    console.log(index)
    const tareasEstado = this.state.tareas;

    this.setState({
      tareas : [
        ...tareasEstado.slice(0, index),
        "Actualizado",
        ...tareasEstado.slice(index + 1)
      ]
    })
  }

  // Elimina un elemento de un array
  eliminarTarea = () => {
    const index = 0;
    const tareasEstado = this.state.tareas;

    this.setState({
      tareas : [
        ...tareasEstado.slice(0, index),
        ...tareasEstado.slice(index + 1)
      ]
    })
  }

  // Renderiza los componentes en pantalla
  render() {
    return (
      <div>
        <h1>Hola mundo</h1>

        <ul>
          {this.state.tareas.map(tarea => 
            <li>{tarea}</li>
          )}
        </ul>

        <button onClick={this.agregarTarea}>Agregar tarea</button>

        <button onClick={this.modificarTarea}>Modificar tarea 2</button>

        <button onClick={this.eliminarTarea}>Eliminar la primer tarea (index 0)</button>
      </div>
    );
  }
}

export default App;
