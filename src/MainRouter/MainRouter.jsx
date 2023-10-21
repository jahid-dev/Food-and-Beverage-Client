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
import UpdateProduct from "../components/MainSection/UpdateProduct/UpdateProduct";
import Cart from "../Pages/Cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://food-and-beverage-server-xi.vercel.app/foodCompany"),
      },
      {
        path:'/companyproductdetails/:id',
        element:<PrivateRoute><CompanyProductDetails></CompanyProductDetails></PrivateRoute>,
        loader: ({ params }) =>
        fetch(`https://food-and-beverage-server-xi.vercel.app/foodCompany/${params.id}`),
      },
      {
        path: "/solofooddetails/:id",
        element: <SoloFoodDetails></SoloFoodDetails>,
        loader: ({ params }) =>
          fetch(`https://food-and-beverage-server-xi.vercel.app/product/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://food-and-beverage-server-xi.vercel.app/product/${params.id}`),
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
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/cart',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
    ],
  },
]);

export default router;
