import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

      <div className={`menu ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <Link to="/work-order" onClick={() => setOpen(false)}>Submit Work Order</Link>
      </div>
    </>
  );
}