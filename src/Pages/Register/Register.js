
import fruittoast from './Imagenes/fruittoast.png';
import eggberries from './Imagenes/eggberries.png'; 
import pupusas from './Imagenes/pupusas.png';
import './Register.css';


function Register() {
  return (
    <div className="containerR">
      <div className="left-sectionRegister">
        <div className="center-line">
          <div className="food-images">
            <img
              src={fruittoast}
              alt="Fruit Toast"
              className="food-image top-leftR"
            />
            <img
              src={eggberries}
              alt="Eggs with Berries"
              className="food-image top-rightR"
            />
            <img
              src={pupusas}
              alt="Pupusas"
              className="food-image bottom-centerR"
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
