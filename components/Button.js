import Image from "next/image";
import Arrow from "/public/arrow.png";

const ButtonGradient = ({ name }) => {
  return (
    <div className=" rounded-full linear-background  px-5 py-2 flex justify-center items-center gap-3 max-w-[222px] cursor-pointer hover:shadow-md hover:shadow-black">
      <p className="text-[var(--white-text)] flex">{name}</p>
      <Image src={Arrow} width={15} height={15} alt="" />
    </div>
  );
};

export default ButtonGradient;
