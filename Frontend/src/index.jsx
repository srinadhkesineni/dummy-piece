import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import PathView from "./PathView";
import NewPath from "./Components/NewPath";
import Header from "./Components/Header";
import CareerPaths from "./Components/careerPaths";
// import SearchCareers from "./components/SearchCareers";
import SearchCareers from "./Components/SearchCareers";
import CareerMentorshipPrograms from "./Components/CareerMentorshipPrograms";
import BookASession from "./Components/BookASession";
import CareerPathPredictor from "./Components/CareerPathPredictor";
import AboutUs from "./Components/AboutUs";
// import reportWebVitals from './reportWebVitals';

const AppLayOut = () => {
  return (
    <React.StrictMode>
      <div>
        <Header />
        {/* <CareerPaths /> */}
        <Outlet />
      </div>
    </React.StrictMode>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/path/:id",
        element: <NewPath />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/search-careers",
        element: <SearchCareers />,
      },
      {
        path: "/workshops",
        element: <CareerMentorshipPrograms />,
      },
      {
        path: "/workshops/bookASession",
        element: <BookASession />,
      },
      {
        path: "/predict",
        element: <CareerPathPredictor />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
