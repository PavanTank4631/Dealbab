const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    ar: 'ar',
  },
  all: {
    en: 'en',
    ar: 'ar',
  },
}

module.exports = new NextI18Next({
  lng: 'en',
  otherLanguages: ['ar'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})
