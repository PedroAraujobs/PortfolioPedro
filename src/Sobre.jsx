import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProfileBlur from "./assets/ProfileBlur.png"

export const SectionSobre = styled.section`
  display: flex;
  height: 70vh;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const SectionTexto = styled.section`
  width: 55vw;
  height: 65vh;
  margin-left: 2vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
export const FigurePerfil = styled(motion.figure)`
  width: 35vw;
  height: 55vh;

  img {
    width: 100%;
    border: thin #151320;
    border-radius: 50px;
  }
`;
export const StyleP = styled.p`
  font-family: "Wellfleet", monospace;
  font-size: 1.5rem;
  line-height: 1.1;
  text-align: justify;
`;

export const SobreMimtitulo = styled.h1`
  font-family: "Wellfleet", monospace;
  font-weight: bold 500;
  font-size: 3.5rem;
  background-image: linear-gradient(to bottom, #d3cce3, #e9e4f0, #e9e4f2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Sobre() {
  return (
    <>
      <SectionSobre>
        <SectionTexto>
          <SobreMimtitulo>Sobre Mim:</SobreMimtitulo>
          <StyleP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ratione odio qui quam asperiores animi distinctio ut possimus,
            tempora eveniet, repellat illo dicta nobis blanditiis sapiente alias
            officia quasi quod beatae velit! Harum incidunt, consequuntur dicta
            adipisci labore at reiciendis.
          </StyleP>
        </SectionTexto>
        <FigurePerfil
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
        >
          <img src={ProfileBlur} alt="Foto de Perfil" />
        </FigurePerfil>
      </SectionSobre>
    </>
  );
}
