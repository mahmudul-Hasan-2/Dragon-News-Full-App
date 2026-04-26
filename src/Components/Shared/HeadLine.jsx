import Marquee from "react-fast-marquee";

const marqueeData = [
  {
    id: 1,
    description:
      "Bangladesh Election Commission prepares for upcoming local government polls, security measures tightened across major cities.",
  },
  {
    id: 2,
    description:
      "Dhallywood Superstar Sahib Khan's new high-budget action thriller breaks advanced booking records in cinemas nationwide.",
  },
  {
    id: 3,
    description:
      "Bangladesh Cricket Team starts their training camp today ahead of the crucial home series against the world champions.",
  },
];

const HeadLine = () => {
  return (
    <div className="py-4 bg-[#F3F3F3] flex items-center gap-6 container mx-auto px-6 sm:flex-row flex-col mt-10">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee
        className="text-gray-800 font-semibold"
        speed={8}
        pauseOnHover={true}
      >
        {marqueeData.map((item) => (
          <span className="mr-20" key={item.id}>
            {item.description}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default HeadLine;
