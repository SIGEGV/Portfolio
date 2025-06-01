
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect & Collaborate
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss backend development, machine learning projects, or explore new opportunities? I'm always excited to connect with fellow developers and innovators.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Whether you want to collaborate on ML projects, discuss backend development, or just chat about technology, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" size={20} />
                  <div>
                    <p className="text-purple-400 font-medium">Email</p>
                    <a href="mailto:yashdobriyal5688@gmail.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                      yashdobriyal5688@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400" size={20} />
                  <div>
                    <p className="text-purple-400 font-medium">Phone</p>
                    <a href="tel:+918979777935" className="text-gray-300 hover:text-purple-300 transition-colors">
                      +91-8979777935
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={20} />
                  <div>
                    <p className="text-purple-400 font-medium">Location</p>
                    <p className="text-gray-300">Dehradun, Uttarakhand</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">What I Can Help With</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Backend development with Python and Flask</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Machine learning model development and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Full-stack web applications using MERN stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Computer vision and deep learning projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data analysis and algorithmic problem solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:yashdobriyal5688@gmail.com"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            Send Message
          </a>
          <a
            href="https://leetcode.com/u/yash_dobriyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200 flex items-center gap-2"
          >
            <ExternalLink size={18} />
            LeetCode Profile
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/SIGEGV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Github size={32} />
          </a>
          <a
            href="www.linkedin.com/in/yash-dobriyal-3948791b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Linkedin size={32} />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-gray-500">
            © 2024 Yash Dobriyal. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
