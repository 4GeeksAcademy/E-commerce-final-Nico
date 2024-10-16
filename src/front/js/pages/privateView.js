import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import { Link } from "react-router-dom";

export const PrivateView = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		const token = sessionStorage.getItem('token');
		if (!token) {
			navigate('/login');
		}
	}, [navigate]);

	const handleLogOut = () => {
		sessionStorage.removeItem('token');

		navigate('/LogIn');
	};

	const handleShowModal = () => {
		setShowModal(true);
	};


	// const productsEl = document.querySelector(".products");
	// const cartItemsEl = document.querySelector(".cart-items");
	// const subtotalEl = document.querySelector(".subtotal");
	// const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

	// const productsArray = [
	// 	{
	// 		id: 0, name: 'Cozy White Mug', price: 7.99, imgSrc: "https://media.istockphoto.com/id/1414016924/photo/white-mockup-mug-with-copy-space-and-houseplant-at-the-background.jpg?s=612x612&w=0&k=20&c=2CCGUMWlr3yJrHGtYAo1ZDPChVfoWRZtAmD9qhwjPko=",
	// 		description: "Experience the ultimate in comfort and style with the Cozy White Mug! This beautifully designed mug embodies simplicity and elegance, making it a perfect addition to any kitchen or office",

	// 	},
	// 	{
	// 		id: 1, name: 'Crimson Red Mug', price: 4.99, imgSrc: "https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=",
	// 		description: "Ignite your passion for great coffee and tea with the Crimson Red Mug! This vibrant mug is more than just a drinkware piece—it's a bold statement. Hurry and dont miss out on this oportunity!",
	// 	},
	// 	{
	// 		id: 2, name: 'Verdant Green Mug', price: 6.99, imgSrc: "https://media.istockphoto.com/id/869295342/photo/image-of-coffee-cup-isolated-with-clipping-path.jpg?s=612x612&w=0&k=20&c=AWQmOCfkjecoezwGk-jFSWKEO6xRzBnM_Jkj5LcD0o~",
	// 		description: "Brighten your day with the Verdant Green Mug, a perfect blend of nature-inspired charm and functionality. This beautifully crafted mug showcases a rich green hue",
	// 	},
	// 	{
	// 		id: 3, name: 'Cream Elegance Mug', price: 10.99, imgSrc: "https://img.freepik.com/premium-photo/color-burst-chaos-coffee-mug-mockup-brand-merchandise_901408-7480.jpg",
	// 		description: "Introducing the Cream Elegance Mug, a timeless piece that embodies sophistication and warmth. This beautifully crafted mug features a soft cream color that complements any decor.",
	// 	},
	// 	{
	// 		id: 4, name: 'Blush Pink Mug', price: 5.99, imgSrc: "https://media.istockphoto.com/id/617374430/photo/pink-ceramic-cup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=TBBMp_4y1_K10vTn2Uv81RjA7I43sZv4Z3pxtb9Xq0A=",
	// 		description: "Elevate your sipping experience with the charming Blush Pink Mug! This delightful mug is a perfect blend of style and functionality, designed to bring a touch of elegance to your daily routine",
	// 	},
	// 	{
	// 		id: 5, name: 'Sunset Orange Mug', price: 7.99, imgSrc: "https://media.istockphoto.com/id/1146776554/fr/photo/gros-plan-de-tasse-%C3%A0-vapeur-de-caf%C3%A9-sur-comptoir-de-cuisine-en-d%C3%A9but-de-matin%C3%A9e.jpg?s=612x612&w=0&k=20&c=MwezknFHCfrKL2i8KEv8WZGU8KqSVSmJp9UwrMT3yIs=",
	// 		description: "Brighten up your day with the Sunset Orange Mug! This vibrant mug is designed to add a pop of color to your morning routine or afternoon break. Hurry and dont miss this oportunity.",
	// 	},
	// 	{
	// 		id: 6, name: 'Cozy Sip Mug', price: 11.99, imgSrc: "https://img.freepik.com/premium-photo/white-coffee-mug-wooden-table-with-words-o-side_1058796-39492.jpg",
	// 		description: "Introducing the Cozy Sip Mug, designed with your comfort in mind. This mug combines style and functionality to create the ultimate sipping experience.",
	// 	},
	// 	{
	// 		id: 7, name: 'Kiyomi Mug', price: 15.99, imgSrc: "https://www.shutterstock.com/image-photo/yellow-ceramic-mug-isolated-on-600nw-2224244583.jpg",
	// 		description: "Introducing the Kiyomi Mug, a tribute to the elegance and tradition of Japanese craftsmanship. Inspired by timeless Japanese design.",
	// 	},
	// 	{
	// 		id: 8, name: 'Luxe Mug', price: 10.99, imgSrc: "https://parkstreetbooks.com/cdn/shop/files/C40004_20_02_G_001_829x828_jpg_829x.webp?v=1701032167",
	// 		description: "Introducing the Luxe Mug, where elegance meets everyday indulgence. Crafted with precision, this mug is more than just a vessel—it's a statement..",
	// 	},
	// ];

	// //Render Mugs

	// function displayProducts(products) {
	// 	productsEl.innerHTML = '';
	// 	products.forEach((product) => {
	// 		productsEl.innerHTML += `
	// 			<div class="item">
	// 				<div class="item-container">
	// 					<div class="item-img">
	// 						<img src="${product.imgSrc}" alt="${product.name}">
	// 					</div>
	// 					<div class="desc">
	// 						<h2>${product.name}</h2>
	// 						<h2><small>$</small>${product.price}</h2>
	// 						<p>
	// 							${product.description}
	// 						</p>
	// 					</div>
	// 					<div class="add-to-cart" onclick="addToCart(${product.id})">
	// 						<img src="./icons/bag-plus.png" alt="add to cart">
	// 					</div>
	// 				</div>
	// 			</div>
	// 		`;
	// 	});
	// }
	// displayProducts(productsArray);

	// //Cart Array

	// let cart = JSON.parse(localStorage.getItem("CART")) || [];
	// updateCart();

	// // Add to Cart

	// function addToCart(id) {
	// 	if (cart.some((item) => item.id === id)) {
	// 		changeNumberOfUnits("plus", id);
	// 	} else {
	// 		const item = products.find((product) => product.id === id);
	// 		cart.push({
	// 			...item,
	// 			numberOfUnits: 1,
	// 		});
	// 	}
	// 	updateCart();
	// }

	// // Update Cart

	// function updateCart() {
	// 	renderCartItems();
	// 	renderSubtotal();

	// 	localStorage.setItem("CART", JSON.stringify(cart));
	// }

	// //Calculate and render Subtotal

	// function renderSubtotal() {
	// 	let totalPrice = 0,
	// 		totalItems = 0;

	// 	cart.forEach((item) => {
	// 		totalPrice += item.price * item.numberOfUnits;
	// 		totalItems += item.numberOfUnits;
	// 	});

	// 	subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
	// 	totalItemsInCartEl.innerHTML = totalItems;
	// }

	// // Render Cart Items

	// function renderCartItems() {
	// 	cartItemsEl.innerHTML = ""; // clear cart element
	// 	cart.forEach((item) => {
	// 		cartItemsEl.innerHTML += `
	// 		  <div class="cart-item">
	// 			  <div class="item-info" onclick="removeItemFromCart(${item.id})">
	// 				  <img src="${item.imgSrc}" alt="${item.name}">
	// 				  <h4>${item.name}</h4>
	// 			  </div>
	// 			  <div class="unit-price">
	// 				  <small>$</small>${item.price}
	// 			  </div>
	// 			  <div class="units">
	// 				  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
	// 				  <div class="number">${item.numberOfUnits}</div>
	// 				  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
	// 			  </div>
	// 		  </div>
	// 		`;
	// 	});
	// }

	// // Remove item from Cart

	// function removeItemFromCart(id) {
	// 	cart = cart.filter((item) => item.id !== id);

	// 	updateCart();
	// }

	// // Change number of units for an item

	// function changeNumberOfUnits(action, id) {
	// 	cart = cart.map((item) => {
	// 		let numberOfUnits = item.numberOfUnits;

	// 		if (item.id === id) {
	// 			if (action === "minus" && numberOfUnits > 1) {
	// 				numberOfUnits--;
	// 			} else if (action === "plus" && numberOfUnits < item.instock) {
	// 				numberOfUnits++;
	// 			}
	// 		}

	// 		return {
	// 			...item,
	// 			numberOfUnits,
	// 		};
	// 	});

	// 	updateCart();
	// }


	return (
		<div className="container">
			<nav className="navbar">
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" fill="black" className="bi bi-cup-hot-fill" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
						<path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
					</svg>
					<span className="navbar-brand mb-0 h1" style={{ color: "black", marginLeft: '8px' }}>
						Cups N' Mugs
					</span>
				</div>
				<div d-flex="true" gap-2="true">
					<div>
						{/* <button className="btn btn-dark" style={{ fontSize:"12px", padding:"5px 10px" }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
						<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
						</svg>
					</button>  */}
						<button onClick={handleLogOut} className="btn btn-danger" style={{ fontSize: "12px", padding: "5px 10px", margin: "10px" }}> Log Out </button>
					</div>
				</div>
			</nav>
			<div>
				<h1>Welcome!</h1>
			</div>
			<div className="products-list">
				<div className="row row-cols-1 row-cols-md-3">
					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://media.istockphoto.com/id/1414016924/photo/white-mockup-mug-with-copy-space-and-houseplant-at-the-background.jpg?s=612x612&w=0&k=20&c=2CCGUMWlr3yJrHGtYAo1ZDPChVfoWRZtAmD9qhwjPko=" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Cozy White Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Cozy White Mug</h5>
								<p className="card-text">Experience the ultimate in comfort and style with the Cozy White Mug!
									This beautifully designed mug embodies simplicity and elegance, making it a perfect addition to any kitchen or office.</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>7.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=" className="card-img-top" style={{ width: "250px", height: "220px" }} alt="Crimson Red Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Crimson Red Mug</h5>
								<p className="card-text">Ignite your passion for great coffee and tea with the Crimson Red Mug!
									This vibrant mug is more than just a drinkware piece—it's a bold statement. Hurry and dont miss out on this oportunity!</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>4.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://media.istockphoto.com/id/869295342/photo/image-of-coffee-cup-isolated-with-clipping-path.jpg?s=612x612&w=0&k=20&c=AWQmOCfkjecoezwGk-jFSWKEO6xRzBnM_Jkj5LcD0oU=" className="card-img-top" style={{ width: "250px", height: "220px" }} alt="Verdant Green Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Verdant Green Mug</h5>
								<p className="card-text">Brighten your day with the Verdant Green Mug,
									a perfect blend of nature-inspired charm and functionality.
									This beautifully crafted mug showcases a rich green hue.</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>6.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://img.freepik.com/premium-photo/color-burst-chaos-coffee-mug-mockup-brand-merchandise_901408-7480.jpg" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Cream Elegance Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Cream Elegance Mug</h5>
								<p className="card-text">Introducing the Cream Elegance Mug, a timeless piece that embodies sophistication and warmth.
									This beautifully crafted mug features a soft cream color that complements any decor.</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>10.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://media.istockphoto.com/id/617374430/photo/pink-ceramic-cup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=TBBMp_4y1_K10vTn2Uv81RjA7I43sZv4Z3pxtb9Xq0A=" className="card-img-top" style={{ width: "250px", height: "220px" }} alt="Blush Pink Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Blush Pink Mug</h5>
								<p className="card-text">Elevate your sipping experience with the charming Blush Pink Mug!
									This delightful mug is a perfect blend of style and functionality,
									designed to bring a touch of elegance to your daily routine</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>5.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://media.istockphoto.com/id/1146776554/fr/photo/gros-plan-de-tasse-%C3%A0-vapeur-de-caf%C3%A9-sur-comptoir-de-cuisine-en-d%C3%A9but-de-matin%C3%A9e.jpg?s=612x612&w=0&k=20&c=MwezknFHCfrKL2i8KEv8WZGU8KqSVSmJp9UwrMT3yIs=" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Sunset Orange Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Sunset Orange Mug</h5>
								<p className="card-text">Brighten up your day with the Sunset Orange Mug!
									This vibrant mug is designed to add a pop of color to your morning routine or afternoon break. Hurry and dont miss this oportunity.</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>7.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://img.freepik.com/premium-photo/white-coffee-mug-wooden-table-with-words-o-side_1058796-39492.jpg" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Cozy Sip Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Cozy Sip Mug</h5>
								<p className="card-text">Introducing the Cozy Sip Mug, designed with your comfort in mind.
									This mug combines style and functionality to create the ultimate sipping experience.</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>11.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://www.shutterstock.com/image-photo/yellow-ceramic-mug-isolated-on-600nw-2224244583.jpg" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Kiyomi Mug<" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Kiyomi Mug</h5>
								<p className="card-text">Introducing the Kiyomi Mug, a tribute to the elegance and tradition of Japanese craftsmanship.
									Inspired by timeless Japanese design. Hurry so you dont miss out!</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>15.99$</strong></p>
								</div>
								<div className="button-container">
									<button type="button" className="btn btn-dark">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col" style={{ marginBottom: '20px' }}>
						<div className="card h-100" style={{ width: "300px" }}>
							<div className="product">
								<img src="https://parkstreetbooks.com/cdn/shop/files/C40004_20_02_G_001_829x828_jpg_829x.webp?v=1701032167" className="card-img-top" style={{ width: "295px", height: "220px" }} alt="Luxe Mug" />
							</div>
							<div className="card-body">
								<h5 className="card-title">Luxe Mug</h5>
								<p className="card-text">Introducing the Luxe Mug, where elegance meets everyday indulgence.
									Crafted with precision, this mug is more than just a vessel—it's a statement.. You wouldn'
									want to miss out!</p>
								<div>
									<p style={{ fontSize: '20px' }}><strong>10.99$</strong></p>
								</div>

								<div className="button-container">
									<button type="button" className="btn btn-dark"> Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
					<div className="cart" style={{ flex: "1", maxWidth: "400px", border: "1px solid #ddd", padding: "20px", marginLeft: "20px", alignSelf: "flex-start" }}>

						<div className="cart-items">
							{/* Render cart items here */}
						</div>

						<div className="cart-footer">
							<div className="subtotal">Subtotal (0 items): $0</div>
							<div className="checkout">
								<button onClick={handleShowModal} type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Proceed to checkout</button>

								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog modal-xl">
										<div class="modal-content">
											<div class="modal-header">
												<h1 class="modal-title fs-5" id="exampleModalLabel">Complete to finish purchase</h1>
												<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>

											<div class="modal-body">
												<form class="row g-3">
													<div class="col-md-4">
														<label for="inputcard" class="form-label">Card #</label>
														<input type="card" class="form-control" id="inputcard" placeholder="XXXXXXXXXXXXXXX" />
													</div>
													<div class="col-md-4">
														<label for="inputcvc" class="form-label">CVC #</label>
														<input type="cvc" class="form-control" id="inputcvc" placeholder="0000" />
													</div>
													<div class="col-md-6">
														<label for="inputname" class="form-label">First Name</label>
														<input type="name" class="form-control" id="inputname" />
													</div>
													<div class="col-md-6">
														<label for="inputlast" class="form-label">Last Name</label>
														<input type="last" class="form-control" id="inputlast" />
													</div>
													<div class="col-md-6">
														<label for="inputCity" class="form-label">City</label>
														<input type="city" class="form-control" id="inputCity" />
													</div>
													<div class="col-md-4">
														<label for="inputState" class="form-label">State</label>
														<select id="inputState" class="form-select">
															<option selected>Choose...</option>
															<option>Hawaii</option>
															<option>Florida</option>
															<option>Illinois</option>
															<option>Idaho</option>
															<option>Michigan</option>
														</select>
													</div>
													<div class="col-md-2">
														<label for="inputZip" class="form-label">Postal Code</label>
														<input type="zip" class="form-control" id="inputZip" />
													</div>

													<strong><p>We Accept:</p></strong>

													<div class="cards">

														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
															<label class="form-check-label" for="inlineRadio1"><i class="fa-brands fa-cc-mastercard"></i></label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2" />
															<label class="form-check-label" for="inlineRadio2"><i class="fa-brands fa-cc-visa"></i></label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option3" />
															<label class="form-check-label" for="inlineRadio3"><i class="fa-brands fa-cc-diners-club"></i></label>
														</div>
														<div class="form-check form-check-inline">
															<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option4" />
															<label class="form-check-label" for="inlineRadio4"><i class="fa-brands fa-cc-amex"></i></label>
														</div>

													</div>

													<div class="mb-3">
														<label for="exampleFormControlTextarea1" class="form-label">Message</label>
														<textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
													</div>

													<div class="modal-footer">
														<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
														<button class="btn btn-dark" type="submit">Pay</button>
													</div>
												</form>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default PrivateView;