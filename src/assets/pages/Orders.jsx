function Orders() {
  const orders = [
    ["#ORD-1001", "John Doe", "$250", "Completed"],
    ["#ORD-1002", "Sarah Smith", "$180", "Pending"],
    ["#ORD-1003", "Michael Lee", "$420", "Completed"],
    ["#ORD-1004", "David Kim", "$95", "Cancelled"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage all customer orders.</p>
        </div>

        <button className="primary-small">
          + New Order
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order[0]}>
                <td>{order[0]}</td>
                <td>{order[1]}</td>
                <td>{order[2]}</td>
                <td>
                  <span
                    className={`status ${order[3]
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {order[3]}
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

export default Orders;