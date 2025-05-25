
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Varun
            </h3>
            <p className="text-gray-400">
              Full Stack Developer
            </p>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/code-with-varun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-400"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-purple-400"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by Varun
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2024 Varun. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
