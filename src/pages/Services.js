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
            <li>Icemakers</li>
          </ul>
        </div>

        <p className="note">
          We service any brand and model appliance, including residential refrigerator sealed systems. We carry our EPA 608 + EPA HC/HFO and are certified for refrigeration repairs.
        </p>
        <p className="note">
        Experienced in repairs on folloing brands & more: Whirlpool, GE Appliances, Samsung, LG, Frigidaire, KitchenAid, Maytag, Bosch, Electrolux, Amana, JennAir, Café, Monogram, Thermador, Viking, Sub-Zero, Wolf, Miele, Fisher & Paykel, Dacor, Kenmore, Speed Queen, Hotpoint, Hisense, Haier, Sharp, Panasonic, Danby, Summit, ZLINE, SMEG, BlueStar, U-Line, Scotsman, Marvel, Avanti, Magic Chef, Insignia, Crosley, Roper, Asko, Liebherr, Gaggenau, AGA, ILVE, Fulgor Milano, True Residential, Zephyr, Broan, Perlick, GE Profile, Admiral, Estate, American Range, Verona, Thor Kitchen, Midea, Galanz, Hestan, Lynx Professional Grills, DCS Appliances.
      </p>
      </div>
    </section>
  );
}