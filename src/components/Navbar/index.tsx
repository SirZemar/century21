import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  Nav,
  NavItem,
  Menu,
  MenuNav,
  MenuNavItem,
} from "./Navbar.styles";
import { Divide as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../Logo";
import { sizes } from "../../devices";

import { useTranslate } from "../../hooks/useTranslate";
import LanguageSelector from "../LanguageSelector";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const translate = useTranslate();
  const handleMunuNavItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  //TODO WINDOW RESIZE WILL BE REFACTOR TO CUSTOM HOOK
  const [screenWidth, setScreenWidth] = useState(0);
  const handleWindowResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    handleWindowResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize());
    return window.removeEventListener("resize", () => handleWindowResize());
  }, [screenWidth]);

  return (
    <NavbarContainer>
      <Menu>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="var(--secondary)"
        />
        <AnimatePresence>
          {isOpen && (
            <MenuNav
              as={motion.ul}
              initial={{ translateX: "-100%" }}
              animate={{ translateX: "0%", transition: { duration: 0.2 } }}
              exit={{ translateX: "-100%", transition: { duration: 0.2 } }}
            >
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
      <Logo
        short={screenWidth > sizes.tablet ? false : true}
        closeMenu={handleMunuNavItemClick}
      />
      <LanguageSelector />
      <Nav>
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
    </NavbarContainer>
  );
};

export default Navbar;
