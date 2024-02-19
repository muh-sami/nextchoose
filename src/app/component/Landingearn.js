import React from "react";

const Landingearn = () => {
  return (
    <div className="flex flex-col gap-8 bg-slate-100 py-8 px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl">Earning Simulator</h1>
        <p>
          Calculate how much you can earn based on the number of followers and
          their rate
        </p>
      </div>
      <div className="flex flex-row justify-around gap-8">
        <div className="flex flex-col w-6/12">
          <div className="flex justify-between"><p>Number of followers?</p>
          <h5>#1000</h5></div>
         <div><hr className="border-3"/></div> 
        </div>
        <div className="flex flex-col w-6/12">
        <div className="flex justify-between"><p>Number of followers?</p>
        <h5>$2</h5></div>
          <hr />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-xl">You could earn an estimated $95 USD per month</h1>
        <p>
          Based on an estimate of 5% of your follower who subscribe(Does not
          include payment processor fees)
        </p>
        <h5>includes the 5% platform fees</h5>
      </div>
    </div>
  );
};

export default Landingearn;
