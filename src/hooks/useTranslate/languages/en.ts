import { Language } from "../translate.types";

const EN: Language = {
  NAVIGATION: {
    OVERVIEW: "Overview",
    APARTMENTS: "Apartments",
    LOCATION: "Location",
    CONTACT: "Contact",
  },
  OVERVIEW: {
    HEADER: "Overview",
    TITLE: "Views of the Douro River",
    DESCRIPTION:
      "Luxury apartments located in one of the city's best areas. All apartments offer outstanding views and a balcony where you can enjoy the endless beauty of the Douro River.",
    TEXT: "This is a perfect place to welcome friends and family, create memories, and share moments, all surrounded by the breathtaking views that only the Douro region can provide.",
  },
  SLIDESHOW: {
    HEADER: "Gallery",
  },
  APARTMENTS: {
    HEADER: "Apartments",
    TITLE: "Apartments with Distinctive Character",
    DESCRIPTION:
      "Discover well-designed spaces and intelligent layouts for your perfect new home.",
    ACTION: {
      BLUEPRINTS: "View Blueprints",
      MORE: "View apartment details",
      LESS: "Hide apartment details",
    },
    TABLE: {
      HEADER: {
        FRACTION: "Fraction",
        NATURE: "Nature",
        TOPOLOGY: "Topology",
        FLOOR: "Floor",
        AREARAW: "Private Gross Area",
        AREAEXTERIOR: "Exterior Area",
        AREAGARAGE: "Garage",
        AREASTORAGE: "Storage",
        PRICESALE: "Sale Price",
        PRICEPRESALE: "Pre Sale",
        ACTION: "Action",
      },
      FRACTION: {
        ACTION: {
          BLUEPRINT: "Blueprint",
          CONTACT: "Contact",
        },
        STATUS: {
          SOLD: "Sold",
          RESERVED: "Reserved",
        },
        NATURE: {
          APARTMENT: "Apartment",
          TOWNHOUSE: "Townhouse",
        },
        MESSAGE:
          "I am interested and I would like to know more about the fraction",
      },
    },
  },
  LOCATION: {
    HEADER: "Location",
    TITLE: "Everything You Need",
    DESCRIPTION: {
      ITEM1: "Train Station and Metro of Campanhã",
      ITEM2: "TIC - Campanhã Intermodal Terminal",
      ITEM3: "Porto Downtown",
      ITEM4: "D. Luís I Bridge",
    },
    DISTANCE: {
      ITEM1: "700m",
      ITEM2: "900m",
      ITEM3: "2000m",
      ITEM4: "2700m",
    },
  },
  CONTACT: {
    HEADER: "Contact Us",
    FORM: {
      EMAIL: {
        EMPTY: "Please fill in with an email",
        INVALID: "Please fill in with a valid email",
        LABEL: "Email",
        PLACEHOLDER: "Email...",
      },
      PHONE: {
        EMPTY: "Please fill in with a mobile number",
        INVALID: "Please fill in with a valid mobile number",
        LABEL: "Mobile",
        PLACEHOLDER: "Mobile...",
      },
      NAME: {
        EMPTY: "Please fill in with your name",
        LABEL: "Name",
        PLACEHOLDER: "Name...",
      },
      MESSAGE: {
        EMPTY: "Please fill in with your message",
        LABEL: "Message",
        PLACEHOLDER:
          "Ex: I am interested in your apartments and I would like to know more details. Thank you.",
      },
      ERROR: "Error",
      BUTTONS: {
        SUBMIT: "Submit",
      },
    },
    EMAIL_SERVICE: {
      SENT: "Your email has been successfully sent",
      ERROR: "Oops, couldn't send your email",
    },
  },
  FOOTER: {
    CONTACT: {
      TITLE: "Contact",
    },
    LOCATION: {
      TITLE: "Location",
      ADDRESS: "Praça Gomes Teixeira n˚25",
    },
    SCHEDULE: {
      TITLE: "Schedule",
      DAYS: {
        PART1: "From Monday to Friday",
        PART2: "Saturday",
      },
      TIME: {
        PART1: "09:30 am - 1:00 pm / 2:30 pm - 7:00 pm",
        PART2: "10:00 am - 12:30 pm",
      },
    },
  },
};

export default EN;
