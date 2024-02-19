import React from 'react'
import Image from "next/image";
import socialImg from"../../../public/image 139.png"
import socialWallpaper from "../../../public/image 6.png"
const Landingsocial = () => {
  return (
    <div className="flex flex-col gap-5 w-6/12">
      <div><Image src={socialImg} alt="description of img"/></div>
      <div className="flex justify-center">
      <h1 className="text-2xl">What is my best instagram profile picture ?</h1></div>
      <div><Image src={socialWallpaper} alt="description of img"/></div>
      <div className='flex flex-col'>
      <h2  className='flex justify-end'>10/10 votes</h2>
      <hr className="border-b-20 text-yellow-600" />
      </div>
    </div>
  )
}

export default Landingsocial;
