import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          src={assets.contact_img}
          alt="Clinic Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">

          <p className="font-semibold text-2xl text-gray-700">
            Klinik Makmur Jaya
          </p>

          <p className="text-gray-500 leading-7">
            Jl. Makmur Jaya No. 123 <br />
            Jakarta, Indonesia
          </p>

          <div>
            <p className="font-semibold text-gray-700">Contact Information</p>
            <p className="text-gray-500 leading-7">
              Phone: (021) 1234 5678 <br />
              Email: info@klinikmakmurjaya.com
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Clinic Hours</p>
            <p className="text-gray-500 leading-7">
              Monday - Friday : 08:00 - 20:00 <br />
              Saturday : 08:00 - 17:00 <br />
              Sunday : Closed
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">
              Need Medical Assistance?
            </p>

            <p className="text-gray-500 leading-7">
              Our friendly healthcare team is ready to assist you with
              consultations, medicines, and healthcare services.
            </p>
          </div>

          <button className="border border-[#0F766E] text-[#0F766E] px-8 py-4 text-sm hover:bg-[#0F766E] hover:text-white transition-all duration-300">
            Book an Appointment
          </button>

        </div>
      </div>
    </div>
  );
};

export default Contact;