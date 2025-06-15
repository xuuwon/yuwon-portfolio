import clsx from "clsx";
import { useIsMobile } from "./hooks/useResponsive";
import { ExperienceCardProps } from "./type/type";

const ExperienceCard = ({
  title,
  type,
  period,
  intro,
  image,
}: ExperienceCardProps) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={clsx(
        "z-10 w-full border-2 text-content dark:text-content-dark dark:border-content-dark border-content rounded-3xl flex overflow-hidden text-base bg-card dark:bg-background-dark",
        isMobile ? "flex-col" : ""
      )}
    >
      {/* 텍스트 영역 */}
      <section
        className={clsx(
          "w-full flex flex-col gap-3 p-7",
          isMobile ? "" : "max-w-2/3"
        )}
      >
        <p className="text-base md:text-xl">{title}</p>
        <div className="flex flex-wrap gap-2">
          {type.map((type, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full md:text-sm bg-content dark:bg-content-dark dark:text-background-dark text-background"
            >
              {type}
            </span>
          ))}
        </div>
        <p>{period}</p>
        <p className="text-sm leading-7 whitespace-pre-line md:text-base">
          {intro}
        </p>
      </section>

      {/* 이미지 영역 */}
      <section
        className={clsx(
          "w-full h-auto",
          isMobile ? "max-h-[260px]" : "max-w-[300px]"
        )}
      >
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
