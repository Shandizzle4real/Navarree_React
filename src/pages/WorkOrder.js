import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import Footer from "./Footer";

const applianceTypes = [
  "Refrigerator",
  "Freezer",
  "Ice Maker",
  "Wine Cooler",
  "Dishwasher",
  "Garbage Disposal",
  "Range / Stove",
  "Cooktop",
  "Wall Oven",
  "Microwave",
  "Range Hood",
  "Washer",
  "Dryer",
  "Stacked Laundry Unit",
  "Gas Dryer",
  "Electric Dryer",
  "Other"
];

const applianceBrands = [
  "Whirlpool",
  "GE",
  "Samsung",
  "LG",
  "Frigidaire",
  "KitchenAid",
  "Maytag",
  "Bosch",
  "Electrolux",
  "Amana",
  "Speed Queen",
  "JennAir",
  "Sub-Zero",
  "Wolf",
  "Viking",
  "Thermador",
  "Miele",
  "Fisher & Paykel",
  "Other"
];

export default function WorkOrder() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    appliance: "",
    brand: "",
    relation: "",
    model: "",
    serial: "",
    issue: ""
  });

  const addressRef = useRef(null);

  useEffect(() => {
    if (window.google && addressRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(addressRef.current);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setForm((prev) => ({
          ...prev,
          address: place.formatted_address || ""
        }));
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid = form.phone.trim() !== "";

  useEffect(() => {
  const btn = document.querySelector(".call-button");

  const handleFocus = () => btn && (btn.style.display = "none");
  const handleBlur = () => btn && (btn.style.display = "block");

  document.querySelectorAll("input, textarea").forEach(el => {
    el.addEventListener("focus", handleFocus);
    el.addEventListener("blur", handleBlur);
  });

  return () => {
    document.querySelectorAll("input, textarea").forEach(el => {
      el.removeEventListener("focus", handleFocus);
      el.removeEventListener("blur", handleBlur);
    });
  };
}, []);

  return (
    <section className="page">
      <Helmet>
        <title>Submit Work Order | Navarre Appliance Company</title>
      </Helmet>

      <div className="page-container">
        <h1>Submit Work Order</h1>
        <p className="subtitle">
          Fill out the form below and we’ll get back to you quickly.
        </p>
        <p className="subtitle">
         (Typically within 1-2 hours during business hours)
         </p>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3b040a7f-7d53-430c-a6f9-4105b2eceedd" />

          <div className="grid">

            <div>
              <label>Full Name</label>
              <input name="name" required onChange={handleChange} />
            </div>

            <div>
              <label>Phone Number *</label>
              <input name="phone" required onChange={handleChange} />
            </div>

            <div>
              <label>Email</label>
              <input name="email" type="email" onChange={handleChange} />
            </div>

            <div>
              <label>Relationship to Appliance</label>
              <select
                name="relation"
                value={form.relation}
                required
                onChange={handleChange}
              >
                <option value="">Select One</option>
                <option value="Owner">Owner</option>
                <option value="Tenant">Tenant</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Landlord">Landlord</option>
              </select>
            </div>

            <div className="full-width">
              <label>Service Address</label>
              <input
                ref={addressRef}
                name="address"
                placeholder="Start typing address..."
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Appliance Type</label>
              <select
                name="appliance"
                value={form.appliance}
                required
                onChange={handleChange}
              >
                <option value="">Select Appliance</option>
                {applianceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
            <label>Appliance Brand</label>

            <input
              list="brand-list"
              name="brand"
              value={form.brand}
              placeholder="Start typing brand..."
              required
              onChange={handleChange}
            />

            <datalist id="brand-list">
              {applianceBrands.map((brand) => (
                <option key={brand} value={brand} />
              ))}
            </datalist>
          </div>

            <div>
              <label>Model Number</label>
              <input name="model" onChange={handleChange} />
            </div>

            <div>
              <label>Serial Number</label>
              <input name="serial" onChange={handleChange} />
            </div>

          </div>

          <div className="full-width">
            <label>Describe the Issue</label>
            <textarea
              name="issue"
              placeholder="Describe the problem..."
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={!isValid}>
            Submit Request
          </button>

          {!isValid && (
            <p className="error">Phone number is required</p>
          )}
        </form>
      </div>
    </section>
  );
}
