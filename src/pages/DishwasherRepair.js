import ServicePage from "../components/ServicePage";

export default function DishwasherRepair() {
  return (
    <ServicePage
      title="Dishwasher Repair in Navarre FL | Navarre Appliance Company"
      description="Expert dishwasher repair services in Navarre and surrounding areas."
      keywords="dishwasher repair navarre fl, dishwasher repair pensacola"
      appliance="Dishwasher"
      problems={[
        "Won't Start",
        "Dishes aren't Clean",
        "Won't Heat",
        "Noisy",
        "Error Codes"
      ]}
    />
  );
}