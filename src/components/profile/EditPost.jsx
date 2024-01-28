import React from "react";
import tomato from "../../assets/common/tomato.webp"

const EditPost = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10 uppercase">
        Edit Product
      </div>

      <div className="md:px-20 px-6 flex md:flex-row flex-col w-full gap-10">
        <div className="md:w-1/2">
          <img src={tomato} alt="" className="h-full w-full object-cover rounded-lg"/>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col md:gap-4 gap-4 md:w-1/2"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="w-full border rounded-xl  py-4 px-4 outline-none"
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Quantity"
            className="w-full border rounded-xl  py-4 px-4 outline-none"
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Price"
            className="w-full border rounded-xl  py-4 px-4 outline-none"
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            className="resize-none w-full border rounded-xl  py-4 px-4 outline-none"
          ></textarea>
          <input
            type="file"
            name=""
            id=""
            placeholder="Image"
            className="w-full border rounded-xl  py-4 px-4 outline-none"
            required
          />
          <button
            className="w-full border rounded-xl  py-4 px-4 bg-black font-bold text-white"
            // onClick={() => setSubmitted(true)}
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
