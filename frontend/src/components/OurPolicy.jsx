import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="trusted_medicines"
        />
        <p className="font-semibold">Trusted Medicines</p>
        <p className="text-gray-400">
          We provide quality medicines from trusted manufacturers.
        </p>
      </div>

      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="professional_care"
        />
        <p className="font-semibold">Professional Healthcare</p>
        <p className="text-gray-400">
          Our experienced medical team is committed to your well-being.
        </p>
      </div>

      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.support_img}
          alt="customer_support"
        />
        <p className="font-semibold">Friendly Assistance</p>
        <p className="text-gray-400">
          We're here to help with your healthcare needs during clinic hours.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;