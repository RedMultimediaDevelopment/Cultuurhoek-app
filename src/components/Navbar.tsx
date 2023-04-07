import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

import styled, { css } from "styled-components";

import { ButtonDefault, ButtonSecondary } from "./Buttons";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  position: relative;
  padding: 0;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 1.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};

  .logo {
    max-height: 30px;
    max-width: 120px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.small};
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.medium}) {
    .logo {
      max-width: none;
    }

    > div {
      gap: ${(props) => props.theme.spacing.xlarge};
    }
  }
`;

const NavItemWrapper = styled.div`
  gap: ${(props) => props.theme.spacing.small};
  display: flex;

  flex-direction: column;
  position: fixed;
  left: -300px;
  width: 300px;
  max-width: 100%;
  background-color: #8ca098;
  top: 0;
  bottom: 0;
  transition: left 0.2s;
  padding: 1.5rem;
  z-index: 1;

  &.open {
    left: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.medium}) {
    gap: ${(props) => props.theme.spacing.xlarge};
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-direction: row;
    width: auto;
    position: static;
    padding: 0;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

interface MobileBtnProps {
  absolute?: boolean;
}

const MobileNavBtn = styled.div<MobileBtnProps>`
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      right: 0;
      top: 0;
    `}

  @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
    display: none;
  }
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Navbar = () => {
  const [navState, toggleNavState] = useState(false);

  let NavItems;
  let AuthButtons;

  NavItems = (
    <>
      <NavItem to="/">Over ons</NavItem>
      <NavItem to="/about">Hoe werkt het?</NavItem>
      <NavItem to="/events">Agenda</NavItem>
    </>
  );
  AuthButtons = (
    <>
      <ButtonSecondary>Login</ButtonSecondary>
      <ButtonDefault>Meld je aan</ButtonDefault>
    </>
  );

  return (
    <>
      <StyledNav>
        <div>
          <img alt="logo" src={logo} className="logo" />
          <NavItemWrapper className={navState ? "open" : undefined}>
            {NavItems}
            <MobileNavBtn absolute onClick={() => toggleNavState(!navState)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                />
              </svg>
            </MobileNavBtn>
          </NavItemWrapper>
          <MobileNavBtn onClick={() => toggleNavState(!navState)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </MobileNavBtn>
          {navState ? <Backdrop /> : undefined}
        </div>
        {/* <div style={{ gap: "20px" }}>?????</div> */}
      </StyledNav>
    </>
  );
};

export default Navbar;
