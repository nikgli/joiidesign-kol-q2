"use client";

import * as React from "react";
import { Button } from "./Button";
import backgroundImage from "../../assets/Landing_page_table.jpg";

export const ContentSection: React.FC = () => {
  return (
    <section 
      data-theme="joiidesign"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat pt-15"
    >
      <div className="flex flex-col gap-28 items-center">
        <h1 className="text-9xl font-bold font-title-hero tracking-tighter text-center text-white leading-[80px] max-md:text-7xl max-md:leading-[60px] max-sm:text-5xl max-sm:leading-10 mt-16">
          Design with joy
        </h1>
        <div className="flex justify-center">
          <Button>Join Today</Button>
        </div>
      </div>
    </section>
  );
};
