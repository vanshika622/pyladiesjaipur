import React from 'react';
import { socialLinks } from '@data/navigation';

const Footer = () => {
  return (
    <footer className="relative bg-surface py-24 lg:py-32 px-8 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        {/* Brand Side */}
        <div className="max-w-xs space-y-8">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block">
            <img 
              alt="PyLadies Jaipur Logo" 
              className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" 
              src="/images/brand/logo.png"
            />
          </a>
          <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
            An international mentorship group for everyone in tech with a focus on helping our community become active participants and leaders in the Python open-source community.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
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
        </div>

        {/* Links Side */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
          <div className="space-y-8">
            <h4 className="font-headline font-black text-xs text-white uppercase tracking-[0.4em]">Platform</h4>
            <ul className="space-y-4">
              {[
                { name: 'Core Mandate', href: '#mandate' },
                { name: 'Upcoming Events', href: '#events' },
                { name: 'Chronicle', href: '#chronicle' },
                { name: 'Architects', href: '#architects' }
              ].map(item => (
                <li key={item.name}><a href={item.href} className="text-on-surface-variant hover:text-primary-blue transition-colors text-xs font-semibold uppercase tracking-widest">{item.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-headline font-black text-xs text-white uppercase tracking-[0.4em]">Connect</h4>
            <ul className="space-y-4">
               {[
                { name: 'Meetup', href: 'https://www.meetup.com/pyladies-jaipur/' },
                { name: 'Github', href: 'https://github.com/pyladies' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map(item => (
                <li key={item.name}><a href={item.href} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary-blue transition-colors text-xs font-semibold uppercase tracking-widest">{item.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 hidden lg:block">
            <h4 className="font-headline font-black text-xs text-white uppercase tracking-[0.4em]">Mentorship</h4>
            <button className="bg-primary-blue/10 text-primary-blue border border-primary-blue/30 px-8 py-3 font-headline font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-primary-blue hover:text-white transition-all rounded-sm">
              Join Discord
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
