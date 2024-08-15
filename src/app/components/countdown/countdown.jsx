"use client";
import React, { useState, useEffect } from "react";

import Button from "../ui/button";
import Moving from "../ui/moving-text";
import '../../styles/moving.css'

function CountdownTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [targetTime, setTargetTime] = useState(
    new Date("2024-08-17T00:00:00.000Z")
  );
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetTime.getTime() - currentTime.getTime();
      setTimeDifference(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTime]);

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div className=" flex items-center justify-center  relative px-6 h-screen w-full count">
      <div className="">
        <p className=" font-light text-center text-white">UPACARA KEMERDEKAAN</p>
        <p className=" font-light  text-center text-white">COMING SOON</p>
        <div className="flex gap-8 justify-center">
          <div className="flex items-center lg:gap-6 gap-3">
            <div className="mt-8  flex-col flex justify-center items-center gap-4 ">
              <h1 className="font-bold lg:text-6xl text-4xl text-white">0{days}</h1>
              <p className="text-sm font-light text-white">Days</p>
            </div>
            <h1 className="font-bold lg:text-6xl text-4xl leading-relaxed text-white">:</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="mt-8  flex-col flex justify-center items-center gap-4 ">
              <h1 className="font-bold lg:text-6xl text-4xl text-white">{hours}</h1>
              <p className="text-sm font-light text-white">Hours</p>
            </div>
            <h1 className="font-bold lg:text-6xl text-4xl leading-relaxed text-white">:</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="mt-8  flex-col flex justify-center items-center gap-4 ">
              <h1 className="font-bold lg:text-6xl text-4xl text-white">{minutes}</h1>
              <p className="text-sm font-light text-white">Minutes</p>
            </div>
            <h1 className="font-bold lg:text-6xl text-4xl leading-relaxed text-white">:</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="mt-8  flex-col flex justify-center items-center gap-4 ">
              <h1 className="font-bold lg:text-6xl text-4xl text-white">{seconds}</h1>
              <p className="text-sm font-light text-white">Seconds</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
        <a href="https://www.youtube.com/results?search_query=live+upacara+indonesia+79" className="">
          <Button name="Join Live"></Button>
        </a>
        </div>
       <Moving/>
      </div>
    </div>
  );
}

export default CountdownTimer;
