'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Mail, ArrowRight, Gamepad2 } from 'lucide-react';

export default function TaylorIntroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden flex items-center">
      
      {/* Floating Gaming Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
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
            <Gamepad2 className="w-6 h-6 text-blue-300" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Personal Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 text-pink-700 text-sm font-medium"
            >
              <Heart className="w-4 h-4" />
              Being a Light Through Storytelling
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              >
                Hey y&apos;all,
                <span className="block text-blue-600">I&apos;m Taylor</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 font-medium"
              >
                Game Developer & Community Builder
              </motion.p>
            </div>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-sm"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a game developer, storyteller, and lifelong gamer who believes games can truly change lives — 
                because they sure changed mine. I build meaningful, immersive worlds that help folks feel seen, 
                heard, and right at home.
              </p>
            </motion.div>

            {/* The Bungie Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 rounded-r-lg p-6"
            >
              <blockquote className="text-xl text-gray-800 italic leading-relaxed">
                &quot;The moment I walked into Bungie and got to playtest, something just clicked. 
                I remember thinking, &apos;This is it. This is where I&apos;m meant to be.&apos;&quot;
              </blockquote>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center bg-white/60 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-sm text-gray-600">Game Projects</div>
              </div>
              <div className="text-center bg-white/60 rounded-lg p-4">
                <div className="text-2xl font-bold text-pink-600">UE5</div>
                <div className="text-sm text-gray-600">Primary Engine</div>
              </div>
              <div className="text-center bg-white/60 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">2024</div>
                <div className="text-sm text-gray-600">Graduate</div>
              </div>
            </motion.div>

            {/* Contact Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 text-gray-600 bg-white/60 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Gaffney, SC</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white/60 px-3 py-2 rounded-lg">
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-sm">tmyeckley@yahoo.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Photo/Avatar Area */}
            <div className="relative">
              {/* Photo Placeholder */}
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-200 via-pink-100 to-purple-200 rounded-3xl border-4 border-white shadow-2xl overflow-hidden relative">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                  <div className="text-8xl mb-4">🎮</div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">Taylor&apos;s Photo</div>
                    <div className="text-sm text-gray-500">Professional Portrait</div>
                  </div>
                </div>
                
                {/* Silly Goose Studios Watermark */}
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs font-medium text-gray-600">Silly Goose Studios</span>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                🏆 Bungie Playtester
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                💡 Energy Source
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -right-8 bg-pink-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg transform -rotate-12"
              >
                ❤️ Community Builder
              </motion.div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 text-center"
            >
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">My Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  &quot;I care deeply about people — always have. If I can bring a little light, 
                  a little hope, or even just a little fun to somebody&apos;s day through my work, 
                  then I&apos;m doing what I&apos;m supposed to be doing.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Explore my journey</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Section Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-8"
      >
        <div className="flex flex-col gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
          <div className="w-3 h-3 bg-gray-300 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}