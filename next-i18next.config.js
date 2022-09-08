const I18NextHttpBackend = require('i18next-http-backend');

/** @type {import('next-i18next').UserConfig} */
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
