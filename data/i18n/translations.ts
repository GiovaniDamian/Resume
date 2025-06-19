import pt from './pt.json';
import en from './en.json';
import nl from './nl.json';

type Translation = Record<string, string>;

const translations: Record<'pt' | 'en' | 'nl', Translation> = {
  pt,
  en,
  nl,
};

export default function t(key: string, lang: 'pt' | 'en' | 'nl') {
  return translations[lang][key] || key;
}
