'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock, User, Monitor, Target, Code, Lightbulb, Zap, Settings } from 'lucide-react';

export default function SlipstreamSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-y-auto">
      
      {/* Background Elements - 80s Neon/Futuristic themed */}
      <div className="absolute inset-0">
        {/* Neon grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating speed lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            animate={{
              x: [-100, window.innerWidth || 1200],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-8 h-0.5 bg-cyan-400 rounded-full" />
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
              className="inline-flex items-center gap-3 bg-cyan-100 border border-cyan-200 rounded-full px-4 py-2 text-cyan-700 text-sm font-medium mb-4"
            >
              {/* Mini Game Icon - Replace with actual game screenshot */}
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded border border-cyan-500 flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              Blueprint & Design Showcase
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              <span className="block text-cyan-600">Slipstream</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              High-velocity endless runner with '80s-inspired futuristic aesthetic
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column - Main Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main Screenshot Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 rounded-xl border-4 border-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Piece of Track in Viewport</h4>
                  <p className="text-sm text-white/80">Bold neons, clean contrasts, digital arcade vibe</p>
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
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏁</div>
                    <div className="font-semibold">Track Layout</div>
                    <div className="text-sm">80s Neon Aesthetic</div>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm border border-cyan-200 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">2023</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Solo</div>
                  <div className="text-sm text-gray-600">Team Size</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-4 text-center">
                  <Code className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Blueprint</div>
                  <div className="text-sm text-gray-600">Primary Tool</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-lg p-4 text-center">
                  <Target className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
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
                <p className="text-gray-700 leading-relaxed">
                  In Slipstream, every coin counts — and every one cranks up your speed. You're a high-velocity runner 
                  racing down a shifting track, dodging neon walls and weaving through chaos. The more you collect, 
                  the faster you go… until the inevitable collision ends your streak.
                </p>
              </div>

              {/* Role */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">My Role</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-cyan-600">Blueprint & Design</span> - Responsible for core systems, 
                  track generation mechanics, and collision detection systems.
                </p>
              </div>

              {/* Visual Design */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Visual Design</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I designed the color palette and lighting to reflect an '80s-inspired futuristic aesthetic — 
                  bold neons, clean contrasts, and a digital arcade vibe. The layout supports fast-paced gameplay 
                  with clear visual lanes and obstacle paths.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technical Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Technical Implementation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Spawn Track Blueprint */}
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚙️</div>
                    <div className="font-semibold text-sm">Spawn Track Blueprint</div>
                    <div className="text-xs">Endless Generation System</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Spawns track pieces as player runs, cleans up old ones behind</p>
                  </div>
                </div>
              </div>

              {/* Game Over System */}
              <div className="bg-gradient-to-br from-red-200 to-pink-200 rounded-lg border-2 border-white shadow-lg aspect-video relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💥</div>
                    <div className="font-semibold text-sm">Game Over</div>
                    <div className="text-xs">Collision Detection</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Simple overlap event to detect impact and end the run</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              System Design
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Track Generation</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This Blueprint keeps the game movin' by spawning track pieces as the player runs and cleaning up the old ones behind them. 
                  It's a smooth system that keeps things feeling endless without breaking the flow — no loading, no stutters, just non stop tracks.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Collision System</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This screenshot captures the custom Game Over sequence I designed for Slipstream, triggered when the player collides 
                  with a wall. Built using Unreal Engine, the sequence uses a simple overlap event to detect impact and immediately end 
                  the run, reinforcing the high-stakes pacing of the game.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Learning Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Development Impact</h4>
              <p className="text-gray-700 leading-relaxed">
                Building this taught me a lot about optimizing performance, using collision triggers, and making sure everything felt seamless, 
                even behind the scenes. The endless generation system maintains smooth gameplay flow while efficiently managing resources.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}