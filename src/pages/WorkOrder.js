import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";

export default function WorkOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    appliance: "",
    model: "",
    serial: "",
    issue: ""
  });

  const addressRef = useRef(null);

  useEffect(() => {
    if (window.google) {
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

  return (
    <section className="workorder-page">
      <Helmet>
        <title>Submit Appliance Repair Request | Navarre Appliance Company</title>
      </Helmet>

      <div className="form-container">
        <h1>Submit Work Order</h1>
        <p className="subtitle">
          Fill out the form below and we’ll get back to you quickly.
        </p>

        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="YOUR_KEY" />

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
              <label>Appliance Type</label>
              <input name="appliance" required onChange={handleChange} />
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