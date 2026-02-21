import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Hero';
import { Footer } from '../components/Footer';
import { ALL_PROJECTS } from '../constants';
import { TestimonialsSection, CTASection } from '../components/Team';
import { Leaf, MapPin, Clock, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://picsum.photos/seed/projects-hero/1920/1080" 
        alt="Projects Hero" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full text-white font-medium mb-8"
        >
          Projects
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight"
        >
          Our Green Masterpieces: Gardens That Inspire.
        </motion.h1>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <section className="section-padding">
      <div className="grid md:grid-cols-2 gap-8">
        {ALL_PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-[2.5rem] overflow-hidden flex flex-col h-full"
          >
            <div className="p-8 md:p-12 space-y-8 flex-1">
              <div className="flex justify-between items-start">
                <span className="text-accent font-mono text-lg">[{project.id}]</span>
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="text-accent" size={28} />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold leading-tight">{project.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed">{project.description}</p>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 border-t border-white/10 grid grid-cols-3 gap-8 text-sm">
              <div className="space-y-2">
                <span className="text-white/50 block uppercase tracking-widest text-[10px]">Location</span>
                <span className="font-medium flex items-center gap-2"><MapPin size={14} /> {project.location}</span>
              </div>
              <div className="space-y-2">
                <span className="text-white/50 block uppercase tracking-widest text-[10px]">Time Duration</span>
                <span className="font-medium flex items-center gap-2"><Clock size={14} /> {project.duration}</span>
              </div>
              <div className="space-y-2">
                <span className="text-white/50 block uppercase tracking-widest text-[10px]">Square Meters</span>
                <span className="font-medium flex items-center gap-2"><Maximize size={14} /> {project.size}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-6">
        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="bg-white px-8 py-3 rounded-full border border-gray-100 font-mono text-sm">
          [01 / 04]
        </div>
        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
