
import React from 'react';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Coffee className="w-8 h-8 text-purple-400" />,
      title: "Dedication",
      description: "Committed to continuous learning"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Innovation",
      description: "Creative problem-solving approach"
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Results",
      description: "Focused on delivering quality solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hello! I'm Varun, a passionate developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a dedicated software engineer with a passion for creating innovative solutions 
                and building exceptional digital experiences. With a strong foundation in modern 
                technologies and a keen eye for detail, I transform ideas into reality.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in software development has been driven by curiosity and a constant 
                desire to learn. I enjoy tackling complex problems and finding elegant solutions 
                that not only work well but also provide great user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                Creative Thinker
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
