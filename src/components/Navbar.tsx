import { SectionId } from "./ScrollRouter";
import { useMediaQuery } from "react-responsive";

const Navbar = ({
  scrollToSection,
  showNav,
}: {
  scrollToSection: (id: SectionId) => void;
  showNav: boolean;
}) => {
  const underlineAnimation = `after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-content after:dark:bg-content-dark after:transition-all after:duration-300 hover:after:w-full`;
  const isMobile = useMediaQuery({ maxWidth: 1400 });

  return (
    <>
      {!isMobile && (
        <section
          className={`flex justify-center transition-opacity duration-500 ease-in-out ${
            showNav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="fixed w-[1150px] top-[100px] z-50 flex flex-col items-start gap-6 text-3xl text-content dark:text-content-dark">
            <button
              onClick={() => scrollToSection("aboutMe")}
              className={`relative ${underlineAnimation}`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className={`relative ${underlineAnimation}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`relative ${underlineAnimation}`}
            >
              Experience
            </button>
          </nav>
        </section>
      )}
    </>
  );
};

export default Navbar;
