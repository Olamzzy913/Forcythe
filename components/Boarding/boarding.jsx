export default function Boarding() {
  const discoveryStep = [
    {
      text: "Starks",
      image: "/img",
    },
  ];

  const discoveryData = [
    {
      text: "Starks Associate",
      url: "/john.svg",
      subtext:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
      subHead: "John, Management",
    },
    // {
    //   text: "ExecutivePros",
    //   url: "",
    //   subtext:
    //     "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    //   subHead: "Testimony, Co-founder",
    // },
    // {
    //   text: "Stac AI",
    //   url: "",
    //   subtext:
    //     "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
    //   subHead: "Edwin, Former CTO",
    // },
    // {
    //   text: "Iwaria",
    //   url: "",
    //   subtext:
    //     "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    //   subHead: "Iwaria, Founder",
    // },
    // {
    //   text: "Beaupreneur",
    //   url: "",
    //   subtext:
    //     "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
    //   subHead: "Christiana, Founder",
    // },
  ];
  return (
    <>
      <section className="px-[1.25rem] md:px-[2.5rem] lg-[3.5rem] py-10">
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
            Discover the{" "}
            <span className="text-[#60a6e7]">transformative stories</span> of
            startups that scaled new heights with us
          </p>
        </div>
        <div className="w-full overflow-x-hidden hide-scrollbar">
          <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
            {discoveryStep.map((item, index) => (
              <div
                key={index}
                className="w-full p-[1.1rem] cursor-pointer false transition-all duration-300 rounded-s-full"
              >
                <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                  <img src={item.image} className="" />
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        {discoveryData.map((item) => (
          <div className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0C2645] lg:relative">
            <div className="sm:basis-[58%] pr-3">
              <p className="font-bold text-[1rem] mb-3">{item.text}</p>
              <p className="font-medium text-[1rem] mb-4">{item.subtext}</p>
              <p className="font-medium text-[1rem]">{item.subHead}</p>
            </div>
            <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
              <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl">
                <img src={item.url} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
