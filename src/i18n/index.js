import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import LengualDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import es from './es.json';

i18n
    .use(LengualDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
        fallbackLng: 'en',
    });

export default i18n;
