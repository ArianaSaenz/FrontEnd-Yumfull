
import './App.css';
import Login from './Pages/Login/Login';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Register from './Pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>


        <Routes>
          <Route path='/Store' element = {<Store/>} />
          <Route path='/Progress' element = {<Progress/>} />
          <Route path='/Login' element = {<Login/>} />
          <Route path='/Register' element = {<Register/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
