import React from "react";
function Categories() {
  const categories = [
    ["CAT-001", "Electronics", 125],
    ["CAT-002", "Accessories", 85],
    ["CAT-003", "Computer", 64],
    ["CAT-004", "Mobile", 48],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Categories</h1>
          <p>Manage product categories.</p>
        </div>

        <button className="primary-small">
          + Add Category
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Products</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category[0]}>
                <td>{category[0]}</td>
                <td>{category[1]}</td>
                <td>{category[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;