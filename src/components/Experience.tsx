import { experienceData } from "./data/experienceData";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useIsTablet } from "./hooks/useResponsive";

const Experience = () => {
  const isTablet = useIsTablet();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
    >
      <section
        className={clsx(
          "w-full px-5 py-16 flex",
          isTablet ? "justify-center" : "justify-end"
        )}
      >
        <section
          className={clsx(
            "w-full max-w-[870px] text-lg flex flex-col gap-7",
            isTablet ? "" : "mr-28"
          )}
        >
          {experienceData.map((data, idx) => {
            return (
              <ExperienceCard
                key={idx}
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
    </motion.div>
  );
};

export default Experience;
