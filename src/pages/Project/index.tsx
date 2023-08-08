import React from "react";
import {
  HeroImage,
  ProjectContainer,
  Section,
  Views,
  Overview,
  Wrapper,
  Blueprints,
} from "./Project.styles";
import { useParams } from "react-router-dom";
import { Aerial1, Balcony } from "../../images";
import Slideshow from "../../components/Slideshow";

const Project: React.FC = () => {
  const { projectId } = useParams();

  return (
    <ProjectContainer>
      <Section
        style={{
          marginTop: "calc(0px - var(--navbarHeight))",
          paddingBottom: "0px",
          paddingTop: "0px",
        }}
      >
        <HeroImage />
      </Section>
      <Section backgroundColor="primary" flexCenter="row">
        <Wrapper>
          <Overview>
            <header className="overview__header">Vista Geral</header>
            <h2 className="overview__title">Apartamentos beira rio</h2>
            <p className="overview__text">
              Apartamentos de luxo localizados numa das melhores zonas da
              cidade. Todos os apartamentos têm uma vista de excelência e uma
              varanda na qual pode apreciar a beleza interminável do rio Douro.
            </p>
          </Overview>
        </Wrapper>
      </Section>
      <Section flexCenter="row">
        <Wrapper>
          <Views>
            <img className="views__image-one" src={Aerial1} />
            <p className="views__text">
              É um lugar para receber amigos e familiares, para criar memórias e
              compartilhar momentos, tudo rodeado pelas vistas deslumbrantes que
              só a região do Douro pode proporcionar.
            </p>
            <img className="views__image-two" src={Balcony} />
          </Views>
        </Wrapper>
      </Section>
      <Section backgroundColor="secondary" flexCenter="row">
        <Wrapper>
          <Blueprints flexCenter="column">
            <header>Apartamentos</header>
            <h2>Cada apartamento é especial!</h2>
            <button>Ver plantas</button>
          </Blueprints>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <Slideshow />
        </Wrapper>
      </Section>
    </ProjectContainer>
  );
};

export default Project;
