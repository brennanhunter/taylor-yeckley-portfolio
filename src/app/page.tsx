'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Briefcase, Code, Mail, Gamepad2, MapPin } from 'lucide-react';
import TaylorIntroSection from './components/TaylorIntroSection';
import TaylorJourneySection from './components/TaylorJourneySection';
import LongWalkHomeSection from './components/LongWalkHomeSection';
import CosmotileSection from './components/CosmotileSection';
import DaybreakSection from './components/DaybreakSection';
import SlipstreamSection from './components/SlipstreamSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'about',
      title: 'About',
      icon: <User className="w-5 h-5" />,
      component: <TaylorIntroSection />
    },
    {
      id: 'journey',
      title: 'Journey',
      icon: <Heart className="w-5 h-5" />,
      component: <TaylorJourneySection />
    },
    {
      id: 'long-walk-home',
      title: 'Long Walk',
      icon: <div className="w-5 h-5 bg-gradient-to-br from-amber-300 to-orange-400 rounded border border-amber-400 flex items-center justify-center">
        <MapPin className="w-3 h-3 text-amber-800" />
      </div>,
      component: <LongWalkHomeSection />
    },
    {
      id: 'cosmotile',
      title: 'Cosmotile',
      icon: <Briefcase className="w-5 h-5" />,
      component: <CosmotileSection />
    },
    {
      id: 'daybreak',
      title: 'Daybreak',
      icon: <Code className="w-5 h-5" />,
      component: <DaybreakSection />
    },
    {
      id: 'slipstream',
      title: 'Slipstream',
      icon: <Gamepad2 className="w-5 h-5" />,
      component: <SlipstreamSection />
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <Code className="w-5 h-5" />,
      component: <SkillsSection />
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail className="w-5 h-5" />,
      component: <ContactSection />
    }
  ];

  return (
    <div className="relative h-screen">
      {/* Main Content Area */}
      <div className="h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="absolute inset-0 overflow-y-auto"
          >
            {sections[activeSection].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-2xl">
          <div className="container mx-auto px-6">
            <nav className="flex items-center justify-center py-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(index)}
                    className={`relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'text-gray-600 hover:text-blue-500 hover:bg-white/50'
                    }`}
                  >
                    {/* Icon */}
                    <span className={`transition-transform duration-300 ${
                      activeSection === index ? 'scale-110' : ''
                    }`}>
                      {section.icon}
                    </span>

                    {/* Label - only show on active */}
                    <AnimatePresence>
                      {activeSection === index && (
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 'auto', opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-medium text-sm whitespace-nowrap overflow-hidden"
                        >
                          {section.title}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Active indicator dot */}
                    {activeSection === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* Section Progress Dots */}
      <div className="fixed top-6 left-6 flex gap-2 z-40">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeSection 
                ? 'bg-blue-500 scale-125' 
                : index < activeSection 
                  ? 'bg-blue-300' 
                  : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed top-6 right-6 text-gray-500 text-sm bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 z-40"
      >
        Navigate with bottom menu
      </motion.div>
    </div>
  );
}