import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <section className="section">
      <Helmet>
        <title>Appliance Repair Services Navarre & Pensacola</title>
        <meta name="description" content="Refrigerator, washer, dryer repair in Navarre and Pensacola." />
      </Helmet>

      <h1>Appliance Repair Services</h1>

      <p>
        We provide appliance repair in Navarre, Pensacola, Gulf Breeze,
        Milton, and Fort Walton Beach.
      </p>

      <ul>
        <li>Refrigerator Repair Navarre FL</li>
        <li>Washer & Dryer Repair Pensacola</li>
        <li>Oven Repair Gulf Breeze</li>
        <li>Dishwasher Repair Near You</li>
      </ul>
    </section>
  );
}