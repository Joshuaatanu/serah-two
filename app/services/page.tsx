/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navabar";
import React, { useState } from "react";

function Contact() {
  const [activeTab, setActiveTab] = useState(0);

  const tab = [
    {
      title: "Web Copy",
      heading: "",
      content:
        "Effective copy is integral for the growth of any business and your website should express to potential customers what your brand offers.",
    },
    {
      title: "Blog Posts & Articles",
      heading: "",
      content:
        "Unleash the power of compelling storytelling and informative content with enlightening Blog Posts and Articles service. Whether you're looking to engage your audience, boost SEO, or establish thought leadership, our expertly crafted content will captivate your readers. From in-depth articles to shareable blog posts, we tailor each piece to align seamlessly with your brand's voice and objectives.",
    },
    {
      title: " (FAQs)",
      heading: "",
      content:
        " Answer your audience's inquiries seamlessly. The FAQ service ensures your website is a go-to resource for valuable information. I will meticulously compile a comprehensive set of Frequently Asked Questions, addressing queries your customers commonly have. Clear, concise, and user-friendly, the FAQs enhance user experience and foster confidence in your brand.",
    },
    {
      title: "Email marketing",
      heading: "",
      content:
        "The strategic key to unlocking direct communication with your audience is email marketing. Harnessing the power of personalized, targeted and engaging email campaigns to foster stronger connections, drive conversions and build lasting relationship with loyal subscribers is essential for every business ",
    },
    {
      title: "Case Study",
      heading: "",
      content:
        " Showcasing success stories has never been more persuasive. With the Case Study service, I delve into the details of your projects, highlighting challenges, solutions, and measurable results. A well-crafted case study not only serves as a testament to your expertise but also acts as a powerful tool for attracting new clients. Let me tell your success stories in a compelling and convincing way. ",
    },
  ];
  return (
    <div className="bg-[#E9eeed]">
      <Navbar />
      <div className='h-[829px] w-full bg-cover px-32 py-16  bg-[url("../public/services_jumbo.jpg")]'>
        <h3 className="text-[93px] mt-[80px]  playfair-regular text-white">
          Taste Meets health <br /> in a minimalist <br /> Universe Cruelty free
          Brands.
        </h3>
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
      <section>
        <div className="max-w-3xl mx-auto mb-[10%]">
          <div className="flex">
            {tab.map((tab, index) => (
              <button
                key={index}
                className={`px-8 py-2 transition hover:bg-blue-300 ml-4
              heading:"", ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : " ${styles['hover-line']} hover:underline  text-gray-700"
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
                <h3 className="text-[20px]  font-bold text-center mb-3">
                  {tab[0].heading}
                </h3>
                <p className="poppins-regular text-[20px] text-[3]">
                  {tab[0].content}
                </p>
              </div>
            </div>
            <div
              className={`flex  items-center  justify-center ${
                activeTab === 1 ? "" : "hidden"
              } `}
            >
              <div className="">
                <h3 className="text-[20px]   font-bold text-center mb-3">
                  {tab[1].heading}
                </h3>
                <p className="poppins-regular text-[20px] text-[3]">
                  {tab[1].content}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex  items-center  justify-center ${
              activeTab === 2 ? "" : "hidden"
            } `}
          >
            <div className="">
              <h3 className="text-[20px]  font-bold text-center mb-3">
                {tab[2].heading}
              </h3>
              <p className="poppins-regular text-[20px] text-[3]">
                {tab[2].content}
              </p>
            </div>
          </div>

          <div
            className={`flex  items-center  justify-center ${
              activeTab === 3 ? "" : "hidden"
            } `}
          >
            <div className="">
              <h3 className="text-[20px]  font-bold text-center mb-3">
                {tab[3].heading}
              </h3>
              <p className="poppins-regular text-[20px] text-[3]">
                {tab[3].content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-32">
        <h3 className=" px-64 mb-10 playfair-regular italic font-semibold  text-[48px] ">
          What Each Service Offers You:
        </h3>
        <div className="space-y-6">
          <div className="flex space-x-6 justify-center items-center">
            <div className="h-[451px] w-[411px] bg-[#A0BFC8] rounded-2xl">
              <h3 className="text-[48px] px-8 craftswork-semibold font-medium py-6">
                Strategic <br /> Approach
              </h3>
              <p className="px-8 text-[20px] craftswork-semibold">
                Every piece of content is crafted with an approach to align with
                your business goals, ensuring that each element serves a purpose
                in your overall content strategy.
              </p>
            </div>
            <div className="h-[451px] w-[411px] bg-[#A0BFC8] rounded-2xl">
              <h3 className="text-[48px] px-8 craftswork-semibold font-medium py-6">
                Tailored <br /> Brand Voice
              </h3>
              <p className="px-8 text-[20px] craftswork-semibold">
                Understanding the importance of maintaining a consistent brand
                voice is crucial. Our content is carefully put together to
                reflect your unique tone, style, and brand personality.
              </p>
            </div>
            <div className="h-[451px] w-[411px] bg-[#A0BFC8]  rounded-2xl">
              <h3 className="text-[48px] px-8 craftswork-semibold font-medium py-6">
                Research <br />
                Backed <br /> Content
              </h3>
              <p className="px-8 text-[20px] craftswork-semibold">
                I delve into thorough research to ensure that your content is
                not only engaging but also backed by credible information,
                positioning your brand as an authority in your industry.
              </p>
            </div>
          </div>

          <div className=" flex space-x-6 justify-center items-center">
            <div className="h-[451px] w-[626px] bg-[#A0BFC8] rounded-2xl">
              <h3 className="text-[48px] px-8 craftswork-semibold font-medium py-6">
                Engagement <br /> and Conversion
              </h3>
              <p className="px-8 text-[20px] craftswork-semibold">
                Whether it's an article, FAQ, newsletter, email-marketing or
                case study, our content is designed to engage your audience and
                drive conversions. Each piece is tailored for user experience
                and conversion goals.
              </p>
            </div>
            <div className="h-[451px] w-[626px] bg-[#A0BFC8] rounded-2xl">
            <h3 className="text-[48px] px-8 craftswork-semibold font-medium py-6">
                Consistent <br /> Measurable Results
              </h3>
              <p className="px-8 text-[20px] craftswork-semibold">
              For case studies, the focus is on results that provide concrete evidence of your success stories. This data-driven approach reinforces trust and credibility with potential clients. In essence, our service page offers a comprehensive suite of content solutions that go beyond words – we create a narrative that builds trust, engages your audience, and drives tangible results for your business.
                
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
