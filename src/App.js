import logo from './logo.svg';
import './App.css';

import './App.css';
import Store from './Pages/Recipes/Recipes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Recipes />

        <Routes>
          <Route path='/Recipes' element = {<Recipes/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
