import ServicePage from "../components/ServicePage";

export default function WasherRepair() {
  return (
    <ServicePage
      title="Washer Repair in Navarre FL | Navarre Appliance Company"
      description="Expert washer repair services in Navarre and surrounding areas."
      keywords="washer repair navarre fl, washing machine repair pensacola"
      appliance="Washer"
      problems={[
        "Won't Spin",
        "Won't Drain",
        "Leaking Water",
        "Won't Start",
        "Error Codes",
        "Excessive Vibration"
      ]}
    />
  );
}