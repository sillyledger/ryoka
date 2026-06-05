export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1e] flex flex-col font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <span className="text-[13px] text-[#555]">Welcome</span>
        <a href="#" className="text-[13px] text-[#555] hover:text-[#d4d4d4] transition-colors">Contact</a>
      </nav>

      {/* Hero */}
      <div className="flex-1 px-8 pt-16 pb-24">
        <h1 className="font-sans text-[64px] font-black leading-[1.05] tracking-[-0.03em] text-[#f0f0f0] mb-10">
          /ryo-ka/
        </h1>
        <p className="font-sans text-[25px] font-normal leading-[35px] text-[#d4d4d4] max-w-[640px] mb-[50px]">
          Ryoka is a brand and design consultancy working from offices in London and Mallorca. We deliver creative thinking and world-class design across a wide range of disciplines for clients far and wide, big and small.
        </p>
        <p className="font-sans text-[25px] font-normal leading-[35px] text-[#d4d4d4] max-w-[520px]">
          We believe in the transformative power of ideas to generate business success.
        </p>
      </div>
    </main>
  )
}
