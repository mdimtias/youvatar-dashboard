import React from "react";
import Thumbnail from "./../../assets/thumbnail.png";
import Circle from "./../../assets/circle.png";
import Upload from "./../../assets/upload.png";
const Home = () => {
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
      <div className="mt-5">
        <form action="">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="text-sm text-black block text-left mb-1 font-inter font-normal"
            >
              Course Title
            </label>
            <input
              type="text"
              className="placeholder:text-[#808080] text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
              placeholder="Course Title"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="text-sm text-black block text-left mb-1 font-inter"
            >
              Course Subtitle
            </label>
            <input
              type="text"
              className="placeholder:text-[#808080] text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
              placeholder="Course Subtitle"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="text-sm text-black block text-left mb-1 font-inter"
            >
              Course Description
            </label>
            <textarea
              className="placeholder:text-[#808080] text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message: Congratulations on completing course username"
            ></textarea>
          </div>
          <div className="mb-5">
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="text-sm text-black block text-left mb-1 font-inter"
                >
                  Course Subtitle
                </label>
                <select
                  name=""
                  id=""
                  className="text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
                  defaultValue="Level"
                >
                  <option defaultValue="Language" disabled>
                    Language
                  </option>
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="text-sm text-black block text-left mb-1 font-inter"
                >
                  Level
                </label>
                <select
                  name=""
                  id=""
                  className="text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
                  defaultValue="Level"
                >
                  <option defaultValue="Level" disabled>
                    Level
                  </option>
                  <option value="Bangla">Beginner</option>
                  <option value="English">Intermediate</option>
                  <option value="Hindi">Advance</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="text-sm text-black block text-left mb-1 font-inter"
                >
                  Category
                </label>
                <select
                  name=""
                  id=""
                  className="text-base text-black outline-none border border-solid border-[#D8DADC] rounded-lg py-4 px-4 w-full"
                  defaultValue="Level"
                >
                  <option defaultValue="Category" disabled>
                    Category
                  </option>
                  <option value="Bangla">Design</option>
                  <option value="English">Development</option>
                  <option value="Hindi">Testing</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm text-black block text-left mb-5 font-inter">
              Upload Video or PPT
              <input type="file" className="hidden" />
              <div className="mt-2 relative rounded-md border-dashed border-2 border-gray-400 bg-white">
                <div className="flex flex-col justify-center items-center py-5">
                  <img src={Upload} alt="Upload" />
                  <span className="ml-2 text-gray-500">Browse to upload</span>
                </div>
              </div>
            </label>
            <label className="text-sm text-black block text-left mb-5 font-inter">
              Upload Landing Photo
              <input type="file" className="hidden" />
              <div className="mt-2 relative rounded-md border-dashed border-2 border-gray-400 bg-white">
                <div className="flex flex-col justify-center items-center py-5">
                  <img src={Upload} alt="Upload" />
                  <span className="ml-2 text-gray-500">Browse to upload</span>
                </div>
              </div>
            </label>
          </div>
        </form>
        <div className="flex justify-between items-center">
          <a href="" className="text-base font-semibold text-[#3949AB]">
            Back
          </a>
          <button className="py-3 px-16 text white font-semibold text-white bg-[#3949AB] rounded-md">
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
