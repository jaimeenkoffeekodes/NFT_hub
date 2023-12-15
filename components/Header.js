import Image from "next/image";
import Link from "next/link";
import Social1 from "/public/socialIcon(1).png";
import Social2 from "/public/socialIcon(2).png";
import Social3 from "/public/socialIcon(3).png";
import Social4 from "/public/socialIcon(4).png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <MobileMenu />
      <div className="hidden  lg:grid lg:glass bg-[var(--main-back)] lg:z-50 grid-cols-6  px-[150px] text-[var(--white-text)] lg:fixed top-0 right-0 left-0 py-5 ">
        <div className="col-span-1 orbitron font-semibold text-lg">NFTHub</div>
        <div className="col-span-4 flex justify-around items-center">
          <Link href="/">Home</Link>
          <Link href="/">Collection</Link>
          <Link href="/">Choose</Link>
          <Link href="/">About</Link>
          <Link href="/">Roadmap</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className="col-span-1 flex justify-end items-center gap-3">
          <Image
            src={Social1}
            width={20}
            height={20}
            alt=" "
            className="cursor-pointer hover:scale-[1.1]"
          />
          <Image
            src={Social2}
            width={20}
            height={20}
            alt=" "
            className="cursor-pointer hover:scale-[1.1]"
          />
          <Image
            src={Social3}
            width={20}
            height={20}
            alt=" "
            className="cursor-pointer hover:scale-[1.1]"
          />
          <Image
            src={Social4}
            width={20}
            height={20}
            alt=" "
            className="cursor-pointer hover:scale-[1.1]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
