import React from "react";
import "../../styles/home.css";


export const Home = () => {

	return (
	<div className="home">
		<div className="container">
			<div className="flex md:flex-row flex-col justify-between py-5">
				<div className="relative pr-12 sm:pr-24 max-w-[700px]">
					<h1 className="text-3xl md:text-7xl mb-3">CUPS N' MUGS</h1>
				</div>
				<div>
					<p>
					Welcome to Cups N' Mugs, your one-stop destination for stylish, functional, and beautifully crafted drinkware! Whether you're looking for a cozy mug to enjoy your morning coffee, a sleek tumbler for your on-the-go lifestyle, 
					or a unique gift for a loved one, we have something for everyone. Our carefully curated collection features a wide range of designs, colors, and materials to suit any taste or occasion. 
					From elegant ceramics to modern style, each piece is crafted with quality and style in mind. Explore our selection and find the perfect cup or mug to elevate your sipping experience!
					</p>
				</div>
				</div>
	{/* ---CARDS START--- */}
				<div className="row row-cols-1 row-cols-md-3 g-4">
			<div className="col">
				<div className="card h-100">
				<img src="https://media.istockphoto.com/id/1414016924/photo/white-mockup-mug-with-copy-space-and-houseplant-at-the-background.jpg?s=612x612&w=0&k=20&c=2CCGUMWlr3yJrHGtYAo1ZDPChVfoWRZtAmD9qhwjPko=" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Cozy White Mug"/>
				<div className="card-body">
					<h5 className="card-title">Cozy White Mug</h5>
					<p className="card-text">Experience the ultimate in comfort and style with the Cozy White Mug! 
						This beautifully designed mug embodies simplicity and elegance, making it a perfect addition to any kitchen or office.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>7.99$</strong></p>
					</div>
				</div>
				
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=" className="card-img-top" style={{ width: "250px", height: "220px"}} alt="Crimson Red Mug"/>
				<div className="card-body">
					<h5 className="card-title">Crimson Red Mug</h5>
					<p className="card-text">Ignite your passion for great coffee and tea with the Crimson Red Mug! 
						This vibrant mug is more than just a drinkware piece—it's a bold statement. Hurry and dont miss out on this oportunity!</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>4.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://media.istockphoto.com/id/869295342/photo/image-of-coffee-cup-isolated-with-clipping-path.jpg?s=612x612&w=0&k=20&c=AWQmOCfkjecoezwGk-jFSWKEO6xRzBnM_Jkj5LcD0oU=" className="card-img-top" style={{ width: "250px", height: "220px"}} alt="Verdant Green Mug"/>
				<div className="card-body">
					<h5 className="card-title">Verdant Green Mug</h5>
					<p className="card-text">Brighten your day with the Verdant Green Mug, 
						a perfect blend of nature-inspired charm and functionality. 
						This beautifully crafted mug showcases a rich green hue.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>6.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://img.freepik.com/premium-photo/color-burst-chaos-coffee-mug-mockup-brand-merchandise_901408-7480.jpg" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Cream Elegance Mug"/>
				<div className="card-body">
					<h5 className="card-title">Cream Elegance Mug</h5>
					<p className="card-text">Introducing the Cream Elegance Mug, a timeless piece that embodies sophistication and warmth. 
						This beautifully crafted mug features a soft cream color that complements any decor.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>10.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://media.istockphoto.com/id/617374430/photo/pink-ceramic-cup-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=TBBMp_4y1_K10vTn2Uv81RjA7I43sZv4Z3pxtb9Xq0A=" className="card-img-top" style={{ width: "250px", height: "220px"}} alt="Blush Pink Mug"/>
				<div className="card-body">
					<h5 className="card-title">Blush Pink Mug</h5>
					<p className="card-text">Elevate your sipping experience with the charming Blush Pink Mug! 
						This delightful mug is a perfect blend of style and functionality, 
						designed to bring a touch of elegance to your daily routine</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>5.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://media.istockphoto.com/id/1146776554/fr/photo/gros-plan-de-tasse-%C3%A0-vapeur-de-caf%C3%A9-sur-comptoir-de-cuisine-en-d%C3%A9but-de-matin%C3%A9e.jpg?s=612x612&w=0&k=20&c=MwezknFHCfrKL2i8KEv8WZGU8KqSVSmJp9UwrMT3yIs=" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Sunset Orange Mug"/>
				<div className="card-body">
					<h5 className="card-title">Sunset Orange Mug</h5>
					<p className="card-text">Brighten up your day with the Sunset Orange Mug! 
						This vibrant mug is designed to add a pop of color to your morning routine or afternoon break. Hurry and dont miss this oportunity.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>7.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://img.freepik.com/premium-photo/white-coffee-mug-wooden-table-with-words-o-side_1058796-39492.jpg" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Cozy Sip Mug"/>
				<div className="card-body">
					<h5 className="card-title">Cozy Sip Mug</h5>
					<p className="card-text">Introducing the Cozy Sip Mug, designed with your comfort in mind. 
						This mug combines style and functionality to create the ultimate sipping experience.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>11.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://www.shutterstock.com/image-photo/yellow-ceramic-mug-isolated-on-600nw-2224244583.jpg" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Kiyomi Mug<"/>
				<div className="card-body">
					<h5 className="card-title">Kiyomi Mug</h5>
					<p className="card-text">Introducing the Kiyomi Mug, a tribute to the elegance and tradition of Japanese craftsmanship. 
						Inspired by timeless Japanese design.</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>15.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
				<img src="https://parkstreetbooks.com/cdn/shop/files/C40004_20_02_G_001_829x828_jpg_829x.webp?v=1701032167" className="card-img-top" style={{ width: "295px", height: "220px"}} alt="Luxe Mug"/>
				<div className="card-body">
					<h5 className="card-title">Luxe Mug</h5>
					<p className="card-text">Introducing the Luxe Mug, where elegance meets everyday indulgence. 
						Crafted with precision, this mug is more than just a vessel—it's a statement..</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>10.99$</strong></p>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	</div>
// {/* CARDS END */}
	);
};
