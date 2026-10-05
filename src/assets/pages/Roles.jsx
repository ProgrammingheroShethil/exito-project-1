function Roles() {
  const roles = [
    ["ROLE-001", "Administrator", "Full Access"],
    ["ROLE-002", "Manager", "Most Access"],
    ["ROLE-003", "Cashier", "POS Access"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Roles</h1>
          <p>Manage user roles.</p>
        </div>

        <button className="primary-small">
          + Add Role
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Access Level</th>
            </tr>
          </thead>

          <tbody>
            {roles.map((role) => (
              <tr key={role[0]}>
                <td>{role[0]}</td>
                <td>{role[1]}</td>
                <td>{role[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roles;