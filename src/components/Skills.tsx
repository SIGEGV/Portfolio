
import { Database, Code, Terminal, Settings, GraduationCap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "Java", "C++", "C", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technologies & Tools",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Linux", "Flask", "GitHub", "MongoDB", "Express.js", "React", "Node.js", "Backend", "Redis", "Mongoose", "Postman", "Docker"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "ML/DL Libraries",
      icon: <Settings className="w-8 h-8" />,
      skills: ["TensorFlow", "OpenCV", "scikit-learn", "Pandas", "NumPy", "Keras"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Core Subjects",
      icon: <GraduationCap className="w-8 h-8" />,
      skills: ["Operating Systems", "DBMS", "Computer Networks", "Machine Learning", "Data Structures"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable systems and implementing advanced AI/ML solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
