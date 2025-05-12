import { ExperienceCardProps } from "./type/type";

const ExperienceCard = ({
  title,
  type,
  period,
  intro,
  image,
}: ExperienceCardProps) => {
  return (
    <section className="w-[828px] border-2 text-content border-content rounded-3xl flex overflow-hidden text-base">
      {/* 텍스트 영역 */}
      <section className="w-[528px] p-7 flex flex-col gap-3">
        <p className="text-xl">{title}</p>
        <div className="flex flex-wrap gap-2">
          {type.map((type, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm rounded-full bg-content text-background"
            >
              {type}
            </span>
          ))}
        </div>
        <p>{period}</p>
        <p className="leading-7 whitespace-pre-line">{intro}</p>
      </section>

      {/* 이미지 영역 */}
      <section className="w-[300px] h-auto">
        <img
          src={image}
          className="object-cover w-full h-full"
          style={{ maxHeight: "100%" }}
        />
      </section>
    </section>
  );
};

export default ExperienceCard;
