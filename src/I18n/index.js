import I18n from 'react-native-i18n';

const en = require('./language/en.json');
const id = require('./language/id.json');

I18n.fallbacks = true;
I18n.translations = {
  en,
  id
};

export const switchLanguage = language => {
  I18n.locale = language;
};

export const isEnglish = () => {
  if (I18n.locale.includes('en')) {
    return true;
  }
  return false;
};

export default I18n;
