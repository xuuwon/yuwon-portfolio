import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-background">
      {/* 주요 블록 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 0.2,
        }}
      >
        <article className="w-[1150px] h-[570px] bg-content shadow-custom p-9 flex flex-col justify-between">
          {/* 독립적인 콘텐츠 영역 */}
          <header className="flex flex-col w-[850px] gap-3">
            {/* 제목 영역 */}
            <h1 className="text-[120px] self-start leading-none font-main">
              Thank You
            </h1>
            <hr className="w-[855px] h-0.5 bg-background" />
            <h2 className="self-end text-xl">읽어주셔서 감사합니다.</h2>
          </header>

          <footer className="self-end text-base">
            {/* 맨 아래 정보 영역 */}
            <div className="flex flex-col justify-center gap-2 text-center text-content">
              <p className="px-2 py-1 rounded-full bg-background">Mail</p>
              <p className="px-2 py-1 rounded-full bg-background">Github</p>
              <p className="px-2 py-1 rounded-full bg-background">Tistory</p>
            </div>
          </footer>
        </article>
      </motion.div>
    </section>
  );
};

export default Contact;
