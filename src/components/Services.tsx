import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Sprout } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-soft-bg/50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-primary/60 font-medium">// Services</span>
          <h2 className="text-5xl md:text-6xl">From Planning to Planting: We've Got You Covered.</h2>
        </div>
        <div className="space-y-6 text-right">
          <p className="text-primary/70 max-w-sm">We believe that gardening is more than just planting seeds; it's about nurturing life</p>
          <button className="btn-primary">Explore All Services</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <img 
            src="https://picsum.photos/seed/watering/800/1000" 
            alt="Watering" 
            className="rounded-3xl w-full h-full object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 ${
                service.highlighted ? 'bg-primary text-white scale-105 shadow-2xl z-10' : 'bg-white text-primary border border-gray-100 hover:shadow-xl'
              }`}
            >
              <div className="space-y-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.highlighted ? 'bg-accent' : 'bg-soft-bg'}`}>
                  <Sprout className={service.highlighted ? 'text-primary' : 'text-primary'} size={24} />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.highlighted ? 'text-white/80' : 'text-primary/70'}`}>
                  {service.description}
                </p>
              </div>
              {service.highlighted && (
                <div className="mt-8 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Sprout className="text-accent" size={20} />
                   </div>
                   <span className="text-xs font-medium uppercase tracking-wider">Nurturing Life</span>
                </div>
              )}
            </motion.div>
          ))}
          <div className="rounded-3xl overflow-hidden">
            <img src="https://picsum.photos/seed/planting/800/600" alt="Planting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};
