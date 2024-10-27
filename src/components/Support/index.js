import Header from "../Header";
import Services from "../Services";
import "./index.css";

const Support = () => {
  return (
    <div>
      <Header />
      <div className="support-container">
        <header className="header">
          <div className="logo-container">
            <img src="logo1.png" alt="Logo" className="logo-icon" />
          </div>
          <div className="login-buttons">
            <button className="btn website-login-btn">WEBSITE LOGIN</button>
            <span className="welcome-text">Welcome</span>
            <button className="btn login-btn">LOGIN</button>
            <button className="btn signup-btn">SIGN UP</button>
            <select className="language-dropdown">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </header>

        <div className="search-section">
          <h2 className="support-heading">How can we help you today?</h2>
          <input
            type="text"
            placeholder="Enter your search term here..."
            className="search-input"
          />
          <div className="ticket-buttons">
            <button className="btn new-ticket-btn">+ New Support Ticket</button>
            <button className="btn check-ticket-btn">
              Check Ticket Status
            </button>
          </div>
        </div>

        <div className="info-banner">
          <h3 className="banner-heading">
            Does your dashboard look different?
          </h3>
          <p className="banner-text">
            You may have landed on our NEW! Marketing Hub. Find out how you can
            leverage this marketing intelligence tool to save time, improve
            communications and grow your business!
          </p>
          <button className="btn learn-more-btn">Learn More</button>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Support;
