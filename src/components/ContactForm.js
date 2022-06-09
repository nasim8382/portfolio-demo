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
    <div className="bg-indigo-100 pb-24">
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="font-inter text-4xl font-bold">
          Get in Touch
        </h1>
      </div>
      <div class="hero bg-indigo-100" id="contact-form">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 className="font-inter text-2xl font-bold">
              Contact Info
            </h1>
            <div className="w-96 flex flex-col items-center lg:items-start mt-4 font-caladea">
              <div class="flex items-center gap-2">
                <span>
                  <MdEmail />
                </span>
                <span className="font-bold">
                  nasim8382@gmail.com
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span>
                  <BsFillPhoneFill />
                </span>
                <span className="font-bold">+8801746058698</span>
              </div>
              <div class="flex items-center gap-2">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span className="font-bold">
                  Meherpur, Bangladesh
                </span>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                  name="user_name"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea name="message" class="input input-bordered" />
              </div>

              <div class="form-control mt-6">
                <input
                  className="btn btn-primary hover:bg-transparent hover:border-primary hover:text-primary tracking-widest"
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