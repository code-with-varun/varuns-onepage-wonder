
import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 100k+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver features on time'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: [
        'Built and maintained web applications using React and Express.js',
        'Designed and implemented RESTful APIs and database schemas',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'Git']
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      location: 'California',
      period: '2016 - 2020',
      description: [
        'Graduated Magna Cum Laude with a 3.8 GPA',
        'Specialized in Software Engineering and Algorithms',
        'Led university coding bootcamp for underclassmen',
        'Completed senior capstone project on machine learning'
      ],
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms']
    },
    {
      type: 'certification',
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      location: 'Online',
      period: '2021',
      description: [
        'Demonstrated expertise in designing distributed systems on AWS',
        'Validated skills in security, reliability, and cost optimization',
        'Applied best practices for scalable cloud architectures'
      ],
      technologies: ['AWS', 'Cloud Architecture', 'Security', 'DevOps']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-green-400" />;
      case 'certification':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      {getIcon(exp.type)}
                      <span className="ml-2 text-sm text-gray-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-blue-400 font-semibold mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                    
                    <ul className="text-gray-300 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
