"use client";
import Image from "next/image";
import Hero from "./components/Hero/hero";
import Rambut from "../app/assets/Image/Rambut1.png";
import Bg from "../app/assets/Image/Bgputih.png";
import { delay, motion } from "framer-motion";

import "./styles/hero.css";
import { createContext, useEffect, useState } from "react";
import DataImages from "./data/data-image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isRedirect, setIsRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isRedirect) {
      router.push('/mainscreen'); // Replace with your target page
    }
  }, [isRedirect, router]);
  
  

  return (
    <main className="relative h-screen w-full">
      <div className="w-full h-full flex justify-center items-center bg-red-600">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=""
        >
          <Image src={Rambut} alt="ram" className="w-52" />
        </motion.div>
      </div>
      <div className=" overflow-y-hidden absolute left-0 top-0 right-0 h-full w-full">
        <motion.div
          initial={{ y: 0, x: -1568 }}
          animate={{ y: 0, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          onComplete={() => {
            // Show the logo after the background image has finished animating
            document.querySelector(".logo-container").style.opacity = 1;
          }}
        >
          <Image src={Bg} alt="bg"  className="h-screen"/>
        </motion.div>
      </div>
      <div className="absolute left-0 top-0 right-0 w-full h-full  overflow-hidden">
        <div className="flex justify-center items-center h-full w-full ">
          <motion.div
            initial={{opacity: 0, scale:5}}
            animate={{opacity: 1, scale:1}}
            transition={{
              delay: 3,
              duration: 1,
            }}
            onAnimationComplete={() => setIsRedirect(true)}
          >
            <Image src={DataImages.Logo} className="w-full" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
