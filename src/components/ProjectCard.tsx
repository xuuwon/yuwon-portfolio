import { useNavigate } from "react-router-dom";
import { ProjectCardProps } from "./type/type";

const ProjectCard = ({ id, team, type, title, intro }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/projects/${id}`);
    window.location.reload();
  };

  return (
    <section className="relative z-50 w-[400px] h-[275px] rounded-3xl border-2 border-content dark:border-content-dark bg-card dark:bg-background-dark">
      {/* 배경과 흐림 효과 */}
      <div className="absolute inset-0 transition-all duration-200 rounded-3xl hover:backdrop-blur-sm">
        {/* 호버 시 나타나는 버튼 */}
        <div className="flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100">
          <button
            className="px-4 py-2 border-2 rounded-2xl border-content dark:border-content-dark text-content dark:text-content hover:bg-content dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
            onClick={() => {
              handleClick(id);
            }}
          >
            자세히 보기
          </button>
        </div>
      </div>

      <section className="flex flex-col justify-between w-full h-full p-5 cursor-pointer">
        <div className="flex gap-2 text-sm text-background dark:text-background-dark">
          <span className="px-2 py-1 bg-content dark:bg-content-dark rounded-2xl">
            {team}
          </span>
          <span className="px-2 py-1 bg-content dark:bg-content-dark rounded-2xl">
            {type}
          </span>
        </div>

        <div className="text-content dark:text-content-dark">
          <p className="text-xl whitespace-pre-line">{title}</p>
          <p className="mt-2 text-sm whitespace-pre-line">{intro}</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectCard;
