import { NavBar } from './NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import Register from './Pages/Register/Register';
import Mainpage from './Pages/Mainpage/Mainpage';
import Products from './Pages/Products/Products';
import Period from './Pages/Period-section/Period';
import HomePage from './Pages/HomePage/homepage';
import Pregnancy from './Pages/Pregnancy/Pregnancy';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Breakfast from './Pages/Recipes/Breakfast';
import Lunch from './Pages/Recipes/Lunch';
import Dinner from './Pages/Recipes/Dinner';
import Snack from './Pages/Recipes/Snack';

function App() {
  const location = useLocation();
  const hiddenNavbarRoutes = ['/', '/Login', '/Register'];

  const showNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <NavBar />}


      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Progress' element={<Progress />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Breakfast' element={<Breakfast />} />
        <Route path='/Lunch' element={<Lunch />} />
        <Route path='/Dinner' element={<Dinner />} />
        <Route path='/Snack' element={<Snack />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Period' element={<Period />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Pregnancy' element={<Pregnancy />} />


      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
