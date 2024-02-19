/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navabar";
import React from "react";

function About() {
  return (
    <div className="bg-[#E9eeed] bg-cover">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/home_jumbo.jpg")]'>
        <h3 className="text-[100px] text-white">
          <span className="text-green-600 italic"> No better time</span>
          &nbsp;for Vegan <br /> and plant based brands to
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
              Around 1.5 billion people worldwide avoid meat and items made with
              meat , creating the <br />
              market opportunity for plantbased cruelty free meat products
            </li>
          </ul>
        </div>
      </section>
      {/* about section */}
      <section className="px-32 mt-6">
        <div className="flex items-center">
          <div>
            <h3 className="text-[48px]">Find Out what make me unique</h3>
            <p className=" mt-3 text-[24px]">
              Hello, I’m Sarah Tex. It's really great to make your acquaintance.
              As <br /> a marketer and writer, I help businesses like yours
              transcend <br />
              geographical boundaries by bridging the gap between words and
              <br />
              marketing strategies. 
            </p>
            <p className=" mt-3 text-[24px]">
              My interest in this industry developed came from a place of <br />
              fascination on the positive impacts of dietary changes and how
              <br />
              that affects a person's overall health and well being. So yes, I
              <br />
              decided if I was going to write then it had to be meaningful,
              <br />
              contributing in my own way through penmanship.
            </p>
            <p className=" mt-3 text-[24px]">
              And of course I have to commend your commitment, to spreading
              <br />
              the word and making the products available to consumers on a
              <br /> vegan and plant based lifestyle. You're fostering a
              healthier and <br />
              more sustainable way of living and as a writer dedicated to <br />
              reaching the audience of these products,
            </p>
            <p className=" mt-3 text-[24px]">
              I'm here to help your business flourish through good copy. Turning{" "}
              <br />
              this significant market opportunity into sustainable and
              profitable <br /> sales for your brand involves a strategic and
              varied approach and <br /> that's where I come in.
            </p>
          </div>
          <div className="bg-red-400 h-[600px] w-[448px] mt-3 ml-56"></div>
        </div>
      </section>

      <div className="flex flex-row justify-center items-center mt-4 ">
        <div className='h-[420px] w-[1320px] rounded-[30px] bg-cover px-32 py-16  bg-[url("../public/call_to_action_about.jpg")]'></div>
      </div>
    </div>
  );
}

export default About;
