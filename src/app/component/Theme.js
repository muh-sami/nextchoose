import React from "react";
import Image from "next/image";
import { theme } from "../Data";

const Theme = () => {
  return (
    <div className="flex flex-col gap-8
    md:flex md:flex-col md:gap-8
    lg:flex lg:flex-row lg:gap-12">
      {theme.map((item) => (
        <div key={item.id} className="flex flex-col gap-5 items-center
        md:flex md:flex-col md:gap-5 md:items-center
        lg:flex lg:flex-col lg:gap-8" >
          <h1 className="text-3xl">{item.heading}</h1>
          <p className="text-xl text-center md:text-center">{item.paragraph}</p>
          <Image src={item.img1} alt="description of img"/>

          <div className="text-xl md:text-center">{item.paragraph2}</div>
        </div>
      ))}
    </div>
  );
};

export default Theme;

