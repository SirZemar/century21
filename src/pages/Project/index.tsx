import React from "react";
import {
  HeroImage,
  ProjectContainer,
  Section,
  Views,
  Overview,
  Wrapper,
  BlueprintsContainer,
} from "./Project.styles";
import { useNavigate, useParams } from "react-router-dom";
import { Aerial1, Balcony } from "../../images";
import Slideshow from "../../components/Slideshow";
import ContactForm from "../../components/ContactForm";
import Location from "../../components/Location";
import { Button } from "semantic-ui-react";
import { translate } from "../../translate";
import SectionHeader from "../../comon/components/SectionHeader";
import Footer from "../../components/Footer";

const Project: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleBlueprintsButtonClick = () => {
    navigate("blueprints");
  };

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
      <Section className="background-color-primary center-row">
        <Wrapper>
          <Overview>
            <SectionHeader>{translate.OVERVIEW.HEADER}</SectionHeader>
            <h2 className="overview__title">{translate.OVERVIEW.TITLE}</h2>
            <p className="overview__text">{translate.OVERVIEW.DESCRIPTION}</p>
          </Overview>
        </Wrapper>
      </Section>
      <Section className="center-row">
        <Wrapper>
          <Views>
            <img className="views__image-one" src={Aerial1} loading="lazy" />
            <div className="views__text-container">
              <p className="views__text">{translate.OVERVIEW.TEXT}</p>
            </div>
            <img className="views__image-two" src={Balcony} loading="lazy" />
          </Views>
        </Wrapper>
      </Section>
      <Section className="background-color-secondary center-row">
        <Wrapper>
          <BlueprintsContainer className="center-column">
            <SectionHeader>{translate.APARTMENTS.HEADER}</SectionHeader>
            <h2>{translate.APARTMENTS.TITLE}</h2>
            <p>{translate.APARTMENTS.DESCRIPTION}</p>
            <Button onClick={handleBlueprintsButtonClick}>
              {translate.APARTMENTS.BLUEPRINTS.BUTTON}
            </Button>
          </BlueprintsContainer>
        </Wrapper>
      </Section>
      <Section className="center-row">
        <Wrapper>
          <Slideshow />
        </Wrapper>
      </Section>
      <Section>
        <Location />
      </Section>
      <Section className="center-row">
        <Wrapper>
          <ContactForm />
        </Wrapper>
      </Section>
      <Section style={{ padding: "0px" }}>
        <Footer />
      </Section>
    </ProjectContainer>
  );
};

export default Project;
