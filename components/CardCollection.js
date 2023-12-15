import Image from "next/image";

const CardCollection = ({ ImageText, HashName, Owner }) => {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center text-center ">
      <Image src={ImageText} width={180} height={250} alt="" />
      <p className="text-[var(--white-text)] text-[20px] mt-2">#{HashName}</p>
      <p className="text-[var(--grey-text)] text-[14px]">{Owner}</p>
    </div>
  );
};

export default CardCollection;
