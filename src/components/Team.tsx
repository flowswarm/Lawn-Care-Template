import React from 'react';
import { motion } from 'motion/react';
import { TEAM, TESTIMONIALS, BLOGS } from '../constants';
import { Instagram, Linkedin, Quote, ChevronLeft, ChevronRight, Sprout } from 'lucide-react';

export const TeamSection = () => {
  return (
    <section className="section-padding bg-soft-bg/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             {TEAM.slice(0, 2).map((member, i) => (
                <div key={member.name} className="relative group rounded-2xl overflow-hidden aspect-square">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                   {i === 0 && (
                     <div className="absolute inset-0 bg-primary/40 p-4 flex flex-col justify-end">
                        <p className="text-white font-bold">{member.name}</p>
                        <p className="text-white/70 text-xs">{member.role}</p>
                        <div className="flex gap-2 mt-2">
                           <Instagram size={14} className="text-white" />
                           <Linkedin size={14} className="text-white" />
                        </div>
                     </div>
                   )}
                </div>
             ))}
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
             <img src={TEAM[3].image} alt={TEAM[3].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl">The Best Faces Behind The Flourish.</h2>
          <button className="btn-primary">Explore All Members</button>
          <div className="grid grid-cols-2 gap-4">
             <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={TEAM[4].image} alt={TEAM[4].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={TEAM[5].image} alt={TEAM[5].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden aspect-square">
             <img src={TEAM[2].image} alt={TEAM[2].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={TEAM[6].image} alt={TEAM[6].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={TEAM[7].image} alt={TEAM[7].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-primary/60 font-medium">// Customers Review</span>
          <h2 className="text-5xl md:text-6xl">From Happy Customers to Thriving Gardens.</h2>
        </div>
        <p className="text-primary/70 max-w-sm">From blooming backyards to flourishing vegetable patches, we take pride in helping our customers achieve their gardening dreams.</p>
      </div>

      <div className="relative flex items-center justify-center gap-8">
        <div className="hidden lg:block w-1/4 opacity-30 scale-90 blur-[2px]">
           <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
              <p className="text-lg mb-8">Professional, creative, and efficient. They took my vague ideas and turned them into a masterpiece.</p>
              <Quote className="text-accent ml-auto" size={48} />
           </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={TESTIMONIALS[0].image} alt={TESTIMONIALS[0].name} className="w-32 h-32 rounded-full object-cover border-4 border-accent/20" referrerPolicy="no-referrer" />
              <div className="flex-1 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-xl leading-relaxed text-primary/80 italic">{TESTIMONIALS[0].text}</p>
                <div>
                  <h4 className="text-2xl font-bold text-primary">{TESTIMONIALS[0].name}</h4>
                  <p className="text-primary/50">{TESTIMONIALS[0].handle}</p>
                </div>
              </div>
              <Quote className="text-accent absolute bottom-12 right-12 opacity-40" size={80} />
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block w-1/4 opacity-30 scale-90 blur-[2px]">
           <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
              <img src={TESTIMONIALS[1].image} alt="User" className="w-24 h-24 rounded-full mb-6" referrerPolicy="no-referrer" />
              <Quote className="text-accent ml-auto" size={48} />
           </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-6">
        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="bg-white px-8 py-3 rounded-full border border-gray-100 font-mono text-sm">
          [02 / 04]
        </div>
        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] flex items-center">
        <img 
          src="https://picsum.photos/seed/landscape-wide/1920/1080" 
          alt="Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/40" />
        
        <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 p-12 md:p-24">
          <div className="space-y-8">
            <span className="text-white/80 font-medium">// Get Started Now</span>
            <h2 className="text-5xl md:text-7xl text-white leading-tight">Bring Your Green Dreams To Life—Contact Us Now.</h2>
            <p className="text-white/80 text-xl max-w-md">Your perfect garden awaits—join our growing community of passionate gardeners and get everything you need to succeed.</p>
            <button className="btn-accent text-lg px-10">Get A Quote Now</button>
          </div>
          
          <div className="flex justify-end items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              className="bg-accent rounded-3xl p-8 max-w-xs shadow-2xl"
            >
              <div className="bg-white/50 backdrop-blur rounded-2xl p-2 mb-6 text-center text-xs font-bold uppercase tracking-widest text-primary">Projects</div>
              <img src="https://picsum.photos/seed/hands-plant/400/300" alt="Projects" className="rounded-2xl w-full mb-6" referrerPolicy="no-referrer" />
              <h4 className="text-4xl font-bold text-primary mb-2">440+</h4>
              <p className="text-primary/70 text-sm">We have completed over 440 projects Worldwide.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
