import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css'
import Nav from './components/Nav';
import { Details } from './pages/Details';
import Footer from './components/footer/Footer';
import TopicDetails from './pages/TopicDetails';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('theme', JSON.stringify(darkTheme))
  }
  
  

  useEffect(() => {

    const recoverTheme = !JSON.parse(localStorage.getItem('theme'));

    setDarkTheme(recoverTheme);

  }, []);

  const { pathname } = useLocation();
  return (
    <div className={ darkTheme ? 'dark' : ''}>
        { pathname !== '/login' && pathname !== '/signup' && <Nav toggleTheme={ toggleTheme } darkTheme={ darkTheme }/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details/:id" element={<Details />} />          
          <Route path="/topicDetails/:name" element={<TopicDetails />} />
        </Routes>
        { pathname !== '/login' && pathname !== '/signup' && <Footer />}
    </div>
  );
}

export default App;