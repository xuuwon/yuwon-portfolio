import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const underlineAnimation = `after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-content after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <section className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // 처음엔 오른쪽에 있고 투명
        whileInView={{ opacity: 1, x: 0 }} // 뷰포트에 보이면 원래 위치로 오면서 보이게
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 2, // 전체 트랜지션 지속 시간
          x: { duration: 1 }, // x 이동은 1초만
        }}
      >
        <nav className="fixed w-[1150px] top-[100px] z-50 flex flex-col items-start gap-6 text-3xl text-content">
          <Link to="/aboutMe" className="relative">
            <span
              className={`
                ${underlineAnimation}
                ${
                  location.pathname === "/aboutMe"
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              About Me
            </span>
          </Link>
          <Link to="/project" className="relative">
            <span
              className={`
                ${underlineAnimation}
                ${
                  location.pathname === "/project"
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              Projects
            </span>
          </Link>
          <Link to="/experience" className="relative">
            <span
              className={`
                ${underlineAnimation}
                ${
                  location.pathname === "/experience"
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              Experience
            </span>
          </Link>
        </nav>
      </motion.div>
    </section>
  );
};

export default Navbar;
