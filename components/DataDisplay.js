import Image from "next/image";
import Partner6 from "/public/partner(6).png";

const DataDisplay = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-5 my-10 gap-y-7 py-14  relative  sm:grid-cols-4 sm:py-20 sm:px-[100px] lg:px-[150px] lg:grid-cols-4">
        <div className="border-r mr-2">
          <p className="text-2xl font-[600] text-[var(--white-text)]">400k+</p>
          <p className="text-base text-[12px] text-[var(--grey-text)]">
            Wallets Connected
          </p>
        </div>
        <div className="place-self-end  sm:place-self-start">
          <p className="text-2xl font-[600] text-[var(--white-text)]">20k++</p>
          <p className="text-base text-[12px] text-[var(--grey-text)]">
            Creative artists
          </p>
        </div>
        <div className="border-r pl-2 sm:border-l ">
          <p className="text-2xl font-[600] text-[var(--white-text)]">230+</p>
          <p className="text-base text-[12px] text-[var(--grey-text)]">
            Wallets Connected
          </p>
        </div>
        <div className="place-self-end sm:place-self-start sm:pl-2">
          <p className="text-2xl font-[600] text-[var(--white-text)]">2.5x</p>
          <p className="text-base text-[12px] text-[var(--grey-text)]">
            Estimated value
          </p>
        </div>

        <Image
          src={Partner6}
          width={60}
          height={40}
          alt=""
          className="absolute bottom-5 right-[45%] "
        />
      </div>
    </>
  );
};

export default DataDisplay;
