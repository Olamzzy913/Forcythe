import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

export default function Service() {
  const filter = ["Idea", "Design", "Develop", "Lunch"];
  const [currentFilter, setCurrentFilter] = useState("Idea");

  const filterData = [
    {
      id: "Idea",
      url: "",
      title: " Your vision is unique.",
      subtitle:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    },
    {
      id: "Design",
      url: "",
      title: "Crafting the blueprint for success",
      subtitle:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    },
    {
      id: "Develop",
      url: "",
      title: "Turning blueprints into reality.",
      subtitle:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    },
    {
      id: "Lunch",
      url: "",
      title: "Your launchpad to the market.",
      subtitle:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    },
  ];

  // Find the matching data based on the current filter
  const filteredData = filterData.find((item) => item.id === currentFilter);

  return (
    <>
      <div className="px-[1.25rem] md:px-[2.5rem] lg-[3.5rem] py-20">
        <div className="mb-12 xl:mb-0 ">
          <div>
            <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
              From <span className="text-[#60a6e7]">Spark</span> to{" "}
              <span className="text-[#60a6e7]">Spotlight:</span> we take you
              every step of the way to success.
            </p>
          </div>
          <div className="flex lg:items-end flex-col md:flex-row">
            <div className="basis-1/2 flex mb-8 md:mb-0">
              <div className="md:pr-10">
                <div className="border-2 border-[#B3D0F2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                  {filter.map((field, index) => (
                    <div
                      onClick={() => {
                        setCurrentFilter(field);
                      }}
                      key={index}
                      className={
                        currentFilter === field
                          ? `overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300  text-black bg-[#B3D0F2]`
                          : `overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent text-white `
                      }
                    >
                      {field}
                    </div>
                  ))}
                </div>
                {filteredData && (
                  <>
                    <div>
                      <div>
                        <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                          {filteredData.title}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-[rgba(177,182,187,0.51)] text-base md:text-lg mb-8 leading-7">
                          {filteredData.subtitle}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <div className="relative w-fit group">
                  <button
                    className="transition-all duration-300 w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
"
                  >
                    Book a call <FaPlay className="text-[.8rem]" />
                  </button>
                  <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
              {filteredData && (
                <img
                  src={filteredData.url}
                  className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
