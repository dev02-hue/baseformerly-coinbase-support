'use client';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaDiscord, 
  FaGithub, 
  FaTelegram,
  FaShieldAlt,
  FaRocket,
 
} from 'react-icons/fa';
import { FiMail, FiMapPin  as FiIconType, FiMapPin } from 'react-icons/fi';
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
        { name: 'Contact Us', href: '#contact' },
        { name: 'Status', href: '#status' },
        { name: 'Community', href: '#community' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'API', href: '#api' },
        { name: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Security', href: '#security' },
        { name: 'Legal', href: '#legal' },
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
    { icon: FiMail, text: 'trustwallet2758604@gmail.com' },
    { icon: FiMapPin, text: 'Global Support Team' },
  ];

  const trustBadges: TrustBadgeItem[] = [
    { icon: FaShieldAlt, title: 'Bank-Level Security', desc: 'Military grade encryption' },
    { icon: FaRocket, title: 'Lightning Fast', desc: '24/7 instant support' },
    { 
      customIcon: true, 
      title: 'Multi-Chain', 
      desc: 'Support for 50+ blockchains' 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
              >
                <Image 
                  src="/coinbaselogo.png" 
                  alt="TrustWallet Logo" 
                  width={24} 
                  height={24}
                  className="text-white"
                />
              </motion.div>
              <span className="text-2xl font-bold">TrustWallet Support</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner in the cryptocurrency world. 
              We provide fast, secure, and reliable support for all your wallet needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-400"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, color: '#60a5fa' }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
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
            >
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionIndex * 0.2) + (linkIndex * 0.1) }}
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      className="text-gray-400 hover:text-blue-400 transition-all"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800"
        >
          {trustBadges.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
            >
              {item.customIcon ? (
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image 
                    src="/coinbaselogo.png" 
                    alt="Multi-Chain Support" 
                    width={20} 
                    height={20}
                    className="text-blue-400"
                  />
                </div>
              ) : item.icon ? (
                <item.icon className="w-8 h-8 text-blue-400" />
              ) : null}
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-sm"
            >
              © 2024 TrustWallet Support. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <motion.a
                whileHover={{ color: '#60a5fa' }}
                href="#privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: '#60a5fa' }}
                href="#terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ color: '#60a5fa' }}
                href="#cookies"
                className="hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;