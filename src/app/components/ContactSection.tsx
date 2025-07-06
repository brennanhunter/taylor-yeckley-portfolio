'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Heart, MessageCircle, Download, ExternalLink, Users } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "tmyeckley@yahoo.com",
      href: "mailto:tmyeckley@yahoo.com",
      color: "from-blue-500 to-cyan-500",
      description: "Best way to reach me for opportunities"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(512) 781-6424",
      href: "tel:+15127816424",
      color: "from-green-500 to-emerald-500",
      description: "Feel free to give me a call"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Gaffney, SC",
      href: null,
      color: "from-purple-500 to-pink-500",
      description: "Based in South Carolina"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/taylor-yeckley-5691a15b/",
      color: "from-indigo-500 to-blue-500",
      description: "Let's connect professionally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-y-auto">
      
      {/* Background Elements - Community/Connection themed */}
      <div className="absolute inset-0">
        {/* Connecting lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="connect" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-400" />
                <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-purple-300" />
                <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-purple-300" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#connect)" />
          </svg>
        </div>
        
        {/* Floating hearts - representing her caring nature */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
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
            <Heart className="w-4 h-4 text-pink-400" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          
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
              className="inline-flex items-center gap-3 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 text-pink-700 text-sm font-medium mb-4"
            >
              <Heart className="w-5 h-5" />
              Let&apos;s Connect
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Get in
              <span className="block text-purple-600">Touch</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to create something unforgettable together? I&apos;d love to hear about your project 
              and discuss how we can build meaningful gaming experiences.
            </p>
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Personal Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Personal Message */}
              <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-300/20 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Hey y&apos;all!</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      I&apos;m always excited to connect with fellow game developers, potential collaborators, 
                      and teams looking for someone who brings heart and purpose to their projects.
                    </p>
                    <p>
                      Whether you&apos;re interested in my level design work, need UI/UX expertise, or just want 
                      to chat about creating games that feel like home for folks who need one, I&apos;d love to hear from you!
                    </p>
                    <p className="font-medium text-purple-600">
                      This journey means the world to me — and I&apos;m so thankful y&apos;all are here for the ride.
                    </p>
                  </div>
                </div>
              </div>

              {/* Silly Goose Studios Brand */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-orange-200 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🦢</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Silly Goose Studios</h4>
                  <p className="text-gray-700 text-sm">
                    Creating games with heart, purpose, and a little bit of that goose energy
                  </p>
                </div>
              </div>

              {/* What I'm Looking For */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  What I&apos;m Looking For
                </h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Entry-level game design or level design opportunities</li>
                  <li>• UI/UX design roles in gaming or interactive media</li>
                  <li>• Collaborative teams that value community and connection</li>
                  <li>• Projects focused on meaningful player experiences</li>
                  <li>• Remote or Southeast US-based positions</li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        <div className={`bg-gradient-to-r ${method.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                          <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full blur-lg" />
                          <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              {method.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-lg">{method.label}</div>
                              <div className="text-white/90">{method.value}</div>
                              <div className="text-white/70 text-sm mt-1">{method.description}</div>
                            </div>
                            {method.href.startsWith('http') && (
                              <ExternalLink className="w-5 h-5 text-white/70" />
                            )}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className={`bg-gradient-to-r ${method.color} rounded-xl p-6 text-white shadow-lg relative overflow-hidden`}>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full blur-lg" />
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{method.label}</div>
                            <div className="text-white/90">{method.value}</div>
                            <div className="text-white/70 text-sm mt-1">{method.description}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center"
              >
                <Download className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Download My Resume</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get the full details of my education, experience, and projects
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform inline-flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center"
              >
                <h5 className="font-semibold text-green-800 mb-1">Quick Response</h5>
                <p className="text-green-700 text-sm">
                  I typically respond to emails within 24 hours. Looking forward to connecting!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let&apos;s Create Something Unforgettable Together
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe the best games come from teams that care about their players and each other. 
                If you&apos;re looking for someone who brings technical skills, creative vision, and genuine passion 
                for building meaningful experiences, I&apos;d love to be part of your next adventure.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Ready to make some magic?</span>
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}