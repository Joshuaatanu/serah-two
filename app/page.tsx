import Image from "next/image";
import Navbar from "@/components/Navabar";

export default function Home() {
  return (
    <div className="bg-[#E9eeed]">
      <Navbar />
      <div className='lg:h-[829px] w-full bg-cover lg:px-32 px-8 lg:py-16 py-16  bg-[url("../public/home_jumbo.jpg")]'>
        <h3 className="lg:text-[60px] text-[30px] unbounded-regular text-white">
          The Premiere Copy <br /> Destination For Plant/ <br /> Vegan Food and
          Cruelty free Brands.
        </h3>
        <p className="lg:text-[24px]  text-[12px] playfair-regular text-white">
          At our company, we specialize in providing top-quality services to our{" "}
          <br /> clients. Our team of experts works tirelessly to ensure that
          every project <br /> is completed to the highest..
        </p>
        <button
          className="bg-[#7399A4] lg:px-6  px-3 lg:text-[20px] lg:py-6 py-3 rounded-2xl mt-5"
          aria-label="jumbtron_home_button"
        >
          Transform your Journey
        </button>
      </div>
      {/* What we do section */}
      <section className="lg:px-32 px-16">
        <h3 className="text-center lg:text-[40px]  text-[15px] playfair-bold-italic italic font-bold">What we do</h3>
        <div className="flex lg:flex-row flex-col">
          <h3 className="lg:text-[60px] text-[20px] craftswork-semibold font-semibold">
            There’s more to your <br /> brand but are your <br />
            customers aware ?
          </h3>
          <p className="lg:text-[20px]  lg:ml-[500px] text-[#727070] lg:px-5 mt-8 craftswork-semibold">
            Having a unique voice can be a struggle, with so many <br /> health
            focused and cruelty free brands, many have found <br /> themselves
            getting swallowed in that ocean. <br />
            If this is you then let me help rewrite your story building <br /> a
            raving customer base with words that draw attention
          </p>
        </div>
      </section>
      {/* logo section */}
      {/* <section>
        <div className="bg-red-400 h-[267px] w-full bg-cover">
          <h2 className="text-center text-[40px]"> Logo section</h2>
        </div>
      </section> */}
      {/* what we offer  section */}
      <section className="lg:px-32 px-16 lg:flex  mt-10">
        <div>
          <p className="lg:text-[20px] text-[10px] text-[#727070] craftswork-semibold ">
            The industry is booming and more people around the globe <br /> are
            searching daily for trusted brands to help on their <br /> journey.
            But, having a wide reach and driving traffic where <br /> needed can
            be tasking or maybe confusing as the direction <br /> to take may
            not be as clear.I’m here to get that sorted and <br /> help in
            achieving your goals substantially. Let’s send clear <br /> messages
            to your audience, building trust whilst offering <br />
            some of the best products.
          </p>
          <p className="text-16px lg:mt-16   playfair-regular">
            At our company, we specialize in providing top- <br />
            quality services to our clients. Our team of experts <br /> works
            tirelessly to ensure that every project is <br /> completed to the
            highest..
          </p>
          <ul className="mt-10">
            <li>Blog Writing</li>
            <li>Email marketing</li>
            <li>Articles</li>
            <li> SEO Optimization</li>
          </ul>
          <button
            className="bg-[#000000] px-8  text-white lg:text-[20px] py-3 rounded-md mt-5 hover:border-black hover:border hover:bg-white hover:text-black"
            aria-label="jumbtron_home_button"
          >
            Read more
          </button>
        </div>

        <div className="ml-[500px]">
          <h3 className="text-[60px]  craftswork-semibold font-semibold">
            All things <br /> cruelty free <br />
            is going <br /> nowhere and <br />
            so is your <br /> brand.
          </h3>
        </div>
      </section>
      {/* testimonial  */}
      <section>
        <div className="bg-red-400 h-[267px] w-full bg-cover">
          <h2 className="text-center text-[40px]"> testimonial section</h2>
        </div>
      </section>
      {/* get to know me section */}
      <section className="px-32">
        <div className=" flex flex-row">
          <div className=" mt-24">
            <h3 className="text-[40px] playfair-bold-italic italic font-bold mb-5">Get know me</h3>
            <p className="craftswork-semibold text-[24px] ">
              Hello!! I’m Sarah, a copywriter with a specialized focus <br /> on
              vegan, plant-based goods, as well as cruelty-free goods. <br />{" "}
              With a passion for ethical living, I go beyond crafting <br />{" "}
              compelling content and I’m all about brand growth in the <br />{" "}
              ever-expanding realm of conscious consumerism.
            </p>
            <p className="mt-3 craftswork-semibold text-[24px]">
              I strive to enlighten audiences about sustainable choices <br />
              and partner with brands to elevate their awareness in this <br />{" "}
              rapidly growing industry. I’m not just a writer but a catalyst{" "}
              <br /> for positive change and brand evolution in the world of{" "}
              <br /> compassionate and conscious living. 
            </p>
          </div>

          <div className="h-[350px] w-[426px] rounded-tl-[80px] ml-[30%] mt-20  bg-red-400 rounded-tr-[80px]">
            <h3 className="text-center mx-auto">Image</h3>
          </div>
        </div>
      </section>
      {/* call to action */}
      <div className="flex flex-row justify-center items-center mt-4 "><div className='h-[420px] w-[1320px] rounded-[70px] bg-cover px-32 py-16  hidden'></div></div>
      
    </div>
  );
}
