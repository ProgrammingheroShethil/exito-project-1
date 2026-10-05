function Products() {
  const products = [
    ["P-001", "Laptop", "Electronics", "$850", 25],
    ["P-002", "Keyboard", "Accessories", "$45", 80],
    ["P-003", "Mouse", "Accessories", "$25", 120],
    ["P-004", "Monitor", "Electronics", "$250", 35],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p>Manage your product inventory.</p>
        </div>

        <button className="primary-small">
          + Add Product
        </button>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product[0]}>
                <td>{product[0]}</td>
                <td>{product[1]}</td>
                <td>{product[2]}</td>
                <td>{product[3]}</td>
                <td>{product[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;