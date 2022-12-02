import React from "react";

const Testimonial = ({ review }) => {
  const { id, name, location, photo, review: userReview } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="card-actions ">
          <div className="avatar rounded-full border border-primary border-2 p-1 mr-2">
            <div className="w-16 rounded-full  ">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className=" flex flex-col justify-center  h-full">
            <h1>{name}</h1>
            <h4>{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
