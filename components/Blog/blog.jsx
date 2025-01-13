import { FaPlay } from "react-icons/fa6";

export default function Blog() {
  const blogs = [
    {
      title: "blog",
      image: "",
      span1: "The Reformist",
      span2: "May 29th, 2024",
      subtitle: "Will AI take over Art?",
    },
    {
      title: "blog",
      image: "",
      span1: "The Reformist",
      span2: "May 29th, 2024",
      subtitle: "Cryptocurrency vs Token ",
    },
    {
      title: "blog",
      image: "",
      span1: "The Reformist",
      span2: "May 29th, 2024",
      subtitle: "Cryptocurrency and Crypto assets",
    },
  ];
  return (
    <>
      <div className="mx-[1.23rem] md:mx-[2.5rem] lg:mx-[3.5rem] my-10 lg:mb-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
            Read our articles, news and product blog
          </p>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {blogs.map((blog, index) => (
            <a
              key={index}
              className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-[#60a6e7] transition-all duration-500"
            >
              <div className="h-60 sm:h-56 relative mb-6">
                <div className="bg-[#60a6e7] z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
                <img className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105" />
              </div>
              <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                <p className="text-lg font-semibold mb-1 capitalize">
                  {blog.title}
                </p>
                <div className="text-base text-[rgba(177,182,187,0.51)] flex items-center mb-6">
                  <span>{blog.span1}</span>
                  <div class="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                  <span>{blog.span2}</span>
                </div>
                <h6 class="text-xl md:text-2xl font-semibold line-clamp-2">
                  {blog.subtitle}
                </h6>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
