export default function Home() {
  return (
    <main className="min-h-screen bg-[#141412] flex flex-col font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-11 py-7">
        <div className="text-[15px] font-medium tracking-[0.12em] uppercase text-[#EDE9E1]">
          STREVIUS <span className="font-light text-[#555]">GROUP</span>
        </div>
        <ul className="flex gap-9 list-none">
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Work</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Experiments</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Thesis</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Capital</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">About</a></li>
        </ul>
        <a href="#" className="text-[15px] text-[#EDE9E1] tracking-[0.08em] uppercase font-medium border-b border-[#555] pb-px hover:opacity-60 transition-opacity">
          Contact →
        </a>
      </nav>
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-16 pb-16">
        <h1 className="font-serif text-[96px] font-normal leading-[1.0] text-[#EDE9E1] tracking-[-0.02em] text-center">
          We build, invest<br />
          <em>and experiment.</em>
        </h1>
        <p className="font-sans text-[24px] font-light text-[#777] max-w-[780px] leading-[1.65] mt-8 text-center">
          Digital, media, and real-world assets. Built to compound. Starting small, growing with intention.
        </p>
        <div className="flex items-center gap-8 mt-10">
          <a href="#" className="text-[12px] font-medium tracking-[0.06em] uppercase bg-[#EDE9E1] text-[#1C1C1A] px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
            Investment Thesis
          </a>
          <a href="#" className="text-[12px] font-light tracking-[0.06em] uppercase text-[#555] border-b border-[#333] pb-px hover:text-[#EDE9E1] transition-colors">
            View Work
          </a>
        </div>
      </div>
      {/* Footer strip */}
      <div className="flex items-center justify-between px-11 py-5 border-t border-white/[0.07]">
        <span className="text-[11px] text-[#444] tracking-[0.06em] uppercase">strevius.com</span>
        <div className="flex gap-2.5">
          {['One Peak Two', 'Aegos Intel', 'Two Docs'].map((tag) => (
            <span key={tag} className="text-[10px] text-[#444] border border-white/[0.1] px-3 py-1 rounded-full tracking-[0.07em] uppercase">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#444] tracking-[0.06em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EDE9E1] inline-block"></span>
          Est. 2025
        </div>
      </div>
    </main>
  )
}
