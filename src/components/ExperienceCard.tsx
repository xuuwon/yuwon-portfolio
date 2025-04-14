import { ExperienceCardProps } from "./type/type";

const ExperienceCard = ({
  title,
  type,
  period,
  intro,
  image,
}: ExperienceCardProps) => {
  return (
    <section
      className="w-[828px] min-h-[275px] border-2 text-content border-content rounded-3xl flex overflow-hidden text-base"
      style={{ height: "275px" }}
    >
      <section className="w-[528px] p-7 flex flex-col gap-3">
        <p className="text-xl">{title}</p>
        <div className="flex gap-2">
          {type.map((type) => {
            return (
              <span className="px-2 py-1 text-sm rounded-full bg-content text-background">
                {type}
              </span>
            );
          })}
        </div>
        <p>{period}</p>
        <p>{intro}</p>
      </section>

      <section className="w-[300px]">
        <img src={image} className="h-full w-[300px] object-cover" />
      </section>
    </section>
  );
};

export default ExperienceCard;
