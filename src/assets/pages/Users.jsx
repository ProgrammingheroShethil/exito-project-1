function Users() {
  const users = [
    ["USR-001", "Admin User", "admin@example.com", "Admin"],
    ["USR-002", "John Doe", "john@example.com", "Manager"],
    ["USR-003", "Sarah Smith", "sarah@example.com", "Cashier"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage system users.</p>
        </div>

        <button className="primary-small">
          + Add User
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user[0]}>
                <td>{user[0]}</td>
                <td>{user[1]}</td>
                <td>{user[2]}</td>
                <td>{user[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;