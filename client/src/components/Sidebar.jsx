import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-800 inline-flex flex-col justify-between py-6 px-4 transition-all duration-300 ${
      isMenuOpen ? 'w-64' : 'w-16'
    } md:w-64`}>
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-5 cursor-pointer block md:hidden" 
            src={assets.menu_icon} 
            alt="Menu" 
          />
          <img className="w-8" src={assets.gemini_icon} alt="QuickGPT" />
          {(extended || isMenuOpen) && (
            <div>
              <h2 className="font-bold text-gray-900 dark:text-white">QuickGPT</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Intelligent AI Assistant</p>
            </div>
          )}
        </div>

        {/* New Chat Button */}
        <div 
          onClick={() => newChat()}
          className="mt-12 inline-flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <img className="w-5" src={assets.plus_icon} alt="New Chat" />
          {(extended || isMenuOpen) && <p>New Chat</p>}
        </div>

        {/* Recent Chats */}
        {(extended || isMenuOpen) && (
          <div className="flex flex-col">
            <p className="mt-8 mb-5 text-gray-700 dark:text-gray-300">Recent</p>
            {prevPrompts.map((item, index) => (
              <div 
                key={index}
                onClick={() => loadPrompt(item)} 
                className="flex items-start gap-2 p-2 pr-10 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <img className="w-5" src={assets.message_icon} alt="Message" />
                <p className="text-sm truncate">{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col">
        {/* Help Item */}
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <img className="w-5" src={assets.question_icon} alt="Help" />
          {(extended || isMenuOpen) && <p>Help</p>}
        </div>
        
        {/* Activity Item */}
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <img className="w-5" src={assets.history_icon} alt="Activity" />
          {(extended || isMenuOpen) && <p>Activity</p>}
        </div>
        
        {/* Settings Item */}
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <img className="w-5" src={assets.setting_icon} alt="Settings" />
          {(extended || isMenuOpen) && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;