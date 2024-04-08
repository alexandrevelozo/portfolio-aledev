import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/*img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
          ></motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mim.</h2>
            <h3 className="h3 mb-4">
              Eu sou um Desenvolvedor Fullstack Junior com experiência em
              projetos pessoais.
            </h3>
            <p className="mb-6">
              Graduando em Ciência da Computação pela Universidade Paulista,
              estou em busca de uma oportunidade para poder construir minha
              carreira profissional podendo assim, cumprir meu propósito de
              vida.
            </p>
            {/*stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div
                  className="text-[30px] font-tertiary text-gradient
                mb-2"
                >
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Anos de <br /> experiência
                </div>
              </div>
              <div>
                <div
                  className="text-[30px] font-tertiary text-gradient
                mb-2"
                >
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos <br /> Completados
                </div>
              </div>
              <div>
                <div
                  className="text-[30px] font-tertiary text-gradient
                mb-2"
                >
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Techs <br /> que domino
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button
                onClick={() => {
                  window.location.href = "#contact";
                }}
                className="btn btn-lg"
              >
                Contate me
              </button>
              <a href="#work" className="text-gradient btn-link">
                Meu Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
