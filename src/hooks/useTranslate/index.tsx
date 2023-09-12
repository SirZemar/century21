import EN from "./languages/en";
import PT from "./languages/pt";

import { Translate } from "./translate.types";

import languageContext from "../../languageContext";
import { useContext } from "react";

export const useTranslate = () => {
  const context = useContext(languageContext);

  const language: Translate = {
    EN,
    PT,
  };

  return language[context.language];
};
