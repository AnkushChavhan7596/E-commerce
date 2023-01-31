import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Categories from "./Pages/Categories";
import Category from "./Pages/Category";
import {useEffect} from "react"
import {login, logout} from "./redux/authSlice";
import {useDispatch, useSelector} from "react-redux"
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";
import Orders from "./Pages/Orders";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
      dispatch(login(user))
    }
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element : <Login />,
    },
    {
      path: "/register",
      element : <Register />
    },
    {
      path : "/cart/:id",
      element : <Cart />,
    },
    {
      path : "/product/:id",
      element : <SingleProduct />,
    },
    {
      path : "/category/:category",
      element : <Category />,
    },
    {
      path : "/categories",
      element : <Categories />
    },
    {
      path : "/profile/:id",
      element : user ? <Profile /> : <Home />
    },
    {
      path : "/admin/dashboard",
      element : user?.isAdmin ? <AdminDashboard /> : <Home />
    },
    {
      path : "/orders/:id",
      element : <Orders />
    }

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
