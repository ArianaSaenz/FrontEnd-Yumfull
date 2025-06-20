import './Register.css';

import broccolishrimp from './Imagenes/broccolishrimp.png';
import fruittoast from './Imagenes/fruittoast.png';
import oatsfruit from './Imagenes/oatsfruit.png';


function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
     <div className="left-section">
  <div className="center-line"></div>
  <div className="food-images">
    <img src={broccolishrimp} alt="Food 1" className="food-img top" />
    <img src={fruittoast} alt="Food 2" className="food-img left" />
    <img src={oatsfruit} alt="Food 3" className="food-img right" />
  </div>
</div>


      <div className="right-section">
        <h1>Hello!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-button">Log In</button>
          <p className="create-account">Create an account</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
