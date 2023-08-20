import styled from "styled-components";
import { device } from "../../devices";
import { motion } from "framer-motion";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: var(--navbarHeight);
  width: 100%;
  background-color: var(--primary);
  position: sticky;
  top: -2px;
  z-index: 1000;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

  @media ${device.laptop} {
  }
`;

export const Nav = styled.ul`
  display: none;
  padding: 0 40px;
  width: 100%;
  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;

export const NavItem = styled.li`
  padding: 0 10px;
  display: inline;
  white-space: nowrap;
  a:hover {
    color: var(--secondary);
  }
`;

export const Menu = styled.div`
  display: flex;
  z-index: 100;
  width: 100vw;
  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuNav = styled(motion.ul)`
  background-color: var(--primary);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  top: calc(var(--navbarHeight) - 5px);
`;

export const MenuNavItem = styled.li`
  padding: 20px;
  text-align: center;
  font-size: 2rem;
`;
