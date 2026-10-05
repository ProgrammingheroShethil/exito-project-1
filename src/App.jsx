import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";


// Components
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import ProtectedRoute from "./assets/components/ProtectedRoute";

// Pages
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Dashboard from "./assets/pages/Dashboard";
import POS from "./assets/pages/POS";
import Orders from "./assets/pages/Orders";
import Products from "./assets/pages/Products";
import Categories from "./assets/pages/Categories";
import Stock from "./assets/pages/Stock";
import Warehouses from "./assets/pages/Warehouses";
import Customers from "./assets/pages/Customers";
import Users from "./assets/pages/Users";
import Roles from "./assets/pages/Roles";
import Permissions from "./assets/pages/Permissions";
import Settings from "./assets/pages/Settings";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        onMenuClick={() => setSidebarOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route path="/pos" element={<POS />} />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route
            path="/stock"
            element={<Stock />}
          />

          <Route
            path="/warehouses"
            element={<Warehouses />}
          />

          <Route
            path="/customers"
            element={<Customers />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/roles"
            element={<Roles />}
          />

          <Route
            path="/permissions"
            element={<Permissions />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;