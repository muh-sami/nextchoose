import React from "react";
import Image from "next/image";
import socialImg from "../../../public/image 139.png";
import socialWallpaper from "../../../public/image 6.png";
const Landingsocial = () => {
  return (
    <div
      className="flex flex-col gap-5 w-4/5
    md:w-3/5
    lg:w-6/12"
    >
      <div>
        <Image src={socialImg} alt="description of img" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl">
          What is my best instagram profile picture ?
        </h1>
      </div>
      <div>
        <Image src={socialWallpaper} alt="description of img" />
      </div>
      <div className="flex flex-col">
        <h2 className="flex justify-end border-b-8 border-rose-500 rounded-lg border-solid text-2xl">
          10/10 votes
        </h2>
      </div>
    </div>
  );
};

export default Landingsocial;
