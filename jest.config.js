

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': "jest-transform-stub",
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': "jest-transform-stub",
  },
};