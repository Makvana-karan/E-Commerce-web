import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            "Our e-commerce site offers a diverse range of products/services
            tailored to [target audience]. We pride ourselves on providing a
            seamless shopping experience with user-friendly navigation, secure
            transactions, and swift delivery. Whether you're looking for [types
            of products], we aim to exceed your expectations with quality,
            value, and customer satisfaction at the forefront of everything we
            do."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
