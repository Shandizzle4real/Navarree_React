import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WorkOrderModal from "./components/WorkOrderModal";
import "./styles.css";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setOpenModal(true)} />
      <Hero />
      <Services />
      <Pricing />
      
      <WorkOrderModal 
        isOpen={openModal} 
        onClose={() => setOpenModal(false)} 
      />
    </>
  );
}