import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(props){
		super(props);

		// Definir el estado inicial
		this.state = {
			nombres : []
		}

		axios.get("http://localhost:3001/names")
			.then(response => {
				// console.log(response)

				// toma los datos del server
				this.setState({
					nombres : response.data
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<div>
				<h1>Hola mundo</h1>
			
				{/* mostrar el listado */}
				<ul>
					{this.state.nombres.map((nom, index) => 
						<li key={index}>{nom}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default App;
