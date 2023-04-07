import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

import styled from "styled-components";
import React from "react";

const StyledHeader = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: #8ca098;
  height: 100px;
`;

export const ExtendedHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 100%;
  z-index: 3;
  background-size: auto 120%;
  background-position: top 100px center;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse fill='%23691d27' cx='100' cy='0' rx='100' ry='25' /%3E%3C/svg%3E");
  background-repeat: no-repeat;

  @media screen and (min-width: 1400px) {
    background-size: cover;
  }
`;

const Header = ({ ...props }) => {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
      </Container>
    </StyledHeader>
  );
};

export { Header };
