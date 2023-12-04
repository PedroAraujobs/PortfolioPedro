import React from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import whatsapp from "./assets/whatsapp.png";

export const SectionInicio = styled(motion.section)`
  width: 75vw;
  height: 65vh;
  display: flex;
  margin-left: 10vw;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const LetraNome = styled(motion.h1)`
  font-family: "Wellfleet", monospace;
  font-weight: bold 500;
  width: 75vw;
  font-size: 9rem;
  background-image: linear-gradient(to bottom, #d3cce3, #e9e4f0, #e9e4f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #edeaf0;
`;
const SubNome = styled(motion.h2)`
  font-family: "Wellfleet", monospace;
  font-weight: bold 400;
  width: 73vw;
  font-size: 2rem;
  background-image: linear-gradient(to bottom, #d3cce3, #e9e4f0, #e9e4f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #edeaf0;
`;
export const Redes = styled(motion.figure)`
  width: 15vw;
  height: 7vh;
  display: flex;
  justify-content: space-evenly;
`;
const LinkRedes = styled.a`
  img {
    width: 3vw;
  }
`;

export default function Inicio() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
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
  const Dev = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.02,
      ease: easeInOut,
    },
    whileHover: { opacity: 2 },
  };

  const DivCont = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <SectionInicio
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <LetraNome className="item" variants={item}>
          Pedro Botelho
        </LetraNome>
        <motion.div className="DivCont" variants={DivCont}>
          <SubNome className="Dev" variants={Dev}>
            Desenvolvedor
          </SubNome>
        </motion.div>
        <Redes className="item" variants={item}>
          <LinkRedes href="https://github.com/PedroAraujobs" target="blank">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              src={github}
              alt="github"
            />{" "}
          </LinkRedes>
          <LinkRedes
            href="https://www.linkedin.com/in/pedro-botelho-81565a263/"
            target="blank"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              src={linkedin}
              alt="linkedin"
            />
            {""}
          </LinkRedes>
          <LinkRedes href="https://wa.me/5521965247495" target="blank">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              src={whatsapp}
              alt="whatsapp"
            />
          </LinkRedes>
        </Redes>
      </SectionInicio>
    </>
  );
}
