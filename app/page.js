import Image from "next/image";
import AboutPhoto from "/public/about-right.png";
import Profile1 from "/public/01.png.png";
import Partner from "@/components/Partner";
import ButtonGradient from "@/components/Button";
import CollectionPart from "@/components/CollectionPart";
import ChoosingUS from "@/components/ChoosingUS";
import DataDisplay from "@/components/DataDisplay";
import HowWork from "@/components/HowWork";
import Work1 from "/public/features-05.png.png";
import Work2 from "/public/features-06.png.png";
import Work4 from "/public/features-07.png.png";
import FormPart from "@/components/FormPart";
import Roadmap from "@/components/Roadmap";
import TextGradient from "@/components/TextGradient";
import Artist from "@/components/Artist";
import Question from "@/components/Question";
import Background1 from "/public/background-last.png";
import Footer from "@/components/Footer";
const WorkArray = [
  {
    id: 1,
    title: "Setup and connect your wallet.",
    number: "01.",
    paragraph:
      "Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.Use Trust Wallet, Metamaskor any wallet to connect to multiple chains the app.",
    image: Work1,
    order: "order-1",
  },
  {
    id: 2,
    title: "Setup and connect your wallet.",
    number: "02.",
    paragraph:
      "Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.Use Trust Wallet, Metamaskor any wallet to connect to multiple chains the app.",
    image: Work2,
    order: "order-2",
  },
  {
    id: 3,
    title: "Choose a platform to sell your NFT",
    number: "03.",
    paragraph:
      "Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.Use Trust Wallet, Metamaskor any wallet to connect to multiple chains the app.",
    image: Work4,
    order: "order-1",
  },
];
export default function Home() {
  return (
    <>
      {/* about */}
      <div className="grid grid-cols-1 mt-[70px] px-5 sm:px-[100px] lg:px-[150px] lg:grid-cols-2 lg:pt-20 ">
        <div className="">
          <p className="text-[var(--white-text)] text-[30px] font-bold">
            High Quality NFT Collection
          </p>
          <p className="text-[var(--grey-text)] text-[18px] my-[23px]">
            A 890 piece custom Nerko&apos;s collection is joining the NFT space
            on Opensea.skcs
          </p>
          <ButtonGradient name="View in OPENSEA" />
          <div className="flex justify-start items-center gap-5">
            <div className="relative w-[80px]">
              <Image
                src={Profile1}
                width={30}
                height={30}
                alt=""
                className="absolute left-0 top-[0px] rounded-full overflow-hidden"
              />
              <Image
                src={Profile1}
                width={30}
                height={30}
                alt=""
                className="absolute left-4 top-[0px] rounded-full overflow-hidden"
              />
              <Image
                src={Profile1}
                width={30}
                height={30}
                alt=""
                className="absolute left-8 top-[0px] rounded-full overflow-hidden"
              />
            </div>
            <div className="text-[var(--white-text)] mt-[35px]">
              <p className="text-lg lg:text-3xl font-semibold">47k+</p>
              <p className="text-[var(--grey-text)]">Community members</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:place-self-end">
          <Image
            src={AboutPhoto}
            width={500}
            height={500}
            alt=""
            className="lg:max-w-[400px]"
          />
        </div>
      </div>
      {/* partner */}
      <Partner />
      {/* collection */}
      <CollectionPart />
      {/* why choose us */}
      <ChoosingUS />
      {/* data */}
      <DataDisplay />
      {/* how it works */}
      <div>
        <p className="text-[var(--white-text)] text-[22px] font-[600] text-center sm:text-[35px]">
          How it <TextGradient text="work" />
        </p>
      </div>
      <div className="grid px-5 py-10 gap-y-14 sm:px-[100px] sm:py-20  lg:px-[150px]">
        {WorkArray?.map((Ele) => (
          <HowWork
            number={Ele.number}
            image={Ele.image}
            paragraph={Ele.paragraph}
            title={Ele.title}
            key={Ele.id}
            order={Ele.order}
          />
        ))}
      </div>
      {/* form  */}
      <FormPart />
      {/* roadmap */}
      <Roadmap />

      {/* artist */}
      <Artist />
      {/* question */}
      <Question />
      {/* back */}
      <div className="hidden sm:relative mt-20 px-5">
        <div className="text-2xl font-[600] absolute top-1/2 right-[30%] text-[var(--white-text)] sm:text-4xl md:right-[35%] lg:right-[40%]">
          Let&apos;s start <TextGradient text="minting" />
        </div>
        <p className="absolute top-[70%] right-[20%] text-[var(--grey-text)] text-sm sm:right-[30%] md:right-[35%] lg:right-[40%]">
          Invest and manage all your NFTs at one place.
        </p>
        <div className="hidden md:absolute top-1/2 right-[20%]">
          <ButtonGradient name="Get Started" />
        </div>
        <Image
          src={Background1}
          width={1400}
          height={500}
          alt=""
          className="min-w-sceen"
        />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
