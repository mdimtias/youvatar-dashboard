import React from "react";
import Thumbnail from "./../../assets/thumbnail.png";
import Circle from "./../../assets/circle.png";
const Learners = () => {
  return (
    <>
      <div className="flex gap-10 md:gap-5 justify-center lg:justify-between flex-col md:flex-row">
        <div className="flex flex-col md:block">
          <h3 className="text-2xl text-left font-bold text-[#121212] mb-5">
            Course Landing Page
          </h3>
          <img src={Thumbnail} alt="Thumbnail" />
        </div>
        <div className="flex flex-col justify-end">
          <h3 className="text-3xl font-bold text-[#121212]">Progress</h3>
          <img src={Circle} alt="Circle" />
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl text-black font-semibold mb-3">
          What will students learn in your course?
        </h3>
        <p className="text-black text-base">
          You must enter at least 2 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </p>
      </div>
      <input
        type="text"
        className="placeholder:text-[#808080] text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-[10px] px-4 mb-3 w-full"
        placeholder="Example: Able to build full stack applications"
      />
      <input
        type="text"
        className="placeholder:text-[#808080] text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-[10px] px-4 w-full"
        placeholder="Example: Intermediate understanding of react"
      />
      <button className="py-3 px-16 text white font-semibold text-white bg-[#3949AB] my-5 rounded-md">
        Add More
      </button>

      <div className="flex justify-between items-center">
        <a href="" className="text-base font-semibold text-[#3949AB]">
          Back
        </a>
        <button className="py-3 px-16 text white font-semibold text-white bg-[#3949AB] rounded-md">
          Proceed
        </button>
      </div>
    </>
  );
};

export default Learners;
