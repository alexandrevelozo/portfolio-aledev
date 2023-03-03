import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
// import Img1 from "../assets/portfolio-img1.png";
import Img1 from "../assets/convite.png";
import Img2 from "../assets/nike.png";
import Img3 from "../assets/github.png";
// icons
import { FaGithub } from "react-icons/fa";

function navigateProjects() {
  window.open("https://github.com/alexandrevelozo", "_blank");
}

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-11 mb-10 lg:mb-0"
          >
            {/*text*/}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Meus <br />
                Projetos.
              </h2>
              <p className="max-w-sm mb-16">
                Aqui estão alguns dos principais projetos que já trabalhei.
              </p>
              <button onClick={navigateProjects} className="btn btn-sm">
                Ver meus projetos
              </button>
            </div>
            {/*img*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl max-w-[560px] max-h-[316px]"
            >
              {/*overlay*/}
              <div
                className="group-hover:bg-black/70 absolute
              z-40 transition-all duratin-300 w-full h-full"
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125  transition-all duration-500
                "
                src={Img1}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">Frontend - ReactJS</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  Convite Virtual para Festas
                </span>
              </div>
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <a
                  target={"_blank"}
                  href="https://github.com/alexandrevelozo/convite-festa"
                  rel="noreferrer"
                  className="btn w-8 h-8 flex justify-center
                      items-center"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-11"
          >
            {/*img*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl max-w-[560px] max-h-[316px]"
            >
              {/*overlay*/}
              <div
                className="group-hover:bg-black/70 absolute
              z-40 transition-all duratin-300 w-full h-full"
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">Frontend - ReactJS</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Clone Site da Nike</span>
              </div>
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <a
                  target={"_blank"}
                  href="https://github.com/alexandrevelozo/uiclone-nike"
                  rel="noreferrer"
                  className="btn w-8 h-8 flex justify-center
                      items-center"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/*img*/}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl max-w-[560px] max-h-[316px]"
            >
              {/*overlay*/}
              <div
                className="group-hover:bg-black/70 absolute
              z-40 transition-all duratin-300 w-full h-full"
              ></div>
              {/*img*/}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/*pretitle*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">Frontend - ReactJS</span>
              </div>
              {/*title*/}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Clone do Github</span>
              </div>
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-6 transition-all duration-700 z-50"
              >
                <a
                  target={"_blank"}
                  href="https://github.com/alexandrevelozo/uiclone-github"
                  rel="noreferrer"
                  className="btn w-8 h-8 flex justify-center
                      items-center"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
