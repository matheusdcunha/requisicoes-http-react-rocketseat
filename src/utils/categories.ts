import foodSvg from "../assets/food.svg"
import otherSvg from "../assets/others.svg"
import serviceSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accommodationSvg from "../assets/accommodation.svg"


export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg
  },
  other: {
    name: "Outros",
    icon: otherSvg
  },
  service: {
    name: "Serviço",
    icon: serviceSvg
  },
  transport: {
    name: "Transporte",
    icon: transportSvg
  },
  accommodationSvg: {
    name: "Hospedagem",
    icon: accommodationSvg
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>