
import './App.css';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Store />

        <Routes>
          <Route path='/Store' element = {<Store/>} />
          <Route path='/Progress' element = {<Progress/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
