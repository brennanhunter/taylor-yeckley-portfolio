'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock, User, Monitor, Target, Code, Lightbulb, TrendingUp, MapPin } from 'lucide-react';

export default function LongWalkHomeSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 relative overflow-y-auto">
      
      {/* Background Elements - Desert/Western themed */}
      <div className="absolute inset-0">
        {/* Subtle sand dunes effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-100/20 to-transparent" />
        
        {/* Floating dust particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-1 h-1 bg-orange-300 rounded-full" />
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
            {/* Game Icon Placeholder - This will be the mini icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-green-100 border border-green-200 rounded-full px-4 py-2 text-green-700 text-sm font-medium mb-4"
            >
              {/* Mini Game Icon - Replace with actual game screenshot */}
              <div className="w-6 h-6 bg-gradient-to-br from-amber-200 to-orange-300 rounded border border-amber-300 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-amber-700" />
              </div>
              Level Design Showcase
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              <span className="block text-green-600">The Long Walk</span>
              Home
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A quiet, story-rich walking sim through the remnants of a forgotten world
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column - Hero Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main Screenshot Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-amber-200 via-orange-200 to-red-200 rounded-xl border-4 border-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Overhead View - Farm Camp</h4>
                  <p className="text-sm text-white/80">Starting area layout & scenic composition</p>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏜️</div>
                    <div className="font-semibold">Main Screenshot</div>
                    <div className="text-sm">Farm Camp Overview</div>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm border border-green-200 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">1 Month</div>
                  <div className="text-sm text-gray-600">Timeline</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Solo</div>
                  <div className="text-sm text-gray-600">Team Size</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-4 text-center">
                  <Monitor className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">UE5</div>
                  <div className="text-sm text-gray-600">Engine</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-orange-200 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">PC</div>
                  <div className="text-sm text-gray-600">Platform</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Description */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">The Journey</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Starting at a lone campsite tucked in the hills, you'll wander through an abandoned saloon, 
                  uncover secrets beneath a ghost town, descend into a long-forgotten mine, and finally reach 
                  a quiet lake where something — or someone — waits across the water.
                </p>
                <p className="text-gray-600 text-sm italic">
                  It's a journey through silence, memory, and the stories left behind. No combat. No timer. 
                  Just you, the path, and the echoes it leaves behind.
                </p>
              </div>

              {/* Challenge */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Design Challenge</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Create an immersive narrative experience using only environmental storytelling and atmosphere, 
                  drawing inspiration from Destiny, Red Dead Redemption, and Elden Ring.
                </p>
              </div>

              {/* Technical Challenge */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Technical Challenge</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Overcame texture corruption in shared team files by implementing backup systems and 
                  texture management protocols — turning a setback into a learning opportunity.
                </p>
              </div>

              {/* Key Skills */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-600" />
                  Skills Demonstrated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Spatial Design', 'Atmosphere Creation', 'Story Pacing', 'Technical Problem Solving', 'Environmental Storytelling'].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Screenshot Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Development Showcase</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Screenshot 1 - Cornfield Redesign */}
              <div className="bg-gradient-to-br from-green-200 to-yellow-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌽</div>
                    <div className="font-semibold text-sm">Cornfield Redesign</div>
                    <div className="text-xs">Performance Optimization</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Early iteration - performance challenge solved</p>
                  </div>
                </div>
              </div>

              {/* Screenshot 2 - Focal Point Mapping */}
              <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <div className="font-semibold text-sm">Focal Point Mapping</div>
                    <div className="text-xs">Reference Integration</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Real-world inspiration mapped to game environment</p>
                  </div>
                </div>
              </div>

              {/* Screenshot 3 - Ghost Town */}
              <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏚️</div>
                    <div className="font-semibold text-sm">Ghost Town Streets</div>
                    <div className="text-xs">Atmospheric Design</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Environmental storytelling through layout</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact & Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Impact</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                First 6 minutes featured in team showcase video, demonstrating strong environmental 
                narrative skills and level design fundamentals.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Key Learning</h4>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Environmental storytelling is most powerful when players discover the narrative 
                naturally through exploration."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}