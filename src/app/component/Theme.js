import React from "react";
import Image from "next/image";
import { theme } from "../Data";

const Theme = () => {
  return (
    <div className="flex flex-row gap-12">
      {theme.map((item) => (
        <div key={item.id} className="flex flex-col gap-8">
          <h1 className="text-3xl">{item.heading}</h1>
          <p className="text-xl">{item.paragraph}</p>
          <Image src={item.img1} alt="description of img"/>

          <div className="text-xl">{item.paragraph2}</div>
        </div>
      ))}
    </div>
  );
};

export default Theme;

