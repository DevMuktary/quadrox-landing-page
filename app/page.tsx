import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-5 px-6 lg:px-24 border-b border-white/5 backdrop-blur-xl fixed w-full top-0 z-50 bg-slate-950/80">
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-500 rounded-sm"></div>
          QUADROX
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
          <a href="#stack" className="hover:text-indigo-400 transition-colors">Tech Stack</a>
          <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
        </div>
        <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all">
          Start a Project
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wider mb-6 border border-indigo-500/20">
          ENTERPRISE SOFTWARE DEVELOPMENT
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          We Build Scalable <br /> Technology Solutions.
        </h1>
        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
          From robust fintech platforms to high-performance cloud infrastructure. We engineer custom software that drives operational efficiency and scales with your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            Consult With Our Engineers
          </a>
          <a href="#services" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all">
            View Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-24 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-slate-400 mb-16 max-w-2xl">End-to-end development services tailored for modern enterprises, startups, and specialized industries.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">End-to-end web application development using modern frameworks to ensure high performance and maintainability.</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fintech Solutions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Secure payment gateways, virtual account management, and automated identification verification systems.</p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Scalable server architecture, containerization, and seamless deployment pipelines for zero-downtime operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on a Modern, Bulletproof Stack.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We don't compromise on architecture. Our platforms are built using the most reliable, scalable, and secure technologies available in the industry today, ensuring your software is future-proof.
            </p>
            <ul className="space-y-4">
              {['TypeScript & Next.js for rapid, type-safe frontends.', 'Node.js & PHP for robust backend logic.', 'Docker & Railway for streamlined cloud deployments.', 'PostgreSQL for secure, relational data management.'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <svg className="w-5 h-5 text-indigo-500 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8 font-mono text-sm text-indigo-300 overflow-hidden shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-slate-500">{"// System Architecture Initialize"}</p>
            <p><span className="text-pink-500">import</span> {"{ Server }"} <span className="text-pink-500">from</span> <span className="text-green-400">'@quadrox/infrastructure'</span>;</p>
            <p><span className="text-pink-500">import</span> {"{ Security }"} <span className="text-pink-500">from</span> <span className="text-green-400">'@quadrox/auth'</span>;</p>
            <br />
            <p><span className="text-blue-400">const</span> app = <span className="text-yellow-200">new</span> Server({"{"}</p>
            <p className="pl-4">framework: <span className="text-green-400">'Next.js'</span>,</p>
            <p className="pl-4">database: <span className="text-green-400">'PostgreSQL'</span>,</p>
            <p className="pl-4">scalability: <span className="text-purple-400">true</span></p>
            <p>{"});"}</p>
            <br />
            <p>app.<span className="text-blue-300">deploy</span>().<span className="text-blue-300">then</span>(() <span className="text-pink-500">{`=>`}</span> console.<span className="text-blue-300">log</span>(<span className="text-green-400">'Live.'</span>));</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 lg:px-24 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            {/* FAQ Item 1 */}
            <details className="group bg-slate-900 border border-slate-800 rounded-lg cursor-pointer">
              <summary className="flex justify-between items-center font-medium p-6 text-lg list-none">
                <span>What types of projects do you handle?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-6 pb-6 leading-relaxed">
                We specialize in complex, data-heavy web applications. This includes building custom fintech gateways, educational management systems, livestreaming portals, and internal business tools. We manage everything from database architecture to frontend UI.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-slate-900 border border-slate-800 rounded-lg cursor-pointer">
              <summary className="flex justify-between items-center font-medium p-6 text-lg list-none">
                <span>Do you provide ongoing support and maintenance?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-6 pb-6 leading-relaxed">
                Yes. Software requires constant iteration. We offer dedicated retention plans to ensure your applications stay updated, secure, and fully operational as your user base scales.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-slate-900 border border-slate-800 rounded-lg cursor-pointer">
              <summary className="flex justify-between items-center font-medium p-6 text-lg list-none">
                <span>How do you handle project deployment?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-6 pb-6 leading-relaxed">
                We utilize modern continuous integration and deployment (CI/CD) pipelines. Depending on the project requirements, we deploy across tailored cloud environments including Railway, AWS, or specialized cPanel setups for legacy system integrations.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-slate-900 border border-slate-800 rounded-lg cursor-pointer">
              <summary className="flex justify-between items-center font-medium p-6 text-lg list-none">
                <span>How do we start a project?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-400 px-6 pb-6 leading-relaxed">
                Reach out via our contact section. We will schedule a technical discovery call to review your blueprints, assess API or infrastructure needs, and provide a comprehensive timeline and architectural proposal.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <footer id="contact" className="border-t border-white/5 pt-20 pb-10 text-center">
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold mb-6">Ready to scale your infrastructure?</h2>
          <p className="text-slate-400 mb-8">Let's discuss your next major deployment.</p>
          <a href="mailto:contact@quadrox.tech" className="inline-block bg-white text-slate-950 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-200 transition-colors">
            Contact Development Team
          </a>
        </div>
        <div className="text-slate-600 text-sm border-t border-white/5 pt-8 mx-6 lg:mx-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Quadrox Technology Limited. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}