import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

export const MainPage = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const signUp = () => {
		navigate("/signUp");
	};

	const logIn = () => {
		navigate("/logIn");
	};

	return (
		<Navbar />
	);
};

export default MainPage;