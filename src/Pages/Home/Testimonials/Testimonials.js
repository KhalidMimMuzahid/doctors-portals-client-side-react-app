import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      photo: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      photo: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      photo: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <section>
      <div className="flex justify-between ">
        <div>
          <h4 className="text-secondary text-xl font-bold">Testimonial</h4>
          <h2 className="text-5xl font-bold">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-28 lg:w-48" />
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Testimonial key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
