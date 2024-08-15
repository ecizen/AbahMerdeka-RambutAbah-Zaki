'use client'
import Image from "next/image";
import Description from "../ui/description";
import DataImages from "@/app/data/data-image";
import { motion } from "framer-motion";
import { createContext } from "react";


const Tema = () => {
  return (
    <div className=" ">
      <section className="px-8 py-12 flex flex-col items-center">
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="max-w-max flex justify-center"
          >
            <Image
              src={DataImages.Logo}
              alt="garuda"
              className="w-[70%] mb-12"
            />
          </motion.div>
        </div>
        <div>
          <Description />
        </div>
      </section>
    </div>
  );
};

export default Tema;
