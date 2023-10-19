import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Contact from "../Pages/Contact/Contact";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CompanyProductDetails from "../components/MainSection/CompanyProductDetails/CompanyProductDetails";
import SoloFoodDetails from "../components/MainSection/SoloFoodDetails/SoloFoodDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/foodCompany"),
      },
      {
        path:'/companyproductdetails/:id',
        element:<CompanyProductDetails></CompanyProductDetails>,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/foodCompany/${params.id}`),
      },
      {
        path: "/solofooddetails/:id",
        element: <SoloFoodDetails></SoloFoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/addproduct",
        element:<AddProduct></AddProduct>
      }
    ],
  },
]);

export default router;
