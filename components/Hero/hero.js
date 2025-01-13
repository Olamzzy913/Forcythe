export default function Hero() {
  return (
    <>
      <section className="px-[1.25rem] md:px-[2.5rem] lg-[3.5rem] ">
        <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            <div className="min-h-[180px]">
              <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                We build <span className="text-[#60a6e7]">products</span> that
                shape a better future
              </h1>
            </div>
            <div className="mb-8 max-w-3xl">
              <p className="text-[rgba(177,182,187,0.51)]  text-base md:text-lg mb-8 leading-7">
                We’re the architects of digital excellence across industries. We
                redefine business with cutting-edge digital strategies that
                invokes sector-wide transformation.
              </p>
            </div>
            <div className="mb-5">
                <div className="relative w-fit group">
                            <button
                              className="transition-all duration-300 w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
                "
                            >
                              Visit blog <FaPlay className="text-[.8rem]" />
                            </button>
                            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
