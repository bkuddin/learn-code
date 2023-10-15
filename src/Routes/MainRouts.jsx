import { createBrowserRouter } from "react-router-dom";
import AllData from "../Admin/Dashboard/AllData/AllData";
import PostData from "../Admin/Dashboard/PostData/PostData";
import UpdateData from "../Admin/Dashboard/UpdateData/UpdateData";
import MainLayout from "../Layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import GetTrained from "../pages/GetTrained/GetTrained";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Resources from "../pages/Resources/Resources";

const MainRouts = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/trained",
        element: <GetTrained></GetTrained>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/post-data",
        element: <PostData></PostData>,
      },
      {
        path: "/all-data",
        element: <AllData></AllData>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/update-data/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);

export default MainRouts;
