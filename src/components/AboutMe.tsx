import clsx from "clsx";
import { motion } from "framer-motion";
import { useIsMobile, useIsTablet } from "./hooks/useResponsive";

const AboutMe = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
    >
      <section
        className={clsx(
          "w-full px-5 py-16 flex",
          isTablet ? "justify-center" : "justify-end",
        )}
      >
        <section
          className={clsx(
            "w-full max-w-[870px] text-base md:text-lg text-content dark:text-content-dark flex flex-col gap-10",
            isTablet ? "" : "mr-28",
          )}
        >
          {/* 인적사항 */}
          <section className="flex flex-col gap-6 md:flex-row">
            <img
              src="/photo.jpg"
              className="w-[120px] md:w-[150px] rounded-3xl shrink-0"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                <p className="text-lg md:text-2xl">조유원</p>
                <div className="flex gap-2 text-sm text-background dark:text-background-dark">
                  <a
                    className="text-sm md:text-base p-1.5 border border-content dark:border-content-dark text-content dark:text-content-dark rounded-2xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
                    href="https://github.com/xuuwon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                  <a
                    className="text-sm md:text-base p-1.5 border border-content dark:border-content-dark text-content dark:text-content-dark rounded-2xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
                    href="https://xuwon.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TISTORY
                  </a>
                </div>
              </div>
              <p>2001.10.11</p>
              <p>
                안녕하세요. 끊임없는 배움과 도전을 통해 성장하는 프론트엔드
                개발자 조유원입니다. 🧐
                <br />
                사용자의 입장에서 고민하고, 기획부터 개발까지의 경험을 바탕으로
                더 나은 서비스를 만들어가고 있습니다.
              </p>
            </div>
          </section>

          {/* Profile */}
          <section className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">🔎 Profile</p>
            <hr className="w-full h-0.5 bg-content dark:bg-content-dark border-none" />
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col min-w-0 gap-4">
                <div className="flex min-w-0 gap-4">
                  <p className="text-lg md:text-xl shrink-0">학력</p>
                  <div>
                    <p>국민대학교 경영정보학부 졸업 (2021.03 - 2026.02)</p>
                    <p>국민대학교 인포메이션테크놀로지 융합 전공</p>
                  </div>
                </div>
                <div className="flex min-w-0 gap-4">
                  <p className="text-lg md:text-xl shrink-0">경력</p>
                  <div>
                    <p>
                      NHN Service Test Engineer Internship (2024.02 - 2024.08)
                    </p>
                    <p>
                      Digitalog Front-end Developer Internship (2025.07 -
                      2025.11)
                    </p>
                    <p>NHN Service Test Engineer (2026.04 - 재직 중)</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-0 gap-4">
                <p className="text-lg md:text-xl shrink-0">자격증</p>
                <div>
                  <p>ADsP</p>
                  <p>SQLD</p>
                  <p>정보처리기사</p>
                  <p>TOEIC Speaking IH</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">🙋🏻 About Me</p>
            <hr className="w-full h-0.5 bg-content dark:bg-content-dark border-none" />
            <p className="text-center">
              사용자의 문제를 발견하고 이를 서비스로 해결하는 과정에 큰 흥미를
              느끼는 프론트엔드 개발자입니다. 단순히 요구사항을 구현하는 데
              그치지 않고 사용자의 행동과 니즈를 이해하며 더 나은 사용자 경험을
              고민합니다. ✍️
              <br />
              기획 단계부터 적극적으로 참여해 문제를 정의하고, 이를 실제
              서비스로 구현하는 과정에 강점을 가지고 있습니다. 🔍 <br />
              <b
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                프론트엔드 개발 경험과 모바일 게임 QA 경험
              </b>
              을 통해 사용자 경험과 서비스 품질을 함께 고려하는 시각을 갖추게
              되었으며, <br /> 다양한 직군과 협업하며 서비스를 완성해 나가는
              과정을 중요하게 생각합니다. <br />
              기술적 완성도뿐만 아니라{" "}
              <b className="text-blue-500">
                사용자가 신뢰하고 지속적으로 이용할 수 있는 서비스
              </b>
              를 만드는 개발자가 되고자 합니다. 💪
            </p>
          </section>

          {/* Skills */}
          <section className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">⚒️ Skills</p>
            <hr className="w-full h-0.5 bg-content dark:bg-content-dark border-none" />
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <img src="/HTML.svg" width={isMobile ? 30 : 40} />
              <img src="/CSS.svg" width={isMobile ? 30 : 40} />
              <img src="/JavaScript.svg" width={isMobile ? 30 : 40} />
              <img src="/TypeScript.svg" width={isMobile ? 30 : 40} />
              <img src="/React.svg" width={isMobile ? 30 : 40} />
              <img src="/NextJS-Light.svg" width={isMobile ? 30 : 40} />
            </div>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default AboutMe;
