import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// Componentes para renderizar
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Pagina404 = () => <h1>Página no encontrada</h1>;
const Users = (props) => {
	return (
		<div>
			{props.match.params.id}
		</div>
	)
}

class App extends Component {
  render() {
    return (
      <Router>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/usuarios/param">Usuarios (parametro)</Link></li>
	      </ul>

	      <hr/>

	  {/* renderiza la primera coincidencia de ruta */}
	      <Switch>
	      		{/* exac: solo la ruta exacta, no el resto de rutas anidadas */}
		      	<Route exact path="/" component={Home}/>

		     	<Route path="/about" component={About}/>

		     	<Route path="/usuarios/:id" component={Users} />
		      
	        	{/* pagina 404, tiene que ser la ULTIMA ruta */}
	        	<Route component={Pagina404} />
	      </Switch>
	    </div>
	  </Router>
    );
  }
}

export default App;
