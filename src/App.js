import './App.css';
import Store from './Pages/Store/Store';
import Register from './Pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Store" element={<Store />} />
          <Route path="/Register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
