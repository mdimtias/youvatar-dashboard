import React from "react";
import Thumbnail from "./../../assets/thumbnail.png";
import Circle from "./../../assets/circle.png";

const Curriculum = () => {
  const editIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0833 5.43752L10.5417 1.93752L11.7083 0.770854C12.0278 0.451409 12.4203 0.291687 12.8858 0.291687C13.3508 0.291687 13.7431 0.451409 14.0625 0.770854L15.2292 1.93752C15.5486 2.25696 15.7153 2.64252 15.7292 3.09419C15.7431 3.5453 15.5903 3.93058 15.2708 4.25002L14.0833 5.43752ZM12.875 6.66669L4.04167 15.5H0.5V11.9584L9.33333 3.12502L12.875 6.66669Z"
        fill="black"
      />
    </svg>
  );
  const deleteIcon = (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83331 11.75L6.99998 9.58333L9.16665 11.75L10.3333 10.5833L8.16665 8.41667L10.3333 6.25L9.16665 5.08333L6.99998 7.25L4.83331 5.08333L3.66665 6.25L5.83331 8.41667L3.66665 10.5833L4.83331 11.75ZM2.83331 15.5C2.37498 15.5 1.98276 15.3369 1.65665 15.0108C1.32998 14.6842 1.16665 14.2917 1.16665 13.8333V3H0.333313V1.33333H4.49998V0.5H9.49998V1.33333H13.6666V3H12.8333V13.8333C12.8333 14.2917 12.6703 14.6842 12.3441 15.0108C12.0175 15.3369 11.625 15.5 11.1666 15.5H2.83331Z"
        fill="black"
      />
    </svg>
  );

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

      <p className="text-base mb-5 text-[#121212]">
        Start putting together your course by creating sections, lectures and
        practice
      </p>
      <div className="border border-solid border-[#C7C9D9] p-5">
        <div className="flex gap-5">
          <h4 className="text-base font-semibold text-[#121212] mb-3">
            Module 1: Introduction
          </h4>
          <div className="flex gap-3">
            {editIcon}
            {deleteIcon}
          </div>
        </div>
        <div className="flex justify-between flex-wrap border border-solid border-[#C7C9D9] px-5">
          <div className="py-5 flex gap-5">
            <h4 className="text-base font-semibold text-[#121212]">
              Lecture 1: Introduction
            </h4>
            <div className="flex gap-3">
              {editIcon}
              {deleteIcon}
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <a href="" className="text-base font-semibold text-[#3949AB]">
              Add Assignments
            </a>
            <button className="py-2 px-8 text white font-semibold text-white bg-[#3949AB] rounded-md">
              Add Resource
            </button>
          </div>
        </div>
      </div>

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

export default Curriculum;
