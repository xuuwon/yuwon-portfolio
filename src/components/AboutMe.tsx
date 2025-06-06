import { motion } from "framer-motion";

const AboutMe = () => {
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
      <section className="w-[1150px] mx-auto flex justify-end py-16">
        <section className="w-[870px] text-lg text-content dark:text-content-dark flex flex-col gap-4">
          <section className="flex gap-3">
            <img src="/photo.jpg" className="w-[150px] rounded-3xl" />
            <div className="flex flex-col gap-3 p-3">
              <div className="flex gap-3">
                <p className="text-2xl">조유원</p>
                <div className="flex gap-2 text-sm text-background dark:text-background-dark">
                  <a
                    className="p-1.5 border border-content dark:border-content-dark text-content dark:text-content-dark rounded-2xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
                    href="https://github.com/xuuwon"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                  <a
                    className="p-1.5 border border-content dark:border-content-dark text-content dark:text-content-dark rounded-2xl hover:bg-content hover:dark:bg-content-dark hover:text-background hover:dark:text-background-dark"
                    href="https://xuwon.tistory.com/"
                    target="_blank"
                  >
                    TISTORY
                  </a>
                </div>
              </div>

              <div>
                <p>2001.10.11</p>
              </div>
              <div>
                <p>
                  안녕하세요. 사용자 경험을 최우선으로 생각하는 프론트엔드
                  개발자 조유원입니다.
                  <br />
                  개발 역량뿐만 아니라, 서비스 기획 경험을 바탕으로 사용자
                  중심의 서비스를 구현하고 싶습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <p className="text-2xl">🔎 Profile</p>
            <hr className="w-[870px] h-0.5 bg-content dark:bg-content-dark" />

            <div className="flex gap-16">
              <div className="flex gap-5">
                <p className="text-xl">학력</p>
                <div>
                  <p>국민대학교 경영정보학부 재학 (2021.03 -)</p>
                  <p>국민대학교 인포메이션테크놀로지 융합 전공</p>
                </div>
              </div>

              <div className="flex gap-5">
                <p className="text-xl">자격증</p>
                <div>
                  <p>ADsP</p>
                  <p>SQLD</p>
                  <p>정보처리기사</p>
                  <p>오픽 IM1</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <p className="text-2xl">🙋🏻 About Me</p>
            <hr className="w-[870px] h-0.5 bg-content dark:bg-content-dark" />

            <div>
              <p>
                서비스 기획과 프론트엔드 개발 경험을 살려 사용자 중심의
                인터페이스를 만드는 프론트엔드 개발자 조유원입니다. 기획
                단계부터 개발까지 폭넓은 경험을 쌓으며, 완성도 높은 서비스를
                구현하는 데 집중하고 있습니다. 앞으로도 지속적으로 배우고
                성장하며, 사용자 경험을 개선하고 문제를 해결하는 데 기여하는
                개발자가 되고자 합니다.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <p className="text-2xl">⚒️ Skills</p>
            <hr className="w-[870px] h-0.5 bg-content dark:bg-content-dark" />
            <div className="flex justify-center gap-10 pt-2">
              <img src="/HTML.svg" width={40} />
              <img src="/CSS.svg" width={40} />
              <img src="/JavaScript.svg" width={40} />
              <img src="/TypeScript.svg" width={40} />
              <img src="/React.svg" width={40} />
              <img src="/NextJS-Light.svg" width={40} />
            </div>
          </section>
        </section>
      </section>
    </motion.div>
  );
};

export default AboutMe;
