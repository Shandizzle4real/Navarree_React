import { Helmet } from "react-helmet";

export default function Pricing() {
  return (
    <section className="page">
      <Helmet>
        <title>Appliance Repair Pricing | Navarre Appliance Company</title>
      </Helmet>

      <div className="page-container">
        <h1>Pricing</h1>
        <p className="subtitle">Simple, transparent pricing you can trust</p>

        <div className="card">
          <div className="price-row">
            <span>Service Call</span>
            <strong>$115</strong>
          </div>

          <div className="price-row">
            <span>Labor</span>
            <strong>$95/hr</strong>
          </div>

          <div className="price-row">
            <span>Parts</span>
            <strong>Quoted per job</strong>
          </div>
        </div>

        <p className="note">
          Final pricing depends on appliance type and repair complexity. Service call fee includes trip & diagnosis.
          Service call fee due on visit along w/ special order parts prepayment. Labor for parts installation due upon
          completion of call.
        </p>
      </div>
    </section>
  );
}