import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetailData } from "./data/projectData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useRef } from "react";
import { useIsMobile, useIsTablet } from "./hooks/useResponsive";
import clsx from "clsx";

const ProjectDetail = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const navigate = useNavigate();

  const { projectId } = useParams(); // 라우트에 맞춰서 해줘야 함
  const numberId = Number(projectId);
  const project = projectDetailData.find((item) => item.id === numberId);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // window가 아니라, 스크롤 가능한 부모 엘리먼트가 있다면 그걸 0으로
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
    // 혹은 window 스크롤 위치 초기화도 시도
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = "flex flex-col items-center gap-10";
  const indexArr: string[] = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <section className="relative w-full max-w-[1150px] mx-auto flex flex-col items-center py-16 px-10  text-content dark:text-content-dark text-xl gap-8">
        {!isTablet && (
          <button
            className="absolute left-0 flex items-center gap-2 text-base top-16"
            onClick={() => navigate(-1)} // 이전 페이지로
          >
            <ArrowBackIcon /> 이전
          </button>
        )}

        <section className={sectionStyle}>
          <p className="text-base text-center md:text-lg">{project?.title}</p>
          <p className="text-sm text-center whitespace-pre-line md:text-base">
            {project?.description}
          </p>

          <section className="flex gap-2">
            {project?.github && (
              <a
                href={project?.github}
                target="_blank"
                className="px-2 py-1 text-sm border cursor-pointer md:text-base border-content dark:border-content-dark rounded-xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
              >
                Github Link
              </a>
            )}
            {project?.presentation && (
              <a
                href={project?.presentation}
                target="_blank"
                className="px-2 py-1 text-sm border cursor-pointer md:text-base border-content dark:border-content-dark rounded-xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
              >
                PPT Link
              </a>
            )}
            {project?.projectLink && (
              <a
                href={project?.projectLink}
                target="_blank"
                className="px-2 py-1 text-sm border cursor-pointer md:text-base border-content dark:border-content-dark rounded-xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
              >
                Project Link
              </a>
            )}
          </section>
        </section>

        <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />

        <section className={sectionStyle}>
          {project?.video ? (
            <video
              src={project.video}
              poster={project.image} // 썸네일 이미지가 있다면 넣기
              className="w-[330px] h-auto md:w-[710px] md:h-[400px] rounded-3xl drop-shadow-2xl"
              controls
              autoPlay={false}
              muted={false}
              loop={false}
            />
          ) : (
            <img
              src={project?.image}
              className="w-[330px] h-auto md:w-[710px] md:h-[400px] rounded-3xl drop-shadow-2xl"
              alt={project?.title}
            />
          )}
        </section>

        <section className={sectionStyle}>
          <p className="text-base md:text-lg">👪 팀 구성 👪</p>
          <p className="text-sm md:text-base">{project?.team}</p>
        </section>

        <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />

        <section className={sectionStyle}>
          <p className="text-base md:text-lg">💻 프로젝트 기간 💻</p>
          <p className="text-sm md:text-base">{project?.period}</p>
        </section>

        <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />

        {project?.keypoint && (
          <>
            <section className={sectionStyle}>
              <p className="text-base md:text-lg">🗝️ 주요 기능 🗝️</p>
              <section className="flex flex-col items-center gap-3">
                {project?.keypoint.map((key, idx) => {
                  return (
                    <div className="flex gap-2" key={idx}>
                      <p className="text-sm md:text-base">{indexArr[idx]}</p>
                      <p className="text-sm md:text-base">{key}</p>
                    </div>
                  );
                })}
              </section>
            </section>

            <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />
          </>
        )}

        {project?.technology && (
          <section className={sectionStyle}>
            <p className="text-base md:text-lg">🛠️ 사용 기술 🛠️</p>
            <section className="flex flex-wrap justify-center gap-2">
              {project?.technology.map((tech, idx) => {
                return (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs md:text-sm bg-content dark:bg-content-dark text-background dark:text-background-dark rounded-xl"
                  >
                    {tech}
                  </span>
                );
              })}
            </section>
          </section>
        )}

        <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />

        <section className={sectionStyle}>
          <p className="text-base md:text-lg">👩‍💻 프로젝트 기여도 👩‍💻</p>
          <section className="flex flex-col items-center gap-3 text-sm md:text-base">
            {project?.contribution.map((key, idx) => {
              return (
                <div className="flex gap-2" key={idx}>
                  <p className="text-sm md:text-base">{indexArr[idx]}</p>
                  <p className="text-sm text-center whitespace-pre-line md:text-base">
                    {key}
                  </p>
                </div>
              );
            })}
          </section>
        </section>

        <hr className="w-full max-w-[1150px] h-[1px] bg-content dark:bg-content-dark" />

        <section className="flex flex-col items-center gap-6">
          <p className="text-base md:text-lg">📒 KPT 회고 📒</p>

          <section
            className={clsx("flex items-center gap-4", isMobile && "flex-col")}
          >
            <p className="px-2 py-1 text-xs md:text-sm bg-content dark:bg-content-dark text-background dark:text-background-dark rounded-xl">
              KEEP
            </p>
            <p className="text-sm text-center whitespace-pre-line md:text-base">
              {project?.keep}
            </p>
          </section>

          <section
            className={clsx("flex items-center gap-4", isMobile && "flex-col")}
          >
            <p className="px-2 py-1 text-xs md:text-sm bg-content dark:bg-content-dark text-background dark:text-background-dark rounded-xl">
              PROBLEM
            </p>
            <p className="text-sm text-center whitespace-pre-line md:text-base">
              {project?.problem}
            </p>
          </section>

          <section
            className={clsx("flex items-center gap-4", isMobile && "flex-col")}
          >
            <p className="px-2 py-1 text-xs md:text-sm bg-content dark:bg-content-dark text-background dark:text-background-dark rounded-xl">
              TRY
            </p>
            <p className="text-sm text-center whitespace-pre-line md:text-base">
              {project?.try}
            </p>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
