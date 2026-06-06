import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="page">

      <Helmet>
        <title>Appliance Repair Services | Navarre Appliance Company</title>
        <meta
          name="description"
          content="Professional appliance repair services in Navarre, FL including refrigerators, washers, dryers, dishwashers, and ovens."
        />
      </Helmet>

      <div className="page-container">

        <h1>Appliance Repair Services</h1>

        <p className="subtitle">
          Choose the appliance you need repaired below. We provide fast,
          reliable service across Navarre, Gulf Breeze, Pensacola, and surrounding areas.
        </p>

        <div className="service-grid">

          <Link className="service-card" to="/refrigerator-repair">
            <h3>Refrigerator Repair</h3>
            <p>Cooling issues, leaks, ice makers & more</p>
          </Link>

          <Link className="service-card" to="/washer-repair">
            <h3>Washer Repair</h3>
            <p>Drain problems, spin issues, leaks & errors</p>
          </Link>

          <Link className="service-card" to="/dryer-repair">
            <h3>Dryer Repair</h3>
            <p>No heat, long dry times, drum issues</p>
          </Link>

          <Link className="service-card" to="/dishwasher-repair">
            <h3>Dishwasher Repair</h3>
            <p>Not cleaning, leaks, drainage issues</p>
          </Link>

          <Link className="service-card" to="/oven-range-repair">
            <h3>Oven & Range Repair</h3>
            <p>Heating problems, burners, igniters</p>
          </Link>

        </div>

      </div>

    </section>
  );
}