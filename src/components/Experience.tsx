
import { Award, Trophy, ExternalLink } from "lucide-react";

export const Experience = () => {
  const education = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "GBPIET, Uttarakhand",
      period: "Oct 2021 – Jul 2025",
      location: "Pauri Garhwal, Uttarakhand",
      grade: "7.3/10 CGPA",
      description: "Specializing in computer science with focus on machine learning, data structures, and software engineering principles."
    },
    {
      title: "Senior Secondary (CBSE)",
      institution: "Times World School",
      period: "Completed",
      location: "Dehradun, Uttarakhand",
      grade: "88/100",
      description: "Strong foundation in mathematics and science, setting the groundwork for computer science studies."
    }
  ];

  const achievements = [
    {
      title: "Envisage Finalist",
      organization: "Shiv Nadar University, Delhi-NCR",
      description: "Selected as finalist in prestigious technology competition",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Machine Learning Certificate",
      organization: "Stanford University (Andrew NG)",
      description: "Supervised Machine Learning: Regression and Classification",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "LeetCode Problem Solver",
      organization: "LeetCode Platform",
      description: "Solved more than 450 coding problems demonstrating strong algorithmic skills",
      icon: <ExternalLink className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-400">
            Academic journey and notable accomplishments in technology and programming
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{edu.title}</h4>
                    <p className="text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-gray-400 font-medium block">{edu.period}</span>
                    <span className="text-green-400 font-semibold">{edu.grade}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-purple-400 font-medium mb-3">{achievement.organization}</p>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
