import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="hero-card">

      <img
        src="/logo.png"
        className="logo"
        alt="Navarre Appliance Company Logo"
      />

      <h1 className="hero-title">
        Navarre Appliance Company
      </h1>

      <p className="hero-subtitle">
        Professional Residential Appliance Repair for Florida's Emerald Coast
      </p>

      <p className="tagline">
        Specializing in refrigerators, ice makers, ovens, cooktops,
        washers, dryers, dishwashers, and more.
      </p>

      <div className="trust-bar">
        <span>✓ Locally Owned</span>
        <span>✓ Residential Appliances</span>
        <span>✓ Serving the Emerald Coast</span>
      </div>

      <h2 className="service-area-heading">
        Proudly Serving
      </h2>

      <p className="service-area">
        Navarre, Gulf Breeze, Pensacola, Milton,
        Fort Walton Beach, Destin & Surrounding Areas
      </p>

      <div className="launch-banner">
        🎉 Opening August 1, 2026
      </div>

      <h2 className="countdown-heading">
        Countdown to Opening Day
      </h2>

      <Countdown />

      <p className="countdown-message">
        We're preparing to bring dependable appliance repair services
        to homes throughout Northwest Florida. Join our launch list
        to receive updates, special offers, and priority scheduling
        opportunities when we officially open.
      </p>

      <div className="form-box">
        <h3>Join Our Launch List</h3>

        <p className="form-subtitle">
          Receive opening announcements, service updates,
          and exclusive launch promotions.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="3b040a7f-7d53-430c-a6f9-4105b2eceedd"
          />

          <input
            type="text"
            name="contact"
            placeholder="Email Address or Phone Number"
            required
          />

          <button type="submit">
            Notify Me
          </button>
        </form>
      </div>

    </div>
  );
}