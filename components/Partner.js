import Image from "next/image";
import Partner1 from "/public/partner(1).png";
import Partner2 from "/public/partner(2).png";
import Partner3 from "/public/partner(3).png";
import Partner4 from "/public/partner(4).png";
import Partner5 from "/public/partner(5).png";
import Partner6 from "/public/partner(6).png";

const Partner = () => {
  return (
    <div className="grid grid-cols-2 mt-[70px] px-5 gap-5 py-16 relative sm:grid-cols-5 lg:px-[150px]  lg:py-20">
      <Image
        src={Partner6}
        width={60}
        height={40}
        alt=""
        className="absolute bottom-5 right-[40%] sm:right-1/2"
      />
      <Image src={Partner2} width={120} height={40} alt="" />
      <Image
        src={Partner3}
        width={120}
        height={40}
        alt=""
        className="place-self-end sm:place-self-start"
      />
      <Image src={Partner4} width={120} height={40} alt="" />
      <Image
        src={Partner1}
        width={100}
        height={30}
        alt=""
        className="place-self-end sm:place-self-start"
      />
      <Image src={Partner5} width={120} height={40} alt="" />
    </div>
  );
};

export default Partner;
