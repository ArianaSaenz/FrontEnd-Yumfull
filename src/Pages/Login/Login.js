import React from 'react';
import './Login.css';


function Login() {
  return (
    <div className="container">
      <div className="left-section">
        <div className="center-line">
          <div className="food-images">
            <img
              src="https://via.placeholder.com/150/FFD700/000000?text=Food+1"
              alt="Food Plate 1"
              className="food-image top-left"
            />
            <img
              src="https://via.placeholder.com/150/ADFF2F/000000?text=Food+2"
              alt="Food Plate 2"
              className="food-image top-right"
            />
            <img
              src="https://via.placeholder.com/150/87CEEB/000000?text=Food+3"
              alt="Food Plate 3"
              className="food-image bottom-center"
            />
          </div>
        </div>
      </div>

      <div className="right-section">
        <h1>Start the journey 🤩</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-button">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
