import ButtonGradient from "./Button";
import TextGradient from "./TextGradient";

const RoadmapCard = ({ phase, percentage, title, description, list }) => {
  return (
    <>
      <div className="border border-gray-700 p-5 rounded-3xl place-self-center hover:shadow-sm hover:shadow-white">
        <div className="flex justify-between items-center font-[500]">
          <TextGradient text={phase} />
          <ButtonGradient name={percentage} />
        </div>
        <p className="text-[var(--white-text)] text-lg font-medium md:text-2xl my-4">
          {title}
        </p>
        <p className="text-[var(--grey-text)] text-sm sm:text-base">
          {description}
        </p>
        <div className="w-[80px] h-[0.5px] bg-[--grey-text] my-2" />
        <ul className="text-[var(--white-text)] text-sm mt-3">
          {list.map((ele) => (
            <li key={ele.id}>{ele.number}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RoadmapCard;
