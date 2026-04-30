import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Navarre FL | Navarre Appliance Company</title>
        <meta name="description" content="Local appliance repair in Navarre and Pensacola." />
      </Helmet>

      <Hero />
    </>
  );
}