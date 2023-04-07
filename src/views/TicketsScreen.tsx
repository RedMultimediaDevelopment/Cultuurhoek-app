import React from "react";
import styled from "styled-components";

import { Header } from "../components/Header";
import { ButtonDefault } from "../components/Buttons";
import { Container } from "../components/Container";

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
`;

export const Landing = () => {
  return (
    <Wrapper>
      <Header />
      {/* Hier agenda items */}
    </Wrapper>
  );
};

export default Landing;
