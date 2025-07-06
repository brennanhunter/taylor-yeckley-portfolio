'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock, User, Monitor, Target, Code, Lightbulb } from 'lucide-react';

export default function CosmotileSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-y-auto">
      
      {/* Background Elements - Cosmic/Space themed */}
      <div className="absolute inset-0">
        {/* Cosmic grid effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating cosmic particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
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
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
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
            {/* Game Icon Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-4"
            >
              {/* Mini Game Icon - Replace with actual game screenshot */}
              <div className="w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-400 rounded border border-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm" />
              </div>
              Game Design Showcase
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              <span className="block text-blue-600">Cosmotile</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Time-based puzzle game with tile movement and map inversion mechanics
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
              <div className="aspect-video bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-xl border-4 border-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Cosmotile Gameplay</h4>
                  <p className="text-sm text-white/80">Tile-based puzzle mechanics</p>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="https://www.youtube.com/watch?v=WbrSX6YEWWI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <div className="font-semibold">Main Screenshot</div>
                    <div className="text-sm">Tile Puzzle Layout</div>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">1 Month</div>
                  <div className="text-sm text-gray-600">Timeline</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Solo</div>
                  <div className="text-sm text-gray-600">Team Size</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-4 text-center">
                  <Monitor className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">UE5</div>
                  <div className="text-sm text-gray-600">Engine</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-cyan-200 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Game Concept</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cosmotile is a time-based puzzle game where you move one tile at a time, collecting coins to unlock the exit. 
                  As you progress, levels grow more complex — demanding smarter moves, faster thinking, and careful planning.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Later stages introduce a twist: hit the right tile, and the entire map inverts — floors become walls, 
                  and everything you thought you knew flips on its head. Can you adapt fast enough to reach the end?
                </p>
              </div>

              {/* Technical Challenge */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Technical Challenge Solved</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I had an issue where the coins were picked up early, late, or randomly. I was able to fix that by getting rid of 
                  the Get Actor of Class node and going straight to the collect item.
                </p>
              </div>

              {/* Role */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">My Role</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-blue-600">Game Designer</span> - Responsible for core mechanics, 
                  puzzle design, and the innovative map inversion system.
                </p>
              </div>

              {/* Video Link */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Watch Gameplay</h4>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=WbrSX6YEWWI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
                >
                  <Play className="w-4 h-4" />
                  View Cosmotile Gameplay Video
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Development Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Development Process</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Coin Bug Screenshot */}
              <div className="bg-gradient-to-br from-red-200 to-orange-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🪙</div>
                    <div className="font-semibold text-sm">Coin Pick-up Bug</div>
                    <div className="text-xs">Before Fix</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Coins picking up randomly - technical challenge</p>
                  </div>
                </div>
              </div>

              {/* Fixed Version Screenshot */}
              <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="font-semibold text-sm">Coin Pick-up Fixed</div>
                    <div className="text-xs">After Solution</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Direct item collection - problem solved</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Core Game Features</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">One Tile Movement</h5>
                <p className="text-gray-600 text-sm">Move one tile at a time with strategic planning</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">Coin Collection</h5>
                <p className="text-gray-600 text-sm">Collect coins to unlock exit pathways</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-4 bg-pink-600 rounded transform rotate-45" />
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">Map Inversion</h5>
                <p className="text-gray-600 text-sm">Floors become walls in later stages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}