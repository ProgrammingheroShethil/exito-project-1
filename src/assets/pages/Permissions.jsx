function Permissions() {
  const permissions = [
    "Dashboard",
    "POS",
    "Orders",
    "Products",
    "Categories",
    "Stock",
    "Customers",
    "Users",
    "Reports",
    "Settings",
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Permissions</h1>
          <p>Control system access permissions.</p>
        </div>
      </div>

      <div className="permission-grid">
        {permissions.map((permission) => (
          <label
            className="permission-card"
            key={permission}
          >
            <input type="checkbox" defaultChecked />
            <span>{permission}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Permissions;