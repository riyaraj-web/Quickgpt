import React, { useState } from 'react';
import { Search, Plus, Moon, Volume2, Settings, Square, Maximize2 } from 'lucide-react';

const QuickGPTCommunity = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [credits] = useState(200);

  const communityImages = [
    {
      id: 1,
      color: 'bg-blue-400',
      title: 'Boy running on water'
    },
    {
      id: 2,
      color: 'bg-orange-400',
      title: 'Eagle at sunset'
    },
    {
      id: 3,
      color: 'bg-gray-600',
      title: 'Car under moon'
    },
    {
      id: 4,
      color: 'bg-orange-600',
      title: 'Tiger portrait'
    },
    {
      id: 5,
      color: 'bg-gray-800',
      title: 'Gaming setup'
    },
    {
      id: 6,
      color: 'bg-blue-600',
      title: 'Gaming PC'
    },
    {
      id: 7,
      color: 'bg-purple-600',
      title: 'City skyline'
    },
    {
      id: 8,
      color: 'bg-green-500',
      title: 'Forest view'
    }
  ];

  const recentChats = [
    { id: 1, title: "A boy running on water", time: "2 days ago" },
    { id: 2, title: "hello", time: "2 days ago" },
    { id: 3, title: "New Chat", time: "2 days ago" }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex`}>
      {/* Sidebar */}
      <div className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 flex flex-col`}>
        {/* Logo */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm">Q</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">QuickGPT</h1>
            <p className="text-sm text-gray-400">Intelligent AI Assistant</p>
          </div>
        </div>

        {/* New Chat Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </button>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900'
            } border border-gray-600 focus:outline-none focus:border-purple-500`}
          />
        </div>

        {/* Recent Chats */}
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-3 text-gray-300">Recent Chats</h3>
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <div
                key={chat.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
              >
                <div className="font-medium text-sm truncate">{chat.title}</div>
                <div className="text-xs text-gray-400 mt-1">{chat.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-3 mt-4">
          {/* Community Images */}
          <div className="flex items-center text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
            <Square className="w-4 h-4 mr-2" />
            Community Images
          </div>

          {/* Credits */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Credits</span>
            <span className="font-medium">{credits}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div className="bg-red-500 h-2 rounded-full w-3/5"></div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                darkMode ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className={`p-4 border-b ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
        }`}>
          <h2 className="text-xl font-semibold">Community Images</h2>
        </div>

        {/* Image Grid */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {communityImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer rounded-lg overflow-hidden aspect-video relative transition-transform hover:scale-105"
              >
                <div className={`w-full h-full ${image.color} flex items-center justify-center`}>
                  <span className="text-white font-medium text-sm text-center px-2">
                    {image.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-30 transition-colors">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Media Controls */}
        <div className={`p-4 flex items-center justify-between border-t ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
        }`}>
          <div className="flex items-center space-x-4">
            <Volume2 className="w-5 h-5 text-gray-400" />
            <div className="text-sm text-gray-400">1:56:45 / 6:08:44</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
              Create Community Page
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Square className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Square className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Maximize2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickGPTCommunity;