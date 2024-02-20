"use client";
import React, { useState } from "react";
import { FaYoutube,FaTwitter,FaFacebook } from "react-icons/fa";

const Landingearn = () => {
  const [volume, setVolume] = useState(0);
  const [rate, setRate] = useState(0);

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
  };

  const handleRateChange = (e) => {
    setRate(parseInt(e.target.value));
  };

  const estimatedEarnings = (volume * rate) / 100;

  return (
    <div className="flex flex-col gap-8 bg-slate-100 py-8 px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl">Earning Simulator</h1>
        <p>
          Calculate how much you can earn based on the number of followers and
          their rate
        </p>
      </div>
      <div className="flex flex-col gap:12
      md:flex md:flex-col md:gap-12
      lg:flex lg:flex-row lg:justify-around lg:gap-8"
      >
        <div className="flex flex-col w-full
        md:w-full
        lg:w-6/12">
          <div className="flex justify-between">
            <div className="flex flex-row gap-4">
              <p>Number of followers?</p>
              <div className="flex flex-row gap-2 justify-end mt-1">
                <FaYoutube className="text-lg text-zinc-500"/>
                <FaTwitter className="text-lg text-zinc-500"/>
                <FaFacebook className="text-lg text-zinc-500"/>
              </div>
            </div>
            <h5>{volume}</h5>
          </div>
          <div>
            <input
              className="w-full"
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full
        md:w-full
        lg:w-6/12">
          <div className="flex justify-between">
            <p>Monthly subscripton price</p>
            <h5>{rate}</h5>
          </div>
          <div>
            <input
              className="w-full"
              type="range"
              min="0"
              max="100"
              step="1"
              value={rate}
              onChange={handleRateChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-xl">
          You could earn an estimated {rate}% USD per month
        </h1>
        <p>
          Based on an estimate of ${estimatedEarnings} of your followers who subscribe (Does
          not include payment processor fees)
        </p>
        <h5>Includes the 5% platform fees</h5>
      </div>
    </div>
  );
};

export default Landingearn;
