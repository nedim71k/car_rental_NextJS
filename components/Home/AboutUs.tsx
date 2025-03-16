import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div id="about" className="relative bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 text-gray-900 py-20 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[40px] md:text-[60px] font-extrabold leading-tight">
          About Us
        </h1>
        <p className="text-[18px] md:text-[22px] mt-4">
          At <strong className="text-orange-700">Rent A Car</strong>, we strive to provide you with the best car rental experience. Whether for business or leisure, we make your journey unforgettable.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h2 className="text-[28px] md:text-[32px] font-bold mb-4">Our Mission</h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed">
              We aim to make car rentals easy, accessible, and reliable for everyone. With a wide variety of vehicles, seamless booking processes, and excellent customer service, we prioritize your satisfaction and safety.
            </p>
          </div>
         
          <div>
            <Image
              src="/cars2.jpg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-3xl object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div>
            <Image
              src="/team.JPG"
              alt="Our Fleet"
              width={500}
              height={300}
              className="rounded-3xl object-cover mx-auto shadow-lg"
            />
          </div>
          <div>
          <h2 className="text-[28px] md:text-[32px] font-bold mb-4">Our Team</h2>
<p className="text-[16px] md:text-[18px] leading-relaxed">
  Meet the dedicated professionals who ensure your experience with us is exceptional. From customer service to vehicle maintenance, our team works tirelessly to deliver outstanding service.
</p>

          </div> 
          </div> 
          </div>
          </div>
  )
}


export default AboutUs;