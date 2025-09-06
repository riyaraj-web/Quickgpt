// Enhanced QuickGPT with Roadmap Generation System

import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Plus, MessageSquare, Map, BookOpen, Code, Briefcase, Palette, Database } from 'lucide-react';

const QuickGPT = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  // Comprehensive Roadmap Database
  const roadmapDatabase = {
    // Programming & Development
    "web development": {
      title: "🌐 Web Development Roadmap",
      duration: "6-12 months",
      difficulty: "Beginner to Advanced",
      steps: [
        { phase: "Foundation", duration: "2-3 months", skills: ["HTML5", "CSS3", "JavaScript ES6+", "Git/GitHub", "Command Line"] },
        { phase: "Frontend Framework", duration: "2-3 months", skills: ["React.js/Vue.js", "State Management", "Component Architecture", "API Integration"] },
        { phase: "Backend Basics", duration: "2-3 months", skills: ["Node.js/Python", "Express.js/Django", "Databases (SQL/NoSQL)", "RESTful APIs"] },
        { phase: "Full Stack", duration: "2-3 months", skills: ["Authentication", "Deployment", "Testing", "Performance Optimization"] },
        { phase: "Advanced", duration: "Ongoing", skills: ["Microservices", "Cloud Services", "DevOps", "System Design"] }
      ],
      resources: ["FreeCodeCamp", "MDN Web Docs", "JavaScript30", "Full Stack Open"],
      projects: ["Personal Portfolio", "Todo App", "E-commerce Site", "Social Media Dashboard"]
    },

    "mobile development": {
      title: "📱 Mobile Development Roadmap",
      duration: "8-12 months",
      difficulty: "Intermediate",
      steps: [
        { phase: "Programming Foundation", duration: "2 months", skills: ["Java/Kotlin or Swift", "OOP Concepts", "Data Structures", "Version Control"] },
        { phase: "Platform Basics", duration: "3 months", skills: ["Android Studio/Xcode", "UI/UX Design", "Activity/Fragment Lifecycle", "Navigation"] },
        { phase: "Advanced Features", duration: "3 months", skills: ["Database Integration", "API Calls", "Push Notifications", "Location Services"] },
        { phase: "Cross-Platform", duration: "2-3 months", skills: ["React Native/Flutter", "State Management", "Platform-specific Features"] },
        { phase: "Publishing & Optimization", duration: "1-2 months", skills: ["App Store Guidelines", "Performance Optimization", "Analytics", "Monetization"] }
      ],
      resources: ["Android Developers", "iOS Developer Documentation", "React Native Docs", "Flutter.dev"],
      projects: ["Calculator App", "Weather App", "Chat Application", "Fitness Tracker"]
    },

    "data science": {
      title: "📊 Data Science Roadmap",
      duration: "10-15 months",
      difficulty: "Intermediate to Advanced",
      steps: [
        { phase: "Mathematics Foundation", duration: "2-3 months", skills: ["Statistics", "Linear Algebra", "Calculus", "Probability"] },
        { phase: "Programming", duration: "2-3 months", skills: ["Python", "R", "SQL", "Jupyter Notebooks", "Git"] },
        { phase: "Data Analysis", duration: "2-3 months", skills: ["Pandas", "NumPy", "Data Visualization", "Exploratory Data Analysis"] },
        { phase: "Machine Learning", duration: "3-4 months", skills: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"] },
        { phase: "Deep Learning", duration: "2-3 months", skills: ["TensorFlow/PyTorch", "Neural Networks", "CNNs", "RNNs"] },
        { phase: "Specialization", duration: "Ongoing", skills: ["NLP", "Computer Vision", "Time Series", "Big Data Tools"] }
      ],
      resources: ["Coursera Data Science", "Kaggle Learn", "Python for Data Analysis", "Hands-On Machine Learning"],
      projects: ["Exploratory Data Analysis", "Predictive Modeling", "Image Classification", "Recommendation System"]
    },

    "machine learning": {
      title: "🤖 Machine Learning Engineer Roadmap",
      duration: "12-18 months",
      difficulty: "Advanced",
      steps: [
        { phase: "Programming & Math", duration: "3 months", skills: ["Python/R", "Statistics", "Linear Algebra", "Calculus"] },
        { phase: "ML Fundamentals", duration: "3 months", skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Selection"] },
        { phase: "Advanced ML", duration: "3 months", skills: ["Ensemble Methods", "Deep Learning", "Neural Networks", "Hyperparameter Tuning"] },
        { phase: "MLOps", duration: "2 months", skills: ["Model Deployment", "CI/CD for ML", "Monitoring", "Version Control"] },
        { phase: "Specialization", duration: "3-6 months", skills: ["Computer Vision", "NLP", "Reinforcement Learning", "Time Series"] }
      ],
      resources: ["Andrew Ng's ML Course", "Fast.ai", "Papers with Code", "MLOps Community"],
      projects: ["Classification Project", "Recommendation Engine", "Computer Vision App", "MLOps Pipeline"]
    },

    // Career & Business
    "digital marketing": {
      title: "📈 Digital Marketing Roadmap",
      duration: "6-9 months",
      difficulty: "Beginner to Intermediate",
      steps: [
        { phase: "Foundation", duration: "1-2 months", skills: ["Marketing Fundamentals", "Consumer Psychology", "Brand Strategy", "Analytics Basics"] },
        { phase: "Content Marketing", duration: "2 months", skills: ["Content Strategy", "SEO", "Copywriting", "Social Media Marketing"] },
        { phase: "Paid Advertising", duration: "2 months", skills: ["Google Ads", "Facebook Ads", "PPC Campaigns", "Ad Optimization"] },
        { phase: "Analytics & Data", duration: "1-2 months", skills: ["Google Analytics", "Data Analysis", "A/B Testing", "Conversion Optimization"] },
        { phase: "Advanced Strategies", duration: "1-2 months", skills: ["Marketing Automation", "Email Marketing", "Influencer Marketing", "Growth Hacking"] }
      ],
      resources: ["Google Digital Marketing Course", "HubSpot Academy", "Moz SEO Guide", "Facebook Blueprint"],
      projects: ["Brand Campaign", "SEO Optimization", "Social Media Strategy", "PPC Campaign"]
    },

    "product management": {
      title: "🚀 Product Management Roadmap",
      duration: "8-12 months",
      difficulty: "Intermediate",
      steps: [
        { phase: "PM Fundamentals", duration: "2 months", skills: ["Product Strategy", "Market Research", "User Research", "Problem Definition"] },
        { phase: "Technical Skills", duration: "2 months", skills: ["Agile/Scrum", "Data Analysis", "A/B Testing", "Basic Tech Concepts"] },
        { phase: "Product Design", duration: "2 months", skills: ["UX/UI Principles", "Wireframing", "Prototyping", "User Journey Mapping"] },
        { phase: "Growth & Metrics", duration: "2 months", skills: ["KPI Definition", "Growth Strategies", "Analytics", "Business Intelligence"] },
        { phase: "Leadership", duration: "2-4 months", skills: ["Stakeholder Management", "Team Leadership", "Communication", "Strategic Planning"] }
      ],
      resources: ["Product School", "Coursera Product Management", "The Lean Startup", "Inspired by Marty Cagan"],
      projects: ["Product Requirement Document", "User Research Study", "Product Launch Plan", "Growth Strategy"]
    },

    // Creative & Design
    "ui ux design": {
      title: "🎨 UI/UX Design Roadmap",
      duration: "6-10 months",
      difficulty: "Beginner to Intermediate",
      steps: [
        { phase: "Design Fundamentals", duration: "2 months", skills: ["Design Principles", "Color Theory", "Typography", "Layout & Composition"] },
        { phase: "UX Research", duration: "2 months", skills: ["User Research", "Personas", "User Journey Mapping", "Usability Testing"] },
        { phase: "Design Tools", duration: "2 months", skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"] },
        { phase: "Interaction Design", duration: "1-2 months", skills: ["Micro-interactions", "Animation", "Responsive Design", "Accessibility"] },
        { phase: "Portfolio & Career", duration: "1-2 months", skills: ["Case Studies", "Portfolio Building", "Design Presentation", "Industry Trends"] }
      ],
      resources: ["Figma Academy", "Interaction Design Foundation", "Google UX Course", "Design Better by InVision"],
      projects: ["Mobile App Design", "Website Redesign", "Design System", "User Research Project"]
    },

    // Languages
    "english language": {
      title: "🗣️ English Language Mastery Roadmap",
      duration: "12-24 months",
      difficulty: "All Levels",
      steps: [
        { phase: "Foundation", duration: "3-4 months", skills: ["Basic Grammar", "Essential Vocabulary", "Pronunciation", "Simple Conversations"] },
        { phase: "Intermediate", duration: "4-6 months", skills: ["Complex Grammar", "Reading Comprehension", "Writing Skills", "Listening Practice"] },
        { phase: "Advanced", duration: "4-6 months", skills: ["Fluency Building", "Advanced Vocabulary", "Business English", "Academic Writing"] },
        { phase: "Mastery", duration: "4-8 months", skills: ["Native-like Expression", "Cultural Context", "Professional Communication", "Specialized Vocabulary"] }
      ],
      resources: ["Duolingo", "BBC Learning English", "Cambridge English", "TED Talks"],
      projects: ["Daily Journal", "Presentation Skills", "Interview Practice", "Essay Writing"]
    },

    // Finance & Investment
    "stock market": {
      title: "📈 Stock Market Investment Roadmap",
      duration: "6-12 months",
      difficulty: "Beginner to Advanced",
      steps: [
        { phase: "Financial Basics", duration: "1-2 months", skills: ["Financial Statements", "Basic Economics", "Risk Management", "Investment Types"] },
        { phase: "Market Fundamentals", duration: "2 months", skills: ["How Markets Work", "Stock Analysis", "Market Orders", "Portfolio Basics"] },
        { phase: "Analysis Techniques", duration: "2-3 months", skills: ["Fundamental Analysis", "Technical Analysis", "Valuation Methods", "Chart Reading"] },
        { phase: "Investment Strategies", duration: "2-3 months", skills: ["Value Investing", "Growth Investing", "Dividend Investing", "Risk Assessment"] },
        { phase: "Advanced Trading", duration: "2-4 months", skills: ["Options Trading", "Derivatives", "Advanced Strategies", "Psychology of Trading"] }
      ],
      resources: ["Investopedia", "SEC Investor.gov", "Benjamin Graham's Books", "Financial News Sources"],
      projects: ["Paper Trading", "Portfolio Analysis", "Investment Research", "Risk Assessment"]
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

  // Roadmap matching function
  const findBestRoadmap = (query) => {
    const queryLower = query.toLowerCase();
    
    // Direct matches
    for (const [key, roadmap] of Object.entries(roadmapDatabase)) {
      if (queryLower.includes(key)) {
        return roadmap;
      }
    }
    
    // Partial matches and synonyms
    const synonyms = {
      "frontend": "web development",
      "backend": "web development",
      "fullstack": "web development",
      "react": "web development",
      "javascript": "web development",
      "android": "mobile development",
      "ios": "mobile development",
      "flutter": "mobile development",
      "ai": "machine learning",
      "artificial intelligence": "machine learning",
      "python": "data science",
      "analytics": "data science",
      "seo": "digital marketing",
      "marketing": "digital marketing",
      "design": "ui ux design",
      "figma": "ui ux design",
      "investing": "stock market",
      "trading": "stock market"
    };
    
    for (const [synonym, roadmapKey] of Object.entries(synonyms)) {
      if (queryLower.includes(synonym)) {
        return roadmapDatabase[roadmapKey];
      }
    }
    
    return null;
  };

  // Format roadmap response
  const formatRoadmapResponse = (roadmap) => {
    let response = `${roadmap.title}\n\n`;
    response += `⏱️ **Duration:** ${roadmap.duration}\n`;
    response += `📊 **Difficulty:** ${roadmap.difficulty}\n\n`;
    
    response += "## 🗺️ Learning Path:\n\n";
    roadmap.steps.forEach((step, index) => {
      response += `**${index + 1}. ${step.phase}** (${step.duration})\n`;
      response += `${step.skills.map(skill => `• ${skill}`).join('\n')}\n\n`;
    });
    
    response += "## 📚 Recommended Resources:\n";
    response += `${roadmap.resources.map(resource => `• ${resource}`).join('\n')}\n\n`;
    
    response += "## 🛠️ Project Ideas:\n";
    response += `${roadmap.projects.map(project => `• ${project}`).join('\n')}\n\n`;
    
    response += "💡 **Pro Tip:** Start with the foundation phase and build projects as you learn. Practice consistently and don't rush through the phases!";
    
    return response;
  };

  // Update your getAIResponse function with this enhanced version

const getAIResponse = async (userMessage) => {
  const messageText = userMessage.toLowerCase();

  // Enhanced roadmap detection
  const isRoadmapRequest = (
    messageText.includes('roadmap') || 
    messageText.includes('learning path') || 
    messageText.includes('how to learn') ||
    messageText.includes('give roadmap for') ||
    messageText.includes('guide for') ||
    messageText.includes('step by step')
  );

  if (isRoadmapRequest) {
    // UI/UX Design Roadmap
    if (messageText.includes('ui') || messageText.includes('ux') || messageText.includes('design')) {
      return `🎨 **UI/UX Design Roadmap**

⏱️ **Duration:** 6-10 months
📊 **Difficulty:** Beginner to Intermediate

## 🗺️ Learning Path:

**1. Design Fundamentals** (2 months)
• Design Principles (contrast, alignment, repetition, proximity)
• Color Theory & Psychology
• Typography & Hierarchy
• Layout & Composition
• Visual Design Basics

**2. UX Research & Strategy** (2 months)
• User Research Methods
• Creating User Personas
• User Journey Mapping
• Information Architecture
• Wireframing & Prototyping

**3. Design Tools Mastery** (2 months)
• Figma (Primary tool)
• Adobe XD or Sketch
• Prototyping Tools
• Design Systems & Components
• Collaboration & Handoff

**4. Interaction Design** (1-2 months)
• Micro-interactions & Animations
• Responsive Design Principles
• Mobile-first Design
• Accessibility (WCAG Guidelines)
• Usability Testing

**5. Portfolio & Career** (1-2 months)
• Building Case Studies
• Portfolio Website Creation
• Design Process Documentation
• Interview Preparation
• Industry Networking

## 📚 Recommended Resources:
• Figma Academy (Free)
• Interaction Design Foundation
• Google UX Design Certificate
• "Don't Make Me Think" by Steve Krug
• "The Design of Everyday Things" by Don Norman
• Dribbble & Behance for inspiration

## 🛠️ Practice Projects:
• **Beginner:** Redesign a simple app interface
• **Intermediate:** Complete mobile app design with user flow
• **Advanced:** Design system for a web platform
• **Portfolio:** 3-4 detailed case studies

## 💡 Pro Tips:
• Start with free tools like Figma
• Focus on solving real problems, not just making things pretty
• Get feedback early and often
• Study existing designs you admire
• Practice daily - even 30 minutes helps!

**Next Steps:** Start with design fundamentals and download Figma. Want me to suggest specific beginner exercises?`;
    }

    // Machine Learning Roadmap
    if (messageText.includes('machine learning') || messageText.includes('ml') || messageText.includes('ai')) {
      return `🤖 **Machine Learning Engineer Roadmap**

⏱️ **Duration:** 12-18 months
📊 **Difficulty:** Advanced

## 🗺️ Learning Path:

**1. Programming & Math Foundation** (3 months)
• Python Programming (Advanced)
• Statistics & Probability
• Linear Algebra
• Calculus Basics
• Data Structures & Algorithms

**2. Data Science Basics** (2 months)
• Pandas & NumPy
• Data Cleaning & Preprocessing
• Exploratory Data Analysis
• Data Visualization (Matplotlib, Seaborn)
• SQL for Data

**3. Machine Learning Fundamentals** (3 months)
• Supervised Learning (Classification, Regression)
• Unsupervised Learning (Clustering, PCA)
• Feature Engineering & Selection
• Model Evaluation & Validation
• Scikit-learn Mastery

**4. Advanced ML & Deep Learning** (3 months)
• Neural Networks & Deep Learning
• TensorFlow/PyTorch
• Computer Vision (CNNs)
• Natural Language Processing (RNNs, Transformers)
• Advanced Algorithms

**5. MLOps & Production** (2-3 months)
• Model Deployment
• CI/CD for ML
• Model Monitoring & Maintenance
• Cloud Platforms (AWS, GCP, Azure)
• Docker & Kubernetes

**6. Specialization** (3-6 months)
• Choose: Computer Vision, NLP, Reinforcement Learning
• Research Papers & Implementation
• Contributing to Open Source
• Advanced Projects

## 📚 Recommended Resources:
• Andrew Ng's Machine Learning Course (Coursera)
• "Hands-On Machine Learning" by Aurélien Géron
• Fast.ai Practical Deep Learning
• Kaggle Learn & Competitions
• Papers with Code
• Google's Machine Learning Crash Course

## 🛠️ Project Portfolio:
• **Beginner:** House price prediction
• **Intermediate:** Movie recommendation system
• **Advanced:** Computer vision application
• **Expert:** End-to-end ML pipeline with deployment

## 💡 Pro Tips:
• Math is crucial - don't skip it
• Practice on real datasets (Kaggle)
• Implement algorithms from scratch first
• Focus on understanding, not just using libraries
• Stay updated with latest research papers

**Ready to start?** Begin with Python and statistics. Want specific learning resources for beginners?`;
    }

    // Web Development Roadmap
    if (messageText.includes('web') || messageText.includes('frontend') || messageText.includes('backend') || messageText.includes('fullstack')) {
      return `🌐 **Web Development Roadmap**

⏱️ **Duration:** 6-12 months
📊 **Difficulty:** Beginner to Advanced

## 🗺️ Learning Path:

**1. Foundation** (2-3 months)
• HTML5 (Semantic HTML, Forms, Accessibility)
• CSS3 (Flexbox, Grid, Animations, Responsive Design)
• JavaScript ES6+ (DOM, Events, Async/Await, Modules)
• Git & GitHub (Version Control)
• Command Line Basics

**2. Frontend Framework** (2-3 months)
• React.js (Components, Hooks, State Management)
• Modern Build Tools (Vite, Webpack)
• CSS Frameworks (Tailwind CSS)
• API Integration (Fetch, Axios)
• Testing (Jest, React Testing Library)

**3. Backend Development** (2-3 months)
• Node.js & Express.js
• Database (MongoDB/PostgreSQL)
• RESTful API Design
• Authentication & Security
• Server Deployment

**4. Full Stack Integration** (2-3 months)
• CRUD Operations
• Real-time Features (WebSockets)
• File Upload & Management
• Payment Integration
• Performance Optimization

**5. Advanced Topics** (Ongoing)
• TypeScript
• Next.js/Nuxt.js
• GraphQL
• Microservices
• Docker & DevOps

## 📚 Learning Resources:
• FreeCodeCamp (Free full curriculum)
• The Odin Project
• MDN Web Docs
• JavaScript30 by Wes Bos
• Full Stack Open (University of Helsinki)
• Scrimba Interactive Courses

## 🛠️ Project Ideas:
• **Beginner:** Personal Portfolio Website
• **Intermediate:** Todo App with Database
• **Advanced:** E-commerce Platform
• **Expert:** Social Media Application

## 💡 Success Tips:
• Build projects while learning theory
• Don't get stuck in tutorial hell - practice!
• Focus on one technology at a time
• Join developer communities
• Contribute to open source projects

**Start here:** Learn HTML/CSS basics first, then JavaScript. Want beginner-friendly project ideas?`;
    }

    // Data Science Roadmap
    if (messageText.includes('data science') || messageText.includes('data analyst') || messageText.includes('analytics')) {
      return `📊 **Data Science Roadmap**

⏱️ **Duration:** 10-15 months
📊 **Difficulty:** Intermediate to Advanced

🗺️ Learning Path:

1. Mathematics Foundation** (2-3 months)
• Statistics & Probability
• Descriptive & Inferential Statistics
• Linear Algebra Basics
• Calculus (optional but helpful)
• Statistical Distributions

2. Programming Skills** (2-3 months)
• Python (NumPy, Pandas, Matplotlib)
• SQL (Queries, Joins, Aggregations)
• Jupyter Notebooks
• Git Version Control
• Command Line

3. Data Analysis & Visualization** (2-3 months)
• Data Cleaning & Preprocessing
• Exploratory Data Analysis (EDA)
• Data Visualization (Seaborn, Plotly)
• Statistical Testing
• Business Intelligence Tools

4. Machine Learning** (3-4 months)
• Supervised Learning
• Unsupervised Learning
• Feature Engineering
• Model Evaluation
• Scikit-learn

5. Advanced Topics** (2-3 months)
• Deep Learning Basics
• Time Series Analysis
• A/B Testing
• Big Data Tools (Spark)
• Cloud Platforms

6. Specialization** (Ongoing)
• Domain Expertise (Finance, Healthcare, etc.)
• Advanced ML Techniques
• MLOps
• Research & Publications

 📚 Learning Resources:
• Python for Data Analysis by Wes McKinney
• Coursera Data Science Specialization
• Kaggle Learn (Free micro-courses)
• "Think Stats" by Allen Downey
• DataCamp or Udacity Nanodegrees

🛠️ Portfolio Projects:
• **Beginner:** Sales data analysis
• **Intermediate:** Customer segmentation
• **Advanced:** Predictive modeling project
• **Expert:** End-to-end ML pipeline

 💡 Career Tips:
• Build a strong GitHub portfolio
• Participate in Kaggle competitions
• Learn domain knowledge (business context)
• Network with other data professionals
• Stay updated with industry trends

Getting started:** Begin with Python basics and statistics. Need help choosing your first project?`;
    }

    // Default roadmap response for unmatched requests
    return `🗺️ **Learning Roadmaps Available:**

I can provide detailed roadmaps for:

💻 Programming & Tech:
• Web Development (Frontend/Backend/Full Stack)
• Mobile Development (Android/iOS/React Native)  
• Data Science & Analytics
• Machine Learning & AI
• Python Programming
• JavaScript Development

🎨 Design & Creative:
• UI/UX Design
• Graphic Design
• Product Design

📈 Business & Marketing:
• Digital Marketing
• Product Management
• Business Analysis

📚 Languages & Skills:
• English Language Learning
• Public Speaking
• Writing & Content Creation

💰 Finance:
• Stock Market & Investing
• Personal Finance

Example:Try asking "Give me a roadmap for web development" or "How to learn data science"

Which skill would you like a detailed roadmap for?`;
  }

  // Handle other questions (your existing logic)
  if (messageText.includes('hello') || messageText.includes('hi')) {
    return "👋 Hello! I'm QuickGPT, your AI assistant. I can help with questions, coding, writing, and create **detailed learning roadmaps** for any skill. Try asking 'Give me a roadmap for [skill]' - What can I help you with today?";
  }

  if (messageText.includes('what can you do')) {
    return `🚀 I can help you with:

• 💻 **Programming & Code** - Write, debug, explain code
• ✍️ **Writing & Content** - Essays, emails, creative writing  
• 🗺️ **Learning Roadmaps** - Detailed step-by-step guides for any skill
• 🧮 **Math & Problem Solving** - Calculations and explanations
• 🎓 **Education** - Explain concepts, answer questions
• 📊 **Analysis** - Data insights and research
• 🎨 **Creative Tasks** - Brainstorming and ideas

**🔥 Special Feature: Learning Roadmaps!**
Ask me: "Give me a roadmap for [any skill]" and I'll provide a detailed learning path with resources, projects, and timelines.

What would you like help with?`;
  }

  if (messageText.includes('joke') || messageText.includes('funny')) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything! 😄",
      "Why did the programmer quit his job? He didn't get arrays! 💻😂", 
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "What's a computer's favorite snack? Microchips! 🔌😋"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Default response
  return `I understand you're asking about "${userMessage}". I'm here to help! I can:

• Answer your question in detail
• Create a learning roadmap if you want to master this topic
• Provide step-by-step guidance
• Suggest resources and next steps

Would you like me to give you a **roadmap for learning this skill**, or would you prefer a direct answer to your question?

Just let me know how I can best help you! 😊`;
 }
};