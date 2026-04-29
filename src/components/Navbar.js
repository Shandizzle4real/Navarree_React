import { useState } from "react";

export default function Navbar({ onOpenModal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

      <div className={`menu ${open ? "active" : ""}`}>
        <a href="#pricing">Pricing</a>
        <a href="#services">Services</a>
        <a onClick={onOpenModal}>Submit Work Order</a>
      </div>
    </>
  );
}