function Customers() {
  const customers = [
    ["CUS-001", "Shethil Sarker", "shethil@gmail.com", "24"],
    ["CUS-002", "Raj Roy", "raj@gmail.com", "18"],
    ["CUS-003", "MD. Sarker", "sarker@gmail.com", "31"],
    ["CUS-004", "Mrs. Sarker", "mrs.sarker@gmail.com", "12"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Customers</h1>
          <p>Manage customer information.</p>
        </div>

        <button className="primary-small">
          + Add Customer
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer[0]}>
                <td>{customer[0]}</td>
                <td>{customer[1]}</td>
                <td>{customer[2]}</td>
                <td>{customer[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;