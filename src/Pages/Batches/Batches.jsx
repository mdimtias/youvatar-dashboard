import React from "react";
import Thumbnail from "./../../assets/thumbnail.png";
import Circle from "./../../assets/circle.png";

const Batches = () => {
  const selectIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13L14 9H6L10 13ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
        fill="#808080"
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
      <h3 className="text-base mb-5 text-[#121212]">Organize Your Base</h3>
      <div className="border border-solid border-[#C7C9D9] p-5">
        <h4 className="text-base font-semibold text-[#121212] mb-3">
          Batch No: 1
        </h4>
        <div className="border border-solid border-[#C7C9D9] p-5 flex gap-5">
          <h4 className="text-base font-semibold text-[#121212] mb-3">
            Batch Name: 1
          </h4>
          <div className="flex gap-3">
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
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="mt-5">
            <label htmlFor="" className="text-sm text-[#121212]">
              Select start time
            </label>
            <div class="relative">
              <select class="appearance-none relative block w-full py-[18px] px-4 mt-2 text-gray-900 bg-white border border-solid border-[#D8DADC] rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm">
                <option value="" disabled>
                  Select Time
                </option>
                <option value="12:00 PM - 2:30 AM">12:00 PM - 2:30 AM</option>
                <option value="2:30 PM - 5:30 AM">12:00 PM - 2:30 AM</option>
                <option value="06:00 PM - 8:30 AM">12:00 PM - 2:30 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {selectIcon}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm text-[#121212]">
              Select end time
            </label>
            <div class="relative">
              <select class="appearance-none relative block w-full py-[18px] px-4 mt-2 text-gray-900 bg-white border border-solid border-[#D8DADC] rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm">
                <option value="" disabled>
                  Select Time
                </option>
                <option value="12:00 PM - 2:30 AM">8:00 AM - 9:30 AM</option>
                <option value="2:30 PM - 5:30 AM">10:00 AM - 11:30 AM</option>
                <option value="06:00 PM - 8:30 AM">12:00 AM - 1:30 AM</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {selectIcon}
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="mt-5">
            <label htmlFor="" className="text-sm text-[#121212]">
              No OF Student
            </label>
            <div class="relative">
              <select class="appearance-none relative block w-full py-[18px] px-4 mt-2 text-gray-900 bg-white border border-solid border-[#D8DADC] rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm">
                <option value="" disabled>
                  Students
                </option>
                <option value="50">50</option>
                <option value="250">250</option>
                <option value="450">450</option>
                <option value="550">550</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {selectIcon}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm text-[#121212]">
              Date
            </label>
            <div class="relative">
              <select class="appearance-none relative block w-full py-[18px] px-4 mt-2 text-gray-900 bg-white border border-solid border-[#D8DADC] rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm">
                <option value="" disabled>
                  Date
                </option>
                <option value="4/12/2023">4/12/2023</option>
                <option value="5/12/2023">5/12/2023</option>
                <option value="5/12/2023">6/12/2023</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {selectIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="py-3 px-16 my-5 text white font-semibold text-white bg-[#3949AB] rounded-md">
        Add New Batch
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

export default Batches;
