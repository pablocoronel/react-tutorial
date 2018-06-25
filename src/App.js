import React, { Component } from 'react';
import './App.css';

class App extends Component {
  	constructor(props){
  		super(props);

  		this.state = {
  			name : "",
  			terms : false
  		}
  	}


	actualizarNombre = (event) => {
		this.setState({
			name : event.target.value
		})
	}

	actualizarTerminos = (event) => {
		this.setState({
			terms : event.target.checked
		})
	}

	verSaludo = () => {
		if (this.state.terms === true) {
			alert("Hola " + this.state.name);
		}else{
			alert("Hay que aceptar los términos");
		}
	}


	render() {
		return (
			<div>
				<h1>Hola mundo</h1>

				<input type="text" value={this.state.name} onChange={this.actualizarNombre} />

				<div>
					<label>
						<input type="checkbox" checked={this.state.terms} onClick={this.actualizarTerminos} /> Acepto los términos
					</label>
				</div>
				<button onClick={this.verSaludo}>Ver saludo</button>
			</div>
		);
	}
}

export default App;
