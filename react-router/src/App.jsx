import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About"
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import ProductFeatures from "./components/ProductFeatures";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UsersDetails from "./components/UsersDetails";
import Admin from "./components/Admin";
import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { AuthProvider } from "./auth";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="products" element={<Products />}>
          <Route path="features" element={<ProductFeatures />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UsersDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
