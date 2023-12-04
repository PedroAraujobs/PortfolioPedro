import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import css3 from "./assets/css3.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import physics from "./assets/physics.png";
import sass from "./assets/sass.png";
import styledc from "./assets/styledc.png";
import { SectionProjetos, FigureFormato, LinkspProjeto } from "./Projetos";

export const FormatoTecs = styled(motion.figure)`
  display: flex;
  height: 33vh;
  width: 35vw;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 1vh 3vh rgba(129, 124, 124, 0.2);

  figcaption {
    height: 5vh;
    width: 35vw;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Wellfleet", monospace;
  }
`;
const Tecnologias = styled(motion.img)`
  width: 20vw;
  height: 28vh;
  margin-top: 5px;
`;

export default function Habilidades() {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  let Skills = [
    {
      img: html,
      desc: "HTML5",
    },
    {
      img: css3,
      desc: "CSS3",
    },
    {
      img: js,
      desc: "JavaScript",
    },
    {
      img: physics,
      desc: "React.js",
    },
    {
      img: sass,
      desc: "Sass",
    },
    {
      img: styledc,
      desc: "Styled Components",
    },
  ];

  return (
    <>
      <SectionProjetos
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {Skills.map((item) => (
          <FormatoTecs className="item" variants={item}>
            <Tecnologias
              className="item"
              variants={item}
              src={item.img}
              alt={item.desc}
            />
            <figcaption>{item.desc}</figcaption>
          </FormatoTecs>
        ))}
      </SectionProjetos>
    </>
  );
}
