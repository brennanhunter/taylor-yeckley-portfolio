'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Clock, User, Target, Palette, Lightbulb } from 'lucide-react';

export default function DaybreakSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-y-auto">
      
      {/* Background Elements - Dark/Gothic themed */}
      <div className="absolute inset-0">
        {/* Gothic pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.2) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating mystical particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 15 - 7, 0],
              scale: [1, 1.5, 1],
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
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
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
              className="inline-flex items-center gap-3 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 text-purple-700 text-sm font-medium mb-4"
            >
              {/* Mini Game Icon - Replace with actual game screenshot */}
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded border border-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-300 rounded-sm transform rotate-45" />
              </div>
              UI/UX Design Showcase
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              <span className="block text-purple-600">Daybreak</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Dungeon crawler rogue-like with procedurally generated dungeons and time-based survival mechanics
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
              <div className="aspect-video bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 rounded-xl border-4 border-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Daybreak</h4>
                  <p className="text-sm text-white/80">Start • Options • Quit</p>
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
                    <div className="text-6xl mb-4">🏰</div>
                    <div className="font-semibold">Main Menu</div>
                    <div className="text-sm">Cursed Castle Theme</div>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">1 Month</div>
                  <div className="text-sm text-gray-600">Timeline</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-lg p-4 text-center">
                  <User className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Solo</div>
                  <div className="text-sm text-gray-600">Team Size</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg p-4 text-center">
                  <Palette className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Figma</div>
                  <div className="text-sm text-gray-600">Design Tool</div>
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
                <p className="text-gray-700 leading-relaxed">
                  In Daybreak, players explore procedurally generated dungeons, battling enemies and gathering vital 
                  resources while racing against time to escape a cursed castle before sunrise — where death means 
                  permanent memory loss, and failure is just part of the journey to break the curse.
                </p>
              </div>

              {/* Role */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Palette className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">My Role</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium text-purple-600">UI/UX Designer</span> - Responsible for interface design, 
                  user flow, and creating intuitive navigation systems.
                </p>
              </div>

              {/* Key UI Features */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">UI Systems Designed</h4>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Cards of Fate - Tarot-inspired perk system</li>
                  <li>• Main Menu navigation flow</li>
                  <li>• Options Menu interface</li>
                  <li>• Core user experience design</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Design Process Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Design Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Paper Mock-Up */}
              <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg border-2 border-white shadow-lg aspect-square relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="font-semibold text-sm">First Paper Mock-Up</div>
                    <div className="text-xs">Initial Concepts</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">&quot;I may not be the greatest artist... but I sure know how to put my heart into it!&quot;</p>
                  </div>
                </div>
              </div>

              {/* Figma Wireframe */}
              <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg border-2 border-white shadow-lg aspect-square relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <div className="font-semibold text-sm">Low Fidelity Prototype</div>
                    <div className="text-xs">Figma Wireframe</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Core user flow: Main Menu to Options, Gameplay, Store, Powers</p>
                  </div>
                </div>
              </div>

              {/* Options Menu */}
              <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg border-2 border-white shadow-lg aspect-square relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚙️</div>
                    <div className="font-semibold text-sm">Options Menu</div>
                    <div className="text-xs">Navigation Design</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                    <p className="text-white text-xs">Clear visual feedback with hover highlighting</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards of Fate System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded transform rotate-45" />
              Cards of Fate System
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Design Concept</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Inspired by tarot, the Cards of Fate system grants players unique perks at the start of each dungeon run. 
                  Every card drawn offers a different advantage — from combat boosts to resource modifiers — but only for that playthrough.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">User Experience</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Perks reset after each run, forcing players to adapt to a fresh deck every time. When selecting a card, 
                  it highlights and expands on the right side of the screen for clarity. Once confirmed, the player is immediately 
                  launched back into the fight, armed with their chosen fate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">UI Design Philosophy</h4>
              <p className="text-gray-700 leading-relaxed">
                Accessible from the title screen, each menu provides clear visual feedback and intuitive navigation. 
                Every interface element highlights on hover, creating a smooth and responsive user experience from the very first screen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}