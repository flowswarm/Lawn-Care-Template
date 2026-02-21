import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, Clock, Maximize, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="text-center space-y-4 mb-16">
        <span className="text-primary/60 font-medium">// Recent Projects</span>
        <h2 className="text-5xl md:text-6xl">Our Green Masterpieces: Gardens That Inspire.</h2>
        <p className="text-primary/70 max-w-2xl mx-auto">
          Garden tree has blossomed into a leading company dedicated to providing innovative solutions for gardening.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-[2.5rem] overflow-hidden flex flex-col h-full"
          >
            <div className="p-8 space-y-6 flex-1">
              <div className="flex justify-between items-start">
                <span className="text-accent font-mono">[{project.id}]</span>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="text-accent" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mt-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            <div className="p-8 border-t border-white/10 grid grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-white/50 block">Location</span>
                <span className="font-medium flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
              </div>
              <div className="space-y-1">
                <span className="text-white/50 block">Time Duration</span>
                <span className="font-medium flex items-center gap-1"><Clock size={12} /> {project.duration}</span>
              </div>
              <div className="space-y-1">
                <span className="text-white/50 block">Square Meters</span>
                <span className="font-medium flex items-center gap-1"><Maximize size={12} /> {project.size}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link to="/projects" className="btn-accent px-12">Explore All Projects</Link>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-soft-bg/30">
      <div className="text-center space-y-4 mb-16">
        <span className="text-primary/60 font-medium">// Why Choose Us</span>
        <h2 className="text-5xl md:text-6xl max-w-4xl mx-auto">Rooted in Nature, Driven by Purpose: The Story of Our Gardening Adventure.</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-3 space-y-12">
          <div className="space-y-6">
            <p className="text-primary/70">We're more than just gardening resource we're your partners in growth. our journey started with a passion for plants.</p>
            <Link to="/about" className="btn-primary inline-block">More About Us</Link>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">440+</span>
                <span className="text-xs text-primary/60">Completed Projects</span>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">02M+</span>
                <span className="text-xs text-primary/60">Happy Customers</span>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">2015</span>
                <span className="text-xs text-primary/60">10 Years of Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <img 
            src="https://picsum.photos/seed/planting-tree/1000/1000" 
            alt="Planting Tree" 
            className="rounded-[3rem] w-full aspect-square object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
              <Maximize className="text-primary" size={32} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-primary">Detailed Estimate</h4>
              <p className="text-sm text-primary/60">Our services are designed to meet diverse need of individuals, businesses, and communities.</p>
            </div>
            <div className="flex flex-col gap-2">
               <div className="w-2 h-2 rounded-full bg-primary/20" />
               <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
               </div>
               <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3">
          <img 
            src="https://picsum.photos/seed/hand-plant/400/800" 
            alt="Hand Plant" 
            className="rounded-[2rem] w-full aspect-[3/5] object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
