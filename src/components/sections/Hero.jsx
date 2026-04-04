import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Matter from 'matter-js';
import { useMatterHero } from '@hooks/useMatterHero';
import { techIcons } from '@data/tech-stack';
import { socialLinks } from '@data/navigation';

const Hero = () => {
  const containerRef = useRef(null);
  const { bodies } = useMatterHero(containerRef, techIcons);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center pointer-events-none"
    >
      
      {/* Physics Ecosystem Sandbox Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_80%)] pointer-events-none"></div>
        
        {bodies.map((item, i) => (
          <motion.div
            key={i}
            drag
            dragMomentum={false}
            onDrag={(e, info) => {
               if (!containerRef.current) return;
               const rect = containerRef.current.getBoundingClientRect();
               // Translate browser point to container-relative coordinate
               const x = info.point.x - rect.left;
               const y = info.point.y - rect.top;
               
               Matter.Body.setPosition(item.body, { x, y });
               // Transfer movement delta as actual physics velocity
               Matter.Body.setVelocity(item.body, { 
                 x: info.delta.x * 0.4, 
                 y: info.delta.y * 0.4 
               });
            }}
            style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              x: item.body.position.x - item.size / 2,
              y: item.body.position.y - item.size / 2,
            }}
            className="flex items-center justify-center bg-[#0C0C0E]/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-primary transition-colors group px-4 py-4 cursor-grab active:cursor-grabbing z-10"
          >
             <img 
                src={item.icon === "openai" ? "https://cdn.worldvectorlogo.com/logos/openai-2.svg" : `https://cdn.simpleicons.org/${item.icon}/white`}
                alt={item.icon} 
                className="w-10 h-10 md:w-12 md:h-12 opacity-50 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none" 
             />
          </motion.div>
        ))}
        {/* Bottom fade for smooth transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Main Hero Content (Centered) */}
      <div className="max-w-5xl mx-auto px-8 md:px-20 relative z-10 w-full pt-20 text-center flex flex-col items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12 flex flex-col items-center"
        >
           <h1 className="font-headline font-black text-5xl md:text-8xl leading-[0.9] md:leading-[0.8] tracking-tighter text-white drop-shadow-2xl">
              PYLADIES <br/> 
              <span className="text-accent underline decoration-white/10 underline-offset-[12px] md:underline-offset-[20px]">JAIPUR</span>
           </h1>
           
           <p className="text-base md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl drop-shadow-lg mx-auto">
              The international mentorship group for everyone in tech. We are dedicated to advancing open-source community, education, and <span className="text-white border-b border-primary pb-1 relative z-20">Python engineering</span> in Jaipur.
           </p>

           <div className="flex pt-6 relative z-20 items-center justify-center pointer-events-auto">
              <button className="bg-white text-black px-12 py-5 rounded-full font-headline font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white border border-white/20 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-glow hover:border-primary">
                 Secure Pass
              </button>
           </div>

           {/* Hero Social Hub */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2 }}
             className="pt-12 flex items-center gap-8 relative z-20 pointer-events-auto"
           >
              <div className="h-[1px] w-12 bg-white/10"></div>
              <div className="flex gap-6">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="text-white/30 hover:text-white hover:scale-125 transition-all duration-300 flex items-center justify-center"
                  >
                    {social.icon === "linkedin" ? (
                      <svg className="w-4 h-4 transition-all opacity-70 group-hover:opacity-100" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    ) : (
                      <img 
                        src={`https://cdn.simpleicons.org/${social.icon}/white`} 
                        alt={social.icon} 
                        className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all" 
                      />
                    )}
                  </a>
                ))}
              </div>
              <div className="h-[1px] w-12 bg-white/10"></div>
           </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
