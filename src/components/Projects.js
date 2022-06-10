import React from "react";
import website1 from "../images/toolex.jpg";
import website2 from "../images/bikes-2-ride.jpg";
import website3 from "../images/be-photography.jpg";

const Projects = () => {
  return (
    <div style={{backgroundColor: "rgb(48, 52, 60)"}}>
      <div id="projects">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center text-white pt-24 font-bold">
            My Projects
          </h1>

        </div>
        <div
          className="container mx-auto pb-20"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="my-10 flex-row items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            <div className="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website1} alt="Shoes" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h2 className="bg-gray-600 px-7 py-3 text-center border font-bold uppercase text-white text-xl rounded-full">
                  Toolex
                </h2>
                <a
                  className="underline"
                  href="https://toolex-7a7b0.web.app/"
                  alt="link"
                >
                  Live Website Link
                </a>
                <a
                  className="underline"
                  href="https://github.com/nasim8382/toolex-client"
                  alt="link"
                >
                  Client-Side Code Link
                </a>
                <a
                  className="underline"
                  href="https://github.com/nasim8382/toolex-server"
                  alt="link"
                >
                  Server-Side Code Link
                </a>
                <h3 className="text-lg font-bold">Description:</h3>
                <p>1. It's a Single Page Tools Manufacturer Web Application.</p>
                  <p>2. Users can purchase any tool and manage orders. Payment method inserted.</p>
                  <p>3. Users and admin dashboards are different and different functionality is implemented for both.</p>
                  <h4><span className="font-bold">Technologies:</span> HTML, Tailwind CSS, Daisy UI, React, Firebase, Express, MongoDB, Heroku.</h4>
              </div>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website2} alt="Shoes" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h2 className="bg-gray-600 px-7 py-3 text-center border font-bold uppercase text-white text-xl rounded-full">
                  Bikes-2-Ride
                </h2>
                <a
                  className="underline"
                  href="https://bikes-2-ride.web.app/"
                  alt=""
                >
                  Live Website Link
                </a>
                <a
                  className="underline"
                  href="https://github.com/nasim8382/Bikes2Ride-client"
                  alt=""
                >
                  Client-Side Code Link
                </a>
                <a
                  className="underline"
                  href="https://github.com/nasim8382/Bikes2Ride-server"
                  alt=""
                >
                  Server-Side Code Link
                </a>
                <h3 className="text-lg font-bold">Description:</h3>
                <p>1. It's a Single Page & an Inventory management website for managing Bicycle stores.</p>
                  <p>2. Authentication system with (email & password, Google, Facebook).</p>
                  <p>3. Dealers can upload new products and update stock quantity with a verification process.</p>
                  <h4><span className="font-bold">Technologies:</span> HTML, CSS, Bootstrap, React, Firebase, Express, MongoDB, Heroku.</h4>
              </div>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website3} alt="Shoes" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h2 className="bg-gray-600 px-7 py-3 text-center border font-bold uppercase text-white text-xl rounded-full mt-12">
                  Be-Photography
                </h2>
                <a
                  className="underline"
                  href="https://be-photography-98213.web.app/"
                  alt="link"
                >
                  Live Website Link
                </a>
                <a
                  className="underline"
                  href="https://github.com/nasim8382/be-photography-static"
                  alt="link"
                >
                  Github Code Link
                </a>
                <h3 className="text-lg font-bold">Description:</h3>
                  <p>1. It's a Single Page Photography Services Web Application.</p>
                  <p>2. Users can see all photography services and book them.</p>
                  <p>3. Authentication system with (email & password, Google, Github, Facebook).</p>
                  <h4><span className="font-bold">Technologies:</span> HTML, CSS, Bootstrap, React, Firebase React Hook Form, React Toastify.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;