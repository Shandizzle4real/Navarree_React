import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import WorkOrder from "./pages/WorkOrder";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>Appliance Repair Navarre FL | Navarre Appliance Company</title>
        <meta name="description" content="Appliance repair in Navarre and Pensacola. Fast, reliable service." />
        <meta name="geo.region" content="US-FL" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Navarre Appliance Company",
            "areaServed": ["Navarre FL","Pensacola FL","Gulf Breeze FL"],
            "serviceType": "Appliance Repair"
          }
          `}
        </script>
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work-order" element={<WorkOrder />} />
      </Routes>
    </Router>
  );
}