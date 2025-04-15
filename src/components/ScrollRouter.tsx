// ScrollRouter.jsx
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const ScrollRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isScrollingRef = useRef(false); // ⭐️ 추가
  const scrollTimeoutRef = useRef<number | null>(null); // ⭐️ 추가

  const mainRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return; // ⭐️ 스크롤 중엔 무시
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
        threshold: 0.6,
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
    isScrollingRef.current = true; // ⭐️ 스크롤 시작
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false; // ⭐️ 일정 시간 후 다시 활성화
    }, 200);

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
        <Experience />
      </section>
      <section ref={contactRef} id="contact" style={{ height: "100vh" }}>
        <Contact />
      </section>
    </div>
  );
};

export default ScrollRouter;
