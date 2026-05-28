export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDEAE3] flex flex-col font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-11 py-7">
        <div className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#1A1A1A]">
          STREVIUS <span className="font-light text-[#999]">GROUP</span>
        </div>
        <ul className="flex gap-9 list-none">
          <li><a href="#" className="text-[12px] text-[#888] tracking-[0.08em] uppercase font-normal hover:text-[#1A1A1A] transition-colors">Studio</a></li>
          <li><a href="#" className="text-[12px] text-[#888] tracking-[0.08em] uppercase font-normal hover:text-[#1A1A1A] transition-colors">Work</a></li>
          <li><a href="#" className="text-[12px] text-[#888] tracking-[0.08em] uppercase font-normal hover:text-[#1A1A1A] transition-colors">Services</a></li>
          <li><a href="#" className="text-[12px] text-[#888] tracking-[0.08em] uppercase font-normal hover:text-[#1A1A1A] transition-colors">Blog</a></li>
        </ul>
        <a href="#" className="text-[12px] text-[#1A1A1A] tracking-[0.08em] uppercase font-normal border-b border-[#1A1A1A] pb-px hover:opacity-60 transition-opacity">
          Contact →
        </a>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-16 pb-16">
        <h1 className="font-serif text-[86px] font-normal leading-[1.0] text-[#1A1A1A] tracking-[-0.02em]">
          The studio that<br />
          <em>builds what lasts.</em>
        </h1>
        <p className="font-sans text-[15px] font-light text-[#666] max-w-[380px] leading-[1.65] mt-6">
          Digital, media, and real-world assets. Built to compound — starting small, growing with intention.
        </p>
        <div className="flex items-center gap-8 mt-10">
          <a href="#" className="text-[12px] font-medium tracking-[0.06em] uppercase bg-[#1A1A1A] text-[#EDEAE3] px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
            Our Studio →
          </a>
          <a href="#" className="text-[12px] font-light tracking-[0.06em] uppercase text-[#888] border-b border-[#ccc] pb-px hover:text-[#1A1A1A] transition-colors">
            View Work ↗
          </a>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between px-11 py-5 border-t border-black/[0.08]">
        <span className="text-[11px] text-[#aaa] tracking-[0.06em] uppercase">strevius.com</span>
        <div className="flex gap-2.5">
          {['One Peak Two', 'Story Brew', 'Study Brew'].map((tag) => (
            <span key={tag} className="text-[10px] text-[#aaa] border border-black/[0.12] px-3 py-1 rounded-full tracking-[0.07em] uppercase">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#aaa] tracking-[0.06em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] inline-block"></span>
          Est. 2025
        </div>
      </div>

    </main>
  )
}
