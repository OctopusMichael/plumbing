import React from "react";

const ContactUs = () => {
  return (
    <section className="py-[50px] flex  flex-col justify-center items-center">
      <h1 className="text-[40px] text-blueSky font-bold py-5"> Contact Us</h1>
      <form className="flex flex-col   justify-center items-center  gap-5">
        <input
          className="bg-blueSky outline-none ps-[20px] rounded-[36px] w-[300px] h-[50px] placeholder:text-gray-200"
          placeholder="Add your name..."
          type="text"
        />

        <input
          className="bg-blueSky outline-none ps-[20px]  rounded-[36px] w-[300px] h-[50px] placeholder:text-gray-200"
          placeholder="Add your second name..."
          type="text"
        />
        <input
          className="bg-blueSky outline-none ps-[20px] rounded-[36px] w-[300px] h-[50px]  text-black  placeholder:text-gray-200"
          placeholder="Plumber@gmail.com"
          type="text"
        />
        <button className="bg-blueMarine outline-none hover:bg-blueMarine  rounded-[36px] w-[150px] h-[50px] text-white font-bold hover:bg-blueSky">
          SEND
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
