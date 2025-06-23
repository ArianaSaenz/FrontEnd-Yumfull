
import './App.css';
import Store from './Pages/Store/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Period } from './Pages/Period-section/Period';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Store />
        <Period />
        <Routes>
          <Route path='/Store' element = {<Store/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
