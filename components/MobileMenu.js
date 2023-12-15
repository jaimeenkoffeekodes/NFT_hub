"use client";

import Image from "next/image";
import Link from "next/link";
import Social1 from "/public/socialIcon(1).png";
import Social2 from "/public/socialIcon(2).png";
import Social3 from "/public/socialIcon(3).png";
import Social4 from "/public/socialIcon(4).png";
import { useState } from "react";

const MobileMenu = () => {
  const [Hamburger, setHamburger] = useState(false);

  return (
    <>
      {!Hamburger && (
        <>
          <div className="fixed top-0 right-0 left-0 h-[40px] glass z-50 bg-[var(--main-back)] text-white grid grid-cols-2 px-5 sm:px-[100px] lg:hidden">
            <div className="orbitron font-semibold text-lg flex justify-start items-center">
              <Link href="/">NFTHub</Link>
            </div>
            <div
              onClick={() => setHamburger(true)}
              className="flex justify-end items-center"
            >
              <p className="">Open</p>
            </div>
          </div>
        </>
      )}
      {Hamburger && (
        <div className="fixed top-0 right-0 left-0 min-h-screen text-white z-50 px-5 bg-[#333333] sm:px-[100px] lg:hidden">
          <div className="orbitron font-semibold text-xl my-5">NFTHub</div>
          <div className="flex flex-col justify-start items-start">
            <Link href="/home">Home</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/choose">Choose</Link>
            <Link href="/about">About</Link>
            <Link href="/roadmap">Roadmap</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex justify-start items-center gap-5 my-5">
            <Image src={Social1} width={20} height={20} alt=" " />
            <Image src={Social2} width={20} height={20} alt=" " />
            <Image src={Social3} width={20} height={20} alt=" " />
            <Image src={Social4} width={20} height={20} alt=" " />
          </div>
          <div onClick={() => setHamburger(false)}>Close</div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
