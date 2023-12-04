import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  width: 100vw;
  height: 12vh;
  display: flex;
  align-items: center;
`;

const NavStyle = styled.nav`
  width: 92%;
  display: flex;
  justify-content: flex-end;
`;
const UlStyle = styled.ul`
  list-style: none;
  display: flex;
  width: 45vw;
  justify-content: space-between;
`;

const LiStyle = styled.li`
  color: #edeaf0;
  font-size: 1.3rem;
  width: 10vw;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <NavStyle>
        <UlStyle>
          <LiStyle>
            <Link to="/">Inicio</Link>
          </LiStyle>
          <LiStyle>
            <Link to="/Sobre">Sobre</Link>
          </LiStyle>
          <LiStyle>
            <Link to="/Projetos">Projetos</Link>
          </LiStyle>
          <LiStyle>
            <Link to="/Habilidades">Habilidades</Link>
          </LiStyle>
        </UlStyle>
      </NavStyle>
    </HeaderStyle>
  );
}
