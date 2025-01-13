export default function Achievement() {
  return (
    <>
      <section className="py-14 md:py-20 bg-gradient-to-t from-[#030516] to-[#0C2645]">
        <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
          <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
            <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
              <div>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                  We build solutions that help{" "}
                  <span className="text-[#60a6e7]">businesses</span> of all
                  sizes to <span className="text-[#60a6e7]">scale</span>
                </p>
              </div>
            </div>
            <div className="flex justify-evenly sm:justify-between items-center gap-3">
              <div className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                  50+
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  Clients
                </span>
              </div>

              <div className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                  120+
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  Projects
                </span>
              </div>

              <div className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                  10+
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  Team leads
                </span>
              </div>

              <div className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                  10+
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  Glorious years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
