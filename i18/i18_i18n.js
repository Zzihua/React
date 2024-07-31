import { initReactI18next} from'react-i18next';
import i18n from 'i18next';

import en from '../src/locales/en.json';
import zh_tw from '../src/locales/zh_TW.json';
import fr from '../src/locales/fr.json';

const resources = {
  en:{
    translation: en,
  },
  zh:{
    translation: zh_tw,
  },
  fr:{
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng:"en",
  lng:"zh",
  interpolation:{
    escapeValue: false,
  },
});

export default i18n;
