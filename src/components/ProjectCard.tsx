import ProjectCardProps from "./type/type";

const ProjectCard = ({ team, type, title, intro }: ProjectCardProps) => {
  return (
    <section className="relative w-[400px] h-[275px] rounded-3xl overflow-hidden bg-background border-2 border-content">
      <section className="relative z-10 flex flex-col justify-between h-full p-5 ">
        <div className="flex gap-2 text-sm text-background">
          <span className="px-2 py-1 bg-content rounded-2xl">{team}</span>
          <span className="px-2 py-1 bg-content rounded-2xl">{type}</span>
        </div>

        <div className="text-content">
          <p className="text-xl whitespace-pre-line">{title}</p>
          <p className="mt-2 text-sm whitespace-pre-line">{intro}</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectCard;
