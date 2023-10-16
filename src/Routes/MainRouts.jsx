import { createBrowserRouter } from "react-router-dom";
import AllData from "../Admin/Dashboard/AllData/AllData";
import PostData from "../Admin/Dashboard/PostData/PostData";
import UpdateData from "../Admin/Dashboard/UpdateData/UpdateData";
import MainLayout from "../Layout/MainLayout";
import Users from "../components/Users/Users";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import GetTrained from "../pages/GetTrained/GetTrained";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
        path: "/login",
        element: <Login></Login>,
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
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
    ],
  },
]);

export default MainRouts;
