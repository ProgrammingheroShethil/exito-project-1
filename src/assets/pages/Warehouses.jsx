function Warehouses() {
  const warehouses = [
    ["WH-001", "Main Warehouse", "Dhaka", "Active"],
    ["WH-002", "North Warehouse", "Gazipur", "Active"],
    ["WH-003", "South Warehouse", "Chittagong", "Active"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Warehouses</h1>
          <p>Manage business warehouses.</p>
        </div>

        <button className="primary-small">
          + Add Warehouse
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Warehouse</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {warehouses.map((warehouse) => (
              <tr key={warehouse[0]}>
                <td>{warehouse[0]}</td>
                <td>{warehouse[1]}</td>
                <td>{warehouse[2]}</td>
                <td>
                  <span className="status completed">
                    {warehouse[3]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Warehouses;