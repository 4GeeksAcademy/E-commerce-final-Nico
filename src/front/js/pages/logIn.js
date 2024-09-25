import React, { useState } from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(process.env.BACKEND_URL + "/api/login",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (response.ok) {
            const { token } = await response.json();
            sessionStorage.setItem('token', token);
            window.location.href = '/PrivateView';
        } else {
            const result = await response.json();
            setError(result.msg);
        }    
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to="/">
	<button className="btn btn-primary">Back home</button>
</Link>
</form>
</div>
)}


