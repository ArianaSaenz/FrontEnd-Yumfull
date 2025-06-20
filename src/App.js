
import './App.css';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/Store' element = {<Store/>} />
          <Route path='/Progress' element = {<Progress/>} />
          <Route path='/Settings' element = {<Settings/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
