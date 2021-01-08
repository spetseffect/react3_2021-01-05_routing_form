import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Home } from './components/Home';
import { Books } from './components/Books';
import { Music } from './components/Music';
import { Reciepts } from './components/Reciepts';
import { RegForm } from './components/RegForm';
import { NotFound } from './components/NotFound';

function App() {
	return (
		<Router>
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="/">
						Routing
                     </a>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item" >
								<NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
							</li>
							<li className="nav-item" >
								<NavLink to="/books" className="nav-link" activeClassName="active" exact>Books</NavLink>
							</li>
							<li className="nav-item" >
								<NavLink to="/music" className="nav-link" activeClassName="active" exact>Music</NavLink>
							</li>
							<li className="nav-item" >
								<NavLink to="/reciepts" className="nav-link" activeClassName="active" exact>Reciepts</NavLink>
							</li>
							<li className="nav-item" >
								<NavLink to="/regform" className="nav-link" activeClassName="active" exact>RegForm</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/music" component={Music}></Route>
					<Route exact path="/books" component={Books}></Route>
					<Route exact path="/reciepts" component={Reciepts}></Route>
					<Route exact path="/regform" component={RegForm}></Route>
					<Route path="/*" component={NotFound}></Route>
				</Switch>
			</div>
		</Router>
		// <div className="App">
		// 	<Books data={booksList} />
		// 	<Music data={musicList} />
		// 	<Reciepts data={reciepts} />
		// </div>
	);
}

export default App;
