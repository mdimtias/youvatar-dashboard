import React, { useMemo } from "react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import Mobile from "./../assets/mobile.png";
import Preview from "./../assets/preview.png";

const DashboardLayout = () => {
  const location = useLocation();
  const isActiveLink = useMemo(
    () => (path) => location.pathname === path,
    [location.pathname]
  );
  return (
    <section className="py-10">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex justify-between mb-8">
          <h2 className="text-5xl font-extrabold text-[#3949AB]">Youvatar</h2>
          <button className="bg-[#3949AB] text-white text-base font-semibold py-3 px-5">
            Save Draft
          </button>
        </div>

        <div className="menu flex justify-center md:justify-end">
          <ul className="block md:flex gap-5 border border-solid border-[#C7C9D9] rounded-lg py-3 px-4">
            <li className="text-black font-normal text-base">
              <Link to="/" className={isActiveLink("/") ? "active-link" : ""}>
                Dashboard
              </Link>
            </li>
            <li className="text-black font-normal text-base">
              <Link
                to="/batches"
                className={isActiveLink("/batches") ? "active-link" : ""}
              >
                Batches
              </Link>
            </li>
            <li className="text-black font-normal text-base">
              <Link
                to="/learners"
                className={isActiveLink("/learners") ? "active-link" : ""}
              >
                Intended Learners
              </Link>
            </li>
            <li className="text-black font-normal text-base">
              <Link
                to="/curriculum"
                className={isActiveLink("/curriculum") ? "active-link" : ""}
              >
                Curriculum
              </Link>
            </li>
            <li className="text-black font-normal text-base">
              <Link
                to="/course-requirements"
                className={
                  isActiveLink("/course-requirement") ? "active-link" : ""
                }
              >
                Course Requirement
              </Link>
            </li>
            <li className="text-black font-normal text-base">
              <Link
                to="/course-message"
                className={isActiveLink("/course-message") ? "active-link" : ""}
              >
                Course Message
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex mt-7 gap-5">
          <div className="md:w-4/12 hidden md:flex flex-col items-center">
            <div className="mobile">
              <img src={Mobile} alt="Mobile" />
            </div>
            <div className="inline-block">
              <div className="flex justify-center mt-5 preview gap-5 py-3 px-3 rounded-md border border-solid border-[#3949AB]">
                <img src={Preview} alt="Preview" />
                <button className="bg-white text-[#3949AB] text-sm">
                  Preview On Desktop
                </button>
              </div>
            </div>
          </div>
          <div className="content w-full md:w-8/12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
