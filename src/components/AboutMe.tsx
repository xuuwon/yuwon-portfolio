import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
    >
      <section className="w-[1150px] mx-auto flex justify-end py-16">
        <section className="w-[870px] text-lg text-content flex flex-col gap-4">
          <section className="flex gap-3">
            <img src="/photo.jpg" className="w-[150px] rounded-3xl" />
            <div className="flex flex-col gap-3 p-3">
              <div className="flex gap-3">
                <p className="text-2xl">조유원</p>
                <div className="flex gap-2 text-sm text-background">
                  <a
                    className="p-1.5 border border-content text-content rounded-2xl hover:bg-content hover:text-background"
                    href="https://github.com/xuuwon"
                    target="_blank"
                  >
                    GITHUB
                  </a>
                  <a
                    className="p-1.5 border border-content text-content rounded-2xl hover:bg-content hover:text-background"
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
                  안녕하세요. 사용자의 입장에서 늘 생각하는 프론트엔드 개발자
                  조유원입니다. <br /> 프론트엔드 개발 역량 뿐만 아니라 서비스
                  기획 역량도 갖추고 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <p className="text-2xl">🔎 Profile</p>
            <hr className="w-[870px] h-0.5 bg-content" />

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
            <hr className="w-[870px] h-0.5 bg-content" />

            <div>
              <p>
                것에 큰 보람을 느꼈습니다. 학생들의 생각 또한 읽을 수 있었고
                최근 입시 소식도 들을 수 있어 좋았습니다. 또한 데스크 업무를
                맡다보니 Excel과 Word, 한글 등의 활용 능력이 증가하였습니다.
                사회생활을 해보겠다는 다짐이 이렇게 큰 경험으로 이어질 줄
                몰랐습니다. 대학생으로서 할 수 있는 가장 값진 경험이라고
                생각합니다.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <p className="text-2xl">⚒️ Skills</p>
            <hr className="w-[870px] h-0.5 bg-content" />
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
