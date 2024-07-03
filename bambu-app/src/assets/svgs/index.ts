import React from "react";
import { default as IconPauze1 } from "./icon_pauze_1.svg";
import { default as IconPauze2 } from "./icon_pauze_2.svg";
import { default as IconBambu } from "./icon_bambu.svg";
import { default as IconBambuWhite } from "./icon_bambu_white.svg";
import { default as IconGo } from "./icon_go.svg";
import { default as IconGoNext } from "./icon_go_next.svg";
import { default as IconTouch } from "./icon_touch.svg";
import { default as IconMouse } from "./icon_mouse.svg";
import { default as IconRoundedFacebook } from "./icon_rounded_facebook.svg";
import { default as IconRoundedInstagram } from "./icon_rounded_instagram.svg";
import { default as IconRoundedMail } from "./icon_rounded_mail.svg";
import { default as IconRoundedWhatsapp } from "./icon_rounded_whatsapp.svg";
import { default as IconWhatsapp } from "./icon_whatsapp.svg";
import { default as IconPhone } from "./icon_phone.svg";
import { default as IconLocation } from "./icon_location.svg";
import { default as IconFacebook } from "./icon_facebook.svg";
import { default as IconInstagram } from "./icon_instagram.svg";
import { default as IconIdea } from "./icon_idea.svg";
import { default as IconPen } from "./icon_pen.svg";
import { default as IconChart } from "./icon_chart.svg";
import { default as IconCake } from "./icon_cake.svg";
import { default as IconDrink } from "./icon_drink.svg";
import { default as IconWaffle } from "./icon_waffle.svg";
import { default as IconCalm } from "./icon_calm.svg";
import { default as IconTime } from "./icon_time.svg";
import { default as IconPaper } from "./icon_paper.svg";
import { default as IconChart2} from "./icon_char_2.svg";
import { default as IconSensations } from "./icon_sensations.svg";
import { default as IconBenefits } from "./icon_benefits.svg";
import { default as IconGmail } from "./icon_gmail.svg";
import { default as IconMail } from "./icon_mail.svg";
import { default as IconSearch } from "./icon_search.svg";
import { default as IconSugarFree } from "./icon_sugar_free.svg";
import { default as IconVegan } from "./icon_vegan.svg";
import { default as IconGluten } from "./icon_gluten.svg";
import { default as IconFiber } from "./icon_fiber.svg";
import { default as IconClose } from "./icon_close.svg";
import { default as IconBital } from "./icon_bital.svg";
// Mapa de iconos
const iconsMap: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  icon_pauze_1: IconPauze1,
  icon_pauze_2: IconPauze2,
  icon_bambu: IconBambu,
  icon_bambu_white: IconBambuWhite,
  icon_go: IconGo,
  icon_go_next: IconGoNext,
  icon_touch: IconTouch,
  icon_mouse: IconMouse,
  icon_rounded_facebook: IconRoundedFacebook,
  icon_rounded_instagram: IconRoundedInstagram,
  icon_rounded_mail: IconRoundedMail,
  icon_rounded_whatsapp: IconRoundedWhatsapp,
  icon_whatsapp: IconWhatsapp,
  icon_phone: IconPhone,
  icon_location: IconLocation,
  icon_facebook: IconFacebook,
  icon_instagram: IconInstagram,
  icon_idea: IconIdea,
  icon_pen: IconPen,
  icon_chart: IconChart,
  icon_cake: IconCake,
  icon_drink: IconDrink,
  icon_waffle: IconWaffle,
  icon_calm: IconCalm,
  icon_time: IconTime,
  icon_paper: IconPaper,
  icon_chart_2: IconChart2,
  icon_sensations: IconSensations,
  icon_benefits: IconBenefits,
  icon_gmail: IconGmail,
  icon_mail: IconMail,
  icon_search: IconSearch,
  icon_sugar_free: IconSugarFree,
  icon_vegan: IconVegan,
  icon_gluten: IconGluten,
  icon_fiber: IconFiber,
  icon_close: IconClose,
  icon_bital: IconBital,

};

// Componente para renderizar el icono
export const getIcon = (icon: string) => {
  const Icon = iconsMap[icon];
  return Icon;
};