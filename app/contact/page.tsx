import Navbar from '@/components/Navabar'
import React from 'react'

function Contact() {
  return (
    <div className='bg-[#E9eeed]'>
        <Navbar/>
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
    </div>
  )
}

export default Contact