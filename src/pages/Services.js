import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <section className="page">
      <Helmet>
        <title>Appliance Repair Services | Navarre Appliance Company</title>
      </Helmet>

      <div className="page-container">
        <h1>Our Services</h1>
        <p className="subtitle">
          Professional appliance repair in Navarre, Pensacola, and surrounding areas
        </p>

        <div className="card">
          <ul className="service-list">
            <li>Refrigerator & Freezer Repair</li>
            <li>Washer & Dryer Repair</li>
            <li>Oven, Range & Cooktop Repair</li>
            <li>Dishwasher Repair</li>
            <li>Commercial Equipment Repair</li>
          </ul>
        </div>

        <p className="note">
          We service most major brands and models. Including sealed system repairs we carry our EPA 608 + EPA HC/HFO.
        </p>
      </div>
    </section>
  );
}