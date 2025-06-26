import { NavBar } from './NavBar/NavBar';
import './App.css';
import Login from './Pages/Login/Login';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import Register from './Pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Breakfast from './Pages/Recipes/Breakfast';
import Lunch from './Pages/Recipes/Lunch';
import Dinner from './Pages/Recipes/Dinner';
import Snack from './Pages/Recipes/Snack';

function App() {
  return (
    <div>
      <BrowserRouter>



        <NavBar />

        <Routes>
          <Route path='/Store' element={<Store />} />
          <Route path='/Progress' element={<Progress />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Breakfast' element={<Breakfast />} />
          <Route path='/Lunch' element={<Lunch />} />
          <Route path='/Dinner' element={<Dinner />} />
          <Route path='/Snack' element={<Snack />} />
          <Route path='/Register' element = {<Register/>} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
