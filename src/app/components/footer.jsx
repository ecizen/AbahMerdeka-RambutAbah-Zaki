"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DataImages from "../data/data-image";
import navItem from "../data/data-nav";

export default function Footer() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <footer className="w-full bg-[#242424] py-12 px-12 relative">
        <div className="lg:flex-row flex flex-col justify-between lg:items-center gap-y-8">
          <div>
            <Image src={DataImages.LogoFooter} className="w-40" alt="logo" />
          </div>
          <div className="lg:flex-row flex flex-col lg:items-center gap-6">
            {navItem.map((item) => (
              <div key={item.id}>
                <a href={item.href} className="text-xs text-white">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <a className="" href="/contact">
            <button className="px-4 h-10 rounded-full bg-white text-black text-xs max-w-max font-semibold">
              Contact
            </button>
          </a>
        </div>
        <div className="w-full h-[1px] border border-white mt-12"></div>
        <div className="mx-auto py-4 flex  justify-center items-end ">
          <p className="text-center text-xs text-neutral-300">
            &copy; 2024 Rambut Abah, Inc. All rights
          </p>
        </div>
      </footer>
      {showToTop && (
        <a
          href="#hero"
          className="h-14 w-14 bg-red-600 rounded-full fixed z-[9999] right-4 bottom-4 p-4 flex items-center justify-center hover:animate-pulse"
          id="to-top"
        >
          <span className="block w-5 h-5 mt-2 rotate-45 border-t-2 border-l-2"></span>
        </a>
      )}
    </main>
  );
}
