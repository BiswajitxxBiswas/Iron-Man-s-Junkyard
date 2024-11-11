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



// Main Layout (Includes Header)
function MainLayout() {
  return (
    <div>
      <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
      </AuthProvider>
    </div>
  );
}

// No Header Layout (For Authorization Form)
function AuthLayout() {
  return (
    <div>
      <AuthProvider>
      <Outlet />
      </AuthProvider>
    </div>
  );
}

function UserDashBoard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AuthProvider>
        {/* Sidebar */}
        <Sidebar className="w-64 bg-gray-800 text-white p-4" />

        {/* Main content area */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </AuthProvider>
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
        path: "/auth",
        element: <AuthForm />,
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
root.render(<RouterProvider router={appRouter} />);
