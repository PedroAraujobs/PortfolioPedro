import { useState } from "react";
import React from "react";
import Header from "./Header.jsx";
import styled, { createGlobalStyle } from "styled-components";
import Projetos from "./Projetos.jsx";
import Sobre from "./Sobre.jsx";
import Habilidades from "./Habilidades.jsx";
import Inicio from "./Inicio.jsx";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #151320;
  color: #EDEAF0;
  font-family: 'BioRhyme', serif;

}

a{
  text-decoration: none;
}
`;

export default function App() {
  return (
    <>
      <GlobalCss />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="/Habilidades" element={<Habilidades />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
