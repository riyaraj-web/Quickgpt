import React from 'react';
import { useAppContext } from '../context/AppContext';

const Credits = () => {
  const { theme } = useAppContext();

  const technologies = [
    {
      category: "Frontend Framework",
      items: [
        { name: "React", version: "18.x", description: "JavaScript library for building user interfaces", url: "https://reactjs.org/" },
        { name: "React Router", version: "6.x", description: "Declarative routing for React", url: "https://reactrouter.com/" }
      ]
    },
    {
      category: "Styling & UI",
      items: [
        { name: "Tailwind CSS", version: "3.x", description: "Utility-first CSS framework", url: "https://tailwindcss.com/" },
        { name: "Lucide React", version: "latest", description: "Beautiful & consistent icons", url: "https://lucide.dev/" }
      ]
    },
    {
      category: "Build Tools",
      items: [
        { name: "Vite", version: "4.x", description: "Next generation frontend tooling", url: "https://vitejs.dev/" },
        { name: "Node.js", version: "18+", description: "JavaScript runtime environment", url: "https://nodejs.org/" }
      ]
    },
    {
      category: "Development Tools",
      items: [
        { name: "ESLint", version: "8.x", description: "JavaScript linting utility", url: "https://eslint.org/" },
        { name: "Prettier", version: "2.x", description: "Code formatter", url: "https://prettier.io/" }
      ]
    }
  ];

  const contributors = [
    {
      name: "Development Team",
      role: "Core Development",
      description: "Built the application architecture and core features"
    },
    {
      name: "Design Team",
      role: "UI/UX Design",
      description: "Created the user interface and user experience design"
    },
    {
      name: "Open Source Community",
      role: "Libraries & Tools",
      description: "Provided the amazing tools and libraries that power this application"
    }
  ];

  const acknowledgments = [
    {
      title: "React Team",
      description: "For creating and maintaining the React ecosystem that makes modern web development possible."
    },
    {
      title: "Tailwind CSS Team",
      description: "For the utility-first CSS framework that enabled rapid and consistent styling."
    },
    {
      title: "Vite Team",
      description: "For the lightning-fast build tool that enhanced our development experience."
    },
    {
      title: "Open Source Contributors",
      description: "To all the developers who contribute to open source projects - this app wouldn't exist without you."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Credits & Acknowledgments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            This project is made possible by the incredible work of developers, designers, 
            and the open source community. Here's our tribute to everyone who contributed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contributors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Contributors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {contributor.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {contributor.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {contributor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {contributor.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies Used
          </h2>
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  {tech.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 text-xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                            {item.version}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {item.description}
                        </p>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Thanks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Special Thanks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {acknowledgments.map((ack, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-blue-100 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {ack.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ack.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Info Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Project Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Built with Modern Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging the latest web technologies for optimal performance
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💝</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Open Source Powered
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built on the shoulders of amazing open source projects
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Community Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Made possible by the incredible developer community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Thank You! 🙏</h2>
            <p className="text-xl mb-6 opacity-90">
              This project exists because of the generous contributions of countless developers 
              who believe in open source and sharing knowledge.
            </p>
            <div className="flex justify-center space-x-6 text-lg">
              <span>Made with ❤️ by developers, for developers</span>
            </div>
          </div>
        </section>

        {/* Version Info */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-2">Application Version: 1.0.0</p>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;