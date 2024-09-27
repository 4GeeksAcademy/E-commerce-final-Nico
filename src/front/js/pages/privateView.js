import React, { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const PrivateView = () => {
    const navigate = useNavigate ();
	const {store, actions} = useContext(Context);

useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token){
        navigate('/login');
    }
}, [navigate]);

const handleLogOut = () => {
    sessionStorage.removeItem('token');

    navigate('/LogIn');
};

return (
    <div className="home">
    <div className="container">
        <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" fill="black" className="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"/>
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"/>
            </svg>
            <span className="navbar-brand mb-0 h1" style={{ color: "black", marginLeft: '8px' }}>
                Cups N' Mugs
            </span>
        </div>
            <div d-flex="true" gap-2="true">
                <div>     
                    <button onClick={handleLogOut} className="btn btn-danger" style={{fontSize:"12px", padding:"5px 10px"}}> Log Out </button> 
                </div>
            </div>
        </nav>
        <div>
            <h1>Welcome!</h1>
        </div>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
						Inspired by timeless Japanese design. Hurry so you dont miss out!</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>15.99$</strong></p>
					</div>
                    <div className="button-container">
                        <button type="button" class="btn btn-dark">Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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
						Crafted with precision, this mug is more than just a vessel—it's a statement.. You wouldn'
						want to miss out!</p>
					<div>
						<p style={{fontSize:'20px'}}><strong>10.99$</strong></p>
					</div>
                    <div className="button-container">
                        <button type="button" class="btn btn-dark"> Add to Cart</button>
                        <button type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  						<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
						</button>
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