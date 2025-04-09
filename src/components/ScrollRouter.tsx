// ScrollRouter.jsx
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const ScrollRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const mainRef = useRef<HTMLElement | null>(null); // 타입 명시
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (location.pathname !== `/${id}`) {
              navigate(`/${id}`, { replace: true });
            }
          }
        }
      },
      {
        threshold: 0.6, // 어느 정도 보여야 "보이는 중"이라고 판단할지
      }
    );

    const sections = [
      mainRef.current,
      aboutMeRef.current,
      projectRef.current,
      experienceRef.current,
      contactRef.current,
    ];

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, [navigate, location.pathname]);

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
      {location.pathname !== "/" && location.pathname !== "/contact" && (
        <Navbar />
      )}
      <section ref={mainRef} id="" style={{ height: "100vh" }}>
        <Main />
      </section>
      <section ref={aboutMeRef} id="aboutMe" style={{ height: "100vh" }}>
        <AboutMe />
      </section>
      <section ref={projectRef} id="project" style={{ height: "100vh" }}>
        <Projects />
      </section>
      <section ref={experienceRef} id="experience" style={{ height: "100vh" }}>
        Experience Section
      </section>
      <section ref={contactRef} id="contact" style={{ height: "100vh" }}>
        Contact Section
      </section>
    </div>
  );
};

export default ScrollRouter;
