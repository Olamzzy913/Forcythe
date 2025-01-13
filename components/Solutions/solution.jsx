import { TbBrandDatabricks } from "react-icons/tb";

export default function Solution() {
  const data = [
    {
      text: "Experience",
      subtext:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      text: "Quick Support",
      subtext:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      text: "Cost Savings",
      subtext:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];
  return (
    <>
      <section className="px-[1.25rem] md:px-[2.5rem] lg-[3.5rem] py-14  bg-gradient-to-b from-[#030516] to-[#0C2645]">
        <div>
          <div>
            <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-[#B3D0F2] text-center">
              Your best call for B2B/B2C product innovation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {data.map((item) => (
            <div className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
              <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-[rgba(177,182,187,0.51)] transition-all duration-300">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <TbBrandDatabricks className="text-[2rem]" />
                  </div>
                  <h3 className="text-2xl font-medium mb-5">{item.text}</h3>
                  <div>
                    <div>
                      <p className="mb-0 text-[#A5A1A9] text-[17.5px]">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
