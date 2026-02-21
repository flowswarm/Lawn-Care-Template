import React from 'react';
import { motion } from 'motion/react';

import { Link } from 'react-router-dom';

export const StatsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="relative rounded-3xl overflow-hidden aspect-[21/9] group">
        <img 
          src="https://picsum.photos/seed/mowing/1920/800" 
          alt="Lawn Mowing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -20, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl flex items-center gap-4 max-w-xs"
        >
          <img 
            src="https://picsum.photos/seed/gardener/200/200" 
            alt="Gardener" 
            className="w-16 h-16 rounded-xl object-cover"
            referrerPolicy="no-referrer"
          />
          <div>
            <p className="text-xs text-primary/60 mb-1">80K+ Garden has been save and made from all over the world.</p>
            <p className="text-2xl font-bold text-primary">80K+ <span className="text-sm font-normal text-primary/60">Gardens</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <span className="text-primary/60 font-medium">// About us</span>
        <h2 className="text-5xl md:text-6xl leading-tight">Our Main Goal is Grow The Gardening Journey.</h2>
        <p className="text-lg text-primary/70 leading-relaxed">
          We believe that gardening is more than just planting seeds; it's about nurturing life, fostering connections, and creating spaces that inspire. From small urban balconies to sprawling backyard oases, mission is to empower everyone.
        </p>
        <div className="flex items-center gap-8">
          <Link to="/about" className="btn-primary">More About Us</Link>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">440+</span>
            <span className="text-sm text-primary/60">Worldwide over 440 completed projects</span>
          </div>
        </div>
        
        <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg">
           <div className="absolute top-0 left-0 w-full bg-accent py-2 text-center text-xs font-bold text-primary uppercase tracking-wider">Projects</div>
           <img src="https://picsum.photos/seed/holding-plant/400/600" alt="Projects" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 rounded-3xl -z-10" />
        <img 
          src="https://picsum.photos/seed/greenhouse/1200/1600" 
          alt="Gardening Journey" 
          className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
