import React from 'react';
import { motion } from 'framer-motion';

const Chronicle = () => {
  const tracks = [
    {
      id: "PROGRAM_01",
      title: "Monthly Engineering Meetups",
      date: "Upcoming",
      desc: "Workshops and talks on Python topics, from core framework development to data science. Also featuring our signature 10-minute 'Non-coding Superpower' talks.",
      color: "border-primary"
    },
    {
      id: "PROGRAM_02",
      title: "Call for Speakers",
      date: "Always Open",
      desc: "Share your knowledge. From short 10-minute presentations of specific frameworks to all-day workshops, we welcome your voice to the Python community.",
      color: "border-accent"
    },
    {
      id: "PROGRAM_03",
      title: "Global Slack & Networking",
      date: "Ongoing",
      desc: "Connect with the global community. Get an invite to Slack, join the #city-jaipur channel, and connect with engineers worldwide.",
      color: "border-primary-blue"
    }
  ];

  return (
    <section id="chronicle" className="relative py-24 lg:py-40 bg-background overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        {/* Editorial Sidebar */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="flex flex-col gap-6 opacity-80">
            <h2 className="font-headline font-black text-4xl tracking-tighter vertical-text text-white uppercase italic">
              OUR PROGRAMS
            </h2>
            <div className="w-[1px] h-40 bg-primary ml-6"></div>
          </div>
        </div>

        {/* Main Content track */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 gap-12">
            {tracks.map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group p-8 md:p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer border-l-[10px] ${track.color}`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-12">
                  <div className="max-w-xl space-y-6">
                    <span className="font-headline font-bold text-[10px] tracking-[0.5em] text-white/40 uppercase">{track.id} // {track.date}</span>
                    <h3 className="font-headline font-black text-3xl md:text-5xl text-white tracking-tight uppercase italic leading-none">
                      {track.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg font-medium">
                      {track.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 group-hover:translate-x-4 transition-all">
                      <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* High-Fidelity Community Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
            {[
              { img: "/images/community/community_01.jpg" },
              { img: "/images/community/community_02.jpg" }
            ].map((shot, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden border border-white/10 group shadow-elevated"
              >
                <img 
                  src={shot.img} 
                  alt="Community in action" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chronicle;
