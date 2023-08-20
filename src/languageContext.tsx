import React, {createContext} from "react";

const languageContext = createContext({
    language: '',
    setLanguage: (language: string) => {}
});

export default languageContext