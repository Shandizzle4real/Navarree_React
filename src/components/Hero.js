import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="container">
      <img src="/logo.png" className="logo" alt="logo" />

      <h1>Navarre Appliance Company</h1>

      <p className="tagline">
        Specializing in residential and commercial appliance repair.
      </p>

      <h2>Servicing:</h2>
      <p className="tagline">
        Navarre, Gulf Breeze, Pensacola, Milton, Fort Walton, Destin + Surrounding Areas
      </p>

      <Countdown />

      <div className="form-box">
        <h3>Get notified when we launch</h3>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3b040a7f-7d53-430c-a6f9-4105b2eceedd" />
          <input type="text" name="contact" placeholder="Email or Phone" required />
          <button type="submit">Notify Me</button>
        </form>
      </div>
    </div>
  );
}