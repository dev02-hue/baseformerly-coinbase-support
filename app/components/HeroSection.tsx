'use client';
import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiZap, 
  
  FiArrowRight,
 
  FiUsers,
  FiClock,
  FiLayers,
  FiTrendingUp
} from 'react-icons/fi';
import TypingEffect from './TypingEffect';

const HeroSection = () => {
  const features = [
    { icon: FiShield, text: 'Enterprise Security' },
    { icon: FiZap, text: 'Enhanced Performance' },
    { icon: FiLayers, text: 'Multi-Chain Support' },
  ];

  const stats = [
    { icon: FiUsers, number: '50M+', label: 'Global Users' },
    { icon: FiTrendingUp, number: '$200B+', label: 'Assets Secured' },
    { icon: FiClock, number: '<1min', label: 'Response Time' },
  ];

  const typingTexts = [
    "wallet migration",
    "asset management", 
    "cross-chain swaps",
    "DeFi protocols",
    "NFT collections",
    "security features",
    "staking services",
    "dApp integrations"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        {/* Main Hero Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center px-4 py-3 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-blue-700 font-medium mb-8 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-2">
                <FiZap className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">Base Ecosystem</span>
                <span className="text-blue-600">•</span>
                <span className="text-gray-600">formerly Base Coinbase</span>
              </div>
            </motion.div>

            {/* Updated Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Base
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-700 mt-4">
                Ecosystem Support
              </span>
            </motion.h1>

            {/* Enhanced Subtitle with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center space-y-2">
                <span>Comprehensive support for</span>
                <div className="min-h-10">
                  <TypingEffect texts={typingTexts} />
                </div>
              </div>
            </motion.div>

            {/* Updated Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Your premier destination for Base Ecosystem support. 
              Get expert assistance for wallet management, cross-chain operations, 
              and the complete suite of Web3 services built on our enhanced platform.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg flex items-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span>Get Expert Support</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#2563eb' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                Explore Documentation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.text}</h3>
                <p className="text-gray-500 text-sm">
                  {index === 0 && "Bank-grade security protocols"}
                  {index === 1 && "Optimized for high-frequency trading"}
                  {index === 2 && "Support for 100+ blockchain networks"}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-gray-200/50 shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Millions</h3>
              <p className="text-gray-500">Industry-leading platform with proven track record</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Animation Elements */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-20 left-5% w-8 h-8 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -60, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute top-40 right-15% w-12 h-12 bg-linear-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute bottom-40 left-15% w-6 h-6 bg-linear-to-r from-green-400 to-blue-400 rounded-full blur-sm opacity-30"
        />
      </div>
    </div>
  );
};

export default HeroSection;