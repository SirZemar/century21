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
    ACTION: {
      BLUEPRINTS: "Ver plantas",
      MORE: "Ver mais detalhes dos apartamentos",
      LESS: "Ver menos detalhes dos apartamentos",
    },
    TABLE: {
      HEADER: {
        FRACTION: "Fração",
        NATURE: "Natureza",
        TOPOLOGY: "Tipologia",
        FLOOR: "Piso",
        AREARAW: "Area Bruta Privativa",
        AREAEXTERIOR: "Area Exterior",
        AREAGARAGE: "Garagem",
        AREASTORAGE: "Arrumos",
        PRICESALE: "Preço Venda",
        PRICEPRESALE: "Pre Vendas",
        ACTION: "Acção",
      },
      FRACTION: {
        ACTION: {
          BLUEPRINT: "Planta",
          CONTACT: "Contactar",
        },
        STATUS: {
          SOLD: "Vendido",
          RESERVED: "Reservado",
        },
        NATURE: {
          APARTMENT: "Apartamento",
          TOWNHOUSE: "Moradia",
        },
        MESSAGE:
          "Estou interessado(a) e gostaria de ser contactado(a) para  saber mais sobre a fracção",
      },
    },
  },
  LOCATION: {
    HEADER: "Localização",
    TITLE: "Tudo o que tu precisas",
    DESCRIPTION: {
      ITEM1: "Estações de Comboio e de Metro de Campanhã",
      ITEM2: "Terminal Intermodal de Campanhã",
      ITEM3: "Baixa do Porto",
      ITEM4: "Ponte D. Luís I",
    },
    DISTANCE: {
      ITEM1: "700m",
      ITEM2: "900m",
      ITEM3: "2000m",
      ITEM4: "2700m",
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
        PLACEHOLDER:
          "Ex: Estou interessado(a) nos seus apartamentos e gostaria de saber mais detalhes. Obrigado(a).",
      },
      ERROR: "Erro",
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
