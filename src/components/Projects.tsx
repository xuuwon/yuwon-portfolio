import { projectData } from "./data/projectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <section className="w-[1150px] mx-auto flex justify-end py-16">
        <section className="w-[870px] text-lg text-background flex flex-wrap gap-7">
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
