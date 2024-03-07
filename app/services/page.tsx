"use client"
import Footer from "@/components/Footer";
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

      <section className="px-[32px] mb-16">
        <h3 className="text-center playfair-regular italic font-semibold ] text-[48px]">
          {" "}
          ready to Redefine Your Narrative?{" "}
        </h3>
        <p className="text-[16px] playfair-regular text-center">
          Crafting compelling copy that ot only converts but also leaves
          customers wanting more
        </p>
      </section>

      {/* faq section */}
     

      <section className="px-32">
        <h3 className=" px-64 mb-10 playfair-regular italic font-semibold  text-[48px] ">What Each Service Offers You:</h3>
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


     <Footer/>
    </div>
  );
}

export default Contact;
