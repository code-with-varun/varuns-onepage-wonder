
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const text = roles[currentRole];
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayedText('');
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, currentRole, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm Varun
          </h1>
          
          <div className="text-2xl md:text-3xl text-blue-400 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
              {displayedText}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building exceptional digital experiences
            that make a difference in people's lives.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/code-with-varun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/70" />
      </button>
    </section>
  );
};

export default Hero;
