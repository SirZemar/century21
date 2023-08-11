import styled from "styled-components";
import { device } from "../../devices";
import { motion } from "framer-motion";

export const NavbarContainer = styled.div`
  display: flex;
  height: var(--navbarHeight);
  width: 100%;
  background-color: var(--primary);
  position: fixed;
  z-index: 1000;
`;

export const Nav = styled.ul`
  display: none;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex-grow: 1;
  }
`;

export const NavItem = styled.li`
  padding: 0 10px;
  display: inline;
`;

export const Menu = styled.div`
  z-index: 100;
  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuNav = styled(motion.ul)`
  background-color: var(--primary);
  height: 100vh;
  z-index: 100;
`;

export const MenuNavItem = styled.li`
  padding: 10px 40px;
`;