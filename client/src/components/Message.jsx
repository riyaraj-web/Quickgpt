import React, {  useEffect } from 'react';
import { assets } from '../assets/assets'
import moment from 'moment'
import Markdown from 'react-markdown'

const Message = ({message }) => {

  useEffect(()=> {
    Prism.highlightAll()
  },[message.content])
}
const Markdown = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br>') }} />;
};

// Mock moment function for timestamp formatting
const moment = (timestamp) => {
  const now = new Date();
  const messageTime = new Date(timestamp);
  const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
};

const ChatMessage = ({ message }) => {
  return (
    <div className='flex flex-col gap-2 p-3 px-4 max-w-xs sm:max-w-md md:max-w-2xl bg-white/80 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 rounded-lg shadow-sm'>
      {message.isImage ? (
        <img 
          src={message.content} 
          alt="Uploaded image" 
          className='w-full max-w-sm rounded-lg object-cover'
          style={{ maxHeight: '300px' }}
        />
      ) : (
        <div className='text-sm text-gray-800 dark:text-gray-200'>
          <Markdown>{message.content}</Markdown>
        </div>
      )}
      <span className='text-xs text-gray-500 dark:text-purple-300/70 self-end'>
        {moment(message.timestamp)}
      </span>
    </div>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 rounded-lg p-4 shadow-sm">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div 
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
            style={{animationDelay: '0.1s'}}
          ></div>
          <div 
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
            style={{animationDelay: '0.2s'}}
          ></div>
        </div>
        <span className="text-xs text-gray-500 dark:text-purple-300/70 ml-1">AI is typing...</span>
      </div>
    </div>
  );
};

const ChatGPTClone = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      isImage: false,
      timestamp: Date.now() - 300000,
      sender: 'ai'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      content: inputValue,
      isImage: false,
      timestamp: Date.now(),
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with realistic delay
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        content: `Thank you for your message: "${currentInput}". This is a simulated AI response. The chat interface is now working with proper image uploads, dark mode toggle, loading indicators, and responsive design!`,
        isImage: false,
        timestamp: Date.now(),
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageMessage = {
          id: Date.now(),
          content: event.target.result,
          isImage: true,
          timestamp: Date.now(),
          sender: 'user'
        };
        setMessages(prev => [...prev, imageMessage]);
        
        // Simulate AI response to image
        setIsLoading(true);
        setTimeout(() => {
          const aiResponse = {
            id: Date.now() + 1,
            content: "I can see you've uploaded an image! This is a demo response. In a real application, I would analyze the image content and provide relevant feedback.",
            isImage: false,
            timestamp: Date.now(),
            sender: 'ai'
          };
          setMessages(prev => [...prev, aiResponse]);
          setIsLoading(false);
        }, 2500);
      };
      reader.readAsDataURL(file);
    }
    // Reset file input
    e.target.value = '';
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 md:p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            ChatGPT Clone
          </h1>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <ChatMessage message={message} />
            </div>
          ))}
          
          {isLoading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-3 md:p-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-2 md:gap-3">
            {/* Message Input */}
            <div className="flex-1 min-w-0">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors text-sm md:text-base"
                rows={1}
                style={{ 
                  minHeight: '48px', 
                  maxHeight: '120px',
                  resize: 'none'
                }}
                disabled={isLoading}
              />
            </div>
            
            {/* Image Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="flex-shrink-0 p-3 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Upload image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            
            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="flex-shrink-0 bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              title="Send message"
            >
              {isLoading ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Upload Status */}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
            Supports images up to 5MB • Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickGPT;