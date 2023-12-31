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
  Apartments,
} from "./Project.styles";
import { useNavigate } from "react-router-dom";
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
import { useTranslate } from "../../hooks/useTranslate";
import { TitleDecoratorImgColor } from "../../common/components/TitleShieldDecorator";
import ApartmentsTable from "../../components/ApartmentsTable";

const Project: React.FC = () => {
  // const { projectId } = useParams();
  const navigate = useNavigate();
  const translate = useTranslate();

  const [loaded, setLoaded] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);

  const [
    contactFormFractionDefaultMessage,
    setContactFormFractionDefaultMessage,
  ] = useState("");

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
            alt="Front of the entire building at night with some of the apartments windows glowing light"
            onLoad={() => {
              setLoaded(true);
            }}
            className={loaded ? "loaded" : "loading"}
            srcSet={`${image2Size300} 300w,
            ${image2Size600} 600w,
            ${image2Size900} 900w,
            ${image2Size1400} 1400w,
            ${image2Original}`}
            sizes="(max-width: 300px) 600px,(max-width: 600px) 1200px, (max-width: 900px) 1800px, (max-width: 1400px) 2800px, 4600px"
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
        <Apartments>
          <Container className="background-color-secondary center-row">
            <Wrapper>
              <BlueprintsContainer className="center-column">
                <SectionHeader color={TitleDecoratorImgColor.PRIMARY}>
                  {translate.APARTMENTS.HEADER}
                </SectionHeader>
                <h2>{translate.APARTMENTS.TITLE}</h2>
                <p>{translate.APARTMENTS.DESCRIPTION}</p>
                <Button onClick={handleBlueprintsButtonClick}>
                  {translate.APARTMENTS.ACTION.BLUEPRINTS}
                </Button>
                <Container
                  className="showmore-hide"
                  onClick={() => setIsTableOpen((prev) => !prev)}
                >
                  <h3
                    style={{
                      color: "var(--secondaryLight)",
                      textDecoration: "underline",
                      marginTop: "40px",
                      padding: "5px",
                      paddingBottom: "0px",
                    }}
                  >
                    {isTableOpen
                      ? translate.APARTMENTS.ACTION.LESS
                      : translate.APARTMENTS.ACTION.MORE}
                  </h3>
                </Container>
              </BlueprintsContainer>
            </Wrapper>
          </Container>
          <Container
            className={
              isTableOpen
                ? "center-row table-hide show"
                : "center-row table-hide"
            }
          >
            <ApartmentsTable
              setFormMessage={setContactFormFractionDefaultMessage}
            />
          </Container>
        </Apartments>
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
          <ContactForm
            fractionDefaultMessage={contactFormFractionDefaultMessage}
          />
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
