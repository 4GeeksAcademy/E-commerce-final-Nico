import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(process.env.BACKEND_URL + "/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        window.location.href = '/login';
      } else {
        const result = await response.json();
        setError(result.msg);
      }
    };

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <h1>Register</h1>
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-dark">Create Account</button>
  <Link to="/">
				<button className="btn m-2 btn-dark">Back home</button>
			</Link>
</form>
</div>
)};