'use client';

import { motion } from 'framer-motion';
import { Heart, Stethoscope, Wrench, Home, Star, Gamepad2, Users } from 'lucide-react';

export default function TaylorJourneySection() {
  const experiences = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: <Stethoscope className="w-6 h-6" />,
      background: 'from-blue-400 to-cyan-500',
      skills: 'Empathy • User Needs • Care Under Pressure',
      impact: 'Understanding what people truly need'
    },
    {
      id: 'construction',
      title: 'Construction & HVAC',
      icon: <Wrench className="w-6 h-6" />,
      background: 'from-orange-400 to-red-500',
      skills: 'Systems Thinking • Problem Solving • Quality',
      impact: 'Building things that actually work'
    },
    {
      id: 'military',
      title: 'Military Life',
      icon: <Home className="w-6 h-6" />,
      background: 'from-green-400 to-emerald-500',
      skills: 'Adaptability • Community • Leadership',
      impact: 'Supporting others through change'
    },
    {
      id: 'gaming',
      title: 'Lifelong Gamer',
      icon: <Gamepad2 className="w-6 h-6" />,
      background: 'from-purple-400 to-pink-500',
      skills: 'User Experience • Persistence • Analysis',
      impact: 'Games as safe spaces and connection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden flex items-center py-8">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
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
            <Heart className="w-4 h-4 text-pink-300" />
          </motion.div>
        ))}
      </div>

      {/* Floating Photo Placeholders - Random placement, larger, angled */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Healthcare Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-16 left-12 w-28 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg border-4 border-white shadow-xl overflow-hidden transform -rotate-12"
          style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [-12, -10, -12]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-blue-400/20" />
            <div className="flex flex-col items-center justify-center h-full text-blue-700">
              <Stethoscope className="w-8 h-8 mb-2" />
              <div className="text-sm font-bold">Healthcare</div>
              <div className="text-xs">CNA Work</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Construction Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 18 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-32 right-16 w-32 h-28 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg border-4 border-white shadow-xl overflow-hidden transform rotate-18"
          style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -6, 0],
              rotate: [18, 22, 18]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-orange-400/20" />
            <div className="flex flex-col items-center justify-center h-full text-orange-700">
              <Wrench className="w-8 h-8 mb-2" />
              <div className="text-sm font-bold">Construction</div>
              <div className="text-xs">& HVAC</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Military Life Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -25 }}
          animate={{ opacity: 1, scale: 1, rotate: -22 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-32 left-20 w-30 h-34 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg border-4 border-white shadow-xl overflow-hidden transform -rotate-22"
          style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [-22, -18, -22]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-green-400/20" />
            <div className="flex flex-col items-center justify-center h-full text-green-700">
              <Home className="w-8 h-8 mb-2" />
              <div className="text-sm font-bold">Military</div>
              <div className="text-xs">Wife Life</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Gaming Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-24 right-24 w-26 h-30 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg border-4 border-white shadow-xl overflow-hidden transform rotate-12"
          style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -7, 0],
              rotate: [12, 16, 12]
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-purple-400/20" />
            <div className="flex flex-col items-center justify-center h-full text-purple-700">
              <Gamepad2 className="w-8 h-8 mb-2" />
              <div className="text-sm font-bold">Lifelong</div>
              <div className="text-xs">Gamer</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bungie Moment Photo - Special placement */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute top-20 right-32 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full border-4 border-white shadow-xl overflow-hidden transform -rotate-5"
          style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotate: [-5, -2, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-yellow-400/30" />
            <div className="flex flex-col items-center justify-center h-full text-yellow-700">
              <Star className="w-6 h-6 mb-1" />
              <div className="text-xs font-bold text-center">Bungie</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional smaller floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute top-40 left-32 w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-lg border-2 border-white shadow-lg transform rotate-25"
        >
          <motion.div
            animate={{ 
              y: [0, -4, 0],
              rotate: [25, 30, 25]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <Heart className="w-4 h-4 text-pink-600" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="absolute bottom-40 right-12 w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full border-2 border-white shadow-lg transform -rotate-20"
        >
          <motion.div
            animate={{ 
              y: [0, -6, 0],
              rotate: [-20, -15, -20]
            }}
            transition={{ 
              duration: 5.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <Users className="w-4 h-4 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header - Much more compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-3 py-1 text-pink-700 text-xs font-medium mb-3"
            >
              <Heart className="w-3 h-3" />
              My Diverse Journey
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              From Many Worlds to
              <span className="block text-purple-600">Game Worlds</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Every experience shapes how I approach game design
            </p>
          </motion.div>

          {/* Experience Grid - Much smaller */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`bg-gradient-to-br ${exp.background} rounded-lg p-3 text-white shadow-lg relative overflow-hidden`}
              >
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="scale-75">{exp.icon}</div>
                    </div>
                    <h3 className="font-bold text-xs leading-tight">{exp.title}</h3>
                  </div>

                  {/* Skills - Very compact */}
                  <p className="text-white/90 text-xs font-medium mb-1 leading-tight">{exp.skills}</p>
                  
                  {/* Impact */}
                  <p className="text-white/80 text-xs italic leading-tight">{exp.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The Bungie Moment - Much smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-lg p-4 sm:p-6 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <Star className="w-4 h-4" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold mb-2">The Moment Everything Clicked</h3>
                
                <blockquote className="text-sm sm:text-base italic leading-relaxed mb-4 max-w-xl mx-auto">
                  &quot;The moment I walked into Bungie and got to playtest, something just clicked. 
                  I remember thinking, &apos;This is it. This is where I&apos;m meant to be.&apos;&quot;
                </blockquote>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Heart className="w-3 h-3" />
                    </div>
                    <h4 className="font-semibold text-xs">Passion</h4>
                    <p className="text-white/80 text-xs">More than games</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Users className="w-3 h-3" />
                    </div>
                    <h4 className="font-semibold text-xs">Teamwork</h4>
                    <p className="text-white/80 text-xs">Collaboration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                      <Gamepad2 className="w-3 h-3" />
                    </div>
                    <h4 className="font-semibold text-xs">Purpose</h4>
                    <p className="text-white/80 text-xs">Reaching people</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Message - Very compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-4"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-3 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                I&apos;ve worn a lot of hats in life, never stopped creating games with heart and purpose. 
                <span className="font-semibold text-purple-600">Games that feel like home for folks who need one.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}