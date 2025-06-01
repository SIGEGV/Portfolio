
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent">
              Yash Dobriyal
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300">
            Backend Developer & ML/DL Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science student passionate about building scalable backend systems and exploring the frontiers of machine learning and deep learning. 
            Specialized in Python, Express.js ,and AI/ML technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Dehradun, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={18} />
              <span>+91-8979777935</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={18} />
              <span>yashdobriyal5688@gmail.com</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-gray-500/25"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-500 text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all duration-200"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/SIGEGV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-dobriyal-3948791b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
