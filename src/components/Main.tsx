import { ScrollAnimation } from "@lasbe/react-scroll-animation";

const Main = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      {/* 주요 블록 */}
      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="sm"
        delay={0.5}
        repeat
      >
        <article className="w-[1150px] h-[570px] bg-content shadow-custom p-9 flex flex-col justify-between">
          {/* 독립적인 콘텐츠 영역 */}
          <header className="flex flex-col w-[850px] gap-3">
            {/* 제목 영역 */}
            <h1 className="text-[120px] self-start leading-none font-main">
              FRONT-END DEVELOPER
            </h1>
            <hr className="w-[855px] h-0.5 bg-background" />
            <h2 className="self-end text-xl">YUWON PORTFOLIO</h2>
          </header>

          <footer className="self-end text-xl text-right">
            {/* 맨 아래 정보 영역 */}
            <p>
              사용자의 입장에서 늘 생각하며
              <br /> 배움과 성장을 즐기는 <br /> 프론트엔드 개발자 조유원입니다.
            </p>
          </footer>
        </article>
      </ScrollAnimation>
    </section>
  );
};

export default Main;
