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
import { translate } from "../../translate";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMunuNavItemClick = () => {
    setOpen(false);
  };

  return (
    <NavbarContainer>
      <Logo className="nav-item" />
      <Nav>
        {/* <NavItem>
          <NavLink to={"/"}>Home</NavLink>
          </NavItem>
          <NavItem>
          <NavLink to={"/projects"}>Projects</NavLink>
        </NavItem> */}
        <NavItem>
          <a href="/#overview">{translate.NAVIGATION.OVERVIEW}</a>
        </NavItem>
        <NavItem>
          <a href="/#apartments"> {translate.NAVIGATION.APARTMENTS}</a>
        </NavItem>
        <NavItem>
          <a href="/#location"> {translate.NAVIGATION.LOCATION}</a>
        </NavItem>
        <NavItem>
          <a href="/#contact"> {translate.NAVIGATION.CONTACT}</a>
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
              {/* <MenuNavItem> 
              <NavLink to={"/"} onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={"/projects"} onClick={() => setOpen(false)}>
                  Project
                </NavLink> 
              </MenuNavItem> */}
              <MenuNavItem>
                <a onClick={handleMunuNavItemClick} href="/#overview">
                  {translate.NAVIGATION.OVERVIEW}
                </a>
              </MenuNavItem>
              <MenuNavItem>
                <a onClick={handleMunuNavItemClick} href="/#apartments">
                  {translate.NAVIGATION.APARTMENTS}
                </a>
              </MenuNavItem>
              <MenuNavItem>
                <a onClick={handleMunuNavItemClick} href="/#location">
                  {translate.NAVIGATION.LOCATION}
                </a>
              </MenuNavItem>
              <MenuNavItem>
                <a onClick={handleMunuNavItemClick} href="/#contact">
                  {translate.NAVIGATION.CONTACT}
                </a>
              </MenuNavItem>
            </MenuNav>
          )}
        </AnimatePresence>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
