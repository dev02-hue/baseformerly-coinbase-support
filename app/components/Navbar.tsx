'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHelpCircle, FiMessageSquare, FiBook, FiSearch, FiShield, FiZap } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Help Center', icon: FiHelpCircle, href: '#help' },
    { name: 'Contact Support', icon: FiMessageSquare, href: '#contact' },
    { name: 'Documentation', icon: FiBook, href: '#docs' },
    { name: 'Security', icon: FiShield, href: '#security' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Branding */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10   rounded-xl flex items-center justify-center shadow-lg">
              <Image 
                src="/coinbase.png" 
                alt="Base Coinbase Logo" 
                width={24} 
                height={24}
                className=" "
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">
                Base Ecosystem
              </span>
              <span className="text-xs text-gray-500 font-medium">
                formerly Base Coinbase
              </span>
            </div>
          </motion.div>

          {/* Upgrade Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex items-center space-x-2 bg-linear-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-full border border-blue-200"
          >
            <FiZap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Updated & Enhanced
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: '#2563eb' }}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
            
            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Base documentation..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/80 transition-all duration-200"
              />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-xl mt-2 p-4 shadow-xl border border-gray-200"
            >
              {/* Mobile Upgrade Banner */}
              <div className="flex items-center space-x-2 bg-linear-to-r from-blue-50 to-purple-50 px-3 py-2 rounded-lg mb-3 border border-blue-200">
                <FiZap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Base Ecosystem - Enhanced Platform
                </span>
              </div>
              
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100 last:border-b-0 font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;