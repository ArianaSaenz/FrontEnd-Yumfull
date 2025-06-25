
import './App.css';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import Pregnancy from './Pages/Pregnancy/Pregnancy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Store />

        <Routes>
          <Route path='/Store' element = {<Store/>} />
          <Route path='/Progress' element = {<Progress/>} />
          <Route path='/Settings' element = {<Settings/>} />
          <Route path='/Pregnancy' element = {<Pregnancy/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
