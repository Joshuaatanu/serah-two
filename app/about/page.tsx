/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navabar";
import React from "react";

function About() {
  return (
    <div className="bg-[#E9eeed] bg-cover">
      <Navbar />
      <div className='lg:h-[829px] w-full bg-cover lg:px-32 px-16 py-16  bg-[url("../public/home_jumbo.jpg")]'>
        <h3 className="lg:text-[100px] text-[50px] playfair-regular mt-[80px] text-white">
          <span className="text-[#3E5258] italic"> No better time</span>
          &nbsp;for Vegan <br /> and plant based brands to
          <br /> Flourish!
        </h3>
        
      </div>
      <section className="lg:px-32 px-16 mt-10">
        <div className="">
          <ul className="text-center space-y-2 craftswork-semibold">
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
      <section className="lg:px-32 px-16 mt-6">
        <div className="lg:flex  items-center">
          <div>
            <h3 className="text-center playfair-regular italic font-semibold  lg:text-[48px] text-[24px]">Find Out what make me unique</h3>
            
            <p className=" mt-3 lg:text-[24px] text-[12.5px] craftswork-semibold">
              Hello, I’m Sarah Tex. It's really great to make your acquaintance.
              As <br /> a marketer and writer, I help businesses like yours
              transcend <br />
              geographical boundaries by bridging the gap between words and
              <br />
              marketing strategies. 
            </p>
            <p className=" mt-3 lg:text-[24px] text-[12.5px]   craftswork-semibold">
              My interest in this industry developed came from a place of <br />
              fascination on the positive impacts of dietary changes and how
              <br />
              that affects a person's overall health and well being. So yes, I
              <br />
              decided if I was going to write then it had to be meaningful,
              <br />
              contributing in my own way through penmanship.
            </p>
            <p className=" mt-3 lg:text-[24px] text-[12.5px]   craftswork-semibold">
              And of course I have to commend your commitment, to spreading
              <br />
              the word and making the products available to consumers on a
              <br /> vegan and plant based lifestyle. You're fostering a
              healthier and <br />
              more sustainable way of living and as a writer dedicated to <br />
              reaching the audience of these products,
            </p>
            <p className=" mt-3 lg:text-[24px] text-[12.5px]   craftswork-semibold">
              I'm here to help your business flourish through good copy. Turning{" "}
              <br />
              this significant market opportunity into sustainable and
              profitable <br /> sales for your brand involves a strategic and
              varied approach and <br /> that's where I come in.
            </p>
          </div>
          <div className="bg-red-400 lg:h-[600px] lg:w-[448px] mt-3 ml-56"></div>
        </div>
      </section>

      {/* <div className="flex flex-row justify-center items-center mt-4 ">
        <div className='h-[420px] w-[1320px] rounded-[30px] bg-cover px-32 py-16  bg-[url("../public/call_to_action_about.jpg")]'></div>
      </div> */}

      <Footer/>
    </div>
  );
}

export default About;
