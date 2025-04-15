import { Link } from "react-router-dom";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";

const Navbar = () => {
  const underlineAnimation = `after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-content after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <section className="flex justify-center">
      <ScrollAnimation startingPoint="bottom" duration={1} amount="sm">
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
      </ScrollAnimation>
    </section>
  );
};

export default Navbar;
