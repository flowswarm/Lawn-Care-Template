import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Hero';
import { Footer } from '../components/Footer';
import { WhyChooseUs } from '../components/Projects';
import { TeamSection, TestimonialsSection, CTASection } from '../components/Team';
import { 
  Sprout, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Users, 
  Handshake, 
  Zap, 
  Gem, 
  Leaf, 
  Camera, 
  Stethoscope, 
  Building2, 
  BarChart3 
} from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://picsum.photos/seed/about-hero/1920/1080" 
        alt="About Hero" 
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
          About Us
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight"
        >
          Plant. Nurture. Thrive. Discover The Joy Of Gardening.
        </motion.h1>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-8">
        <h2 className="text-3xl md:text-5xl leading-tight">
          We're passionate about transforming outdoor spaces into stunning, functional environments that reflect the unique style and needs of our clients.
        </h2>
        <button className="btn-accent px-10">Get A Quote Now</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <img src="https://picsum.photos/seed/mission1/600/800" alt="Mission 1" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/mission2/600/600" alt="Mission 2" className="rounded-3xl w-full aspect-square object-cover shadow-lg self-center" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/mission3/600/600" alt="Mission 3" className="rounded-3xl w-full aspect-square object-cover shadow-lg self-end" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/mission4/600/800" alt="Mission 4" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-lg" referrerPolicy="no-referrer" />
      </div>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-primary">Our Commitment to Collaboration for a Greener Tomorrow with gardening.</h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 px-6 opacity-50 grayscale">
        <div className="flex items-center gap-2 font-bold text-xl"><Leaf className="w-6 h-6" /> Natural</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Stethoscope className="w-6 h-6" /> Doctorly</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Building2 className="w-6 h-6" /> Architect</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Camera className="w-6 h-6" /> Camera</div>
        <div className="flex items-center gap-2 font-bold text-xl"><BarChart3 className="w-6 h-6" /> Marketly</div>
      </div>
    </section>
  );
};

const MissionDetail = () => {
  return (
    <section className="section-padding grid md:grid-cols-2 gap-16 items-center overflow-hidden">
      <div className="space-y-8">
        <span className="text-primary/60 font-medium">// Our Mission</span>
        <h2 className="text-5xl md:text-6xl leading-tight">Our Main Goal Is Grow The Gardening Journey.</h2>
        <p className="text-lg text-primary/70 leading-relaxed">
          We believe that gardening is more than just planting seeds; it's about nurturing life, fostering connections, and creating spaces that inspire. From small urban balconies to sprawling backyard oases, mission is to empower everyone.
        </p>
        <button className="btn-primary">Contact Us</button>
      </div>
      <div className="relative">
        {/* Grid background pattern */}
        <div className="absolute -top-20 -right-20 w-full h-full opacity-20 -z-10" style={{ backgroundImage: 'radial-gradient(#062C30 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 rounded-3xl -z-10" />
        <img 
          src="https://picsum.photos/seed/mission-detail/1200/1200" 
          alt="Mission Detail" 
          className="rounded-3xl w-full aspect-square object-cover shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      title: 'Efficiency & Power',
      description: 'Intelligent Energy Monitoring to Control Costs Effectively Wind turbines Powering.',
      icon: Zap
    },
    {
      title: 'Trust & Warranty',
      description: 'Panel Installation involves the professional installation Expert Panel Maintenance.',
      icon: Handshake
    },
    {
      title: 'High Quality work',
      description: 'Store Sunlight Effectively with Innovative Battery Tech Incentives Explained.',
      icon: Award
    },
    {
      title: 'Knowledge',
      description: 'Panel Installation involves the professional installation Expert Panel Maintenance.',
      icon: Lightbulb
    },
    {
      title: 'Leadership',
      description: 'Store Sunlight Effectively with Innovative Battery Tech Incentives Explained.',
      icon: Gem
    }
  ];

  return (
    <section className="section-padding bg-soft-bg/30">
      <div className="text-center space-y-4 mb-16">
        <span className="text-primary/60 font-medium">// Core Value</span>
        <h2 className="text-5xl md:text-6xl">Our Green Masterpieces: Gardens That Inspire.</h2>
        <p className="text-primary/70 max-w-2xl mx-auto">
          Garden Tree has blossomed into a leading company dedicated to providing innovative solutions for gardening.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, idx) => (
          <motion.div 
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-8 hover:shadow-xl transition-shadow"
          >
            <div className="w-20 h-20 rounded-full bg-soft-bg flex items-center justify-center">
              <value.icon className="text-primary w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
              <p className="text-primary/70 leading-relaxed">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <MissionSection />
        <PartnersSection />
        <MissionDetail />
        <CoreValues />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
