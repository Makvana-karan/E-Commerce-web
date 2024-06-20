import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Thank you for visiting [Your E-commerce Website]. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website [www.yourwebsite.com] or make
            a purchase from us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
