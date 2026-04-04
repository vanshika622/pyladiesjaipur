import React from 'react';
import { motion } from 'framer-motion';
import { eventCategories } from '@data/programs';

const EventsDetail = () => {
  return (
    <section id="events" className="relative py-24 lg:py-40 bg-surface overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
        
        {/* Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="flex flex-col gap-8 opacity-80">
            <h2 className="font-headline font-black text-6xl tracking-tighter vertical-text text-white uppercase italic">
              EVENTS
            </h2>
            <div className="w-[1px] h-60 bg-primary ml-10"></div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-32">
          
          {/* Section Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
               <h2 className="font-headline font-black text-4xl md:text-7xl tracking-tighter text-white uppercase mb-12">
                  UPCOMING <span className="text-accent italic underline decoration-accent/20 underline-offset-8">EVENTS</span>
               </h2>
               
               <div className="pt-12 border-t border-white/10">
                  <p className="text-2xl md:text-4xl font-medium text-white/90 leading-tight tracking-tight max-w-4xl">
                      Your schedule for technical deep-dives, mentorship sessions, and open-source gatherings in Jaipur.
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="space-y-40">
            {eventCategories.map((cat, i) => (
              <div key={i} className="space-y-16">
                <div className="flex items-center gap-12">
                  <h3 className="font-headline font-black text-2xl text-white/30 tracking-[0.4em] uppercase">{cat.title}</h3>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.events.map((event, j) => (
                    <motion.div 
                      key={j}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 group transition-all cursor-pointer shadow-elevated"
                    >
                      <div className="space-y-8 h-full flex flex-col justify-between">
                         <div className="space-y-4">
                            <div className="flex justify-between items-start">
                               <span className="text-[10px] font-headline font-bold text-accent tracking-[0.3em] uppercase">{event.type}</span>
                               <span className={`text-[10px] font-headline font-bold px-3 py-1 border rounded-full ${event.status === 'UPCOMING' || event.status === 'OPEN' ? 'border-primary text-primary' : 'border-white/10 text-white/30'}`}>{event.status}</span>
                            </div>
                            <h3 className="text-3xl font-headline font-bold text-white tracking-tight leading-none group-hover:text-primary transition-colors">{event.name}</h3>
                         </div>
                         <div className="flex justify-between items-end">
                            <span className="text-sm font-medium text-white/50">{event.date}</span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsDetail;
