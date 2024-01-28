import React, { useEffect, useState } from "react";
import PostProduct from "../../assets/banner/post-product.webp";
import SuccessModal from "../common/SuccessModal";
import MiddlewareAnimation from "../common/MiddlewareAnimation";

const CreatePost = () => {
  const [Submitted, setSubmitted] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <>
      {animation ? <MiddlewareAnimation title={"Create Posts"}/> : (
        <section className="flex flex-col justify-center items-center">
          <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10 uppercase">
            Post Product
          </div>
          <div className="md:px-20 px-6 flex flex-col md:flex-row justify-center gap-10 w-full h-full py-10">
            <div className="md:w-[50%] flex flex-col justify-between gap-10">
              <div className="md:text-xl max-md:text-center">
                This provide transparent, tamper-resistant, and automated
                execution of predefined agreements. tamper-resistant, and
                automated tamper-resistant, and automated.
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col md:gap-6 gap-4"
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
                  onClick={() => setSubmitted(true)}
                >
                  Submit Now
                </button>
              </form>
            </div>
            <div className="w-[40%] h-full max-md:hidden">
              <img
                src={PostProduct}
                alt=""
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
          {Submitted && (
            <SuccessModal
              title={"Product Posted Successfully"}
              onClose={() => setSubmitted(false)}
            />
          )}
        </section>
      )}
    </>
  );
};

export default CreatePost;
