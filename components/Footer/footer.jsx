import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <section className="px-[1.23rem] md:px-[2.5rem] py-10 text-center  bg-gradient-to-b from-[#030516] to-[#071626] bg-[#071626] bg-opacity-0">
        <div className="max-w-[45rem] mx-auto">
          <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
            <span className="text-[#6AA7E0]">Ready to Scale?</span> <br /> Join
            successful brands that chose us as their{" "}
            <span className="text-[#6AA7E0]"> growth accelerator</span>
          </h2>
          <div className="w-fit mx-auto mb-5">
            <div className="relative w-fit group">
              <button
                className="transition-all duration-300 w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
"
              >
                Book a Call
              </button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#071626] px-[2rem] py-[2rem]">
        <div className="lg:grid lg:grid-cols-3 my-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="w-full grid grid-cols-4">
              <input
                placeholder="Your Email Address"
                className="py-3 col-span-3 text-white bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <div
                onClick={() => {
                  setToggled(!toggled);
                }}
                className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center"
              >
                {toggled && <div class="bg-white rounded-full w-2 h-2"></div>}
                <input
                  className="hidden"
                  id="agreement"
                  type="checkbox"
                  name="agreement"
                />
              </div>
              <label className="text-sm font-normal cursor-pointer">
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <Image
                src={"/image"}
                alt="logo"
                width={130}
                height={9}
                className="mb-5 md:mb-8"
              />
              <p className="text-base text-[rgba(177,182,187,0.51)] leading font-normal">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2"></div>
            </div>
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-bold">Company </h3>
              <ul class="flex flex-col gap-2">
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/about">
                    <span>About</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/service">
                    <span>Service</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/portfolio">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/studio">
                    <span>Studio</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/foundation">
                    <span>Foundation</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/career">
                    <span>Career</span>
                  </a>
                </li>
                <li class="text-base text-[#ADC9EB] font-medium">
                  <a href="/blog">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-[#B0CDEF] text-center md:text-left w-full border-t border-[#60A6E7] pt-5 font-medium text-[.9rem]">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </section>
    </>
  );
}
