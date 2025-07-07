import { useNavigate } from 'react-router-dom';
import fruittoast from './Imagenes/fruittoast.png';
import eggberries from './Imagenes/eggberries.png'; 
import pupusas from './Imagenes/pupusas.png';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Aquí puedes validar datos o enviarlos al servidor

    // Y luego redirigir
    navigate("/Login");
  };

  return (
    <div className="containerR">
      {/* lado izquierdo */}
      <div className="left-sectionRegister">
        <div className="center-line">
          <div className="food-images">
            <img src={fruittoast} alt="Fruit Toast" className="food-image top-leftR" />
            <img src={eggberries} alt="Eggs with Berries" className="food-image top-rightR" />
            <img src={pupusas} alt="Pupusas" className="food-image bottom-centerR" />
          </div>
        </div>
      </div>

      {/* lado derecho */}
      <div className="right-sectionR">
        <h1>Start the journey</h1>
        <form onSubmit={handleRegister}>
          <div className="form-groupR">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" />
          </div>
          <div className="form-groupR">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Choose a username" />
          </div>
          <div className="form-groupR">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="form-groupR">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
          </div>

          <button type="submit" className="submit-buttonR">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
