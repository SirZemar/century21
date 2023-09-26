export type Language = {
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
  SLIDESHOW: {
    HEADER: string;
  };
  APARTMENTS: {
    HEADER: string;
    TITLE: string;
    DESCRIPTION: string;
    ACTION: {
      BLUEPRINTS: string;
      MORE: string;
      LESS: string;
    };
    TABLE: {
      HEADER: {
        FRACTION: string;
        NATURE: string;
        TOPOLOGY: string;
        FLOOR: string;
        AREARAW: string;
        AREAEXTERIOR: string;
        AREAGARAGE: string;
        AREASTORAGE: string;
        PRICESALE: string;
        PRICEPRESALE: string;
        ACTION: string;
      };
      FRACTION: {
        ACTION: {
          BLUEPRINT: string;
          CONTACT: string;
        };
        STATUS: {
          SOLD: string;
          RESERVED: string;
        };
        NATURE: {
          APARTMENT: string;
          TOWNHOUSE: string;
        };
        MESSAGE: string;
      };
    };
  };
  LOCATION: {
    HEADER: string;
    TITLE: string;
    DESCRIPTION: {
      [key: ItemIndex]: string;
    };
    DISTANCE: {
      [key: ItemIndex]: string;
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
      ERROR: string;
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
};

export type ItemIndex = `ITEM${string}`;

export type Translate = {
  [key: string]: Language;
};
