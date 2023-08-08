import styled from "styled-components";
import { HeroHouse } from "../../images";

export const ProjectContainer = styled.div``;

export const HeroImage = styled.section`
  background-image: url("${HeroHouse}");
  background-position: center;
  display: block;
  width: 100vw;
  height: calc(100vh - var(--navbarHeight));
  background-size: cover;
`;