import React from 'react';
import { NavBar } from './NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import './App.css';

// Páginas
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Mainpage from './Pages/Mainpage/Mainpage';
import Store from './Pages/Store/Store';
import Progress from './Pages/Progress/Progress';
import Settings from './Pages/Settings/Settings';
import Products from './Pages/Products/Products';
import Period from './Pages/Period-section/Period';
import HomePage from './Pages/HomePage/homepage';
import Pregnancy from './Pages/Pregnancy/Pregnancy';
import Breakfast from './Pages/Recipes/Breakfast';
import Lunch from './Pages/Recipes/Lunch';
import Dinner from './Pages/Recipes/Dinner';
import Snack from './Pages/Recipes/Snack';

import { Routes, Route } from 'react-router-dom';

// Clerk
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/Login" />
      </SignedOut>
    </>
  );
}

function App() {
  const location = useLocation();
  const hiddenNavbarRoutes = ['/', '/Login', '/Register'];

  const showNavbar = !hiddenNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <NavBar />}

      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Protegidas */}
        <Route path="/Store" element={
          <ProtectedRoute>
            <Store />
          </ProtectedRoute>
        } />

        <Route path="/Progress" element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        } />

        <Route path="/Settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />

        <Route path="/Products" element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        } />

        <Route path="/Period" element={
          <ProtectedRoute>
            <Period />
          </ProtectedRoute>
        } />

        <Route path="/HomePage" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="/Pregnancy" element={
          <ProtectedRoute>
            <Pregnancy />
          </ProtectedRoute>
        } />

        <Route path="/Breakfast" element={
          <ProtectedRoute>
            <Breakfast />
          </ProtectedRoute>
        } />

        <Route path="/Lunch" element={
          <ProtectedRoute>
            <Lunch />
          </ProtectedRoute>
        } />

        <Route path="/Dinner" element={
          <ProtectedRoute>
            <Dinner />
          </ProtectedRoute>
        } />

        <Route path="/Snack" element={
          <ProtectedRoute>
            <Snack />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
