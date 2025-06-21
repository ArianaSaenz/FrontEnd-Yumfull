import { NavBar } from './NavBar/NavBar';
import './App.css';
import Login from './Pages/Login/Login';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

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
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
