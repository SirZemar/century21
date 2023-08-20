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
  APARTMENTS: {
    HEADER: "Apartments",
    TITLE: "Apartments with Distinctive Character",
    DESCRIPTION:
      "Discover well-designed spaces and intelligent layouts for your perfect new home.",
    BLUEPRINTS: {
      BUTTON: "View Blueprints",
    },
  },
  LOCATION: {
    HEADER: "Location",
    TITLE: "Everything You Need",
    DESCRIPTION: {
      ITEM1: "Pingo Doce Supermarket",
      ITEM2: "Campanhã Intermodal Terminal",
      ITEM3: "Alameda das Fontaínhas",
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
        PLACEHOLDER: "Message...",
      },
      BUTTONS: {
        SUBMIT: "Submit",
      },
    },
    EMAIL_SERVICE: {
      SENT: "Your email has been successfully sent",
      ERROR: "Oops, couldn't send your email",
    },
  },
};

export default EN;
