import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function SupportPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CreateTicket />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default SupportPage;
