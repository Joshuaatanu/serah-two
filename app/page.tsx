import Image from "next/image";
import Navbar from "@/components/Navabar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/home_jumbo.png")]'>
        <h3 className="text-[60px] text-white">
          The Premiere Copy <br /> Destination For Plant/ <br /> Vegan Food and
          Cruelty free Brands.
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
      {/* What we do section */}
      <section className="px-32">
        <h3 className="text-center text-[40px]">What we do</h3>
        <div className="flex flex-row">
          <h3 className="text-[60px]">
            There’s more to your <br /> brand but are your <br />
            customers aware ?
          </h3>
          <p className="text-[20px] ml-[500px] px-5 mt-8">
            Having a unique voice can be a struggle, with so many <br /> health
            focused and cruelty free brands, many have found <br /> themselves
            getting swallowed in that ocean. <br />
            If this is you then let me help rewrite your story building <br /> a
            raving customer base with words that draw attention
          </p>
        </div>
      </section>
      {/* logo section */}
      <section>
        <div className="bg-red-400 h-[267px] w-full bg-cover">
          <h2 className="text-center text-[40px]"> Logo section</h2>
        </div>
      </section>
      {/* what we offer  section */}
      <section className="px-32 flex ">
        <div>
          <p className="text-[20px]">
            The industry is booming and more people around the globe <br /> are
            searching daily for trusted brands to help on their <br /> journey.
            But, having a wide reach and driving traffic where <br /> needed can
            be tasking or maybe confusing as the direction <br /> to take may
            not be as clear.I’m here to get that sorted and <br /> help in
            achieving your goals substantially. Let’s send clear <br /> messages
            to your audience, building trust whilst offering <br />
            some of the best products.
          </p>
          <p className="text-16px mt-16">
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
        </div>

        <div className="ml-[500px]">
          <h3 className="text-[60px]">
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
    </div>
  );
}
