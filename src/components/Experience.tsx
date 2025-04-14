import { experienceData } from "./data/experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="w-[1150px] mx-auto flex justify-end py-16 h-screen overflow-y-scroll scrollbar-hide">
      <section className="w-[870px] text-lg flex flex-col gap-7">
        {experienceData.map((data) => {
          return (
            <ExperienceCard
              title={data.title}
              type={data.type}
              period={data.period}
              intro={data.intro}
              image={data.image}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
