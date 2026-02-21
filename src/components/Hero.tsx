import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronDown, Leaf } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 bg-white sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
          <Leaf className="text-primary w-6 h-6" />
        </div>
        <span className="text-2xl font-bold text-primary">Zaigreen</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-primary/80 hover:text-primary font-medium flex items-center gap-1 transition-colors"
          >
            {link.name}
            {link.hasDropdown && <ChevronDown size={16} />}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-primary font-medium">Cart (0)</span>
        </div>
        <button className="btn-primary">Get A Quote</button>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="section-padding pt-12 pb-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      <div className="flex-1">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
        >
          Where Green Thumbs Begin & Gardens Flourish.
        </motion.h1>
      </div>
      <div className="flex-1 md:max-w-md">
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary/70 mb-8"
        >
          Imagine stepping into your perfect garden, full of vibrant flowers, thriving vegetables, and lush greenery with our expert advice.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="btn-accent text-lg px-8"
        >
          Discover More
        </motion.button>
      </div>
    </section>
  );
};

export const Features = ({ features }: { features: any[] }) => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-soft-bg flex items-center justify-center shadow-sm">
              <feature.icon className="text-primary w-6 h-6" />
            </div>
            <span className="font-medium text-primary">{feature.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
