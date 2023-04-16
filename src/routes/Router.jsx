import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Home from "../Pages/Home/Home";
import Batches from "../Pages/Batches/Batches";
import Learners from "../Pages/Learners/Learners";
import Curriculum from "../Pages/Curriculum/Curriculum";
import CourseRequirements from "../Pages/CourseRequirements/CourseRequirements";
import CourseMessage from "../Pages/CourseMessage/CourseMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Batches",
        element: <Batches></Batches>,
      },
      {
        path: "/learners",
        element: <Learners></Learners>,
      },
      {
        path: "/curriculum",
        element: <Curriculum></Curriculum>,
      },
      {
        path: "/course-requirements",
        element: <CourseRequirements></CourseRequirements>,
      },
      {
        path: "/course-message",
        element: <CourseMessage></CourseMessage>,
      },
    ],
  },
]);
