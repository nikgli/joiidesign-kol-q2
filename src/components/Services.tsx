"use client";
import React from "react";
// import { ServiceItem } from "./services/ServiceItem";
import services1 from "../assets/services-1.png";

import "../app.css";

const Services: React.FC = () => {
  const services = [
    "Custom Furniture – Thoughtfully designed, tailor-made pieces to fit your unique space and style.",
    "AI-Powered Previews – Visualize our Japandi furniture in your home with one click using cutting-edge AI technology.",
    "Sustainable Practices – We are committed to using eco-friendly materials and responsible production methods to create furniture that is both beautiful and ethical.",
  ];

  return (
    <section className="p-10 mx-auto my-0 max-w-[1600px] font-display max-md:p-5 max-sm:p-4">

      {/* Main container - flex-col for <1024px, flex-row for larger screens */}
      <div className="md:flex lg:flex-row lg:gap-20">
        {/* Image column - full width on small, half width on md, half width on lg */}
        <div className="w-full pt-10 md:w-1/2 lg:w-1/2">
          <img
            src={services1}
            className="object-cover w-full h-auto"
            alt="Modern wooden chair with cane back and seat"
          />
        </div>

        {/* Right side container - contains both intro text and service items */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex-col ml-4 font-display">
          {/* Intro text - always displayed */}
          <div className="pt-6 md:pt-10">
            <h2 className="mb-6 text-4xl font-bold tracking-tight leading-9 text-black max-md:text-3xl max-md:leading-8 max-sm:text-3xl max-sm:leading-7">
              Our services
            </h2>

            <p className="text-xl tracking-tight leading-8 text-black text-opacity-80 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
              At Joii Design, we merge the timeless principles of Zhuoyi, Zen, and
              Japandi with modern innovation to craft furniture that transforms your
              home. Discover how thoughtful design can bring balance, joy, and
              lasting beauty into your space.
            </p>
          </div>

          {/* Service items for large screens - displayed vertically on the right */}
          <div className="hidden lg:flex lg:flex-col lg:gap-14 lg:mt-12">
            <ul className="list-disc pl-12 space-y-8">
              {services.map((service, index) => (
                <li key={`lg-${index}`} className="text-sm tracking-tight leading-7 text-black text-opacity-40 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Service items for medium screens - shown below the image and intro in a grid */}
      <div className="mt-12 md:mt-16 lg:hidden">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={`sm-${index}`} className="flex">
              <span className="mr-2">•</span>
              <span className="text-lg tracking-tight leading-7 text-black text-opacity-70 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;