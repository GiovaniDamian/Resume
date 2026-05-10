import pt from './pt.json';
import en from './en.json';
import nl from './nl.json';
import it from './it.json';
import es from './es.json';

type Translation = Record<string, string>;

const translations: Record<'pt' | 'en' | 'nl' | 'it' | 'es', Translation> = {
  pt,
  en,
  nl,
  it,
  es,
};

export default function t(key: string, lang: 'pt' | 'en' | 'nl' | 'it' | 'es') {
  return translations[lang][key] || key;
}
