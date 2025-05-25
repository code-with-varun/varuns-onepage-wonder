
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/code-with-varun",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourhandle",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
            Let's create something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Let's Connect</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="mb-4">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center">
              <h4 className="text-white font-semibold mb-6 text-xl">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-110 text-gray-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
