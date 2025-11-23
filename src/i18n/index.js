import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "./pl.json";
import ru from "./ru.json";
import ua from "./ua.json";
import de from "./de.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      ru: { translation: ru },
      ua: { translation: ua },
      de: { translation: de },
      en: { translation: en },
    },
    lng: "pl",
    fallbackLng: "pl",
    interpolation: { escapeValue: false },
  });

export default i18n;
