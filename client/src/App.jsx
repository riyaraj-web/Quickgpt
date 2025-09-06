import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import ChatBox from './components/ChatBox';
import Credits from './pages/Credits';
import Community from './pages/Community';
import { assets } from './assets/assets';
import './assets/prism.css'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation()

  if(pathname === '/loading') return <Loading />

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile menu button */}
      {!isMenuOpen && (
        <img 
          src={assets.menu_icon} 
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert" 
          onClick={() => setIsMenuOpen(true)} 
          alt="Menu"
        />
      )}
      
      {/* Sidebar */}
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;