import Image from "next/image";
import ChooseCard from "./ChooseCard";
import TextGradient from "./TextGradient";
import ChooseIcon1 from "/public/ChooseIcon(1).png";
import ChooseIcon2 from "/public/ChooseIcon(2).png";
import ChooseIcon3 from "/public/ChooseIcon(3).png";
import ChooseIcon4 from "/public/ChooseIcon(4).png";
import Partner6 from "/public/partner(6).png";

const chooseCard = [
  {
    id: 1,
    image: ChooseIcon1,
    title: "Huge collection",
    description:
      "A collection of 890 unique Nerkos built to go beyond the digital space.",
  },
  {
    id: 2,
    image: ChooseIcon2,
    title: "High quality",
    description:
      "The nerko’s collection includes dozens of rare costumes ands colorways of artist.",
  },
  {
    id: 3,
    image: ChooseIcon3,
    title: " Top resource",
    description:
      "Tasty design resources made with care for each pixel. NFTs and gam resources.",
  },
  {
    id: 4,
    image: ChooseIcon4,
    title: "Big community",
    description:
      "Be part of a community of nerko owners and create user generated items.",
  },
];
function ChoosingUS() {
  return (
    <>
      <div className="grid grid-cols-1 px-5 my-10 gap-y-7 py-14 relative sm:grid-cols-2 sm:py-20 sm:px-[100px] lg:px-[150px] lg:grid-cols-4">
        <div className="col-span-full">
          <p className="text-[var(--white-text)] text-[28px] font-[600] text-center sm:text-[35px]">
            {" "}
            Why <TextGradient text="choose us?" />
          </p>
        </div>
        {chooseCard.map((ele) => (
          <ChooseCard
            key={ele.id}
            image={ele.image}
            title={ele.title}
            description={ele.description}
          />
        ))}
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
}

export default ChoosingUS;
