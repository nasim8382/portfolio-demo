import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uciwcjl",
        "template_4op6op6",
        form.current,
        "-m9oBmW6eSF3-tdtR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div style={{backgroundColor: "rgb(48, 52, 60)"}} className="pb-24">
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-white text-4xl font-bold">
          Get in Touch
        </h1>
      </div>
      <div style={{backgroundColor: "rgb(48, 52, 60)"}} className="hero" id="contact-form">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-2xl font-bold">
              Contact Info
            </h1>
            <div className="w-80 md:w-96 flex flex-col items-center lg:items-start mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span>
                  <MdEmail />
                </span>
                <span className="font-bold">
                  nasim8382@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span>
                  <BsFillPhoneFill />
                </span>
                <span className="font-bold">+8801746058698</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span className="font-bold">
                  Meherpur, Bangladesh
                </span>
              </div>
            </div>
          </div>
          <div style={{backgroundColor: "rgb(32, 32, 32)"}} className="card flex-shrink-0 w-full max-w-sm shadow-2xl mt-16 md:mt-0">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="user_name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea name="message" className="input input-bordered" />
              </div>

              <div className="form-control mt-6">
                <input
                  className="cursor-pointer rounded-full bg-gray-600 px-7 py-3 text-center border text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-white hover:text-black"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;