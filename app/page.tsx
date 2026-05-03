export default function Home() {
  return (
    <div className="min-h-screen bg-[#001232] text-white font-sans selection:bg-[#FFB902] selection:text-[#001232]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-20 border-b border-white/10 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="text-2xl font-bold text-[#FFB902] tracking-wider">QUADROX TECH</div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
          <a href="#services" className="hover:text-[#FFB902] transition-colors">Services</a>
          <a href="#infrastructure" className="hover:text-[#FFB902] transition-colors">Infrastructure</a>
          <a href="#contact" className="hover:text-[#FFB902] transition-colors">Contact</a>
        </div>
        <button className="bg-[#FFB902] text-[#001232] px-6 py-2 font-semibold uppercase tracking-wide hover:bg-yellow-400 transition-colors">
          Client Portal
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-48 pb-32">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Engineering the <br/>
          <span className="text-[#FFB902]">Digital Future</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Quadrox Technology Limited delivers world-class software solutions, scalable cloud infrastructure, and robust fintech systems for modern enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#FFB902] text-[#001232] px-8 py-3 font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,185,2,0.3)]">
            Deploy With Us
          </button>
          <button className="border border-white/20 px-8 py-3 font-bold text-lg hover:border-[#FFB902] hover:text-[#FFB902] transition-colors">
            Explore Capabilities
          </button>
        </div>
      </main>

      {/* Mini Tech Stack Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Quadrox Technology Limited. All Rights Reserved.</p>
      </footer>
    </div>
  )
}