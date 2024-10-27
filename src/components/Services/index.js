import "./index.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-sections">
        <div className="services-section">
          <h2 className="section-title">Services</h2>
          <ul className="section-list">
            <li>Personalized Website Designs</li>
            <li>Digital Marketing Solutions</li>
            <li>Additional Services</li>
            <li>Client Website Redesign</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div className="services-section">
          <h2 className="section-title">Explore</h2>
          <ul className="section-list">
            <li>About Us</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="services-section">
          <h2 className="section-title">Support</h2>
          <ul className="section-list">
            <li>Knowledge Base</li>
            <li>Submit a Ticket</li>
            <li>Compliance Support</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="services-section">
          <h2 className="section-title">Legal</h2>
          <ul className="section-list">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <p className="services-footer">
        ©2024 Advisor Websites™. All rights reserved.
      </p>
    </div>
  );
};

export default Services;
