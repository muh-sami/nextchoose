import React from "react";
import Image from "next/image";
import Landingsocial from "./component/Landingsocial";
import img1 from"../../public/img-1.png";
import Theme from "./component/Theme";
import crown from "../../public/img-crown.png";
import crowngirl from "../../public/image 237.png";
import Landingearn from "./component/Landingearn";

const page = () => {
  return (
    <div className="px-4 py-6 flex flex-col gap-12 w-full
    md:px-4 md:py-6
    lg:px-12 lg:py-10">
      <div className="text-3xl flex justify-center text-red-600 text-center
       md:text-4xl
       lg:text-5xl">
        Discover your best picture 
      </div>
      <div className="flex flex-col justify-between w-full
      md:flex md:flex-row md:justify-between items-center 
      lg:flex lg:flex-row lg:justify-evenly">

        <Image src={img1} alt="Description of the image" />
        <Image src={img1} alt="Description of the image" />
        <Image src={img1} alt="Description of the image" />
      </div>
      <div className="flex justify-center text-2xl">
        <h1 className="w-full text-center text-3xl
        md:w-full md:text-3xl
        lg:w-9/12 lg:text-3xl ">
          Do you want to know your best photo and have maximum success? Post a
          photo poll and the community will vote for your best photo
        </h1>
      </div>
      <div className="flex justify-center">
        <button className=" bg-red-500 text-2xl py-3 px-12 text-white">
          Post a survey
        </button>
      </div>
      <div className="flex justify-center">
        <h2 className="text-3xl">How it&apos;s work?</h2>
      </div>
      <div className="flex justify-center">
        <h2 className="text-3xl w-full text-center
        md:w-full
        lg:w-10/12 lg:text-4xl">
          Upload up to four photos that you&apos;re unsure and discover your
          real-time results
        </h2>
      </div>
      <div className="flex justify-center">
        <Landingsocial />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl text-center
        md:text-center md:text-3xl
        lg:text-4xl">Choose a theme and ask your questions</h1>
      </div>
      <div>
        <Theme />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <button className="text-3xl bg-red-500 py-3 px-3 text-white">
            Choose your theme
          </button>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div className="ml-8">
              <Image
                src={crown}
                alt="description of img"
                width={100}
                height={100}
              />
            </div>
            <Image className="w-40" src={crowngirl} 
            alt="description of img" 
            height={100}
            width={100}/>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl">Creator</h1>
          </div>
          <div>
            <div className="ml-8">
              <Image
                src={crown}
                alt="description of img"
                width={100}
                height={100}
              />
            </div>
            <Image className="w-40" src={crowngirl}
             alt="description of img" 
             width={100}
             height={100}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="w-full text-4xl text-center
        md:w-full
        lg:w-10/12">
          Create exclusive surveys for your VIP subscribers and monetize your
          content
        </h1>
      </div>
      <div>
        <Landingearn/>
      </div>
      <div className="flex justify-center">
        <button className="bg-red-500 text-3xl text-white py-4 px-7">
          GET STARTED
        </button>
      </div>
      <div>
        <h1 className="text-3xl text-center">
          Explore a new original way to connect and engage your community
        </h1>
      </div>
      <div className="flex flex-row justify-end w-10/12">
        <Image
          src={crowngirl}
          alt="description of img"
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl">Verona</h1>
          <p className="text-2xl">Fitness Coach</p>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl w-full text-center
        md:w-full
        lg:w-8/12">
          As an influencer, I enjoy engaging with my community to discover
          their favorite pictures. Their support plays a crucial role in refining
          my content
        </h1>
      </div>
    </div>
  );
};

export default page;
