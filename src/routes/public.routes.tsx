import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/public.layout";
import NotFoundPage from "../pages/not-found.page";
import HomePage from "../pages/home.page";

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage />},
    ],
  },
]);

const PublicRoutes = () => {
  return (
    <RouterProvider router={publicRoutes} />
  );
};

export default PublicRoutes;
