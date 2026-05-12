"use client";

import React from 'react';

// Common icon SVGs defined here to keep the main structure clean
const Icons = {
  Code: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
  Fintech: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818.879.659c1.403 1.052 3.837 1.052 5.24 0m-5.24-3.046.879.659c1.403 1.052 3.837 1.052 5.24 0m-5.24-3.046.879.659c1.403 1.052 3.837 1.052 5.24 0M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
  Cloud: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.95-6.9c.169-.39.25-.783.25-1.182a1 1 0 0 0-.151-.54 3.75 3.75 0 0 0-6.7-1.2 4 4 0 0 0-6.8 1.455 3.125 3.125 0 0 0 .1 3.42 1 1 0 0 0 .762.392H2.25V15Z" /></svg>,
  Consulting: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.5841A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>,
  Check: () => <svg className="w-5 h-5 text-emerald-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" /></svg>,
  WhatsApp: () => <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 512l141.6-45.2c33.6 18.3 71.4 27.9 110.3 27.9h.1c122.4 0 222-99.6 222-221.9.1-59.3-23-115.1-65-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-84.8 27.1 27.6-82.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.6-184.6 184.6zm103.1-141.2c-5.6-2.8-33.1-16.3-38.3-18.2-5.1-1.9-8.9-2.8-12.7 2.8-3.8 5.6-14.6 18.2-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.7-8.7-45.1-27.8-16.6-14.8-27.8-33.2-31-38.8-3.3-5.6-.4-8.6 2.5-11.4 2.6-2.5 5.6-6.6 8.5-9.8 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.7-30.6-17.4-41.9-4.6-11.2-9.2-9.7-12.7-9.8-3.3-.1-7.1-.1-11-.1s-10.3 1.4-15.6 7.1c-5.3 5.7-20.2 19.7-20.2 48.1 0 28.3 20.6 55.7 23.4 59.5 2.8 3.8 40.6 61.9 98.3 86.8 13.7 5.9 24.5 9.4 32.8 12.1 13.8 4.4 26.3 3.8 36.2 2.3 11-1.6 33.1-13.5 37.8-26.6 4.7-13.1 4.7-24.3 3.3-26.6-1.5-2.3-5.2-3.8-10.8-6.6z"/></svg>
};

export default function Home() {
  // Updated with the correct triple 3 number
  const whatsappUrl = "https://wa.me/2349033358098?text=Hello%20Quadrox%2C%20I'm%20interested%20in%20your%20software%20development%20services.";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden">
      
      {/* Background Animated Gradient Sphere */}
      <div className="fixed -top-40 -right-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[128px] pointer-events-none z-0 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-6 lg:px-24 border-b border-slate-800/50 backdrop-blur-lg fixed w-full top-0 z-50 bg-[#020617]/80">
        
        {/* LOGO IMPLEMENTATION */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Quadrox Technologies Limited Logo" 
            className="h-10 w-auto object-contain" 
            onError={(e) => {
              // Fallback if the image isn't found in the public folder yet
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback text that shows if logo is missing, hidden by default */}
          <span className="hidden text-xl font-bold tracking-tight text-white">QUADROX</span>
        </div>

        <div className="hidden lg:flex space-x-10 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
          <a href="#approach" className="hover:text-indigo-400 transition-colors">Approach</a>
          <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                <Icons.WhatsApp />
                Chat Now
            </a>
            {/* Reduced nav button size slightly */}
            <a href="#contact" className="bg-white hover:bg-slate-200 text-slate-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md">
            Start Project
            </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 lg:px-24 relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-semibold tracking-wide mb-8 animate-fade-in-down">
          <span className="relative flex h-2 w-2 mr-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          SECURE. SCALABLE. HIGH-PERFORMANCE.
        </div>
        
        {/* ADDED COMPANY NAME HERE */}
        <div className="animate-fade-in-up flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-indigo-400 uppercase mb-4 opacity-90">
                Quadrox Technologies Limited
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
            Engineering the<br /> Digital Enterprise.
            </h1>
        </div>

        <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mb-16 leading-relaxed animate-fade-in-up-delayed">
          We build robust custom software, secure fintech platforms, and scalable cloud infrastructure for visionary businesses globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center animate-fade-in-up-delayed-2">
          {/* Reduced Hero Button 1: padding and text size reduced */}
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1">
            Request Engineering Proposal
          </a>
          {/* Reduced Hero Button 2: padding and text size reduced */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-bold text-base transition-all hover:border-emerald-500 hover:text-emerald-300">
            <Icons.WhatsApp />
            Message on WhatsApp
          </a>
        </div>
      </section>

      {/* Trust Bar (Social Proof) */}
      <section className="py-12 border-y border-slate-800/50 bg-[#01040f]/50 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60">
            <p className="font-mono text-slate-500 text-sm tracking-widest uppercase">Trusted Tech Partners for</p>
            <div className="text-2xl font-bold text-slate-300 tracking-tight">Fintech Startups</div>
            <div className="text-2xl font-bold text-slate-300 tracking-tight">EdTech Platforms</div>
            <div className="text-2xl font-bold text-slate-300 tracking-tight">E-Commerce Giants</div>
            <div className="text-2xl font-bold text-slate-300 tracking-tight">Logistics Firms</div>
        </div>
      </section>

      {/* Services Section (Robust & Detailed) */}
      <section id="services" className="py-28 px-6 lg:px-24 relative z-10 bg-[#01040f]/50">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-3">Our Competencies</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">Full-Cycle Engineering</h2>
          <p className="text-slate-400 mb-20 max-w-2xl text-lg">We deliver end-to-end technology solutions, from initial database architecture blueprints to global deployment and 24/7 maintenance.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1 */}
            <div className="p-8 rounded-3xl bg-[#020617] border border-slate-800 hover:border-indigo-600/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)]">
              <div className="w-14 h-14 bg-indigo-950 border border-indigo-800 rounded-xl flex items-center justify-center text-indigo-400 mb-8 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                <Icons.Code />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom App Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">High-performance web and mobile applications tailored to your specific business logic and user experience requirements.</p>
              <ul className="text-slate-300 text-xs font-medium space-y-2.5 border-t border-slate-800 pt-6">
                <li>• Enterprise ERP/CRM</li>
                <li>• E-Learning Systems</li>
                <li>• Real-time Streaming Platforms</li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="p-8 rounded-3xl bg-[#020617] border border-slate-800 hover:border-emerald-600/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]">
              <div className="w-14 h-14 bg-emerald-950 border border-emerald-800 rounded-xl flex items-center justify-center text-emerald-400 mb-8 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Icons.Fintech />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Fintech Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Secure, compliant, and highly available financial technology platforms designed for heavy transactional loads.</p>
              <ul className="text-slate-300 text-xs font-medium space-y-2.5 border-t border-slate-800 pt-6">
                <li>• Payment Gateways (API)</li>
                <li>• Virtual Account Management</li>
                <li>• KYC/KYB Integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-3xl bg-[#020617] border border-slate-800 hover:border-sky-600/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(2,132,199,0.2)]">
              <div className="w-14 h-14 bg-sky-950 border border-sky-800 rounded-xl flex items-center justify-center text-sky-400 mb-8 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(2,132,199,0.3)]">
                <Icons.Cloud />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cloud Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Automated deployment pipelines and serverless architectures optimized for scalability, security, and cost.</p>
              <ul className="text-slate-300 text-xs font-medium space-y-2.5 border-t border-slate-800 pt-6">
                <li>• CI/CD Pipelines (Railway/AWS)</li>
                <li>• Containerization (Docker)</li>
                <li>• Database Clustering</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-3xl bg-[#020617] border border-slate-800 hover:border-pink-600/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(219,39,119,0.2)]">
              <div className="w-14 h-14 bg-pink-950 border border-pink-800 rounded-xl flex items-center justify-center text-pink-400 mb-8 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(219,39,119,0.3)]">
                <Icons.Consulting />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">CTO-as-a-Service</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Strategic technical leadership for startups and scale-ups needing architectural guidance and engineering management.</p>
              <ul className="text-slate-300 text-xs font-medium space-y-2.5 border-t border-slate-800 pt-6">
                <li>• Tech Stack Selection</li>
                <li>• System Architecture Design</li>
                <li>• Security Audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach/Process Section */}
      <section id="approach" className="py-28 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <p className="font-mono text-emerald-400 text-sm tracking-widest uppercase mb-3">Our Approach</p>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-white">Reliability by Design.</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                    We don't believe in "move fast and break things" for enterprise software. We believe in strict type-safety, automated testing, and immutable infrastructure to ensure your platform is boringly reliable under load.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 font-medium text-slate-200">
                    <div className="flex items-center"><Icons.Check/> Test-Driven Development</div>
                    <div className="flex items-center"><Icons.Check/> Immutable Infrastructure</div>
                    <div className="flex items-center"><Icons.Check/> Continuous Monitoring</div>
                    <div className="flex items-center"><Icons.Check/> Security-First Architecture</div>
                </div>
            </div>
            <div className="bg-[#01040f] border border-slate-800 rounded-3xl p-10 font-mono text-sm shadow-2xl relative overflow-hidden group">
                {/* Subtle sheen animation on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex gap-2.5 mb-6 border-b border-slate-800 pb-5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                </div>
                <div className="space-y-2 text-indigo-200">
                    <p className="text-slate-500">{"// Quadrox Workflow Initialize"}</p>
                    <p><span className="text-pink-400">const</span> project = <span className="text-yellow-200">await</span> Quadrox.<span className="text-blue-300">analyze</span>(blueprints);</p>
                    <p className="pl-4 text-slate-500">{"// Architecture, Database, Security Design"}</p>
                    <p>project.<span className="text-blue-300">architect</span>(); </p>
                    <p className="pl-4 text-slate-500">{"// TDD, Sprints, Code Review"}</p>
                    <p>project.<span className="text-blue-300">build</span>({"{"} tdd: <span className="text-emerald-400">true</span> {"}"}); </p>
                    <p className="pl-4 text-slate-500">{"// CI/CD to Railway/AWS"}</p>
                    <p>project.<span className="text-blue-300">deploy</span>();</p>
                    <br/>
                    <p className="text-emerald-400">{">>"} [Success] System live. Monitoring active.</p>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-28 px-6 lg:px-24 bg-[#01040f]/50 relative z-10 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-center text-indigo-400 text-sm tracking-widest uppercase mb-3">Discovery</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-white text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            {/* FAQ Item 1 */}
            <details className="group bg-[#020617] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 open:border-indigo-600/50 open:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)]">
              <summary className="flex justify-between items-center font-semibold p-7 text-xl text-white list-none">
                <span>What types of projects do you handle?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-400">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-7 pb-8 pt-0 leading-relaxed text-base border-t border-slate-800/50 mt-1">
                We specialize in complex, data-heavy web applications and infrastructure. This includes building custom fintech gateways, robust educational management systems (LMS), real-time livestreaming portals, and bespoke internal business automation tools. We manage everything from database clustering architecture to frontend user experience.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-[#020617] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 open:border-indigo-600/50 open:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)]">
              <summary className="flex justify-between items-center font-semibold p-7 text-xl text-white list-none">
                <span>Do you provide ongoing support and maintenance?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-400">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-7 pb-8 pt-0 leading-relaxed text-base border-t border-slate-800/50 mt-1">
                Yes. Custom software is a living asset. We offer dedicated maintenance and retention plans tailored to your scaling needs. This ensures your application stays updated against security threats, operational dependencies remain optimized, and the platform remains fully functional as your user base grows.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-[#020617] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 open:border-indigo-600/50 open:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)]">
              <summary className="flex justify-between items-center font-semibold p-7 text-xl text-white list-none">
                <span>How do you handle project deployment?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-400">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-7 pb-8 pt-0 leading-relaxed text-base border-t border-slate-800/50 mt-1">
                We utilize modern Continuous Integration/Continuous Deployment (CI/CD) pipelines. Depending on the project requirements, we deploy across tailored cloud environments including Railway (for rapid scaling), AWS (for complex compliance needs), or specialized cPanel setups for legacy system integrations when necessary.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-[#020617] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 open:border-indigo-600/50 open:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)]">
              <summary className="flex justify-between items-center font-semibold p-7 text-xl text-white list-none">
                <span>How do we start a project?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-400">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-7 pb-8 pt-0 leading-relaxed text-base border-t border-slate-800/50 mt-1">
                Reach out via our contact form, email, or direct WhatsApp line. We will schedule a technical discovery call to review your project blueprints, assess API requirements, infrastructure needs, and scalability goals. Following this, we provide a comprehensive architectural proposal, timeline, and budget estimation.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <footer id="contact" className="border-t border-slate-800/50 pt-28 pb-10 text-center relative z-10 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto mb-28">
          
          {/* FOOTER LOGO IMPLEMENTATION */}
          <div className="flex justify-center mb-10">
            <img 
                src="/logo.png" 
                alt="Quadrox Technologies Limited Logo" 
                className="h-16 w-auto object-contain" 
                onError={(e) => {
                // Fallback icon if the logo isn't in the public folder
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
            />
            {/* Fallback Icon */}
            <div className="hidden w-20 h-20 rounded-2xl bg-indigo-600/10 border border-indigo-800 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.2)] font-mono text-4xl text-indigo-300">Q</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">Ready to scale your technical infrastructure?</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">Contact our engineering lead today to discuss your next system architecture or software deployment.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Reduced Footer Button: padding and text size reduced */}
            <a href="mailto:contact@quadrox.tech" className="inline-block bg-white text-slate-950 px-8 py-3.5 rounded-full font-bold text-base hover:bg-slate-200 transition-all hover:scale-105 shadow-md">
                Contact Engineering Team
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-bold text-base text-emerald-400 hover:text-emerald-300 transition-colors">
                <Icons.WhatsApp />
                0903 335 8098
            </a>
          </div>
        </div>
        <div className="text-slate-600 text-sm border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Quadrox Technologies Limited. All Rights Reserved.</p>
          <p className="font-mono text-xs opacity-50">Secure Deployment Active</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

        {/* Floating WhatsApp Action Button */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-600 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:bg-emerald-500 transition-all duration-300 hover:scale-110 group animate-bounce-slow">
            <span className="absolute bottom-full mb-3 right-0 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">Chat with us 09033358098</span>
            <Icons.WhatsApp />
        </a>

        {/* Custom Keyframe Animations */}
        <style jsx global>{`
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-in-down {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounce-slow {
                0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
                50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
            }
            .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
            .animate-fade-in-down { animation: fade-in-down 0.6s ease-out forwards; }
            .animate-fade-in-up-delayed { animation: fade-in-up 0.6s ease-out 0.2s forwards; opacity: 0; }
            .animate-fade-in-up-delayed-2 { animation: fade-in-up 0.6s ease-out 0.4s forwards; opacity: 0; }
            .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        `}</style>
    </div>
  );
}
