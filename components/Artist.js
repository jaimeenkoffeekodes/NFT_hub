import Image from "next/image";
import Artist1 from "/public/01.png.png";
import Artist4 from "/public/02.png.png";
import Artist3 from "/public/03.png.png";
import Artist2 from "/public/04.png.png";
import Social1 from "/public/socialIcon(1).png";
import Social2 from "/public/socialIcon(2).png";
import Social3 from "/public/socialIcon(3).png";
import TextGradient from "./TextGradient";

const artistArray = [
  { id: 1, name: "Steve Jobs", proff: "Aritst", image: Artist1 },
  { id: 2, name: "Andy Morray", proff: "Blockchain", image: Artist2 },
  { id: 3, name: "Narayan murthy", proff: "IT", image: Artist3 },
  { id: 4, name: "Nirmala sitharaman", proff: "politics", image: Artist4 },
];

const Artist = () => {
  return (
    <div className="grid grid-cols-2 px-5 gap-y-8 sm:grid-cols-2 sm:px-[100px] sm:py-20 lg:grid-cols-4 lg:px-[150px]">
      <div className="col-span-full text-center my-5 text-[22px] font-[600] text-[var(--white-text)]  sm:text-[42px] lg:text-4xl ">
        Meet <TextGradient text="The Artists" />
      </div>
      {artistArray.map((ele) => (
        <div key={ele.id}>
          <Image src={ele.image} width={100} height={100} alt="" />
          <p className="text-[--white-text] text-base font-500 my-1">
            {ele.name}
          </p>
          <p className="text-[--grey-text] mb-2 text-sm">{ele.proff}</p>
          <div className="flex justify-start items-center gap-3">
            <Image
              src={Social1}
              width={15}
              height={15}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
            <Image
              src={Social2}
              width={15}
              height={15}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
            <Image
              src={Social3}
              width={15}
              height={15}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artist;
