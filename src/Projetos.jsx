import React, { useRef } from "react";
import styled from "styled-components";
import { color, easeInOut, motion, useScroll } from "framer-motion";
import CafeEx from "./assets/CafeEx.png";
import ExDisney from "./assets/ExDisney.png"
import Fantastika from "./assets/Fantastika.png"
import twex from "./assets/twex.png" 

export const SectionProjetos = styled(motion.section)`
  height: 170vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const FigureFormato = styled(motion.figure)`
  display: flex;
  height: 70vh;
  width: 45vw;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  figcaption {
    height: 13vh;
    width: 44vw;
    text-align: justify;
    font-size: 1.5rem;
    font-family: "Wellfleet", monospace;
    line-height: 1.1;
  }
`;

export const DivFormato = styled(motion.div)`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
`;
export const LinkspProjeto = styled(motion.a)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  img {
    width: 40vw;
    border: solid #151320;
    border-radius: 30px;
    height: 40vh;
  }
`;
const BotaoStyle = styled(motion.button)`
  width: 10vw;
  height: 5vw;
  border: solid #151320;
  border-radius: 30px;
  background-image: linear-gradient(to bottom, #d3cce3, #e9e4f0, #e9e4f0);
  cursor: pointer;
  font-size: 1.1rem;
  font-family: "Wellfleet", monospace;
  color: #151320;
`;

export default function Projetos() {
  let ProjMap = [
    {
      titulo: "Fantastika",
      link: "https://fantastika.vercel.app/",
      img: Fantastika,
      desc: "Projeto final do primeiro módulo do VainaWeb, em html e css e utilizando media queries",
      alt: "Projeto Fantastika",
      linkgh: "https://github.com/PedroAraujobs/Fantastika",
    },
    {
      titulo: "CaféEx",
      link: "https://aula-cafe.vercel.app/",
      img: CafeEx,
      desc: "Projeto proposto pela equipe do VainaWeb utilizando html e css básicos para exercitar media queries",
      alt: "Projeto Café",
      linkgh: "https://github.com/PedroAraujobs/aula-cafe",
    },
    {
      titulo: "DisneyEx",
      link: "https://disneyplus-ivory.vercel.app/",
      img: ExDisney,
      desc: "Meu primeiro projeto em html",
      alt: "Projeto Disney",
      linkgh: "https://github.com/PedroAraujobs/disneyplus",
    },
    {
      titulo: "The Witcher Ex",
      link: "https://the-witcher-two.vercel.app/",
      img: twex,
      desc: "Modelo estático de uma página de the Witcher em html e css",
      alt: "Projeto The Witcher",
      linkgh: "https://github.com/PedroAraujobs/The-Witcher",
    },
  ];
  return (
    <>
      <SectionProjetos>
        {ProjMap.map((item) => (
          <FigureFormato>
            <LinkspProjeto href={item.link} target="blank">
              {" "}
              <motion.img
                whileHover={{ scale: 1.01, rotate: 3 }}
                whileTap={{ scale: 0.99 }}
                src={item.img}
                alt={item.alt}
              />
            </LinkspProjeto>
            <figcaption>{item.desc}</figcaption>
            <a href={item.linkgh} target="blank">
              <BotaoStyle
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }}
              >
                Github
              </BotaoStyle>
            </a>
          </FigureFormato>
        ))}
      </SectionProjetos>
    </>
  );
}
