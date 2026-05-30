export default function Home() {
  const links = [
    { label: 'TWO Docs', url: 'https://www.two.so' },
    { label: 'Aegos Intel', url: 'https://www.aegosintel.com' },
    { label: 'Story Brew', url: 'https://storybrew.online' },
  ]

  return (
    <main className="min-h-screen bg-[#0a2342] flex flex-col font-sans">

      {/* Nav — untouched */}
      <nav className="flex items-center justify-between px-11 py-7">
        <div className="text-[15px] font-medium tracking-[0.12em] uppercase text-[#EDE9E1]">
          STREVIUS <span className="font-light text-[#555]">GROUP</span>
        </div>
        <ul className="flex gap-9 list-none">
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Studio</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Work</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Services</a></li>
          <li><a href="#" className="text-[15px] text-[#666] tracking-[0.08em] uppercase font-normal hover:text-[#EDE9E1] transition-colors">Blog</a></li>
        </ul>
        <a href="#" className="text-[15px] text-[#EDE9E1] tracking-[0.08em] uppercase font-medium border-b border-[#555] pb-px hover:opacity-60 transition-opacity">
          Contact →
        </a>
      </nav>

      {/* Hero — two columns */}
      <div className="flex-1 flex items-center px-11 pb-24 pt-8 gap-16">

        {/* Left column: headline */}
        <div className="flex-1 flex flex-col justify-center max-w-[600px]">
          <h1 className="font-serif text-[88px] font-normal leading-[1.0] text-[#EDE9E1] tracking-[-0.02em]">
            The group that<br />
            <em>builds what lasts.</em>
          </h1>
          <p className="font-sans text-[17px] font-light text-[#777] max-w-[400px] leading-[1.65] mt-6">
            Digital, media, and real-world assets. Built to compound. Starting small, growing with intention.
          </p>
          <div className="flex items-center gap-8 mt-10">
            <a href="#" className="text-[12px] font-medium tracking-[0.06em] uppercase bg-[#EDE9E1] text-[#0D0D0C] px-7 py-3 rounded-full hover:opacity-80 transition-opacity">
              Our Studio →
            </a>
            <a href="#" className="text-[12px] font-light tracking-[0.06em] uppercase text-[#555] border-b border-[#333] pb-px hover:text-[#EDE9E1] transition-colors">
              View Work ↗
            </a>
          </div>
        </div>

        {/* Right column: links */}
        <div className="flex flex-col justify-center w-[340px] shrink-0">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-white/[0.07] first:border-t first:border-white/[0.07] hover:border-white/[0.15] transition-colors"
            >
              <span className="text-[17px] font-light text-[#EDE9E1] tracking-[-0.01em] group-hover:opacity-70 transition-opacity">
                {link.label}
              </span>
              <span className="text-[#555] group-hover:text-[#EDE9E1] transition-colors text-[15px]">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>

      {/* Footer strip — pills removed */}
      <div className="flex items-center justify-between px-11 py-5 border-t border-white/[0.07]">
        <span className="text-[11px] text-[#444] tracking-[0.06em] uppercase">strevius.com</span>
        <div className="flex items-center gap-1.5 text-[11px] text-[#444] tracking-[0.06em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EDE9E1] inline-block"></span>
          Est. 2025
        </div>
      </div>

    </main>
  )
}
