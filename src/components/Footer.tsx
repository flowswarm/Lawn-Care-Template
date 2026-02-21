import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../constants';
import { ArrowUpRight, Leaf, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-primary/60 font-medium">// Our Insights</span>
          <h2 className="text-5xl md:text-6xl leading-tight">Read Our Articles Written By Professional.</h2>
          <p className="text-lg text-primary/70 leading-relaxed">
            We believe that gardening is more than just planting seeds; it's about nurturing life, fostering connections.
          </p>
          <button className="btn-primary">Explore All Blogs</button>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 w-full h-full border border-accent/30 rounded-3xl -z-10" />
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img src={BLOGS[0].image} alt={BLOGS[0].title} className="w-full aspect-[16/10] object-cover" referrerPolicy="no-referrer" />
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-accent px-4 py-1 rounded-full text-xs font-bold text-primary">{BLOGS[0].category}</span>
                <span className="text-primary/50 text-sm">{BLOGS[0].date}</span>
              </div>
              <h3 className="text-3xl font-bold text-primary leading-tight hover:text-accent transition-colors cursor-pointer">
                {BLOGS[0].title}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Newsletter</h3>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="absolute right-2 top-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
              <ArrowUpRight size={20} />
            </button>
          </div>
          <p className="text-white/60 text-sm">Stay Tuned And Subscribe to Our Newsletter.</p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Main Pages</h3>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Company</h3>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/service/single" className="hover:text-accent transition-colors">Service Single</Link></li>
            <li><Link to="/blog/single" className="hover:text-accent transition-colors">Blog Single</Link></li>
            <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link to="/project/single" className="hover:text-accent transition-colors">Project Single</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Template</h3>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/404" className="hover:text-accent transition-colors">404 Not Found</Link></li>
            <li><Link to="/password" className="hover:text-accent transition-colors">Password Protected</Link></li>
            <li><Link to="/changelog" className="hover:text-accent transition-colors">Changelog</Link></li>
            <li><Link to="/license" className="hover:text-accent transition-colors">License</Link></li>
            <li><Link to="/style-guide" className="hover:text-accent transition-colors">Style Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 py-12 border-t border-white/10">
        <div className="space-y-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Email Us</span>
          <p className="text-xl font-medium">info.zaigreen@gmail.com</p>
        </div>
        <div className="space-y-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Location</span>
          <p className="text-xl font-medium">174 Street Charleston, New York</p>
        </div>
        <div className="space-y-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Call Us Now</span>
          <p className="text-xl font-medium">(+880) 89993 88750</p>
        </div>
      </div>

      <div className="mt-12 bg-accent rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="text-accent" size={28} />
          </div>
          <span className="text-3xl font-bold text-primary">Zaigreen</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all">Facebook</button>
          <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all">Instagram</button>
          <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all">LinkedIn</button>
          <button className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all">Medium</button>
        </div>

        <div className="text-primary/60 text-sm text-center md:text-right">
          <p>© Copyright - Zaigreen | Designed by <span className="text-primary font-bold underline">Flowzai</span> / <span className="text-primary font-bold underline">Licenseing</span></p>
          <p>- Powered by <span className="text-primary font-bold underline">Webflow</span></p>
        </div>
      </div>
    </footer>
  );
};
