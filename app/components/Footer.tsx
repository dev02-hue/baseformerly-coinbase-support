'use client';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaDiscord, 
  FaGithub, 
  FaTelegram,
  FaShieldAlt,
  FaRocket,
  FaLayerGroup,
  FaGlobe
} from 'react-icons/fa';
import { FiMail, FiMapPin  } from 'react-icons/fi';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface TrustBadgeItem {
  title: string;
  desc: string;
  customIcon?: boolean;
  icon?: IconType;
}

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact Support', href: '#contact' },
        { name: 'System Status', href: '#status' },
        { name: 'Community Forums', href: '#community' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'SDK Guides', href: '#sdk' },
        { name: 'Integration Tutorials', href: '#tutorials' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Base', href: '#about' },
        { name: 'Ecosystem', href: '#ecosystem' },
        { name: 'Security', href: '#security' },
        { name: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTelegram, href: '#', label: 'Telegram' },
  ];

  const contactInfo = [
    { icon: FiMail, text: 'support@base-ecosystem.com' },
    { icon: FiMapPin, text: 'Global Blockchain Support' },
  ];

  const trustBadges: TrustBadgeItem[] = [
    { icon: FaShieldAlt, title: 'Enterprise Security', desc: 'SOC 2 Compliant Infrastructure' },
    { icon: FaRocket, title: 'High Performance', desc: 'Sub-Second Response Times' },
    { icon: FaLayerGroup, title: 'Multi-Chain', desc: '100+ Blockchain Networks' },
    { icon: FaGlobe, title: 'Global Scale', desc: '50M+ Users Worldwide' },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-900 to-blue-900/20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-800/20" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12  rounded-xl flex items-center justify-center shadow-lg"
              >
                <Image 
                  src="/coinbase.png" 
                  alt="Base Ecosystem Logo" 
                  width={28} 
                  height={28}
                  className=" "
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Base Ecosystem</span>
                <span className="text-sm text-blue-300 font-medium">
                  formerly Base Coinbase
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              The premier platform for Web3 innovation and decentralized applications. 
              Providing enterprise-grade support for the next generation of blockchain technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <item.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="font-bold text-lg mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionIndex * 0.2) + (linkIndex * 0.1) }}
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-700/50"
        >
          {trustBadges.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-start space-x-4 p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-lg transition-shadow">
                {item.icon && <item.icon className="w-6 h-6 text-white" />}
              </div>
              <div>
                <div className="font-bold text-white mb-1 text-sm">{item.title}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center space-x-4"
            >
              <motion.p
                className="text-gray-400 text-sm"
              >
                © 2024 Base Ecosystem. All rights reserved.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full"
              >
                <span className="text-blue-300 text-xs font-medium">Enhanced Platform</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <motion.a
                whileHover={{ color: '#60a5fa', y: -1 }}
                href="#privacy"
                className="hover:text-blue-400 transition-all duration-300 text-xs font-medium"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: '#60a5fa', y: -1 }}
                href="#terms"
                className="hover:text-blue-400 transition-all duration-300 text-xs font-medium"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ color: '#60a5fa', y: -1 }}
                href="#compliance"
                className="hover:text-blue-400 transition-all duration-300 text-xs font-medium"
              >
                Compliance
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;