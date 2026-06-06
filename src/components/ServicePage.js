import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ServicePage({
  title,
  description,
  keywords,
  appliance,
  problems
}) {
  return (
    <section className="page">
      <Helmet>
		      <script type="application/ld+json">
		{`
		{
		  "@context":"https://schema.org",
		  "@type":"Service",
		  "provider":{
		    "@type":"LocalBusiness",
		    "name":"Navarre Appliance Company"
		  },
		  "serviceType":"${appliance} Repair"
		}
		`}
		</script>
		
        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          name="keywords"
          content={keywords}
        />
      </Helmet>

      <div className="page-container">

        <h1>{appliance} Repair</h1>

        <p>
          Navarre Appliance Company provides professional {appliance.toLowerCase()}
          repair services throughout Navarre, Gulf Breeze,
          Pensacola, Milton, Pace, and surrounding communities.
        </p>

        <h2>Common Problems We Repair</h2>

        <ul>
          {problems.map(problem => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>

        <h2>Brands We Service</h2>

        <p>
          Whirlpool, GE, Samsung, LG, Frigidaire,
          KitchenAid, Maytag, Bosch, Electrolux,
          Amana, Speed Queen, JennAir, Sub-Zero,
          Viking, Thermador, Miele and more.
        </p>

        <h2>Service Areas</h2>

        <p>
          Navarre, Pensacola, Gulf Breeze,
          Milton, Pace, Fort Walton Beach,
          Destin and surrounding areas.
        </p>

        <div className="cta-card">
          <h3>Need Service?</h3>

          <p>
            Request service online and we'll contact you as quickly as possible.
          </p>

          <div className="cta-card">
            <h3>Need Fast Appliance Repair?</h3>
            <p>
              Submit a work order and we’ll contact you as quickly as possible.
            </p>

            <Link to="/work-order" className="cta-button">
              Request Service
            </Link>

            <p className="cta-small">
              Typically responds within 1–2 hours during business hours
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}