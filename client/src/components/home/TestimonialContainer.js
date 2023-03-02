import React from 'react'
import TestimonialCard from './TestimonialCard'
import offerImg1 from "../../assets/images/home/offer-card/image-1.jpg";
const TestimonialContainer = () => {
  return (
    <div><div className="mt-10 px-20 mb-6 testimonials">
    <hr />
    <div className="text-center mt-10">
      <h3 className="text-2xl text-orange-500">WHAT OUR TRAINEES SAYS</h3>
      <h3 className="text-3xl font-bold">TESTIMONIALS</h3>
      <div className="testimonial-card grid sm:grid-cols-1 md:grid-cols-3 place-items-center mt-6 gap-y-8 md:mx-10">
        <TestimonialCard
          data={{
            image: offerImg1,
            name: "Anshul Jha",
            text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
          }}
        />
        <TestimonialCard
          data={{
            image: offerImg1,
            name: "Anshul Jha",
            text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
          }}
        />
        <TestimonialCard
          data={{
            image: offerImg1,
            name: "Anshul Jha",
            text: "I was just going through Instagram where I found a video of Adamya sir, he was doing muscle ups and some other pull up exercises and he made it look like it is so easy as a piece of cake I was ready to begin my fitness journey.",
          }}
        />
      </div>
    </div>
    <hr className="mt-10" />
  </div></div>
  )
}

export default TestimonialContainer