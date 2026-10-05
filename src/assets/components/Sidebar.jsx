import { NavLink } from "react-router-dom";
import {
  FiBarChart2,
  FiBox,
  FiBriefcase,
  FiChevronLeft,
  FiClipboard,
  FiGrid,
  FiLayers,
  FiPackage,
  FiSettings,
  FiShoppingCart,
  FiShield,
  FiUsers,
  FiUserCheck,
  FiX,
} from "react-icons/fi";

function Sidebar({ open, onClose }) {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid />,
    },
    {
      title: "POS",
      path: "/pos",
      icon: <FiShoppingCart />,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <FiClipboard />,
    },
    {
      title: "Products",
      path: "/products",
      icon: <FiPackage />,
    },
    {
      title: "Categories",
      path: "/categories",
      icon: <FiLayers />,
    },
    {
      title: "Stock",
      path: "/stock",
      icon: <FiBox />,
    },
    {
      title: "Warehouses",
      path: "/warehouses",
      icon: <FiBriefcase />,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: <FiUserCheck />,
    },
  ];

  const managementItems = [
    {
      title: "Users",
      path: "/users",
      icon: <FiUsers />,
    },
    {
      title: "Roles",
      path: "/roles",
      icon: <FiShield />,
    },
    {
      title: "Permissions",
      path: "/permissions",
      icon: <FiShield />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <>
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div>
            <h2>ExiPOS</h2>
            <span>Management System</span>
          </div>

          <button className="close-sidebar" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <nav className="sidebar-nav">
          <p className="menu-title">MAIN MENU</p>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}

          <p className="menu-title management-title">
            MANAGEMENT
          </p>

          {managementItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>ExiPOS v1.0.0</p>
          <span>© 2026 ExiPOS</span>
        </div>
      </aside>

      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

export default Sidebar;