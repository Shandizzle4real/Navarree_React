import { Helmet } from "react-helmet";
import { useState } from "react";

export default function WorkOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    appliance: "",
    model: "",
    serial: "",
    issue: ""
  });

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
          <input type="hidden" name="access_key" value="3b040a7f-7d53-430c-a6f9-4105b2eceedd" />

          <div className="grid">
            <div>
              <label>Full Name</label>
              <input name="name" placeholder="John Smith" onChange={handleChange} required />
            </div>

            <div>
              <label>Phone Number *</label>
              <input
                name="phone"
                placeholder="(555) 123-4567"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Appliance Type</label>
              <input
                name="appliance"
                placeholder="Refrigerator, Washer, etc."
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Model Number</label>
              <input
                name="model"
                placeholder="Optional"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Serial Number</label>
              <input
                name="serial"
                placeholder="Optional"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="full">
            <label>Describe the Issue</label>
            <textarea
              name="issue"
              placeholder="What’s going wrong? Any noises, leaks, etc."
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={!isValid}>
            Submit Request
          </button>

          {!isValid && (
            <p className="error">Phone number is required to submit</p>
          )}
        </form>
      </div>
    </section>
  );
}