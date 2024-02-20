"use client";
import Navbar from "@/components/Navabar";
import React, { useState } from "react";

function Contact() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = [
    {
      title: "Tab 1",
      heading:"cococcococ",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Tab 1",
      heading:"cococcococ",
      content: "lorem ipsum dolor sit amet",
    },
    {
      title: "Tab 1",
      heading:"cococcococ",
      content: "lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="bg-[#E9eeed]">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/services_jumbo.jpg")]'>
        <h3 className="text-[93px] text-white">
          Taste Meets health <br /> in a minimalist <br /> Universe Cruelty free
          Brands.
        </h3>
        <p className="text-[24px] text-white">
          At our company, we specialize in providing top-quality services to our
          <br /> clients. Our team of experts works tirelessly to ensure that
          every project <br /> is completed to the highest..
        </p>
        <button
          className="bg-[#7399A4] px-6 lg:text-[20px] py-6 rounded-2xl mt-5"
          aria-label="jumbtron_home_button"
        >
          Transform your Journey
        </button>
      </div>
      {/* redefine headding */}
      <section>
        <h3 className="text-center text-[48px]">
          Ready to Redefine Your Narrative?
        </h3>
        <p className="text-[16px] text-center">
          Crafting compelling copy that ot only converts but also leaves
          customers wanting more
        </p>
      </section>

      {/* services offered section */}

      <section>
        <div className="max-w-3xl mx-auto">
          <div className="flex">
            {tab.map((tab,index)=>(
              <button
              key={index}
              className={`px-4 py-2  ml-4
              heading:"cococcococ", ${
                activeTab === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
            }`}
            onClick={()=> setActiveTab(index)}
              >{tab.title}</button>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className={`flex  items-center  justify-center ${activeTab === 0 ? "" : "hidden"} ` }>
              <div className="">
                <h3 className="text-[40px]">{tab[0].heading}</h3>
                 <p>{tab[0].content}</p> 
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
