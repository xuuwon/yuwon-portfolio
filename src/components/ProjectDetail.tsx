import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetailData } from "./data/projectData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { projectId } = useParams(); // 라우트에 맞춰서 해줘야 함
  const numberId = Number(projectId);
  const project = projectDetailData.find((item) => item.id === numberId);

  const sectionStyle = "flex flex-col items-center gap-5";
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
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        delay: 0.1,
      }}
    >
      <section className="relative w-[1150px] mx-auto flex flex-col items-center py-16  text-content text-xl gap-8">
        <button
          className="absolute left-0 flex items-center gap-2 text-base top-16"
          onClick={() => navigate("/project")}
        >
          <ArrowBackIcon /> 이전
        </button>

        <section className={sectionStyle}>
          <p>{project?.title}</p>
          <p className="text-base">{project?.description}</p>
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <img src={project?.image} />
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <p>👪 팀 구성 👪</p>
          <p className="text-base">{project?.team}</p>
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <p>💻 프로젝트 기간 💻</p>
          <p className="text-base">{project?.period}</p>
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <p>🗝️ 주요 기능 🗝️</p>
          <section className="flex flex-col items-center gap-3">
            {project?.keypoint.map((key, idx) => {
              return (
                <div className="flex gap-2">
                  <p>{indexArr[idx]}</p>
                  <p className="text-base">{key}</p>
                </div>
              );
            })}
          </section>
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        {project?.technology && (
          <section className={sectionStyle}>
            <p>🛠️ 사용 기술 🛠️</p>
            <section className="flex gap-2">
              {project?.technology.map((tech) => {
                return (
                  <span className="px-2 py-1 text-base border border-content rounded-xl">
                    {tech}
                  </span>
                );
              })}
            </section>
          </section>
        )}

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <p>👩‍💻 프로젝트 기여도 👩‍💻</p>
          <p className="text-base">{project?.contribution}</p>
        </section>

        <hr className="w-[1150px] h-0.5 bg-content" />

        <section className={sectionStyle}>
          <p>📒 KPT 회고 📒</p>

          <section className="flex items-center gap-3">
            <p className="px-2 py-1 text-base border border-content rounded-xl">
              KEEP
            </p>
            <p className="text-base">{project?.keep}</p>
          </section>

          <section className="flex items-center gap-3 ">
            <p className="px-2 py-1 text-base border border-content rounded-xl">
              PROBLEM
            </p>
            <p className="text-base">{project?.problem}</p>
          </section>

          <section className="flex items-center gap-3">
            <p className="px-2 py-1 text-base border border-content rounded-xl">
              TRY
            </p>
            <p className="text-base">{project?.try}</p>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
