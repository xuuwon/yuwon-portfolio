import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{
          ease: "easeInOut",
          duration: 3,
        }}
      >
        <div className="absolute w-[300px] h-[300px] rounded-full z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/lemon.png"
            className="absolute z-10 scale-125 rotate-45 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70"
            alt="lemon"
          ></img>
          {/* 노란 빛 */}
          <div className="absolute w-full h-full rounded-full bg-[#ffe680] blur-[60px] opacity-80 -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3" />
          {/* 연두색 빛 */}
          <div className="absolute w-full h-full rounded-full bg-[#c5e17a] blur-[50px] opacity-70 -translate-x-1/2 -translate-y-1/2 top-2/3 left-2/3" />
        </div>
      </motion.div>

      {/* 메인 콘텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
        className="z-10" // 배경보다 위에
      >
        <section>
          <header className="flex flex-col items-center w-[850px] gap-3 text-white">
            <h1 className="text-[80px] text-center leading-none font-main">
              PORTFOLIO
            </h1>
            <hr className="w-[600px] h-0.5 bg-white border-none" />
            <h1 className="text-[20px] text-center">FRONT-END DEVELOPER</h1>
          </header>
        </section>
      </motion.div>
    </section>
  );
};

export default Main;
