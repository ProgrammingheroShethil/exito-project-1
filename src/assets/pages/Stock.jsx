function Stock() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Stock Management</h1>
          <p>Monitor your inventory stock.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>856</h3>
          <p>Total Products</p>
        </div>

        <div className="stat-card">
          <h3>742</h3>
          <p>In Stock</p>
        </div>

        <div className="stat-card">
          <h3>64</h3>
          <p>Low Stock</p>
        </div>

        <div className="stat-card">
          <h3>50</h3>
          <p>Out of Stock</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;