import React from 'react';
import { motion } from 'framer-motion';

const CoreMandate = () => {
  return (
    <section id="mandate" className="relative py-24 lg:py-40 bg-surface overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="flex flex-col gap-6 opacity-80">
            <h2 className="font-headline font-black text-4xl tracking-tighter vertical-text text-white uppercase italic">
              INITIATIVE
            </h2>
            <div className="w-[1px] h-40 bg-accent ml-6"></div>
          </div>
        </div>

        {/* Main Content track */}
        <div className="lg:col-span-9">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="space-y-32"
          >
            <div>
               <h2 className="font-headline font-black text-4xl md:text-7xl tracking-tighter text-white uppercase mb-12">
                  OUR <span className="text-accent italic underline decoration-accent/20 underline-offset-8">MISSION</span>
               </h2>
               
               <div className="pt-12 border-t border-white/10">
                  <p className="text-2xl md:text-4xl font-medium text-white/90 leading-tight tracking-tight max-w-4xl">
                     We are an international mentorship group with a focus on helping more <span className="text-accent underline decoration-accent/30 underline-offset-8">women and marginalized genders</span> become active participants and leaders in the Python open-source community.
                  </p>
               </div>

               {/* Flagship Mission Visual */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="pt-20"
               >
                  <div className="aspect-[21/9] w-full overflow-hidden border border-white/10 bg-background relative group">
                     <img 
                        src="/women_engineering_team_bw.png" 
                        alt="Women in Tech Engineering Team" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
               <div className="p-10 border border-white/5 bg-white/[0.02] space-y-6">
                  <h3 className="text-2xl font-headline font-bold text-white uppercase italic">Our Objective</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings here in Jaipur.
                  </p>
               </div>
               <div className="p-10 border border-white/5 bg-white/[0.02] space-y-6">
                  <h3 className="text-2xl font-headline font-bold text-white uppercase italic">How to Participate</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    You can attend our events (in person or online), participate by being a mentee and a mentor, and remember to always ask questions if something is not clear.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreMandate;
