const axios = require('axios');
const I18NextHttpBackend = require('i18next-http-backend');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  // change {{variable}} to :variable
  // interpolation: {
  //   prefixEscaped: ':\\b',
  //   suffixEscaped: '(?:\\b)',
  // },
  keySeparator: false, // we do not use keys in form messages.welcome
  nsSeparator: false,
  fallbackLng: false,
  backend: {
    loadPath: function (lng, ns) {
      return `https://next-mui-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/locales/${lng}/${ns}.json`;
    },
    addPath: function (lng, ns) {
      return `https://next-mui-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/locales/${lng}/${ns}.json`;
    },
    parsePayload: function (ns, key) {
      return {
        [key]: key,
      };
    },
    request: function (_, url, payload, callback) {
      if (payload) {
        // add missing translations
        axios.patch(url, payload);
      } else {
        // get translation resources
        axios
          .get(url)
          .then((res) => {
            // return JSON stringify data with no error
            callback(null, {
              status: res.status,
              data: JSON.stringify(res.data),
            });
          })
          .catch(() => {
            // return empty data
            callback(null, {
              status: 404,
              data: '',
            });
          });
      }
    },
  },
  saveMissing: process.env.NODE_ENV === 'development',
  saveMissingTo: 'all',
  debug: process.env.NODE_ENV === 'development',
  ns: ['common', 'validation'],
  serializeConfig: false,
  use: [I18NextHttpBackend],
};
