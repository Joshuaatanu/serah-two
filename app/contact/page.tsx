/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navabar";
import React, { useState } from "react";

function Contact() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = [
    {
      title: "The First call",
      heading: "Whats is your general policy",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.",
    },
    {
      title: "The Proposal",
      heading: "cassava",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.",
    },
    {
      title: "Spicy Revision",
      heading: "Garri",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.",
    },
    {
      title: "Signed,Sealed, Delivered! ",
      heading: "Ewa",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fugit recusandae quam corporis impedit perspiciatis quae cumque. Expedita nam perspiciatis error iusto suscipit architecto libero odit, unde nisi autem numquam.",
    },
  ];
  return (
    <div className="bg-[#E9eeed]">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/services_jumbo.jpg")]'>
        <h3 className="text-[96px] unbounded-regular text-white">
          Taste Meets health <br /> in a minimalist <br /> Universe Cruelty free
          Brands.
        </h3>
        {/* <p className="text-[24px] text-white">
          At our company, we specialize in providing top-quality services to our
          <br /> clients. Our team of experts works tirelessly to ensure that
          every project <br /> is completed to the highest..
        </p> */}
        {/* <button
          className="bg-[#7399A4] px-6 lg:text-[20px] py-6 rounded-2xl mt-5"
          aria-label="jumbtron_home_button"
        >
          Transform your Journey
        </button> */}
      </div>
      {/* redefine headding */}
      <section className="mb-16">
        <h3 className="text-center playfair-regular italic font-semibold font-[48px] text-[48px]">
          Ready to Redefine Your Narrative?
        </h3>
        <p className="text-[16px] playfair-regular text-center">
          Crafting compelling copy that ot only converts but also leaves
          customers wanting more
        </p>
      </section>

      {/* services offered section */}

      <section>
        <div className="max-w-3xl mx-auto">
          <div className="flex">
            {tab.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2  ml-4
              heading:"", ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div
              className={`flex  items-center  justify-center ${
                activeTab === 0 ? "" : "hidden"
              } `}
            >
              <div className="">
                <h3 className="text-[20px]  font-bold text-center mb-3">{tab[0].heading}</h3>
                <p className="poppins-regular text-[20px] text-[3]">{tab[0].content}</p>
              </div>
              
            </div>
            <div
              className={`flex  items-center  justify-center ${
                activeTab === 1 ? "" : "hidden"
              } `}
            >
              <div className="">
                <h3 className="text-[20px]   font-bold text-center mb-3">{tab[1].heading}</h3>
                <p className="poppins-regular text-[20px] text-[3]">{tab[1].content}</p>
              </div>
              
            </div>
          </div>


          <div
              className={`flex  items-center  justify-center ${
                activeTab === 2 ? "" : "hidden"
              } `}
            >
              <div className="">
                <h3 className="text-[20px]  font-bold text-center mb-3">{tab[2].heading}</h3>
                <p className="poppins-regular text-[20px] text-[3]">{tab[2].content}</p>
              </div>
              
            </div>

            <div
              className={`flex  items-center  justify-center ${
                activeTab === 3 ? "" : "hidden"
              } `}
            >
              <div className="">
                <h3 className="text-[20px]  font-bold text-center mb-3">{tab[3].heading}</h3>
                <p className="poppins-regular text-[20px] text-[3]">{tab[3].content}</p>
              </div>
              
            </div>
        </div>
      </section>

      <section className="px-32 ml -mt-20">
        <h3 className=" playfair-regular italic font-semibold  text-[48px]">Tell me more about your needs <br />
        copy and content needs</h3>

        <div className="mt-10 flex space-x-20">
          <div>
            <label>Your name</label><br />
            <input type="text" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" placeholder="John Smith"/>
          </div>
          <div>
            <label>Your Email</label><br />
            <input type="email" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" placeholder="johnsmith@gmail.com"/>
          </div>
        </div>

        <div className="mt-5 flex space-x-20">
          <div>
            <label>what's your brand called ?</label><br />
            <input type="text" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" />
          </div>
          <div>
            <label>Duration</label><br />
            <input type="text" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" />
          </div>
        </div>

        <div className="mt-5 flex space-x-20">
          <div>
            <label>What's your position</label><br />
            <input type="text" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" />
          </div>
          <div>
            <label>Whats your budget?</label><br />
            <input type="text" aria-label="input" className=" h-[43px] w-[600px] rounded-lg px-4" />
          </div>
        </div>

    


        <div className="mt-5">
        <div>
            <label>Tell  me more about content package are you looking for ?</label><br />
            <input type="text" aria-label="input" className=" h-[123px] w-[1289px] rounded-lg px-4" />
          </div>
        </div>

      </section>
      <Footer/>
    </div>
  );
}

export default Contact;
