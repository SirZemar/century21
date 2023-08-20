export interface Language {
  NAVIGATION: {
    OVERVIEW: string;
    APARTMENTS: string;
    LOCATION: string;
    CONTACT: string;
  };
  OVERVIEW: {
    HEADER: string;
    TITLE: string;
    DESCRIPTION: string;
    TEXT: string;
  };
  APARTMENTS: {
    HEADER: string;
    TITLE: string;
    DESCRIPTION: string;
    BLUEPRINTS: {
      BUTTON: string;
    };
  };
  LOCATION: {
    HEADER: string;
    TITLE: string;
    DESCRIPTION: {
      ITEM1: string;
      ITEM2: string;
      ITEM3: string;
    };
  };
  CONTACT: {
    HEADER: string;
    FORM: {
      EMAIL: {
        EMPTY: string;
        INVALID: string;
        LABEL: string;
        PLACEHOLDER: string;
      };
      PHONE: {
        EMPTY: string;
        INVALID: String;
        LABEL: string;
        PLACEHOLDER: string;
      };
      NAME: {
        EMPTY: string;
        LABEL: string;
        PLACEHOLDER: string;
      };
      MESSAGE: {
        EMPTY: string;
        LABEL: string;
        PLACEHOLDER: string;
      };
      BUTTONS: {
        SUBMIT: string;
      };
    };
    EMAIL_SERVICE: {
      SENT: string;
      ERROR: string;
    };
  };
  FOOTER: {
    CONTACT: {
      TITLE: string;
    };
    LOCATION: {
      TITLE: string;
      ADDRESS: string;
    };
    SCHEDULE: {
      TITLE: string;
      DAYS: {
        PART1: string;
        PART2: string;
      };
      TIME: {
        PART1: string;
        PART2: string;
      };
    };
  };
}

export type Translate = {
  [key: string]: Language;
};
