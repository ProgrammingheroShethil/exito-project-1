import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiShoppingCart } from "react-icons/fi";

function Home() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <Link to="/" className="logo">
          Exi<span>POS</span>
        </Link>

        <div className="home-nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FiCheckCircle />
            Smart POS Management System
          </div>

          <h1>
            Manage Your Business
            <span> Smarter & Faster</span>
          </h1>

          <p>
            ExiPOS helps businesses manage sales, products,
            orders, customers, stock and employees from one
            powerful platform.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
              <FiArrowRight />
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-icon">
            <FiShoppingCart />
          </div>

          <h3>Today's Sales</h3>
          <h2>$12,580.00</h2>

          <div className="sales-progress">
            <span></span>
          </div>

          <p>+18.5% from yesterday</p>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading">
          <span>FEATURES</span>
          <h2>Everything You Need</h2>
          <p>
            Powerful tools to manage your business efficiently.
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            title="Point of Sale"
            text="Fast and reliable POS system for daily sales."
            icon="🛒"
          />

          <Feature
            title="Inventory"
            text="Track products, stock and warehouses easily."
            icon="📦"
          />

          <Feature
            title="Customers"
            text="Manage customer information and orders."
            icon="👥"
          />

          <Feature
            title="Analytics"
            text="Understand your business with useful reports."
            icon="📊"
          />
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Home;