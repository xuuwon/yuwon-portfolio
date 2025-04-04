// ScrollRouter.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Main from "./Main";

const ScrollRouter = () => {
  const location = useLocation();

  const mainRef = useRef<HTMLElement | null>(null); // 타입 명시
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      switch (location.pathname) {
        case "/":
          mainRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/aboutMe":
          aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/project":
          projectRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/experience":
          experienceRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "/contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <div>
      <section
        ref={mainRef}
        style={{ height: "100vh", background: "lightblue" }}
      >
        <Main />
      </section>
      <section
        ref={aboutMeRef}
        style={{ height: "100vh", background: "lightgreen" }}
      >
        About Section
      </section>
      <section
        ref={projectRef}
        style={{ height: "100vh", background: "lightgreen" }}
      >
        Project Section
      </section>
      <section
        ref={experienceRef}
        style={{ height: "100vh", background: "lightgreen" }}
      >
        Experience Section
      </section>
      <section
        ref={contactRef}
        style={{ height: "100vh", background: "lightcoral" }}
      >
        Contact Section
      </section>
    </div>
  );
};

export default ScrollRouter;
