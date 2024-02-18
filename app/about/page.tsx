import Navbar from "@/components/Navabar";
import React from "react";

function About() {
  return (
    <div className="bg-[#E9eeed] bg-cover">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/home_jumbo.jpg")]'>
        <h3 className="text-[100px] text-white">
          <span className="text-green-600 italic"> No better time</span>&nbsp;for Vegan{" "}
          <br /> and plant based brands to
          <br /> Flourish!
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
      <section className="px-32 mt-10">
        <div className="">
          <ul className="text-center space-y-2">
            <li>
              Plant based diets have been linked to lower rates of heart disease
            </li>
            <li>
              As a household staple, plant-based milk not transformed the way
              people approach <br />
              their diets but has also become a symbol of the growing demand for
              sustainable and cruelty <br /> free alternatives
            </li>
            <li>
                Around 1.5 billion people worldwide avoid meat and items made with meat , creating the <br/>
                market  opportunity for plantbased cruelty free meat products 
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
