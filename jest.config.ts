const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js',
    '<rootDir>/setup-jest.ts'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/pokemon',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
