import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import CartContainer from "./user-dashboard-component/cart/CartContainer";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import Error from "./utils/Error"; // Add your Error component

import ProfileContainer from "./user-dashboard-component/profile/ProfileContainer";
import CartContainer from "./user-dashboard-component/cart/CartContainer";
import Sidebar from "./user-dashboard-component/SideBar";
import PurchaseHistoryContainer from "./user-dashboard-component/purchase-history/PurchaseContainer";
import { AuthProvider } from "./utils/useAuth";
import ProfileContainer from "./user-dashboard-component/profile/ProfileContainer";
import PaymentMethods from "./user-dashboard-component/Payment/PaymentMethods";
import ProductDetail from "./components/ProductDetail";



// Main Layout (Includes Header)
function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// No Header Layout (For Authorization Form)
function AuthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function UserDashBoard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar className="w-64 bg-gray-800 text-white p-4" />

        {/* Main content area */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
    </div>
  );
};

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      },
      {
        path: "/cart",
        element: <CartContainer />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <AuthForm />, // Added AuthForm to render inside AuthLayout
      },
    ],
  },
  {
    path: "/user",
    element: <UserDashBoard/>,
    children:[
      {
        path: "",
        element: <ProfileContainer/>
      },
      {
        path: "profile",
        element : <ProfileContainer/>
      },
      {
        path: "cart",
        element: <CartContainer />
      },
      {
        path: "payment",
        element: <PaymentMethods />
      },
      {
        path: "purchase-history",
        element: <PurchaseHistoryContainer/>
      },
    ]
  },
  {
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={appRouter} />
  </AuthProvider>
);
