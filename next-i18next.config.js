const axios = require('axios');
const I18NextHttpBackend = require('i18next-http-backend');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  fallbackLng: false,
  backend: {
    loadPath: function (lng, ns) {
      return `https://next-mui-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/locales/${lng}/${ns}.json`;
    },
    addPath: function (lng, ns) {
      return `https://next-mui-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/locales/${lng}/${ns}.json`;
    },
    parsePayload: function (ns, key) {
      // if the key is test_message, return {test_message: 'Test Message'}
      return {
        [key]: key
          .split('_')
          .map((word) => word[0].toUpperCase() + word.substring(1))
          .join(' '),
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
  postProcess: ['newLine'],
  use: [
    I18NextHttpBackend,
    {
      type: 'postProcessor',
      name: 'newLine',
      process: function (value) {
        // unescape \n as data from firebase are escaped
        return value.replace(/\\n/g, '\n');
      },
    },
  ],
};
