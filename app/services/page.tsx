"use client"
import Navbar from "@/components/Navabar";
import React, { useState } from "react";

function Contact() {
    const [activeTab, setActiveTab]= useState(0)

    const tabs  = [
        {
            title: 'Tab 1',
            leftContent: 'Left content for Tab 1',
            rightContent: 'Right content for Tab 1',
        },
        {
            title: 'Tab 2',
            leftContent: 'Left content for Tab 2',
            rightContent: 'Right content for Tab 2',
        },
    ]
  return (
    <div className="bg-[#E9eeed]">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/services_jumbo.jpg")]'>
        <h3 className="text-[93px] text-white">
          Taste Meets health <br /> in a minimalist <br /> Universe Cruelty free
          Brands.
        </h3>
        <p className="text-[24px] text-white">
          At our company, we specialize in providing top-quality services to our{" "}
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

      <section className="px-[32px]">
        <h3 className="text-center text-[48px]">
          {" "}
          ready to Redefine Your Narrative?{" "}
        </h3>
        <p className="text-[16px] text-center">
          Crafting compelling copy that ot only converts but also leaves
          customers wanting more
        </p>
      </section>

      {/* faq section */}
      <section>
      <div className="max-w-3xl mx-auto">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2  ${
                            activeTab === index
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="mt-4 border-t pt-4">
                <div className={`flex space-x-4 ${activeTab === 0 ? '' : 'hidden'}`}>
                    <div className="flex-1">{tabs[0].leftContent}</div>
                    <div className="flex-1">{tabs[0].rightContent}</div>
                </div>
                <div className={`flex space-x-4 ${activeTab === 1 ? '' : 'hidden'}`}>
                    <div className="flex-1">{tabs[1].leftContent}</div>
                    <div className="flex-1">{tabs[1].rightContent}</div>
                </div>
                {/* Add more tab content sections as needed */}
            </div>
        </div>
      </section>

      <section className="px-32">
        <h3 className="text-[48px">What Each Service Offers You:</h3>
        <div className="space-y-6">
          <div className="flex space-x-6 justify-center items-center">
            <div className="h-[451px] w-[411px] bg-red-400 rounded-2xl">
              <h3></h3>
            </div>
            <div className="h-[451px] w-[411px] bg-red-400 rounded-2xl"></div>
            <div className="h-[451px] w-[411px] bg-red-400 rounded-2xl"></div>
          </div>

          <div className=" flex space-x-6 justify-center items-center">
            <div className="h-[451px] w-[626px] bg-red-400 rounded-2xl"></div>
            <div className="h-[451px] w-[626px] bg-red-400 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
