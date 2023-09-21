import React, { useState } from "react";
import {
  HeroImage,
  ProjectContainer,
  Section,
  Views,
  Overview,
  Wrapper,
  BlueprintsContainer,
  Container,
} from "./Project.styles";
import { useNavigate, useParams } from "react-router-dom";
import {
  image2Size900,
  image2Size600,
  image2Size300,
  image2Size1400,
  image2Original,
  image3Size900,
  image1Size900,
} from "../../images/apartment";
import Slideshow from "../../components/Slideshow";
import ContactForm from "../../components/ContactForm";
import Location from "../../components/Location";
import { Button } from "semantic-ui-react";
import SectionHeader from "../../common/components/SectionHeader";
import Footer from "../../components/Footer";
import { device } from "../../devices";
import { useTranslate } from "../../hooks/useTranslate";
import { TitleDecoratorImgColor } from "../../common/components/TitleShieldDecorator";
import { ApartmentsTableContainer } from "../../components/ApartmentsTable/ApartmentsTable.styles";
import ApartmentsTable from "../../components/ApartmentsTable";

const Project: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const translate = useTranslate();

  const [loaded, setLoaded] = useState(false);

  const handleBlueprintsButtonClick = () => {
    navigate("blueprints/1WrUrXxMADhXkjjWhhY_fHRlM8A7XHg3S");
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
        <HeroImage>
          {!loaded && (
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${image2Size300})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
          <img
            onLoad={() => {
              setLoaded(true);
            }}
            className={loaded ? "loaded" : "loading"}
            srcSet={`${image2Size300} 300w,
            ${image2Size600} 600w,
            ${image2Size900} 900w,
            ${image2Size1400} 1400w,
            ${image2Original}`}
            sizes={`${device.tablet} 1500px`}
            // sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1400px) 1400px, 1600px"
          />
        </HeroImage>
      </Section>
      <Section id="overview" className="background-color-primary center-row">
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
            <img
              alt="Apartment"
              className="views__image-one"
              src={image1Size900}
              loading="lazy"
            />
            <div className="views__text-container">
              <p className="views__text">{translate.OVERVIEW.TEXT}</p>
            </div>
            <img
              alt="Apartment"
              className="views__image-two"
              src={image3Size900}
              loading="lazy"
            />
          </Views>
        </Wrapper>
      </Section>
      <Section id="apartments">
        <Container className="background-color-secondary center-row">
          <Wrapper>
            <BlueprintsContainer className="center-column">
              <SectionHeader color={TitleDecoratorImgColor.PRIMARY}>
                {translate.APARTMENTS.HEADER}
              </SectionHeader>
              <h2>{translate.APARTMENTS.TITLE}</h2>
              <p>{translate.APARTMENTS.DESCRIPTION}</p>
              <Button onClick={handleBlueprintsButtonClick}>
                {translate.APARTMENTS.BLUEPRINTS.BUTTON}
              </Button>
            </BlueprintsContainer>
          </Wrapper>
        </Container>
        <Container className="center-row">
          <ApartmentsTable />
        </Container>
      </Section>
      <Section className="center-row">
        <Wrapper>
          <Slideshow />
        </Wrapper>
      </Section>
      <Section id="location">
        <Location />
      </Section>
      <Section id="contact" className="center-row">
        <Wrapper>
          <ContactForm />
        </Wrapper>
      </Section>
      <Section
        className="background-color-primary center-row"
        style={{ padding: "0px" }}
      >
        <Wrapper>
          <Footer />
        </Wrapper>
      </Section>
    </ProjectContainer>
  );
};

export default Project;
