"use client";

import Link from "next/link";
import TextGradient from "./TextGradient";
import Image from "next/image";
import arrow from "/public/arrow.png";
function HowWork({ image, number, title, paragraph, order }) {
  const classname = `${order}`;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className={classname}>
          <Image src={image} width={400} height={400} alt="" />
        </div>
        <div className="place-self-center sm:place-self-start">
          <p className="text-xl">
            <TextGradient text={number} />
          </p>
          <p className="text-[var(--white-text)] text-3xl font-[600] my-3">
            {title}
          </p>
          <p className="text-[var(--grey-text)] text-sm ">{paragraph}</p>
          <div className="flex justify-start items-center gap-3 text-[var(--white-text)] text-sm mt-7 underline">
            <Link href="/">Learn more</Link>
            <Image src={arrow} width={15} height={15} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowWork;
