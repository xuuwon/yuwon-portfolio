import { useRef, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export type SectionId = "" | "aboutMe" | "project" | "experience" | "contact";

const ScrollRouter = () => {
  const navigate = useNavigate();

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mainRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs: Record<SectionId, React.RefObject<HTMLElement | null>> = {
    "": mainRef,
    aboutMe: aboutMeRef,
    project: projectRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const ninetyVH = window.innerHeight * 0.9;
      const documentHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      const nearBottom = scrollY + windowHeight >= documentHeight - 100;

      // 조건 1: 90vh 이상일 때 보이기
      // 조건 2: 전체 끝(100px 전)에 도달하면 숨기기
      if (scrollY > ninetyVH && !nearBottom) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 메뉴 클릭 시에만 스크롤 + URL 변경
  const scrollToSection = useCallback(
    (id: SectionId) => {
      const ref = sectionRefs[id];
      if (ref?.current) {
        isScrollingRef.current = true;
        ref.current.scrollIntoView({ behavior: "smooth" });
        navigate(`/${id}`, { replace: true });

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    },
    [navigate, sectionRefs]
  );

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} showNav={showNav} />
      <section ref={mainRef} id="" style={{ height: "100vh" }}>
        <Main />
      </section>
      <section ref={aboutMeRef} id="aboutMe" style={{ height: "100vh" }}>
        <AboutMe />
      </section>
      <section ref={projectRef} id="project" style={{ height: "100vh" }}>
        <Projects />
      </section>
      <section ref={experienceRef} id="experience" style={{ height: "180vh" }}>
        <Experience />
      </section>
      <section ref={contactRef} id="contact" style={{ height: "100vh" }}>
        <Contact />
      </section>
    </div>
  );
};

export default ScrollRouter;
