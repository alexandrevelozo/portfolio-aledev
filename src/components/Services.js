/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icon
import { FaReact, FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { GiDiceFire } from "react-icons/gi";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const services = [
  {
    name: "Frontend",
    description:
      "HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Styled Components, SEO",
    icon: <FaReact />,
  },
  {
    name: "Backend",
    description: "Node.js, Express, Filas, Event Bus, GraphQL, Prisma, Docker",
    icon: <FaNode />,
  },
  {
    name: "Banco de Dados",
    description:
      "PostgreSQL, MongoDB, MySQL, SQLite, TypeORM, Sequelize, Mongoose",
    icon: <SiPostgresql />,
  },
  {
    name: "Competências",
    description:
      "Agilidade, Proatividade, Trabalho em equipe, Comunicação, Resolução de problemas",
    icon: <GiDiceFire />,
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*tex & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">O que eu sei.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Eu sou um Desenvolvedor Fullstack Junior com experiência em
              projetos pessoais por 3 anos.
            </h3>
            <button
              onClick={() => {
                window.location.href = "#work";
              }}
              className="btn btn-sm"
            >
              Veja meu trabalho
            </button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*services list*/}
            <div>
              {services.map((service, index) => {
                // destructure
                const { name, description, icon } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px]
                  flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <div className="flex flex-row flex-1 items-baseline gap-4">
                        <a
                          disabled
                          className="btn w-8 h-8 mb-[42px] flex justify-center
                      items-center cursor-default"
                        >
                          {icon}
                        </a>
                        <h4
                          className="text-[20px] tracking-wider font-primary
                      font-semibold mb-6"
                        >
                          {name}
                        </h4>
                      </div>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
