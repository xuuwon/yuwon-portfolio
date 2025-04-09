import ProjectCardProps from "./type/type";

const ProjectCard = ({ link, team, type, title, intro }: ProjectCardProps) => {
  return (
    <section className="relative w-[400px] h-[275px] rounded-3xl overflow-hidden bg-card">
      {/* 이미지 (오른쪽 절반에 배경처럼) */}
      <img
        src={link}
        alt="제주 이미지"
        className="absolute top-0 right-0 z-0 object-cover w-1/2 h-full opacity-30"
      />

      <section className="relative z-10 flex flex-col justify-between h-full p-5">
        <div className="flex gap-2 text-sm">
          <span className="px-2 py-1.5 bg-content rounded-2xl">{team}</span>
          <span className="px-2 py-1.5 bg-content rounded-2xl">{type}</span>
        </div>

        <div>
          <p className="text-xl">{title}</p>
          <p className="mt-2 text-sm">{intro}</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectCard;
