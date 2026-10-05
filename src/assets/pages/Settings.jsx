import { useState } from "react";

function Settings() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");

  const saveSettings = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your account settings.</p>
        </div>
      </div>

      <div className="settings-card">
        <h3>Profile Information</h3>

        <form onSubmit={saveSettings}>
          <div className="settings-grid">
            <div className="form-group">
              <label>Full Name</label>

              <input
                className="normal-input"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                className="normal-input"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>

          <button className="primary-small" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;