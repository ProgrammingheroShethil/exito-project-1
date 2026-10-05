import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

function Dashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "$24,580",
      change: "+12.5%",
      icon: <FiDollarSign />,
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      icon: <FiShoppingBag />,
    },
    {
      title: "Customers",
      value: "3,642",
      change: "+15.4%",
      icon: <FiUsers />,
    },
    {
      title: "Products",
      value: "856",
      change: "+5.8%",
      icon: <FiPackage />,
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your business overview.</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-top">
              <div className="stat-icon">
                {stat.icon}
              </div>

              <span className="positive">
                {stat.change}
              </span>
            </div>

            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <div>
              <h3>Sales Overview</h3>
              <p>Monthly sales performance</p>
            </div>

            <FiTrendingUp />
          </div>

          <div className="fake-chart">
            <div style={{ height: "35%" }}></div>
            <div style={{ height: "55%" }}></div>
            <div style={{ height: "45%" }}></div>
            <div style={{ height: "70%" }}></div>
            <div style={{ height: "60%" }}></div>
            <div style={{ height: "85%" }}></div>
            <div style={{ height: "75%" }}></div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Recent Orders</h3>
              <p>Latest transactions</p>
            </div>
          </div>

          <div className="orders-list">
            <Order id="#ORD-1001" customer="John Doe" amount="$250" />
            <Order id="#ORD-1002" customer="Sarah Smith" amount="$180" />
            <Order id="#ORD-1003" customer="Michael Lee" amount="$420" />
            <Order id="#ORD-1004" customer="David Kim" amount="$95" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Order({ id, customer, amount }) {
  return (
    <div className="order-item">
      <div>
        <strong>{id}</strong>
        <small>{customer}</small>
      </div>

      <strong>{amount}</strong>
    </div>
  );
}

export default Dashboard;