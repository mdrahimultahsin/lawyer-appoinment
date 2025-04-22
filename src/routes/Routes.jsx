import {createBrowserRouter} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LawyerDetails from "../components/Lawyer/LawyerDetails";
import Bookings from "../pages/Bookings/Bookings";
import LawyerError from "../pages/LawyerError/LawyerError";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          Component: Home,
          loader: () => fetch("/lawyer-appoinment/lawyers.json"),
          hydrateFallbackElement: (
            <span className="loading loading-bars loading-xl block mx-auto bg-white top-50 left-0 right-0 absolute"></span>
          ),
        },
        {
          path: "/lawyerDetails/:id",
          Component: LawyerDetails,
          errorElement: <LawyerError />,
          loader: () => fetch("/lawyer-appoinment/lawyers.json"),
          hydrateFallbackElement: (
            <span className="loading loading-bars loading-xl block mx-auto bg-white top-50 left-0 right-0 absolute"></span>
          ),
        },
        {
          path: "/my-bookings",
          Component: Bookings,
          loader: () => fetch("/lawyer-appoinment/lawyers.json"),
          hydrateFallbackElement: (
            <span className="loading loading-bars loading-xl block mx-auto bg-white top-50 left-0 right-0 absolute"></span>
          ),
        },
        {
          path: "/blogs",
          Component: Blogs,
        },
      ],
    },
  ],
  {
    basename: "/lawyer-appoinment",
  }
);

export default router;
