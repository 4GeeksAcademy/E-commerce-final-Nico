import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const signUp = () => {
		navigate("/signUp");
	};

	const logIn = () => {
		navigate("/logIn");
	};


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Cups n' Mugs</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signUp">
						<button type="button" onClick={signUp} className="btn btn-success">Register</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/logIn">
						<button type="button" onClick={logIn} className="btn btn-success">Log In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
