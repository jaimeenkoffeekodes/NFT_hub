"use client";
import ButtonGradient from "./Button";
import CardCollection from "./CardCollection";
import { useState } from "react";
import TextGradient from "./TextGradient";
import CardPhoto from "/public/cardImage.png";
import Image from "next/image";
import Partner6 from "/public/partner(6).png";

const cardCollectionArray = [
  {
    id: 1,
    ele: (
      <CardCollection
        ImageText={CardPhoto}
        Owner="By Salvare"
        HashName="Metaverse"
      />
    ),
  },
  {
    id: 2,
    ele: (
      <CardCollection
        ImageText={CardPhoto}
        Owner="By TheNative"
        HashName="Polly Doll"
      />
    ),
  },
  {
    id: 3,
    ele: (
      <CardCollection
        ImageText={CardPhoto}
        Owner="By TheNative"
        HashName="GeorgZvic"
      />
    ),
  },
  {
    id: 4,
    ele: (
      <CardCollection
        ImageText={CardPhoto}
        Owner="By YazoiLup"
        HashName="Toxic Poyth"
      />
    ),
  },
];

const CollectionPart = () => {
  const [cardValue, setcardValue] = useState(1);
  const handleArray = (value) => {
    setcardValue(value);
  };
  const SortedArray = cardCollectionArray.find((ele) => ele.id === cardValue);
  return (
    <div className="px-5 py-10 grid grid-cols-1 gap-y-8 relative sm:grid-cols-2 sm:px-[100px] sm:place-content-between sm:py-20 lg:grid-cols-4 lg:px-[150px]">
      <div className="col-span-full">
        <p className="text-[29px]  font-[600] text-[var(--white-text)] text-center sm:text-[36px]">
          Nfthub&apos;s <TextGradient text="collection" size={26} width={600} />
        </p>
      </div>
      <div className="hidden sm:block">
        <CardCollection
          ImageText={CardPhoto}
          Owner="By YazoiLup"
          HashName="Toxic Poyth"
        />
      </div>
      <div className="hidden sm:block">
        <CardCollection
          ImageText={CardPhoto}
          Owner="By YazoiLup"
          HashName="Toxic Poyth"
        />
      </div>
      <div className="hidden sm:block">
        <CardCollection
          ImageText={CardPhoto}
          Owner="By YazoiLup"
          HashName="Toxic Poyth"
        />
      </div>
      <div className="hidden sm:block">
        <CardCollection
          ImageText={CardPhoto}
          Owner="By YazoiLup"
          HashName="Toxic Poyth"
        />
      </div>
      <div className="sm:hidden">{SortedArray && SortedArray?.ele}</div>
      <div className="col-span-full flex justify-center items-center gap-3 sm:hidden">
        <div
          className={`${
            cardValue === 1 ? "bg-[var(--white-text)]" : "bg-gray-700"
          }  w-[7px] h-[7px] rounded-full`}
          onClick={() => handleArray(1)}
        />
        <div
          className={`${
            cardValue === 2 ? "bg-[var(--white-text)]" : "bg-gray-700"
          }  w-[7px] h-[7px] rounded-full`}
          onClick={() => handleArray(2)}
        />
        <div
          className={`${
            cardValue === 3 ? "bg-[var(--white-text)]" : "bg-gray-700"
          }  w-[7px] h-[7px] rounded-full`}
          onClick={() => handleArray(3)}
        />
        <div
          className={`${
            cardValue === 4 ? "bg-[var(--white-text)]" : "bg-gray-700"
          }  w-[7px] h-[7px] rounded-full`}
          onClick={() => handleArray(4)}
        />
      </div>
      <div className="col-span-full flex justify-center items-center">
        <ButtonGradient name="View Collection" />
      </div>
      <Image
        src={Partner6}
        width={60}
        height={40}
        alt=""
        className="absolute bottom-5 right-[40%] sm:right-1/2"
      />
    </div>
  );
};

export default CollectionPart;
