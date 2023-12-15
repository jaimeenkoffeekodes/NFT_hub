import RoadmapCard from "./RoadmapCard";
import TextGradient from "./TextGradient";

const RoadmapArray = [
  {
    id: 1,
    phase: "Phase 01",
    percentage: "05%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    percentage: "05%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    percentage: "10%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    percentage: "40%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    percentage: "05%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    percentage: "26%",
    title: "Planning",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
    list: [
      { id: 1, number: "Release website and logo" },
      { id: 2, number: "Grow community" },
      { id: 3, number: "Launch the project" },
    ],
  },
];

const Roadmap = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-5 gap-8 py-10 sm:px-[100px] sm:gap-10 sm:py-20 sm:grid-cols-2 md:grid-cols-3 lg:px-[150px] ">
        <div className="col-span-full">
          <p className="text-[var(--white-text)] text-[22px] font-[600] text-center sm:text-[35px]">
            Nfthub&apos;s <TextGradient text="Roadmap" />
          </p>
        </div>
        {RoadmapArray.map((ele) => (
          <RoadmapCard
            key={ele.id}
            phase={ele.phase}
            percentage={ele.percentage}
            description={ele.description}
            title={ele.title}
            list={ele.list}
          />
        ))}
      </div>
    </>
  );
};

export default Roadmap;
