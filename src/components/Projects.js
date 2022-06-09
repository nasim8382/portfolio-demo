import React from "react";
import website1 from "../images/toolex.png";
import website2 from "../images/bikes-2-ride.jpg";
import website3 from "../images/be-photography.png";

const Projects = () => {
  return (
    <div>
      <div id="projects">
        <div className="flex flex-col items-center justify-center my-14">
          <h1 className="text-4xl text-center font-bold">
            My Projects
          </h1>

        </div>
        <div
          className="container mx-auto"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="my-10 flex-row items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website1} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded ">
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
              </div>
            </div>

            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website2} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded ">
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
              </div>
            </div>

            <div class="card w-80 bg-base-100 shadow-xl transition hover:duration-300 mt-4 h-full">
              <figure className="mt-2 rounded-lg">
                <img src={website3} alt="Shoes" className="rounded-lg" />
              </figure>
              <div class="card-body items-center font-caladea">
                <h2 class="text-white p-2 font-bold text-xl bg-primary rounded text-center ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;