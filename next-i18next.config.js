const I18NextHttpBackend = require('i18next-http-backend');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  backend: {
    loadPath: function (lng, ns) {
      return `/locales/${lng}/${ns}.json`;
    },
  },
  debug: true,
  ns: ['common', 'validation'],
  serializeConfig: false,
  use: [I18NextHttpBackend],
};
