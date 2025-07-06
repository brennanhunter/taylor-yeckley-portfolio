'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Palette, Settings, Users, Lightbulb, Star } from 'lucide-react';

export default function SkillsSection() {
  const educationAchievements = [
    {
      degree: "Associate of Science in Game Development",
      school: "Full Sail University",
      graduation: "July 2024",
      type: "primary",
      description: "Hands-on experience building games solo and in teams using Unreal Engine 5 and Unity",
      skills: [
        "Level Design & Blockout",
        "Lighting & Environment Design", 
        "UX/UI Design",
        "Debugging & Game Testing",
        "Game Balance & Mechanics Tuning",
        "Board Game & Puzzle Prototyping"
      ],
      tools: "Unreal Engine 5, Unity, Blueprint, C#, Perforce, ClickUp, Figma, FigJam, Draw.io, MATLAB, PureRef, Maya"
    },
    {
      degree: "Certificate in Media Communications",
      school: "Full Sail University", 
      graduation: "June 2021",
      type: "secondary",
      description: "Studied the art of storytelling, branding, and digital presence through design and strategy",
      skills: [
        "Social Media Strategy & Brand Voice",
        "Color Theory, Font Psychology & Design Emotion", 
        "Content Analysis, Infographics & Blogging"
      ],
      tools: "Prezi, Canva, Figma"
    }
  ];

  const skillCategories = [
    {
      title: "Game Engines",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Unreal Engine 5", "Unity"]
    },
    {
      title: "Programming & Scripting", 
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Blueprint", "C#"]
    },
    {
      title: "Design & Pipeline",
      icon: <Palette className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500", 
      skills: ["Figma", "FigJam", "Perforce", "Draw.io", "PureRef", "MATLAB", "ClickUp", "Maya"]
    },
    {
      title: "Visuals & Branding",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["Canva", "Photoshop", "Prezi"]
    },
    {
      title: "Project Management",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["Trello", "Notion"]
    }
  ];

  const additionalSkills = [
    "Debugging", "Playtesting", "Lighting Design", "UX/UI", "Content Creation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-y-auto">
      
      {/* Background Elements - Academic/Achievement themed */}
      <div className="absolute inset-0">
        {/* Celebratory particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-3 h-3 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 pb-32">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 text-yellow-700 text-sm font-medium mb-4"
            >
              <GraduationCap className="w-5 h-5" />
              Education & Expertise
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Skills &
              <span className="block text-orange-600">Education</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Formal education combined with hands-on experience in game development and design
            </p>
          </motion.div>

          {/* Education Achievements - Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {educationAchievements.map((edu, index) => (
              <div
                key={index}
                className={`${
                  edu.type === 'primary' 
                    ? 'bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 border-yellow-300 shadow-xl' 
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg'
                } border-2 rounded-2xl p-8 relative overflow-hidden`}
              >
                {edu.type === 'primary' && (
                  <>
                    {/* Achievement badge for primary degree */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Recent Graduate
                      </div>
                    </div>
                    
                    {/* Celebratory background elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-300/30 rounded-full blur-xl" />
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-orange-300/30 rounded-full blur-lg" />
                  </>
                )}

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Degree Info */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        edu.type === 'primary' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`}>
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${
                          edu.type === 'primary' ? 'text-gray-900' : 'text-gray-800'
                        }`}>
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 font-medium">{edu.school}</p>
                        <p className={`text-sm font-semibold ${
                          edu.type === 'primary' ? 'text-orange-600' : 'text-blue-600'
                        }`}>
                          Graduated {edu.graduation}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Key Skills Gained */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Skills Gained:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              edu.type === 'primary' ? 'bg-orange-400' : 'bg-blue-400'
                            }`} />
                            <span className="text-gray-700 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Tools & Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Tools & Technologies:</h4>
                    <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2">
                        {edu.tools.split(', ').map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className={`px-3 py-1 rounded-lg text-sm font-medium ${
                              edu.type === 'primary' 
                                ? 'bg-orange-500/20 text-orange-700 border border-orange-200' 
                                : 'bg-blue-500/20 text-blue-700 border border-blue-200'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {edu.type === 'primary' && (
                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h5 className="font-semibold text-yellow-800 mb-2">Program Highlights:</h5>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• Learned both Blueprint and C# for gameplay scripting</li>
                          <li>• Designed full-circle game experiences: blockout to polish</li>
                          <li>• Collaborative tools & pipelines experience</li>
                          <li>• Solo and team-based game development</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Technical Arsenal</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white shadow-lg relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-3">{category.title}</h4>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-white/90 text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <h4 className="font-semibold text-gray-800 mb-4">Additional Skills</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bottom Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-yellow-700 mb-3">
                <GraduationCap className="w-5 h-5" />
                <span className="font-semibold">Recent Achievement</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Fresh Graduate Ready to Make an Impact
              </h4>
              <p className="text-gray-700 leading-relaxed">
                With my Associate of Science in Game Development completed in July 2024, I bring fresh knowledge 
                of current industry tools and practices, combined with hands-on experience across the full game 
                development pipeline from concept to polish.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}