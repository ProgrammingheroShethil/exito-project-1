function POS() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Point of Sale</h1>
          <p>Create a new sales transaction.</p>
        </div>
      </div>

      <div className="pos-layout">
        <div className="dashboard-card">
          <h3>Products</h3>

          <div className="product-grid">
            {[
              ["Laptop", "$850"],
              ["Keyboard", "$45"],
              ["Mouse", "$25"],
              ["Monitor", "$250"],
              ["Headphone", "$80"],
              ["Webcam", "$65"],
            ].map(([name, price]) => (
              <div className="pos-product" key={name}>
                <div className="product-placeholder">
                  📦
                </div>

                <h4>{name}</h4>
                <p>{price}</p>

                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card cart-card">
          <h3>Current Order</h3>

          <div className="empty-cart">
            <span>🛒</span>
            <p>No products added yet</p>
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>$0.00</strong>
          </div>

          <button className="auth-submit">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default POS;