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
            <li>Commercial Kitchen Equipment Repair</li>
            <li>Icemakers</li>
          </ul>
        </div>

        <p className="note">
          We service any brand and model appliance, commercial kitchen equipment, and commercial refrigeration. We carry our EPA 608 + EPA HC/HFO and are certified for refrigeration repairs.
        </p>
      </div>
    </section>
  );
}