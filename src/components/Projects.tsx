import clsx from "clsx";
import { projectData } from "./data/projectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useIsMobile, useIsTablet } from "./hooks/useResponsive";

const Projects = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
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
            "w-full text-lg text-background dark:text-background-dark flex justify-center flex-wrap gap-7",
            isMobile ? "flex-col" : "",
            isTablet ? "" : "mr-28"
          )}
        >
          {projectData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                team={project.team}
                type={project.type}
                title={project.title}
                intro={project.intro}
              />
            );
          })}
        </section>
      </section>
    </motion.div>
  );
};

export default Projects;
