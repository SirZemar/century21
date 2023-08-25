import { Language } from "../translate.types";

const PT: Language = {
  NAVIGATION: {
    OVERVIEW: "Vista Geral",
    APARTMENTS: "Apartamentos",
    LOCATION: "Localização",
    CONTACT: "Contacto",
  },
  OVERVIEW: {
    HEADER: "Vista Geral",
    TITLE: "Vistas para o rio Douro",
    DESCRIPTION:
      "Apartamentos de luxo localizados numa das melhores zonas da cidade. Todos os apartamentos têm uma vista de excelência e uma varanda na qual pode apreciar a beleza interminável do rio Douro.",
    TEXT: "Este é um lugar perfeito para receber amigos e familiares, para criar memórias e compartilhar momentos, tudo rodeado pelas vistas deslumbrantes que só a região do Douro pode proporcionar.",
  },
  APARTMENTS: {
    HEADER: "Apartamentos",
    TITLE: "Apartamentos com muita personalidade",
    DESCRIPTION:
      "Descubra espaços bem projetados e layouts inteligentes para seu novo lar perfeito.",
    BLUEPRINTS: {
      BUTTON: "Ver plantas",
    },
  },
  LOCATION: {
    HEADER: "Localização",
    TITLE: "Tudo o que tu precisas",
    DESCRIPTION: {
      ITEM1: "Supermercado Pingo Doce",
      ITEM2: "Terminal Intermodal de Campanhã",
      ITEM3: "Alameda das Fontaínhas",
    },
  },
  CONTACT: {
    HEADER: "Contacta-nos",
    FORM: {
      EMAIL: {
        EMPTY: "Por favor preencha com um email",
        INVALID: "Por favor preencha com um email válido",
        LABEL: "Email",
        PLACEHOLDER: "Email...",
      },
      PHONE: {
        EMPTY: "Por favor preencha com um número de telemóvel",
        INVALID: "Por favor preencha com um número de telemóvel válido",
        LABEL: "Telemóvel",
        PLACEHOLDER: "Telemóvel...",
      },
      NAME: {
        EMPTY: "Por favor preencha com o seu nome",
        LABEL: "Nome",
        PLACEHOLDER: "Nome...",
      },
      MESSAGE: {
        EMPTY: "Por favor preencha com a sua mensagem",
        LABEL: "Mensagem",
        PLACEHOLDER: "Mensagem...",
      },
      BUTTONS: {
        SUBMIT: "Enviar",
      },
    },
    EMAIL_SERVICE: {
      SENT: "O seu email foi enviado com sucesso",
      ERROR: "Ups, não foi possível enviar o seu email",
    },
  },
  FOOTER: {
    CONTACT: {
      TITLE: "Contacto",
    },
    LOCATION: {
      TITLE: "Localização",
      ADDRESS: "Praça Gomes Teixeira n˚25",
    },
    SCHEDULE: {
      TITLE: "Horário",
      DAYS: {
        PART1: "De 2˚ a 6˚",
        PART2: "Sábado",
      },
      TIME: {
        PART1: "09:30h - 13:00h / 14:30h - 19:00h",
        PART2: "10:00h - 12:30h",
      },
    },
  },
};

export default PT;