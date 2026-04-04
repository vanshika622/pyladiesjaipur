import React from 'react';
import { motion } from 'framer-motion';

const ResourceHub = () => {
  const resources = [
    { title: "The Pythonic Manual", category: "Core Documentation", link: "#" },
    { title: "Neural Research Lab", category: "AI & ML Resources", link: "#" },
    { title: "PyLadies Global Network", category: "Community Hub", link: "#" },
    { title: "Event Archive", category: "Past Keynotes", link: "#" }
  ];

  return (
    <section id="resources" className="relative py-40 bg-background overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        {/* Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="flex flex-col gap-6 opacity-80">
            <h2 className="font-headline font-black text-4xl tracking-tighter vertical-text text-white uppercase italic">
              RESOURCES
            </h2>
            <div className="w-[1px] h-40 bg-accent ml-6"></div>
          </div>
        </div>

        {/* Main Content track */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {resources.map((res, i) => (
                <motion.a 
                  key={i}
                  href={res.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-white/5 bg-white/[0.02] group hover:bg-white/[0.05] hover:border-accent/30 transition-all flex flex-col justify-between aspect-video shadow-elevated"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-headline font-bold text-primary tracking-[0.5em] uppercase">{res.category}</span>
                    <h3 className="text-3xl font-headline font-bold text-white tracking-tight uppercase leading-none italic">{res.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors">
                     <span className="text-[10px] font-headline font-bold tracking-[0.4em]">ACCESS REPO</span>
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </div>
                </motion.a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
