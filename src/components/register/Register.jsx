import React, { useState } from "react";
import RegisterBanner from "../../assets/banner/register-banner.webp";
import SuccessModal from "../common/SuccessModal";

const Register = () => {
  const [Submitted, setSubmitted] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10 uppercase">
        Register
      </div>
      <div className="md:px-20 px-6 flex flex-col md:flex-row justify-between gap-10 w-full h-full py-10">
        <div className="md:w-[50%] flex flex-col justify-between gap-10">
          <div className="md:text-xl max-md:text-center">
          This provide transparent, tamper-resistant, and automated execution of predefined agreements. tamper-resistant, and automated  tamper-resistant, and automated.
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col md:gap-6 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border rounded-xl  py-4 px-4 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-xl  py-4 px-4 outline-none"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full border rounded-xl  py-4 px-4 outline-none"
              required
            />
            <button
              className="w-full border rounded-xl  py-4 px-4 bg-black font-bold text-white"
              onClick={() => setSubmitted(true)}
            >
              Submit Now
            </button>
          </form>
        </div>
        <div className="w-[40%] h-full max-md:hidden">
          <img src={RegisterBanner} alt="" className="h-full w-full rounded-lg" />
        </div>
      </div>
      {Submitted && <SuccessModal title={"Grievence Submitted Successfully"} onClose={()=> setSubmitted(false)}/>}
    </section>
  );
};

export default Register;
