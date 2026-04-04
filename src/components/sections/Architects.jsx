import React from 'react';
import { motion } from 'framer-motion';
import { leaders } from '@data/leadership';

const Architects = () => {
  return (
    <section id="architects" className="relative py-24 lg:py-40 bg-surface overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        {/* Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="flex flex-col gap-6 opacity-80">
            <h2 className="font-headline font-black text-4xl tracking-tighter vertical-text text-white uppercase italic">
              LEADERSHIP
            </h2>
            <div className="w-[1px] h-40 bg-accent ml-6"></div>
          </div>
        </div>

        {/* Main Content track */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[4/5] bg-background overflow-hidden border border-white/5 p-4 mb-10 shadow-elevated transition-transform group-hover:-translate-y-2">
                  <div className="w-full h-full relative overflow-hidden">
                     <img 
                       alt={leader.name} 
                       className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-1000" 
                       src={leader.img}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                     <span className="font-headline font-bold text-[10px] tracking-[0.5em] text-accent uppercase">{leader.role}</span>
                     <h3 className="font-headline font-black text-4xl text-white tracking-tight uppercase italic leading-none">{leader.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    {leader.stack.map((item, j) => (
                      <span key={j} className="px-4 py-2 bg-white/5 border border-white/10 text-[9px] font-headline font-bold text-white/40 tracking-[0.3em] uppercase">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architects;
