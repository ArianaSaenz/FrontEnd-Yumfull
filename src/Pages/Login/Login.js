import React from 'react';
import fruittoast from './imagenes/fruittoast.png';
import oatsfruit from './imagenes/oatsfruit.png';
import pupusas from './imagenes/pupusas.png';
import './Login.css';

function Login() {
  return (
    <div className="containerL">
      <div className="left-section">
        <div className="center-line">
          <div className="food-images">
            <img
              src={fruittoast}
              alt="Fruit Toast"
              className="food-image top-leftL"
            />
            <img
              src={oatsfruit}
              alt="Oats with Fruit"
              className="food-image top-rightL"
            />
            <img
              src={pupusas}
              alt="Pupusas"
              className="food-image bottom-centerL"
            />
          </div>
        </div>
      </div>

      <div className="right-section">
        <h1>Start the journey</h1>
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
