
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by Varun
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span>© 2024 Varun. All rights reserved.</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
