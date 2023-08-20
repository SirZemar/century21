import React, { useContext } from "react";
import { LanguageSelectorContainer } from "./LanguageSelector.styles";
import languageContext from "../../languageContext";

const LanguageSelector: React.FC = () => {
  const languagesAvailable = ["PT", "EN"];
  const { language, setLanguage } = useContext(languageContext);

  const handleLanguageSelectorClick = (
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    setLanguage(e.currentTarget.innerText);
  };

  return (
    <LanguageSelectorContainer>
      {" "}
      {languagesAvailable.map((lan, index) => {
        return (
          <li key={`${index}-${lan}`} className="language-selector__item">
            <span
              onClick={handleLanguageSelectorClick}
              className={
                language === lan
                  ? "language-selector__item__language selected"
                  : "language-selector__item__language"
              }
            >
              {lan}
            </span>
            {index < languagesAvailable.length - 1 && (
              <span className="language-selector__item__division">|</span>
            )}
          </li>
        );
      })}
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
