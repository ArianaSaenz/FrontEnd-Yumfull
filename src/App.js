
import './App.css';
import Store from './Pages/Store/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Store />

        <Routes>
          <Route path='/Store' element = {<Store/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
