import React, { useState } from "react";
import {
  NavbarContainer,
  Nav,
  NavItem,
  Menu,
  MenuNav,
  MenuNavItem,
} from "./Navbar.styles";
import { NavLink, useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Wrapper } from "../../pages/Project/Project.styles";
import Logo from "../Logo";

const NavbarC: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMunuNavItemClick = () => {
    setOpen(false);
  };

  return (
    <NavbarContainer>
      <Nav>
        <Logo />
        {/* <NavItem>
          <NavLink to={"/"}>Home</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to={"/projects"}>Projects</NavLink>
        </NavItem> */}
        <NavItem>
          <a href="/#overview">Vista Geral</a>
        </NavItem>
        <NavItem>
          <a href="/#apartments">Apartamentos</a>
        </NavItem>
        <NavItem>
          <a href="/#location">Localização</a>
        </NavItem>
        <NavItem>
          <a href="/#contact">Contacto</a>
        </NavItem>
      </Nav>
      <Menu>
        <Hamburger toggled={isOpen} toggle={setOpen} color="var(--secondary)" />
        <Logo short={true} />
        <AnimatePresence>
          {isOpen && (
            <MenuNav
              as={motion.ul}
              initial={{ translateX: "-100%" }}
              animate={{ translateX: "0%", transition: { duration: 0.2 } }}
              exit={{ translateX: "-100%", transition: { duration: 0.2 } }}
            >
              <MenuNavItem>
                {/* <NavLink to={"/"} onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={"/projects"} onClick={() => setOpen(false)}>
                  Project
                </NavLink> */}
                <MenuNavItem>
                  <a onClick={handleMunuNavItemClick} href="/#overview">
                    Vista Geral
                  </a>
                </MenuNavItem>
                <MenuNavItem>
                  <a onClick={handleMunuNavItemClick} href="/#apartments">
                    Apartamentos
                  </a>
                </MenuNavItem>
                <MenuNavItem>
                  <a onClick={handleMunuNavItemClick} href="/#location">
                    Localização
                  </a>
                </MenuNavItem>
                <MenuNavItem>
                  <a onClick={handleMunuNavItemClick} href="/#contact">
                    Contacto
                  </a>
                </MenuNavItem>
              </MenuNavItem>
            </MenuNav>
          )}
        </AnimatePresence>
      </Menu>
    </NavbarContainer>
  );
};

export default NavbarC;
