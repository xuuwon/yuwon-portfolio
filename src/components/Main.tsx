import { ScrollAnimation } from "@lasbe/react-scroll-animation";

const Main = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <ScrollAnimation
        startingPoint="bottom"
        duration={2}
        amount="sm"
        delay={0.5}
        repeat
      >
        <div className="w-[1150px] h-[570px] bg-content shadow-custom p-9 flex flex-col justify-between">
          <div className="flex flex-col w-[850px] gap-3">
            <p className="text-[120px] self-start leading-none font-main">
              FRONT-END DEVELOPER
            </p>
            <div className="w-[855px] h-0.5 bg-background "></div>
            <p className="self-end text-xl">YUWON PORTFOLIO</p>
          </div>
          <p className="self-end text-xl text-right">
            사용자의 입장에서 늘 생각하며
            <br /> 배움과 성장을 즐기는 <br /> 프론트엔드 개발자 조유원입니다.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Main;
