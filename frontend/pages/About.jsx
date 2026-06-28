import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      {/* About Us */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center gap-10">
        <img
          className="w-full md:max-w-[420px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="Doctor"
        />

        <div className="flex flex-col gap-5 md:w-1/2 text-gray-600 leading-8">
          <p>
            <b className="text-gray-800">Klinik Makmur Jaya</b> is committed to
            providing trusted healthcare services and quality medicines for
            individuals and families. We believe that everyone deserves access
            to safe, reliable, and affordable healthcare in a comfortable
            environment.
          </p>

          <p>
            Our clinic offers a wide range of healthcare services, including
            medical consultations, prescription medicines, over-the-counter
            products, vitamins, and other healthcare essentials. Every product
            we provide is carefully selected to ensure quality and safety for
            our patients.
          </p>

          <b className="text-gray-800 text-lg">Our Mission</b>

          <p>
            Our mission is to improve the health and well-being of the community
            by delivering professional medical care, trusted pharmaceutical
            products, and compassionate service that puts every patient's needs
            first.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-10 py-10 flex flex-col gap-4">
          <b>Qualified Healthcare Professionals</b>
          <p className="text-gray-600">
            Our experienced medical team is dedicated to providing professional
            consultations and quality healthcare services.
          </p>
        </div>

        <div className="border px-10 md:px-10 py-10 flex flex-col gap-4">
          <b>Quality Medicines</b>
          <p className="text-gray-600">
            We provide genuine medicines and healthcare products sourced from
            trusted pharmaceutical suppliers to ensure safety and effectiveness.
          </p>
        </div>

        <div className="border px-10 md:px-10 py-10 flex flex-col gap-4">
          <b>Patient-Centered Care</b>
          <p className="text-gray-600">
            Your health and comfort are our priority. We strive to deliver
            friendly service and personalized healthcare solutions for every
            patient.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;