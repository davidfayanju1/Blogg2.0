import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css'
import Nav from './components/Nav';
import { Details } from './pages/Details';
import Footer from './components/footer/Footer';
import TopicDetails from './pages/TopicDetails';
import ScrollToTop from './ScrollToTop';
import UserDetails from './pages/UserDetails';
import { AuthProvider } from './authContext';
import NewBlog from './pages/NewBlog';
import TrendingTopics from './components/topicDetails/TrendingTopics';
import Settings from './pages/Settings';
import List from './pages/List';

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
    <AuthProvider>
      <div className={ darkTheme ? 'dark' : ''}>
          <ScrollToTop />
          { pathname !== '/newBlog' && pathname !== '/login' && pathname !== '/signup' && pathname !== '/settings' && <Nav toggleTheme={ toggleTheme } darkTheme={ darkTheme }/>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/settings' element={<Settings toggleTheme={ toggleTheme } darkTheme={ darkTheme } />} />
            <Route path="/details/:id" element={<Details />} />          
            <Route path="/topicDetails/:name/*" element={<TopicDetails />} />
            <Route path="/userDetails/:id/*" element={<UserDetails />} />
            <Route path="/newBlog" element={ <NewBlog toggleTheme={ toggleTheme } darkTheme={ darkTheme } />} />
            <Route path='/list' element={ <List /> } />
          </Routes>
          {/* { pathname !== '/login' && pathname !== '/signup' && <Footer />} */}
      </div>
    </AuthProvider>
  );
}

export default App;
