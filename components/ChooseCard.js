import Image from "next/image";
const ChooseCard = ({ image, title, description }) => {
  return (
    <>
      <div className="border border-gray-700 p-5 rounded-3xl  w-[210px] h-[250px] place-self-center   hover:shadow-sm hover:shadow-white sm:h-[265px]">
        <Image src={image} width={40} height={40} alt="" />
        <p className="text-[var(--white-text)] text-lg font-medium md:text-2xl my-4">
          {title}
        </p>
        <p className="text-[var(--grey-text)] text-sm sm:text-base">
          {description}
        </p>
      </div>
    </>
  );
};

export default ChooseCard;
