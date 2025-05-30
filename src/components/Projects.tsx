
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "ASL Recognition System",
      description: "Engineered deep learning models using TensorFlow to classify hand gestures into sign language alphabets, achieving 95% accuracy. Implemented data augmentation strategies and real-time recognition with OpenCV.",
      tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision"],
      gradient: "from-blue-500 to-purple-500",
      image: "photo-1559827260-dc66d52bef19",
      date: "Jun 2024",
      githubUrl: "https://github.com/SIGEGV/sign-language-recognition"
    },
    {
      title: "Web Chat Application",
      description: "Created a real-time web chat application using the MERN stack and Socket.io. Enabled instant messaging with multiple participants simultaneously with a responsive interface.",
      tags: ["JavaScript", "MERN", "Socket.io", "MongoDB", "React"],
      gradient: "from-green-500 to-blue-500",
      image: "photo-1611224923853-80b023f02d71",
      date: "Jan 2024",
      githubUrl: "https://github.com/SIGEGV/Weeby-Chat-App"
    },
    {
      title: "Heart Disease Prediction",
      description: "Developed a machine learning application using K-Nearest Neighbors algorithm to predict heart disease. Conducted hyperparameter tuning and cross-validation for optimization.",
      tags: ["Python", "Machine Learning", "scikit-learn", "KNN", "Data Science"],
      gradient: "from-purple-500 to-pink-500",
      image: "photo-1559757148-5c350d0d3c56",
      date: "Mar 2024",
      githubUrl: "https://github.com/SIGEGV/Heart-Disease-Prediction-Model"
    },
    {
      title: "Plant Disease Detection",
      description: "Developed a deep learning model using Convolutional Neural Networks to identify and classify plant diseases from leaf images. Achieved high accuracy in detecting various plant diseases to help farmers make informed decisions.",
      tags: ["Python", "Deep Learning", "CNN", "TensorFlow", "Computer Vision"],
      gradient: "from-orange-500 to-red-500",
      image: "photo-1416879595882-3373a0480b5b",
      date: "May 2024",
      githubUrl: "https://github.com/SIGEGV/Plant-Doctor"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Showcasing innovative solutions combining backend engineering with cutting-edge AI/ML technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop&crop=center`}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-gray-900/90 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
