import Image from "next/image";
import TextGradient from "./TextGradient";
import Social1 from "/public/socialIcon(1).png";
import Social2 from "/public/socialIcon(2).png";
import Social3 from "/public/socialIcon(3).png";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-5 py-10 sm:px-[100px] sm:grid-cols-3 lg:px-[150px]">
        <div>
          <div className="text-2xl font-[600]">
            <TextGradient text="NFTHub" />
          </div>
          <p className="text-[var(--grey-text)] text-sm my-4">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex justify-start items-center gap-4">
            <Image
              src={Social1}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
            <Image
              src={Social2}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
            <Image
              src={Social3}
              width={20}
              height={20}
              alt=""
              className="cursor-pointer hover:scale-[1.1]"
            />
          </div>
        </div>
        <div className="py-10 sm:flex justify-start items-end flex-col sm:py-0">
          <p className="text-2xl font-[600] text-[--white-text]">Quick Link</p>
          <div className="flex flex-col justify-start items-start text-[--grey-text] font-[400] mt-4">
            <p className="cursor-pointer hover:underline">About</p>
            <p className="cursor-pointer hover:underline">Collection</p>
            <p className="cursor-pointer hover:underline">Roadmap</p>
            <p className="cursor-pointer hover:underline">FAQs</p>
          </div>
        </div>

        <div className="py-10 sm:flex flex-col justify-start items-end sm:py-0">
          <p className="text-2xl font-[600] text-[--white-text]">Community</p>
          <div className="flex flex-col justify-start items-start text-[--grey-text] font-[400] mt-4">
            <p className="cursor-pointer hover:underline">How it works</p>
            <p className="cursor-pointer hover:underline">Blockchain</p>
            <p className="cursor-pointer hover:underline">Get in touch</p>
            <p> </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start text-[var(--grey-text)] text-sm  sm:col-span-full sm:mt-10">
          <p>Copyright © 2023 Nerko All Rights Reserved.</p>
          <div className="flex justify-start items-start gap-5 mt-4">
            <p>Privacy policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
