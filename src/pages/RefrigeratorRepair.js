import ServicePage from "../components/ServicePage";

export default function RefrigeratorRepair() {
  return (
    <ServicePage
      title="Refrigerator Repair in Navarre FL | Navarre Appliance Company"
      description="Professional refrigerator repair services in Navarre, Gulf Breeze, Pensacola and surrounding areas."
      keywords="refrigerator repair navarre fl, fridge repair pensacola, refrigerator repair gulf breeze"
      appliance="Refrigerator"
      problems={[
        "Not Cooling",
        "Freezer Not Freezing",
        "Ice Maker Problems",
        "Water Leaks",
        "Temperature Issues",
        "Noisy Operation",
        "Defrost Problems"
      ]}
    />
  );
}