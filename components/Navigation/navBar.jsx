export default function NavBar() {
  return (
    <>
      <section className="px-[1.25rem] md:px-[2.5rem] lg-[3.5rem] w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md">
        <div className="flex items-center gap-20">
          <a href="/">
            <img src="" alt="logo" className="w-28 sm:w-32 md:w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-4 text-base">
            <a href="/about">
              <span>About</span>
            </a>
            <a href="/service">
              <span>Service</span>
            </a>
            <a href="/portfolio">
              <span>Portfolio</span>
            </a>
            <a href="/studio">
              <span>Studio</span>
            </a>
            <a href="/fundation">
              <span>Fundation</span>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-fit group">
            <button
              className="transition-all duration-300 w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full  bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
                            "
            >
              Book a call
            </button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
        <div className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"></div>
      </section>
    </>
  );
}
