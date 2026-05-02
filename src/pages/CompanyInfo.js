export default function CompanyInfo() {
  return (
    <section className="page">
      <div className="page-container">
        <h1>About Our Company</h1>
        <p className="subtitle">
          Reliable, local mobile appliance repair you can trust, servicing NW Florida.
        </p>

        <div className="card info-card">

          <div className="info-row">
            <strong>Family Owned & Operated</strong>
          </div>

          <div className="info-row">
            <strong>Hours of Operation:</strong>
            <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
          </div>

          <div className="info-row">
            <strong>Weekend:</strong>
            <span>Closed Saturday & Sunday</span>
          </div>

          <div className="info-row">
            <strong>Phone:</strong>
			<a href="tel:18503189600">(850) 318-9600</a>
          </div>

        </div>

        <p className="note">
          We bring professional appliance repair directly to your home or business.
        </p>
      </div>
    </section>
  );
}