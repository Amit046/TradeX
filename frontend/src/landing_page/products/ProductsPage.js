import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />

      <RightSection
        imageURL="media/products-console.png"
        productName="TRADEX Dashboard"
        productDesription="Manage your portfolio, monitor investments and track real-time market insights through an intuitive dashboard designed for speed and simplicity."
        learnMore="#"
      />

      <LeftSection
        imageURL="media/landing_kite.svg"
        productName="TRADEX API"
        productDesription="Build modern trading experiences and financial applications with powerful APIs. Create custom tools, automate workflows and integrate market data easily."
        learnMore="#"
      />

      <div className="container">
        <p
          className="text-center mt-5 mb-5 text-muted"
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Interested in the technology behind TRADEX? Explore our architecture,
          APIs and development journey to see how we're building a smarter
          investing ecosystem.
        </p>
      </div>

      <Universe />
    </>
  );
}

export default PricingPage;
