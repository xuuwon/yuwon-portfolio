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
          isTablet ? "justify-center" : "justify-end"
        )}
      >
        <section
          className={clsx(
            "w-full max-w-[870px] text-base md:text-lg text-content dark:text-content-dark flex flex-col gap-10",
            isTablet ? "" : "mr-28"
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
              <div className="flex min-w-0 gap-4">
                <p className="text-lg md:text-xl shrink-0">학력</p>
                <div>
                  <p>국민대학교 경영정보학부 재학 (2021.03 -)</p>
                  <p>국민대학교 인포메이션테크놀로지 융합 전공</p>
                </div>
              </div>
              <div className="flex min-w-0 gap-4">
                <p className="text-lg md:text-xl shrink-0">자격증</p>
                <div>
                  <p>ADsP</p>
                  <p>SQLD</p>
                  <p>정보처리기사</p>
                  <p>오픽 IM1</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">🙋🏻 About Me</p>
            <hr className="w-full h-0.5 bg-content dark:bg-content-dark border-none" />
            <p>
              새로운 시도를 즐기고, 배우는 것뿐 아니라 나누는 것도 좋아합니다.
              <a href="https://xuwon.tistory.com/" target="_blank">
                <b className="text-blue-500"> 50편 이상의 블로그</b>
              </a>
              를 작성하며 개발 내용을 정리하고 공유해왔습니다. ✍️
              <br />
              단순히 주어진 기능을 구현하는 데 그치지 않고{" "}
              <b className="text-blue-500">더 나은 기능과 인터랙션</b>을
              탐색합니다. 🔍 <br />
              또한 실생활의 문제에 주목하여,{" "}
              <b
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                신림동 중장년층의 고립 문제
              </b>
              나{" "}
              <a href="/projects/4">
                <b className="text-blue-500">청년층의 우울증 문제</b>
              </a>
              의 해결을 위한 서비스 아이디어를 직접 기획하고 구현한 경험이
              있습니다. 💪
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
